<?php
/**
 * This class implements a data Instance which represents a single
 * row in the issue tracker menu table.
 *
 * PHP Version 7
 *
 * @category   Behavioural
 * @package    Main
 * @subpackage Tools
 * @author     Henri Rabalais <henri.rabalais@mcin.ca>
 * @license    http://www.gnu.org/licenses/gpl-3.0.txt GPLv3
 * @link       https://www.github.com/aces/Loris/
 */

namespace LORIS\issue_tracker;

/**
 * An IssueRow represents a row in the Issue Tracker menu table.
 *
 * @category   Behavioural
 * @package    Main
 * @subpackage Tools
 * @author     Henri Rabalais <henri.rabalais@mcin.ca>
 * @license    http://www.gnu.org/licenses/gpl-3.0.txt GPLv3
 * @link       https://www.github.com/aces/Loris/
 */
class IssueRow implements \LORIS\Data\DataInstance
{
    protected $DBRow;
    protected $CenterID;
    protected $Module;

    /**
     * Create a new IssueRow
     *
     * @param array   $row    The row (in the same format as \Database::pselectRow
     *                        returns.
     * @param integer $cid    The centerID affiliated with this row.
     * @param \Module $module The module that this issue is for.
     */
    public function __construct(array $row, $cid, \Module $module)
    {
        $this->DBRow    = $row;
        $this->CenterID = $cid;
        $this->Module   = $module;

        $this->DBRow['module'] = $module->getLongName();
    }

    /**
     * Implements \LORIS\Data\DataInstance interface for this row.
     *
     * @return string the row data.
     */
    public function toJSON() : string
    {
        return json_encode($this->DBRow);
    }

    /**
     * Returns the CenterID for this row, for filters such as
     * \LORIS\Data\Filters\UserSiteMatch to match again.
     *
     * @return integer The CenterID
     */
    public function getCenterID()
    {
        return $this->CenterID;
    }

    /**
     * Return the module that this issue is an issue for.
     *
     * @return \Module the module descriptor
     */
    public function getModule() : \Module
    {
        return $this->Module;
    }
}
