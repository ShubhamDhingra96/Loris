(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=27)})({0:function(module,exports){module.exports=React},1:function(module,exports,__webpack_require__){if(false){var throwOnDirectAccess,isValidElement,REACT_ELEMENT_TYPE}else{module.exports=__webpack_require__(2)()}},2:function(module,exports,__webpack_require__){"use strict";var ReactPropTypesSecret=__webpack_require__(3);function emptyFunction(){}module.exports=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret===ReactPropTypesSecret){return}var err=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. "+"Use PropTypes.checkPropTypes() to call them. "+"Read more at http://fb.me/use-check-prop-types");err.name="Invariant Violation";throw err}shim.isRequired=shim;function getShim(){return shim}var ReactPropTypes={array:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim};ReactPropTypes.checkPropTypes=emptyFunction;ReactPropTypes.PropTypes=ReactPropTypes;return ReactPropTypes}},27:function(module,exports,__webpack_require__){"use strict";var _IssueForm=__webpack_require__(28);var _IssueForm2=_interopRequireDefault(_IssueForm);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}$(function(){var args=QueryString.get();var issueTracker=React.createElement("div",{className:"page-issue-tracker"},React.createElement(_IssueForm2.default,{Module:"issue_tracker",DataURL:loris.BaseURL+"/issue_tracker/ajax/EditIssue.php?action=getData&issueID="+args.issueID,action:loris.BaseURL+"/issue_tracker/ajax/EditIssue.php?action=edit"}));ReactDOM.render(issueTracker,document.getElementById("lorisworkspace"))})},28:function(module,exports,__webpack_require__){"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _CommentList=__webpack_require__(29);var _CommentList2=_interopRequireDefault(_CommentList);var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _propTypes=__webpack_require__(1);var _propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&((typeof call==="undefined"?"undefined":_typeof(call))==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==="undefined"?"undefined":_typeof(superClass)))}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var IssueForm=function(_Component){_inherits(IssueForm,_Component);function IssueForm(props){_classCallCheck(this,IssueForm);var _this=_possibleConstructorReturn(this,(IssueForm.__proto__||Object.getPrototypeOf(IssueForm)).call(this,props));_this.state={Data:[],formData:{},submissionResult:null,errorMessage:null,isLoaded:false,isNewIssue:false,issueID:0};_this.getFormData=_this.getFormData.bind(_this);_this.handleSubmit=_this.handleSubmit.bind(_this);_this.setFormData=_this.setFormData.bind(_this);_this.isValidForm=_this.isValidForm.bind(_this);_this.showAlertMessage=_this.showAlertMessage.bind(_this);return _this}_createClass(IssueForm,[{key:"componentDidMount",value:function componentDidMount(){this.getFormData()}},{key:"render",value:function render(){if(this.state.error){return _react2.default.createElement("div",{className:"alert alert-danger text-center"},_react2.default.createElement("strong",null,this.state.error))}if(!this.state.isLoaded){return _react2.default.createElement("button",{className:"btn-info has-spinner"},"Loading",_react2.default.createElement("span",{className:"glyphicon glyphicon-refresh glyphicon-refresh-animate"}))}var hasEditPermission=this.state.Data.hasEditPermission||this.state.Data.isOwnIssue||this.state.isNewIssue;var headerText=void 0;var lastUpdateValue=void 0;var lastUpdatedByValue=void 0;var dateCreated=void 0;var submitButtonValue=void 0;var commentLabel=void 0;var isWatching=this.state.issueData.watching;if(this.state.isNewIssue){headerText="Create New Issue";lastUpdateValue="Never!";lastUpdatedByValue="No-one!";dateCreated="Sometime Soon!";submitButtonValue="Submit Issue";commentLabel="Description"}else{headerText="Edit Issue #"+this.state.issueData.issueID;lastUpdateValue=this.state.issueData.lastUpdate;lastUpdatedByValue=this.state.issueData.lastUpdatedBy;dateCreated=this.state.issueData.dateCreated;submitButtonValue="Update Issue";commentLabel="New Comment"}var commentHistory=this.state.isNewIssue||_react2.default.createElement(_CommentList2.default,{commentHistory:this.state.issueData.commentHistory});var header=void 0;var description=void 0;if(!this.state.isNewIssue){header=_react2.default.createElement("div",{className:"row"},_react2.default.createElement("div",{className:"col-md-6"},_react2.default.createElement(StaticElement,{name:"lastUpdate",label:"Last Update: ",ref:"lastUpdate",text:lastUpdateValue})),_react2.default.createElement("div",{className:"col-md-6"},_react2.default.createElement(StaticElement,{name:"lastUpdatedBy",label:"Last Updated By: ",ref:"lastUpdatedBy",text:lastUpdatedByValue})),_react2.default.createElement("div",{className:"col-md-6"},_react2.default.createElement(StaticElement,{name:"dateCreated",label:"Date Created: ",ref:"dateCreated",text:dateCreated})),_react2.default.createElement("div",{className:"col-md-6"},_react2.default.createElement(StaticElement,{name:"reporter",label:"Reporter: ",ref:"reporter",text:this.state.issueData.reporter})));description=_react2.default.createElement(StaticElement,{name:"description",label:"Description",ref:"description",text:this.state.issueData.desc})}return _react2.default.createElement("div",null,_react2.default.createElement(FormElement,{name:"issueEdit",onSubmit:this.handleSubmit,ref:"form"},_react2.default.createElement("h3",null,headerText),header,_react2.default.createElement(TextboxElement,{name:"title",label:"Title",onUserInput:this.setFormData,ref:"title",value:this.state.formData.title,disabled:!hasEditPermission,required:true}),description,_react2.default.createElement(SelectElement,{name:"assignee",label:"Assignee",emptyOption:true,options:this.state.Data.assignees,onUserInput:this.setFormData,ref:"assignee",disabled:!hasEditPermission,value:this.state.formData.assignee,required:true}),_react2.default.createElement(SelectElement,{name:"centerID",label:"Site",emptyOption:true,options:this.state.Data.sites,onUserInput:this.setFormData,ref:"centerID",disabled:!hasEditPermission,value:this.state.formData.centerID}),_react2.default.createElement(SelectElement,{name:"status",label:"Status",emptyOption:false,options:this.state.Data.statuses,onUserInput:this.setFormData,ref:"status",disabled:!hasEditPermission,value:this.state.formData.status}),_react2.default.createElement(SelectElement,{name:"priority",label:"Priority",emptyOption:false,options:this.state.Data.priorities,onUserInput:this.setFormData,ref:"priority",required:false,disabled:!hasEditPermission,value:this.state.formData.priority}),_react2.default.createElement(SelectElement,{name:"category",label:"Category",emptyOption:true,options:this.state.Data.categories,onUserInput:this.setFormData,ref:"category",disabled:!hasEditPermission,value:this.state.formData.category}),_react2.default.createElement(SelectElement,{name:"module",label:"Module",emptyOption:true,options:this.state.Data.modules,onUserInput:this.setFormData,ref:"module",disabled:!hasEditPermission,value:this.state.formData.module}),_react2.default.createElement(TextboxElement,{name:"PSCID",label:"PSCID",onUserInput:this.setFormData,ref:"PSCID",disabled:!hasEditPermission,value:this.state.formData.PSCID}),_react2.default.createElement(TextboxElement,{name:"visitLabel",label:"Visit Label",onUserInput:this.setFormData,ref:"visitLabel",disabled:!hasEditPermission,value:this.state.formData.visitLabel}),_react2.default.createElement(SelectElement,{name:"watching",label:"Watching?",emptyOption:false,options:{No:"No",Yes:"Yes"},onUserInput:this.setFormData,ref:"watching",value:isWatching}),_react2.default.createElement(SelectElement,{name:"othersWatching",label:"Add others to watching?",emptyOption:true,options:this.state.Data.otherWatchers,onUserInput:this.setFormData,ref:"watching",multiple:true,value:this.state.formData.othersWatching}),_react2.default.createElement(TextareaElement,{name:"comment",label:commentLabel,onUserInput:this.setFormData,ref:"comment",value:this.state.formData.comment}),_react2.default.createElement(ButtonElement,{label:submitButtonValue})),commentHistory)}},{key:"getFormData",value:function getFormData(){$.ajax(this.props.DataURL,{dataType:"json",success:function(data){this.setState({Data:data,isLoaded:true,issueData:data.issueData,formData:data.issueData,isNewIssue:!data.issueData.issueID})}.bind(this),error:function(err){this.setState({error:"An error occurred when loading the form!\n Error: "+err.status+" ("+err.statusText+")"})}.bind(this)})}},{key:"handleSubmit",value:function handleSubmit(e){e.preventDefault();if(this.state.submissionResult&&this.state.isNewIssue)return;this.setState({submissionResult:"pending"});var myFormData=this.state.formData;var formRefs=this.refs;var formData=new FormData;if(!this.isValidForm(formRefs,myFormData)){return}for(var key in myFormData){if(myFormData[key]!==""){formData.append(key,myFormData[key])}}$.ajax({type:"POST",url:this.props.action,data:formData,cache:false,dataType:"json",contentType:false,processData:false,success:function(data){var msgType="success";var message=this.state.isNewIssue?"You will be redirected to main page in 2 seconds!":"";this.showAlertMessage(msgType,message);this.setState({submissionResult:"success",issueID:data.issueID})}.bind(this),error:function(err){console.error(err);this.setState({submissionResult:"error"});var msgType="error";var message="Failed to submit issue :(";this.showAlertMessage(msgType,message)}.bind(this)})}},{key:"setFormData",value:function setFormData(formElement,value){var formDataUpdate=this.state.formData;formDataUpdate[formElement]=value;this.setState({formData:formDataUpdate})}},{key:"isValidForm",value:function isValidForm(formRefs,formDataToCheck){var isValidForm=true;var requiredFields={title:null,assignee:null};Object.keys(requiredFields).map(function(field){if(formDataToCheck[field]){requiredFields[field]=formDataToCheck[field]}else if(formRefs[field]){formRefs[field].props.hasError=true;isValidForm=false}});this.forceUpdate();return isValidForm}},{key:"showAlertMessage",value:function showAlertMessage(msgType,message){var type="success";var title="Issue updated!";var text=message||"";var timer=null;var confirmation=true;var callback=function callback(){this.setState({submissionResult:null})};if(msgType==="success"&&this.state.isNewIssue){title="Issue created!";timer=2e3;confirmation=false;callback=function callback(){this.setState({formData:{},submissionResult:null});window.location.assign("/issue_tracker")}}else if(msgType==="error"){type="error";title="Error!"}swal({title,type,text,timer,allowOutsideClick:false,allowEscapeKey:false,showConfirmButton:confirmation},callback.bind(this))}}]);return IssueForm}(_react.Component);IssueForm.propTypes={DataURL:_propTypes2.default.string.isRequired,action:_propTypes2.default.string.isRequired};exports.default=IssueForm},29:function(module,exports,__webpack_require__){"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&((typeof call==="undefined"?"undefined":_typeof(call))==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==="undefined"?"undefined":_typeof(superClass)))}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var CommentList=function(_Component){_inherits(CommentList,_Component);function CommentList(props){_classCallCheck(this,CommentList);var _this=_possibleConstructorReturn(this,(CommentList.__proto__||Object.getPrototypeOf(CommentList)).call(this,props));_this.state={collapsed:true};_this.toggleCollapsed=_this.toggleCollapsed.bind(_this);return _this}_createClass(CommentList,[{key:"toggleCollapsed",value:function toggleCollapsed(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function render(){var btnCommentsLabel=this.state.collapsed?"Show Comment History":"Hide Comment History";var changes=this.props.commentHistory.reduce(function(carry,item){var label=item.dateAdded.concat(" - ",item.addedBy);if(!carry[label]){carry[label]={}}carry[label][item.fieldChanged]=item.newValue;return carry},{});var history=Object.keys(changes).sort().reverse().map(function(key,i){var textItems=Object.keys(changes[key]).map(function(index,j){return _react2.default.createElement("div",{key:j,className:"row"},_react2.default.createElement("div",{className:"col-md-2"},_react2.default.createElement("div",{className:"col-md-8"},_react2.default.createElement("b",null,index)),_react2.default.createElement("div",{className:"col-md-4"}," to ")),_react2.default.createElement("div",{className:"col-md-10"},_react2.default.createElement("i",null,changes[key][index])))},this);return _react2.default.createElement("div",{key:i},_react2.default.createElement("hr",null),_react2.default.createElement("div",{className:"history-item-label"},_react2.default.createElement("span",null,key)," updated :"),_react2.default.createElement("div",{className:"history-item-changes"},textItems))},this);return _react2.default.createElement("div",null,_react2.default.createElement("div",{className:"btn btn-primary",onClick:this.toggleCollapsed,"data-toggle":"collapse","data-target":"#comment-history",style:{margin:"10px 0"}},btnCommentsLabel),_react2.default.createElement("div",{id:"comment-history",className:"collapse"},history))}}]);return CommentList}(_react.Component);exports.default=CommentList},3:function(module,exports,__webpack_require__){"use strict";var ReactPropTypesSecret="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";module.exports=ReactPropTypesSecret}});
//# sourceMappingURL=index.js.map