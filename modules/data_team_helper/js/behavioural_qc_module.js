(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=39)})({0:function(module,exports){module.exports=React},1:function(module,exports,__webpack_require__){if(false){var throwOnDirectAccess,isValidElement,REACT_ELEMENT_TYPE}else{module.exports=__webpack_require__(2)()}},2:function(module,exports,__webpack_require__){"use strict";var ReactPropTypesSecret=__webpack_require__(3);function emptyFunction(){}module.exports=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret===ReactPropTypesSecret){return}var err=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. "+"Use PropTypes.checkPropTypes() to call them. "+"Read more at http://fb.me/use-check-prop-types");err.name="Invariant Violation";throw err}shim.isRequired=shim;function getShim(){return shim}var ReactPropTypes={array:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim};ReactPropTypes.checkPropTypes=emptyFunction;ReactPropTypes.PropTypes=ReactPropTypes;return ReactPropTypes}},3:function(module,exports,__webpack_require__){"use strict";var ReactPropTypesSecret="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";module.exports=ReactPropTypesSecret},39:function(module,exports,__webpack_require__){"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _propTypes=__webpack_require__(1);var _propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&((typeof call==="undefined"?"undefined":_typeof(call))==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==="undefined"?"undefined":_typeof(superClass)))}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var PagedRowHeader=function(_Component){_inherits(PagedRowHeader,_Component);function PagedRowHeader(props){_classCallCheck(this,PagedRowHeader);return _possibleConstructorReturn(this,(PagedRowHeader.__proto__||Object.getPrototypeOf(PagedRowHeader)).call(this,props))}_createClass(PagedRowHeader,[{key:"render",value:function render(){return _react2.default.createElement("thead",null,_react2.default.createElement("tr",{className:"info"},this.props.headerRow.map(function(headerColumn,key){return _react2.default.createElement("th",{key},headerColumn)})))}}]);return PagedRowHeader}(_react.Component);PagedRowHeader.propType={headerRow:_propTypes2.default.array.isRequired};var PagedTable=function(_Component2){_inherits(PagedTable,_Component2);function PagedTable(props){_classCallCheck(this,PagedTable);var _this2=_possibleConstructorReturn(this,(PagedTable.__proto__||Object.getPrototypeOf(PagedTable)).call(this,props));_this2.state={pageSize:10,currentPage:1};_this2.getPage=_this2.getPage.bind(_this2);_this2.getNumPages=_this2.getNumPages.bind(_this2);_this2.handlePageChange=_this2.handlePageChange.bind(_this2);return _this2}_createClass(PagedTable,[{key:"componentWillReceiveProps",value:function componentWillReceiveProps(nextProps){this.setState({currentPage:1})}},{key:"getPage",value:function getPage(){var start=this.state.pageSize*(this.state.currentPage-1);var end=start+this.state.pageSize;return{currentPage:this.state.currentPage,tableRows:this.props.tableRows.slice(start,end),numPages:this.getNumPages(),handleClick:this.handlePageChange}}},{key:"getNumPages",value:function getNumPages(){var numPages=Math.floor(this.props.tableRows.length/this.state.pageSize);if(this.props.tableRows.length%this.state.pageSize>0){numPages++}return numPages}},{key:"handlePageChange",value:function handlePageChange(pageNum){this.setState({currentPage:pageNum})}},{key:"render",value:function render(){var tableContents="There is no data to display";var page=this.getPage();var rowsToMap=page.tableRows;var childrenToMap=this.props.children;var currentPageRows=rowsToMap.map(function(row){var mapped=_react2.default.Children.map(childrenToMap,function(child){return _react2.default.cloneElement(child,{row})});return mapped});if(currentPageRows.length){tableContents=_react2.default.createElement("table",{className:"table table-hover table-bordered colm-freeze"},_react2.default.createElement(PagedRowHeader,{headerRow:this.props.tableHeaders}),_react2.default.createElement("tbody",null,currentPageRows))}return _react2.default.createElement("div",null,tableContents,_react2.default.createElement("nav",null,_react2.default.createElement(BVLPager,{page})))}}]);return PagedTable}(_react.Component);PagedTable.propTypes={tableHeaders:_propTypes2.default.array,tableRows:_propTypes2.default.array};var IncompleteCandidatesRow=function(_Component3){_inherits(IncompleteCandidatesRow,_Component3);function IncompleteCandidatesRow(props){_classCallCheck(this,IncompleteCandidatesRow);var _this3=_possibleConstructorReturn(this,(IncompleteCandidatesRow.__proto__||Object.getPrototypeOf(IncompleteCandidatesRow)).call(this,props));_this3.state={};_this3.handleClick=_this3.handleClick.bind(_this3);return _this3}_createClass(IncompleteCandidatesRow,[{key:"handleClick",value:function handleClick(event){event.preventDefault();var link=this.refs.incomplete;window.open(link,"Incomplete Candidate")}},{key:"render",value:function render(){var row=this.props.row;return _react2.default.createElement("tr",{key:row.id},_react2.default.createElement("td",null,_react2.default.createElement("a",{href:this.props.BaseURL+"/instruments_list/?candID="+row.candid+"&sessionID="+row.SessionID},row.visit_label)),_react2.default.createElement("td",null,_react2.default.createElement("a",{href:this.props.BaseURL+"/"+row.candid+"/"},row.candid)),_react2.default.createElement("td",null,_react2.default.createElement("a",{href:this.props.BaseURL+"/"+row.candid+"/"},row.PSCID)),_react2.default.createElement("td",null,_react2.default.createElement("a",{href:this.props.BaseURL+"/instruments/"+row.test_name+"/?candID="+row.candid+"&sessionID="+row.SessionID+"&commentID="+row.commentid,ref:"incomplete",onClick:this.handleClick},row.Full_name)))}}]);return IncompleteCandidatesRow}(_react.Component);IncompleteCandidatesRow.propTypes={row:_propTypes2.default.object.isRequired,BaseURL:_propTypes2.default.string.isRequired};var InstrumentConflictsRow=function(_Component4){_inherits(InstrumentConflictsRow,_Component4);function InstrumentConflictsRow(props){_classCallCheck(this,InstrumentConflictsRow);var _this4=_possibleConstructorReturn(this,(InstrumentConflictsRow.__proto__||Object.getPrototypeOf(InstrumentConflictsRow)).call(this,props));_this4.state={};return _this4}_createClass(InstrumentConflictsRow,[{key:"render",value:function render(){var row=this.props.row;var baseURL=this.props.BaseURL;return _react2.default.createElement("tr",{key:row.CandID+row.visit_label+row.test_name_display+row.FieldName,onClick:this.handleClick},_react2.default.createElement("td",null,row.visit_label),_react2.default.createElement("td",null,_react2.default.createElement("a",{href:baseURL+"/"+row.CandID+"/"},row.CandID)),_react2.default.createElement("td",null,_react2.default.createElement("a",{href:baseURL+"/"+row.CandID+"/"},row.PSCID)),_react2.default.createElement("td",null,_react2.default.createElement("a",{href:"#",onClick:loris.loadFilteredMenuClickHandler("conflict_resolver/",{CandID:row.CandID,Instrument:row.TableName,Question:row.FieldName})},row.test_name_display)),_react2.default.createElement("td",null,row.FieldName))}}]);return InstrumentConflictsRow}(_react.Component);InstrumentConflictsRow.proptypes={row:_propTypes2.default.object.isRequired,BaseURL:_propTypes2.default.string.isRequired};var BehaviouralFeedbackRow=function(_Component5){_inherits(BehaviouralFeedbackRow,_Component5);function BehaviouralFeedbackRow(props){_classCallCheck(this,BehaviouralFeedbackRow);var _this5=_possibleConstructorReturn(this,(BehaviouralFeedbackRow.__proto__||Object.getPrototypeOf(BehaviouralFeedbackRow)).call(this,props));_this5.state={};_this5.handleClick=_this5.handleClick.bind(_this5);return _this5}_createClass(BehaviouralFeedbackRow,[{key:"handleClick",value:function handleClick(event){event.preventDefault();var link=this.refs.feedback.href;window.open(link,"Behavioural Feedback")}},{key:"render",value:function render(){var row=this.props.row;var bvlLink=void 0;var bvlLevel=void 0;if(row.Feedback_level==="visit"){bvlLink=this.props.BaseURL+"/instrument_list/?candID="+row.CandID+"&sessionID="+row.SessionID;bvlLevel="Visit : "+row.Visit_label}if(row.Feedback_level==="instrument"){bvlLink=this.props.BaseURL+"/instruments/"+row.Test_name+"/?candID="+row.CandID+"&sessionID="+row.SessionID+"&commentID="+row.CommentID;bvlLevel="Instrument : "+row.Full_name}if(row.Feedback_level==="profile"){bvlLink=this.props.BaseURl+"/"+row.CandID+"/";bvlLevel="Profile"}return _react2.default.createElement("tr",{key:row.FeedbackID},_react2.default.createElement("td",null,_react2.default.createElement("a",{href:this.props.BaseURL+"/"+row.CandID+"/"},row.CandID)),_react2.default.createElement("td",null,_react2.default.createElement("a",{href:this.props.BaseURL+"/"+row.CandID+"/"},row.PSCID)),_react2.default.createElement("td",null,_react2.default.createElement("a",{href:bvlLink,onClick:this.handleClick,ref:"feedback"},bvlLevel)),_react2.default.createElement("td",null,row.FieldName))}}]);return BehaviouralFeedbackRow}(_react.Component);BehaviouralFeedbackRow.propTypes={row:_propTypes2.default.object.isRequired,BaseURL:_propTypes2.default.string.isRequired};var DefaultPanel=function(_Component6){_inherits(DefaultPanel,_Component6);function DefaultPanel(props){_classCallCheck(this,DefaultPanel);var _this6=_possibleConstructorReturn(this,(DefaultPanel.__proto__||Object.getPrototypeOf(DefaultPanel)).call(this,props));_this6.state={displayName:"CandidatesPanelTable"};return _this6}_createClass(DefaultPanel,[{key:"render",value:function render(){return _react2.default.createElement("div",{className:"panel panel-primary"},_react2.default.createElement("div",{className:"panel-heading"},this.props.title),_react2.default.createElement("div",{className:"panel-body"},this.props.children))}}]);return DefaultPanel}(_react.Component);DefaultPanel.propTypes={title:_propTypes2.default.string,children:_propTypes2.default.string};var IncompleteCandidates=function(_Component7){_inherits(IncompleteCandidates,_Component7);function IncompleteCandidates(props){_classCallCheck(this,IncompleteCandidates);var _this7=_possibleConstructorReturn(this,(IncompleteCandidates.__proto__||Object.getPrototypeOf(IncompleteCandidates)).call(this,props));_this7.state={};return _this7}_createClass(IncompleteCandidates,[{key:"render",value:function render(){var row={};return _react2.default.createElement(DefaultPanel,{title:this.props.title},_react2.default.createElement(PagedTable,{tableRows:this.props.incomplete_candidates,tableHeaders:this.props.header},_react2.default.createElement(IncompleteCandidatesRow,{row,BaseURL:this.props.BaseURL})))}}]);return IncompleteCandidates}(_react.Component);IncompleteCandidates.propTypes={title:_propTypes2.default.string,incomplete_candidates:_propTypes2.default.array,header:_propTypes2.default.array,BaseURL:_propTypes2.default.string};var InstrumentConflicts=function(_Component8){_inherits(InstrumentConflicts,_Component8);function InstrumentConflicts(props){_classCallCheck(this,InstrumentConflicts);var _this8=_possibleConstructorReturn(this,(InstrumentConflicts.__proto__||Object.getPrototypeOf(InstrumentConflicts)).call(this,props));_this8.state={};return _this8}_createClass(InstrumentConflicts,[{key:"render",value:function render(){var row={};return _react2.default.createElement(DefaultPanel,{title:this.props.title},_react2.default.createElement(PagedTable,{tableRows:this.props.conflicts,tableHeaders:this.props.header},_react2.default.createElement(InstrumentConflictsRow,{row,BaseURL:this.props.BaseURL})))}}]);return InstrumentConflicts}(_react.Component);InstrumentConflicts.propTypes={title:_propTypes2.default.string,conflicts:_propTypes2.default.array,header:_propTypes2.default.array,BaseURL:_propTypes2.default.string};var BehaviouralFeedback=function(_Component9){_inherits(BehaviouralFeedback,_Component9);function BehaviouralFeedback(props){_classCallCheck(this,BehaviouralFeedback);var _this9=_possibleConstructorReturn(this,(BehaviouralFeedback.__proto__||Object.getPrototypeOf(BehaviouralFeedback)).call(this,props));_this9.state={};return _this9}_createClass(BehaviouralFeedback,[{key:"render",value:function render(){var row={};return _react2.default.createElement(DefaultPanel,{title:this.props.title},_react2.default.createElement(PagedTable,{tableRows:this.props.feedback,tableHeaders:this.props.header},_react2.default.createElement(BehaviouralFeedbackRow,{row,BaseURL:this.props.BaseURL})))}}]);return BehaviouralFeedback}(_react.Component);BehaviouralFeedback.propTypes={title:_propTypes2.default.string,feedback:_propTypes2.default.array,header:_propTypes2.default.array,BaseURL:_propTypes2.default.string};var BVLPager=function(_Component10){_inherits(BVLPager,_Component10);function BVLPager(props){_classCallCheck(this,BVLPager);var _this10=_possibleConstructorReturn(this,(BVLPager.__proto__||Object.getPrototypeOf(BVLPager)).call(this,props));var page=_this10.props.page;var pageLinks=[];if(page.currentPage>1){pageLinks.push(_react2.default.createElement("li",{key:1,onClick:function onClick(){return page.handleClick(page.currentPage-1)}},_react2.default.createElement("span",null,"‹")));if(page.currentPage>2){pageLinks.push(_react2.default.createElement("li",{key:2,onClick:function onClick(){return page.handleClick(1)}},_react2.default.createElement("span",null,"1")));pageLinks.push(_react2.default.createElement("li",{key:3},_react2.default.createElement("span",null,"...")))}}if(page.numPages>1){pageLinks.push(_react2.default.createElement("li",{key:4,className:"active"},_react2.default.createElement("span",null,page.currentPage)))}if(page.currentPage<page.numPages){pageLinks.push(_react2.default.createElement("li",{key:5,onClick:function onClick(){return page.handleClick(page.currentPage+1)}},_react2.default.createElement("span",null,page.currentPage+1)));if(page.currentPage<page.numPages-1){pageLinks.push(_react2.default.createElement("li",{key:6,onClick:function onClick(){return page.handleClick(page.currentPage+2)}},_react2.default.createElement("span",null,page.currentPage+2)))}if(page.currentPage<page.numPages-2){pageLinks.push(_react2.default.createElement("li",{key:7,onClick:function onClick(){return page.handleClick(page.currentPage+3)}},_react2.default.createElement("span",null,page.currentPage+3)))}if(page.currentPage<page.numPages-3){pageLinks.push(_react2.default.createElement("li",{key:8},_react2.default.createElement("span",null,"...")));pageLinks.push(_react2.default.createElement("li",{key:9,onClick:function onClick(){return page.handleClick(page.numPages)}},_react2.default.createElement("span",null,page.numPages)))}pageLinks.push(_react2.default.createElement("li",{key:10,onClick:function onClick(){return page.handleClick(page.currentPage+1)}},_react2.default.createElement("span",{"aria-hidden":"true"},"›")))}_this10.state={pageLinks};return _this10}_createClass(BVLPager,[{key:"render",value:function render(){return _react2.default.createElement("ul",{className:"pagination pagination-sm"},this.state.pageLinks)}}]);return BVLPager}(_react.Component);BVLPager.propTypes={page:_propTypes2.default.object};var dataTeamGraphics=function(_Component11){_inherits(dataTeamGraphics,_Component11);function dataTeamGraphics(props){_classCallCheck(this,dataTeamGraphics);var _this11=_possibleConstructorReturn(this,(dataTeamGraphics.__proto__||Object.getPrototypeOf(dataTeamGraphics)).call(this,props));_this11.state={};return _this11}_createClass(dataTeamGraphics,[{key:"componentDidMount",value:function componentDidMount(){c3.generate({bindto:"#completedChart",data:{columns:[["data",this.props.percentCompleted]],type:"gauge"},color:{pattern:["#FF0000","#F97600","#F6C600","#60B044"],threshold:{values:[30,60,90,100]}}})}},{key:"render",value:function render(){var pscidStatus=this.props.pscid?"Candidate "+this.props.pscid:"All Candidates";var visitStatus=this.props.visit?"On "+this.props.visit:"Across All Visits";var instrumentStatus=this.props.instrument?"On Instrument "+this.props.instrument:"Across All Instruments";var siteStatus=this.props.site?this.props.site:"Across All Sites";var projectStatus=this.props.project?this.props.project:"Across All Projects";return _react2.default.createElement("div",{className:"col-sm-12 col-md-5"},_react2.default.createElement("div",{className:"panel panel-primary"},_react2.default.createElement("div",{className:"panel-heading"},"At A Glance: ",pscidStatus," - ",visitStatus," - ",instrumentStatus," - ",siteStatus," -",projectStatus),_react2.default.createElement("div",{className:"panel-body"},_react2.default.createElement("div",{id:"completedChart"}))))}}]);return dataTeamGraphics}(_react.Component);dataTeamGraphics.propTypes={percentCompleted:_propTypes2.default.string,pscid:_propTypes2.default.string,visit:_propTypes2.default.string,instrument:_propTypes2.default.string,site:_propTypes2.default.string,project:_propTypes2.default.string};var GraphicsPanel=_react2.default.createFactory(dataTeamGraphics);var BehaviouralFeedbackTab=_react2.default.createFactory(BehaviouralFeedback);var IncompleteCandidatesPanel=_react2.default.createFactory(IncompleteCandidates);var InstrumentConflictsPanel=_react2.default.createFactory(InstrumentConflicts);window.GraphicsPanel=GraphicsPanel;window.BehaviouralFeedbackTab=BehaviouralFeedbackTab;window.IncompleteCandidatesPanel=IncompleteCandidatesPanel;window.InstrumentConflictsPanel=InstrumentConflictsPanel;exports.default={GraphicsPanel,BehaviouralFeedbackTab,IncompleteCandidatesPanel,InstrumentConflictsPanel}}});
//# sourceMappingURL=behavioural_qc_module.js.map