(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=57)})({0:function(module,exports){module.exports=React},1:function(module,exports,__webpack_require__){if(false){var throwOnDirectAccess,isValidElement,REACT_ELEMENT_TYPE}else{module.exports=__webpack_require__(2)()}},2:function(module,exports,__webpack_require__){"use strict";var ReactPropTypesSecret=__webpack_require__(3);function emptyFunction(){}module.exports=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret===ReactPropTypesSecret){return}var err=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. "+"Use PropTypes.checkPropTypes() to call them. "+"Read more at http://fb.me/use-check-prop-types");err.name="Invariant Violation";throw err}shim.isRequired=shim;function getShim(){return shim}var ReactPropTypes={array:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim};ReactPropTypes.checkPropTypes=emptyFunction;ReactPropTypes.PropTypes=ReactPropTypes;return ReactPropTypes}},3:function(module,exports,__webpack_require__){"use strict";var ReactPropTypesSecret="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";module.exports=ReactPropTypesSecret},57:function(module,exports,__webpack_require__){"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _Tabs=__webpack_require__(6);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&((typeof call==="undefined"?"undefined":_typeof(call))==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==="undefined"?"undefined":_typeof(superClass)))}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var LoadPane=function(_Component){_inherits(LoadPane,_Component);function LoadPane(props){_classCallCheck(this,LoadPane);var _this=_possibleConstructorReturn(this,(LoadPane.__proto__||Object.getPrototypeOf(LoadPane)).call(this,props));_this.state={disabled:true,alert:""};_this.chooseFile=_this.chooseFile.bind(_this);_this.setAlert=_this.setAlert.bind(_this);_this.resetAlert=_this.resetAlert.bind(_this);_this.loadFile=_this.loadFile.bind(_this);return _this}_createClass(LoadPane,[{key:"chooseFile",value:function chooseFile(e){var value=e.target.files[0];this.setState({file:value,disabled:true,alert:""});if(value){this.setState({disabled:false})}}},{key:"setAlert",value:function setAlert(type,message){this.setState({alert:type,alertMessage:message})}},{key:"resetAlert",value:function resetAlert(){this.setState({alert:"",alertMessage:""})}},{key:"loadFile",value:function loadFile(){var callback={success:this.props.loadCallback,error:this.setAlert};Instrument.load(this.state.file,callback)}},{key:"render",value:function render(){var alert="";switch(this.state.alert){case"success":alert=_react2.default.createElement("div",{className:"alert alert-success alert-dismissible",role:"alert"},_react2.default.createElement("button",{type:"button",className:"close",onClick:this.resetAlert},_react2.default.createElement("span",{"aria-hidden":"true"},"×")),_react2.default.createElement("strong",null,"Success!")," Instrument Loaded");break;case"typeError":alert=_react2.default.createElement("div",{className:"alert alert-danger alert-dismissible",role:"alert"},_react2.default.createElement("button",{type:"button",className:"close",onClick:this.resetAlert},_react2.default.createElement("span",{"aria-hidden":"true"},"×")),_react2.default.createElement("strong",null,"Error!")," Wrong file format");break;case"duplicateEntry":alert=_react2.default.createElement("div",{className:"alert alert-danger alert-dismissible",role:"alert"},_react2.default.createElement("button",{type:"button",className:"close",onClick:this.resetAlert},_react2.default.createElement("span",{"aria-hidden":"true"},"×")),_react2.default.createElement("strong",null,"Error!"),_react2.default.createElement("br",null),this.state.alertMessage);break;default:break}return _react2.default.createElement(_Tabs.TabPane,_extends({Title:"Load Instrument"},this.props),_react2.default.createElement("div",{className:"col-sm-6 col-xs-12"},alert,_react2.default.createElement("input",{className:"fileUpload",type:"file",id:"instfile",onChange:this.chooseFile}),_react2.default.createElement("input",{className:"btn btn-primary spacingTop",type:"button",id:"load",value:"Load Instrument",disabled:this.state.disabled,onClick:this.loadFile})))}}]);return LoadPane}(_react.Component);var SavePane=function(_Component2){_inherits(SavePane,_Component2);function SavePane(props){_classCallCheck(this,SavePane);var _this2=_possibleConstructorReturn(this,(SavePane.__proto__||Object.getPrototypeOf(SavePane)).call(this,props));_this2.state={fileName:"",instrumentName:""};_this2.loadState=_this2.loadState.bind(_this2);_this2.onChangeFile=_this2.onChangeFile.bind(_this2);_this2.onChangeInst=_this2.onChangeInst.bind(_this2);return _this2}_createClass(SavePane,[{key:"loadState",value:function loadState(newState){this.setState({fileName:newState.fileName,instrumentName:newState.instrumentName})}},{key:"onChangeFile",value:function onChangeFile(e){var value=e.target.value;this.setState({fileName:value})}},{key:"onChangeInst",value:function onChangeInst(e){var value=e.target.value;this.setState({instrumentName:value})}},{key:"render",value:function render(){var value=this.state.fileName;return _react2.default.createElement(_Tabs.TabPane,_extends({Title:"Save Instrument"},this.props),_react2.default.createElement("div",{className:"form-group"},_react2.default.createElement("div",{className:"col-xs-12"},_react2.default.createElement("label",{className:"col-sm-2 control-label"},"Filename: "),_react2.default.createElement("div",{className:"col-sm-4"},_react2.default.createElement("input",{className:"form-control",type:"text",id:"filename",value,onChange:this.onChangeFile}))),_react2.default.createElement("div",{className:"col-xs-12 spacingTop"},_react2.default.createElement("label",{className:"col-sm-2 control-label"},"Instrument Name: "),_react2.default.createElement("div",{className:"col-sm-4"},_react2.default.createElement("input",{className:"form-control",type:"text",id:"longname",value:this.state.instrumentName,onChange:this.onChangeInst}))),_react2.default.createElement("div",{className:"col-xs-12 spacingTop"},_react2.default.createElement("div",{className:"col-xs-12 col-sm-4 col-sm-offset-2"},_react2.default.createElement("input",{className:"btn btn-primary col-xs-12",type:"submit",value:"Save",onClick:this.props.save})))))}}]);return SavePane}(_react.Component);var DisplayElements=function(_Component3){_inherits(DisplayElements,_Component3);function DisplayElements(props){_classCallCheck(this,DisplayElements);var _this3=_possibleConstructorReturn(this,(DisplayElements.__proto__||Object.getPrototypeOf(DisplayElements)).call(this,props));_this3.state={};_this3.getPlaceholder=_this3.getPlaceholder.bind(_this3);_this3.getTableRow=_this3.getTableRow.bind(_this3);_this3.dragStart=_this3.dragStart.bind(_this3);_this3.dragEnd=_this3.dragEnd.bind(_this3);_this3.dragOver=_this3.dragOver.bind(_this3);return _this3}_createClass(DisplayElements,[{key:"getPlaceholder",value:function getPlaceholder(){if(!this.placeholder){var tr=document.createElement("tr");tr.className="placeholder";var td=document.createElement("td");td.colSpan=2;td.appendChild(document.createTextNode("Drop here"));tr.appendChild(td);this.placeholder=tr}return this.placeholder}},{key:"getTableRow",value:function getTableRow(element){if(element.tagName==="tr"){return element}return $(element).closest("tr")[0]}},{key:"dragStart",value:function dragStart(e){this.dragged=this.getTableRow(e.currentTarget);e.dataTransfer.effectAllowed="move";e.dataTransfer.setData("text/html",e.currentTarget)}},{key:"dragEnd",value:function dragEnd(e){this.dragged.style.display="table-row";this.dragged.parentNode.removeChild(this.getPlaceholder());var data=this.props.elements;var from=Number(this.dragged.dataset.id);var to=Number(this.over.dataset.id);if(from<to)to--;if(this.nodePlacement==="after")to++;data.splice(to,0,data.splice(from,1)[0]);this.setState({data})}},{key:"dragOver",value:function dragOver(e){e.preventDefault();var targetRow=this.getTableRow(e.target);this.dragged.style.display="none";if(targetRow.className==="placeholder")return;this.over=targetRow;var relY=e.pageY-$(this.over).offset().top;var height=this.over.offsetHeight/2;var parent=targetRow.parentNode;if(relY>=height){this.nodePlacement="after";parent.insertBefore(this.getPlaceholder(),targetRow.nextElementSibling)}else{this.nodePlacement="before";parent.insertBefore(this.getPlaceholder(),targetRow)}}},{key:"render",value:function render(){var tableRows=this.props.elements.map(function(element,i){var row=void 0;var colStyles={wordWrap:"break-word"};if(element.editing){row=_react2.default.createElement("tr",{"data-id":i,key:i,draggable:this.props.draggable,onDragEnd:this.dragEnd,onDragStart:this.dragStart},_react2.default.createElement("td",{className:"col-xs-2",colSpan:"3"},_react2.default.createElement(AddElement,{updateQuestions:this.props.updateElement,element,index:i})))}else{row=_react2.default.createElement("tr",{"data-id":i,key:i,draggable:this.props.draggable,onDragEnd:this.dragEnd,onDragStart:this.dragStart},_react2.default.createElement("td",{style:colStyles},element.Name),_react2.default.createElement("td",{style:colStyles},_react2.default.createElement(LorisElement,{element})),_react2.default.createElement("td",{style:colStyles},_react2.default.createElement("button",{onClick:this.props.editElement.bind(null,i),className:"button"},"Edit"),_react2.default.createElement("button",{onClick:this.props.deleteElement.bind(null,i),className:"button"},"Delete")))}return row});var tableStyles={tableLayout:"fixed"};return _react2.default.createElement("table",{id:"sortable",className:"table table-hover",style:tableStyles},_react2.default.createElement("thead",null,_react2.default.createElement("tr",null,_react2.default.createElement("th",{className:"col-xs-2"},"Database Name"),_react2.default.createElement("th",{className:"col-xs-6"},"Question Display (Front End)"),_react2.default.createElement("th",{className:"col-xs-4"},"Edit"))),_react2.default.createElement("tbody",{onDragOver:this.dragOver},tableRows))}}]);return DisplayElements}(_react.Component);var BuildPane=function(_Component4){_inherits(BuildPane,_Component4);function BuildPane(props){_classCallCheck(this,BuildPane);var _this4=_possibleConstructorReturn(this,(BuildPane.__proto__||Object.getPrototypeOf(BuildPane)).call(this,props));_this4.state={Elements:[{Type:"ElementGroup",GroupType:"Page",Description:"Top",Elements:[]}],amountEditing:0,currentPage:0,elementDBNames:{}};_this4.loadElements=_this4.loadElements.bind(_this4);_this4.editElement=_this4.editElement.bind(_this4);_this4.deleteElement=_this4.deleteElement.bind(_this4);_this4.updateElement=_this4.updateElement.bind(_this4);_this4.addQuestion=_this4.addQuestion.bind(_this4);_this4.addPage=_this4.addPage.bind(_this4);_this4.selectPage=_this4.selectPage.bind(_this4);return _this4}_createClass(BuildPane,[{key:"loadElements",value:function loadElements(elements){var elContent=elements[this.state.currentPage].Elements;var elNames={};elContent.forEach(function(el){elNames[el.Name]=""});this.setState({Elements:elements,elementDBNames:elNames})}},{key:"editElement",value:function editElement(elementIndex){this.setState(function(state){var temp=state.Elements;var edit=state.amountEditing+1;var dbNames=state.elementDBNames;delete dbNames[temp[state.currentPage].Elements[elementIndex].Name];temp[state.currentPage].Elements[elementIndex].editing=true;return{Elements:temp,amountEditing:edit,elementDBNames:dbNames}})}},{key:"deleteElement",value:function deleteElement(elementIndex){this.setState(function(state){var temp=state.Elements;var dbNames=state.elementDBNames;delete dbNames[temp[state.currentPage].Elements[elementIndex].Name];temp[state.currentPage].Elements.splice(elementIndex,1);return{Elements:temp}})}},{key:"updateElement",value:function updateElement(element,index){if(element.Name&&element.Name in this.state.elementDBNames){return false}this.setState(function(state){var temp=state.Elements;var edit=state.amountEditing-1;var dbNa=state.elementDBNames;temp[state.currentPage].Elements[index]=element;if(element.Name){dbNa[element.Name]=""}return{Elements:temp,amountEditing:edit,elementDBNames:dbNa}});return true}},{key:"addQuestion",value:function addQuestion(element){if(element.Name&&element.Name in this.state.elementDBNames){return false}this.setState(function(state){var temp=state.Elements;var dbNa=state.elementDBNames;if(element.Name){dbNa[element.Name]=""}temp[state.currentPage].Elements.push(element);return{Elements:temp,elementDBNames:dbNa}});return true}},{key:"addPage",value:function addPage(pageName){this.setState(function(state){var temp=state.Elements;var page=state.currentPage+1;temp.push({Type:"ElementGroup",GroupType:"Page",Description:pageName,Elements:[]});return{Elements:temp,currentPage:page}})}},{key:"selectPage",value:function selectPage(index){this.setState({currentPage:index})}},{key:"render",value:function render(){var draggable=this.state.amountEditing===0;var pages=this.state.Elements.map(function(element,i){return _react2.default.createElement("li",{key:i,onClick:this.selectPage.bind(null,i)},_react2.default.createElement("a",null,this.state.Elements[i].Description))}.bind(this));return _react2.default.createElement(_Tabs.TabPane,_extends({Title:"Build Instrument"},this.props),_react2.default.createElement("div",{className:"form-group col-xs-12"},_react2.default.createElement("label",{htmlFor:"selected-input",className:"col-xs-2 col-sm-1 control-label"},"Page:"),_react2.default.createElement("div",{className:"col-sm-4"},_react2.default.createElement("div",{className:"btn-group"},_react2.default.createElement("button",{id:"selected-input",type:"button",className:"btn btn-default dropdown-toggle","data-toggle":"dropdown"},_react2.default.createElement("span",{id:"search_concept"},this.state.Elements[this.state.currentPage].Description),_react2.default.createElement("span",{className:"caret"})),_react2.default.createElement("ul",{className:"dropdown-menu",role:"menu"},pages)))),_react2.default.createElement(DisplayElements,{elements:this.state.Elements[this.state.currentPage].Elements,editElement:this.editElement,deleteElement:this.deleteElement,updateElement:this.updateElement,draggable}),_react2.default.createElement("div",{className:"row"},_react2.default.createElement(AddElement,{updateQuestions:this.addQuestion,addPage:this.addPage})))}}]);return BuildPane}(_react.Component);var InstrumentBuilderApp=function(_Component5){_inherits(InstrumentBuilderApp,_Component5);function InstrumentBuilderApp(props){_classCallCheck(this,InstrumentBuilderApp);var _this5=_possibleConstructorReturn(this,(InstrumentBuilderApp.__proto__||Object.getPrototypeOf(InstrumentBuilderApp)).call(this,props));_this5.state={};_this5.saveInstrument=_this5.saveInstrument.bind(_this5);_this5.loadCallback=_this5.loadCallback.bind(_this5);return _this5}_createClass(InstrumentBuilderApp,[{key:"saveInstrument",value:function saveInstrument(){Instrument.save(this.refs.savePane.state,this.refs.buildPane.state.Elements)}},{key:"loadCallback",value:function loadCallback(elements,info){this.refs.savePane.loadState(info);this.refs.buildPane.loadElements(elements);this.refs.loadPane.setAlert("success")}},{key:"render",value:function render(){var tabs=[];tabs.push(_react2.default.createElement(LoadPane,{TabId:"Load",ref:"loadPane",loadCallback:this.loadCallback,key:1}));tabs.push(_react2.default.createElement(BuildPane,{TabId:"Build",ref:"buildPane",key:2}));tabs.push(_react2.default.createElement(SavePane,{TabId:"Save",ref:"savePane",save:this.saveInstrument,key:3}));var tabList=[{id:"Load",label:"Load"},{id:"Build",label:"Build"},{id:"Save",label:"Save"}];return _react2.default.createElement("div",null,_react2.default.createElement(_Tabs.Tabs,{tabs:tabList,defaultTab:"Build"},tabs))}}]);return InstrumentBuilderApp}(_react.Component);var RInstrumentBuilderApp=_react2.default.createFactory(InstrumentBuilderApp);window.RInstrumentBuilderApp=RInstrumentBuilderApp;exports.default=InstrumentBuilderApp},6:function(module,exports,__webpack_require__){"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};Object.defineProperty(exports,"__esModule",{value:true});exports.TabPane=exports.VerticalTabs=exports.Tabs=undefined;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _propTypes=__webpack_require__(1);var _propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&((typeof call==="undefined"?"undefined":_typeof(call))==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==="undefined"?"undefined":_typeof(superClass)))}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var Tabs=function(_Component){_inherits(Tabs,_Component);function Tabs(props){_classCallCheck(this,Tabs);var _this=_possibleConstructorReturn(this,(Tabs.__proto__||Object.getPrototypeOf(Tabs)).call(this,props));var hash=window.location.hash;var activeTab="";if(_this.props.updateURL&&hash){activeTab=hash.substr(1)}else if(_this.props.defaultTab){activeTab=_this.props.defaultTab}else if(_this.props.tabs.length>0){activeTab=_this.props.tabs[0].id}_this.state={activeTab};_this.handleClick=_this.handleClick.bind(_this);_this.getTabs=_this.getTabs.bind(_this);_this.getTabPanes=_this.getTabPanes.bind(_this);return _this}_createClass(Tabs,[{key:"handleClick",value:function handleClick(tabId,e){this.setState({activeTab:tabId});this.props.onTabChange(tabId);if(this.props.updateURL){var scrollDistance=$("body").scrollTop()||$("html").scrollTop();window.location.hash=e.target.hash;$("html,body").scrollTop(scrollDistance)}}},{key:"getTabs",value:function getTabs(){var tabs=this.props.tabs.map(function(tab){var tabClass=this.state.activeTab===tab.id?"active":null;var href="#"+tab.id;var tabID="tab-"+tab.id;return _react2.default.createElement("li",{role:"presentation",className:tabClass,key:tab.id},_react2.default.createElement("a",{id:tabID,href,role:"tab","data-toggle":"tab",onClick:this.handleClick.bind(null,tab.id)},tab.label))}.bind(this));return tabs}},{key:"getTabPanes",value:function getTabPanes(){var tabPanes=_react2.default.Children.map(this.props.children,function(child,key){if(child){return _react2.default.cloneElement(child,{activeTab:this.state.activeTab,key})}}.bind(this));return tabPanes}},{key:"render",value:function render(){var tabs=this.getTabs();var tabPanes=this.getTabPanes();var tabStyle={marginLeft:0,marginBottom:"5px"};return _react2.default.createElement("div",null,_react2.default.createElement("ul",{className:"nav nav-tabs",role:"tablist",style:tabStyle},tabs),_react2.default.createElement("div",{className:"tab-content"},tabPanes))}}]);return Tabs}(_react.Component);Tabs.propTypes={tabs:_propTypes2.default.array.isRequired,defaultTab:_propTypes2.default.string,updateURL:_propTypes2.default.bool};Tabs.defaultProps={onTabChange:function onTabChange(){},updateURL:true};var VerticalTabs=function(_Component2){_inherits(VerticalTabs,_Component2);function VerticalTabs(props){_classCallCheck(this,VerticalTabs);var _this2=_possibleConstructorReturn(this,(VerticalTabs.__proto__||Object.getPrototypeOf(VerticalTabs)).call(this,props));var hash=window.location.hash;var activeTab="";if(_this2.props.updateURL&&hash){activeTab=hash.substr(1)}else if(_this2.props.defaultTab){activeTab=_this2.props.defaultTab}else if(_this2.props.tabs.length>0){activeTab=_this2.props.tabs[0].id}_this2.state={activeTab};_this2.handleClick=_this2.handleClick.bind(_this2);_this2.getTabs=_this2.getTabs.bind(_this2);_this2.getTabPanes=_this2.getTabPanes.bind(_this2);return _this2}_createClass(VerticalTabs,[{key:"handleClick",value:function handleClick(tabId,e){this.setState({activeTab:tabId});this.props.onTabChange(tabId);if(this.props.updateURL){var scrollDistance=$("body").scrollTop()||$("html").scrollTop();window.location.hash=e.target.hash;$("html,body").scrollTop(scrollDistance)}}},{key:"getTabs",value:function getTabs(){var tabs=this.props.tabs.map(function(tab){var tabClass=this.state.activeTab===tab.id?"active":null;var href="#"+tab.id;var tabID="tab-"+tab.id;return _react2.default.createElement("li",{role:"presentation",className:tabClass,key:tab.id},_react2.default.createElement("a",{id:tabID,href,role:"tab","data-toggle":"tab",onClick:this.handleClick.bind(null,tab.id)},tab.label))}.bind(this));return tabs}},{key:"getTabPanes",value:function getTabPanes(){var tabPanes=_react2.default.Children.map(this.props.children,function(child,key){if(child){return _react2.default.cloneElement(child,{activeTab:this.state.activeTab,key})}}.bind(this));return tabPanes}},{key:"render",value:function render(){var tabs=this.getTabs();var tabPanes=this.getTabPanes();var tabStyle={marginLeft:0,marginBottom:"5px"};return _react2.default.createElement("div",null,_react2.default.createElement("div",{className:"tabbable col-md-3 col-sm-3"},_react2.default.createElement("ul",{className:"nav nav-pills nav-stacked",role:"tablist",style:tabStyle},tabs)),_react2.default.createElement("div",{className:"tab-content col-md-9 col-sm-9"},tabPanes))}}]);return VerticalTabs}(_react.Component);VerticalTabs.propTypes={tabs:_propTypes2.default.array.isRequired,defaultTab:_propTypes2.default.string,updateURL:_propTypes2.default.bool};VerticalTabs.defaultProps={onTabChange:function onTabChange(){},updateURL:true};var TabPane=function(_Component3){_inherits(TabPane,_Component3);function TabPane(){_classCallCheck(this,TabPane);return _possibleConstructorReturn(this,(TabPane.__proto__||Object.getPrototypeOf(TabPane)).apply(this,arguments))}_createClass(TabPane,[{key:"render",value:function render(){var classList="tab-pane";var title=void 0;if(this.props.TabId===this.props.activeTab){classList+=" active"}if(this.props.Title){title=_react2.default.createElement("h1",null,this.props.Title)}return _react2.default.createElement("div",{role:"tabpanel",className:classList,id:this.props.TabId},title,this.props.children)}}]);return TabPane}(_react.Component);TabPane.propTypes={TabId:_propTypes2.default.string.isRequired,Title:_propTypes2.default.string,activeTab:_propTypes2.default.string};exports.Tabs=Tabs;exports.VerticalTabs=VerticalTabs;exports.TabPane=TabPane}});
//# sourceMappingURL=react.instrument_builder.js.map