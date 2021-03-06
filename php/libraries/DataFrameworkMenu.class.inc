<?php declare(strict_types=1);

/**
 * This class implements a DataFrameworkMenu, a specific type of
 * menu filter where the front end is generated from React and the
 * data comes from a \LORIS\Data\Provisioner.
 *
 * PHP Version 7
 *
 * @category Behavioural
 * @package  Main
 * @author   Loris team <info-loris.mni@mcgill.ca>
 * @license  http://www.gnu.org/licenses/gpl-3.0.txt GPLv3
 * @link     https://www.github.com/aces/Loris-Trunk/
 */

/**
 * A DataFrameworkMenu is a type of menu (filterable data table)
 * where the data comes from the LORIS data framework, and the
 * formatting is done by React. They are often used as a landing
 * page for a LORIS module.
 *
 * "Menu" type data tables are pages where data relevant to a specific
 * domain are presented in a table and accompanied by filters as well as
 * a mechanism to navigate from a row in the table to a page with details
 * of that row's specific data instance details. This class's toJSON
 * returns an object containing the data from the LORIS data framework
 * for the table, and the fieldOptions required to build the filters
 * for any dynamic filters.
 *
 * @category Behavioural
 * @package  Main
 * @author   Loris team <info-loris.mni@mcgill.ca>
 * @license  http://www.gnu.org/licenses/gpl-3.0.txt GPLv3
 * @link     https://www.github.com/aces/Loris-Trunk/
 */
abstract class DataFrameworkMenu extends NDB_Menu_Filter
{

    /**
     * Constructor for a DataFrameworkMenu class. This signature must match
     * the base NDB_Page type in order for LORIS to be able to load the page.
     *
     * @param Module $module     The test name being accessed
     * @param string $page       The subtest being accessed (may be an empty string)
     * @param string $identifier The identifier for the data to load on this page
     * @param string $commentID  The CommentID to load the data for
     */
    public function __construct(
        \Module $module,
        string $page,
        string $identifier,
        string $commentID
    ) {
        parent::__construct($module, $page, $identifier, $commentID);

        $this->AjaxModule   = true;
        $this->skipTemplate = true;
    }

    /**
     * Determines whether the DataProvisioner should filter out rows which
     * do not match the user's site.
     *
     * @return bool true if the data provisioner should filter non-matching sites.
     */
    abstract public function useSiteFilter() : bool;

    /**
     * Determines whether the DataProvisioner should filter out rows which
     * do not match the user's project.
     *
     * @return bool true if the data provisioner should filter non-matching projects.
     */
    abstract public function useProjectFilter() : bool;

    /**
     * Items to add to the JSON fieldOptions key, which React components
     * can use for formatting. This is used to send data dependent options
     * to the frontend.
     *
     * @return array An array of data-context sensitive GUI options.
     */
    abstract protected function getFieldOptions() : array;

    /**
     * Return the base Provisioner, without any filters applied.
     *
     * @return \LORIS\Data\Provisioner the basic data provisioner
     */
    abstract public function getBaseDataProvisioner() : \LORIS\Data\Provisioner;

    /**
     * Return a data provisioner of the same type as BaseDataProvisioner, with
     * default LORIS filters applied. A subclass may override this to remove (or
     * change) filters.
     *
     * @return \LORIS\Data\Provisioner a provisioner with default filters added
     */
    public function getDataProvisionerWithFilters() : \LORIS\Data\Provisioner
    {
        $provisioner = $this->getBaseDataProvisioner();

        $user = \NDB_Factory::singleton()->user();

        // UserSiteMatch throws an exception if used on a model without a getCenterID
        // or getCenterIDs function, so we only apply it on sub-classes that
        // specifically say they support it.
        if ($this->useSiteFilter()
            && $user->hasPermission("access_all_profiles") == false
        ) {
            $provisioner = $provisioner->filter(
                new \LORIS\Data\Filters\UserSiteMatch()
            );
        }

        if ($this->useProjectFilter()) {
            $provisioner = $provisioner->filter(
                new \LORIS\Data\Filters\UserProjectMatch()
            );
        }
        return $provisioner;
    }

    /**
     * Converts the results of this menu filter to a JSON format to be retrieved
     * with ?format=json
     *
     * @return string a json encoded string of the headers and data from this table
     */
    public function toJSON(): string
    {
        $table = (new \LORIS\Data\Table())
            ->withDataFrom($this->getDataProvisionerWithFilters());
        $arr   = array_map(
            function ($row) {
                return array_values($row);
            },
            json_decode($table->toJSON(\User::singleton()), true)
        );

        return json_encode(
            [
                'Data'         => $arr,
                'fieldOptions' => $this->getFieldOptions(),
            ]
        );
    }
}

