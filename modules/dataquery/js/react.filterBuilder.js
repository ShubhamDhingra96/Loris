(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=46)})({0:function(module,exports){module.exports=React},46:function(module,exports,__webpack_require__){"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&((typeof call==="undefined"?"undefined":_typeof(call))==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==="undefined"?"undefined":_typeof(superClass)))}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}
/**
   *  The following file contains the components used for the filter builder tab
   *
   *  @author   Jordan Stirling <jstirling91@gmail.com>
   *  @license  http://www.gnu.org/licenses/gpl-3.0.txt GPLv3
   *  @link     https://github.com/mohadesz/Loris-Trunk
   */var LogicOperator=function(_Component){_inherits(LogicOperator,_Component);function LogicOperator(props){_classCallCheck(this,LogicOperator);var _this=_possibleConstructorReturn(this,(LogicOperator.__proto__||Object.getPrototypeOf(LogicOperator)).call(this,props));_this.changeOperator=_this.changeOperator.bind(_this);return _this}_createClass(LogicOperator,[{key:"changeOperator",value:function changeOperator(op){this.props.updateGroupOperator(op)}},{key:"render",value:function render(){var andClass="btn",orClass="btn";if(this.props.logicOperator===1){orClass+=" btn-primary";andClass+=" switch"}else{andClass+=" btn-primary";orClass+=" switch"}return _react2.default.createElement("div",{className:"btn-group",role:"group"},_react2.default.createElement("button",{type:"button",className:andClass,onClick:this.changeOperator.bind(this,0)},"And"),_react2.default.createElement("button",{type:"button",className:orClass,onClick:this.changeOperator.bind(this,1)},"Or"))}}]);return LogicOperator}(_react.Component);var FilterRule=function(_Component2){_inherits(FilterRule,_Component2);function FilterRule(props){_classCallCheck(this,FilterRule);var _this2=_possibleConstructorReturn(this,(FilterRule.__proto__||Object.getPrototypeOf(FilterRule)).call(this,props));_this2.state={operators:{equal:"=",notEqual:"!=",lessThanEqual:"<=",greaterThanEqual:">=",startsWith:"startsWith",contains:"contains",isNull:"isNull",isNotNull:"isNotNull"},value:""};_this2.selectInstrument=_this2.selectInstrument.bind(_this2);_this2.fieldSelect=_this2.fieldSelect.bind(_this2);_this2.operatorSelect=_this2.operatorSelect.bind(_this2);_this2.valueChange=_this2.valueChange.bind(_this2);_this2.valueSet=_this2.valueSet.bind(_this2);_this2.updateVisit=_this2.updateVisit.bind(_this2);return _this2}_createClass(FilterRule,[{key:"componentWillMount",value:function componentWillMount(){this.valueSet=loris.debounce(this.valueSet,1e3)}},{key:"selectInstrument",value:function selectInstrument(event){var rule=this.props.rule,that=this;if(event.target.value){rule.instrument=event.target.value;$.get(loris.BaseURL+"/AjaxHelper.php?Module=dataquery&script=datadictionary.php",{category:rule.instrument},function(data){rule.fields=data;that.props.updateRule(that.props.index,rule)},"json")}}},{key:"fieldSelect",value:function fieldSelect(event){var rule=JSON.parse(JSON.stringify(this.props.rule));delete rule.field;delete rule.fieldType;delete rule.operator;delete rule.value;delete rule.visit;delete rule.candidates;if(event.target.value){rule.field=rule.fields[event.target.value].key[1];rule.fieldType=rule.fields[event.target.value].value.Type}this.props.updateRule(this.props.index,rule)}},{key:"operatorSelect",value:function operatorSelect(event){var rule=JSON.parse(JSON.stringify(this.props.rule));delete rule.operator;delete rule.value;delete rule.visit;delete rule.candidates;if(event.target.value){rule.operator=event.target.value}this.props.updateRule(this.props.index,rule);if(rule.operator==="isNull"||rule.operator==="isNotNull"){this.setState({value:"null"});this.valueSet()}}},{key:"valueChange",value:function valueChange(event){var rule=JSON.parse(JSON.stringify(this.props.rule));delete rule.visit;delete rule.candidates;rule.value=event.target.value;this.setState({value:event.target.value});this.valueSet();this.props.updateRule(this.props.index,rule)}},{key:"valueSet",value:function valueSet(){var rule=JSON.parse(JSON.stringify(this.props.rule)),that=this;if(this.state.value){var responseHandler=function responseHandler(data){var i=void 0,allSessions={},allCandiates={};for(i=0;i<data.length;i++){if(!allSessions[data[i][1]]){allSessions[data[i][1]]=[]}allSessions[data[i][1]].push(data[i][0]);if(!allCandiates[data[i][0]]){allCandiates[data[i][0]]=[]}allCandiates[data[i][0]].push(data[i][1])}rule.candidates={allCandiates,allSessions};rule.session=Object.keys(allCandiates);rule.visit="All";that.props.updateSessions(that.props.index,rule)},ajaxRetrieve=function ajaxRetrieve(script){$.get(loris.BaseURL+"/AjaxHelper.php?Module=dataquery&script="+script,{category:rule.instrument,field:rule.field,value:that.state.value},responseHandler,"json")};switch(rule.operator){case"equal":case"isNull":ajaxRetrieve("queryEqual.php");break;case"notEqual":case"isNotNull":ajaxRetrieve("queryNotEqual.php");break;case"lessThanEqual":ajaxRetrieve("queryLessThanEqual.php");break;case"greaterThanEqual":ajaxRetrieve("queryGreaterThanEqual.php");break;case"startsWith":ajaxRetrieve("queryStartsWith.php");break;case"contains":ajaxRetrieve("queryContains.php");break;default:break}}}},{key:"updateVisit",value:function updateVisit(event){var rule=JSON.parse(JSON.stringify(this.props.rule));rule.visit=event.target.value;if(event.target.value==="all"){rule.session=Object.keys(rule.candidates.allCandiates)}else{rule.session=rule.candidates.allSessions[event.target.value]}this.props.updateSessions(this.props.index,rule)}},{key:"render",value:function render(){var rule=void 0,fieldIndex=void 0,forVisits=void 0,visits=void 0,that=this;if(this.props.rule.instrument){var fields=this.props.rule.fields.map(function(field,index){if(that.props.rule.field&&field.key[1]===that.props.rule.field){fieldIndex=index}return _react2.default.createElement("option",{value:index},field.key[1])}),operators=[],inputOptions=void 0,input=void 0,operatorKey=void 0,operatorSelect=void 0,options=void 0,value=void 0,inputType=void 0;if(this.props.rule.fieldType){inputType=this.props.rule.fieldType.split("(");operatorKey=inputType[0];for(var key in this.state.operators){operators.push(_react2.default.createElement("option",{value:key,onChange:this.operatorSelect},this.state.operators[key]))}value=this.props.rule.operator?this.props.rule.operator:"";operatorSelect=_react2.default.createElement("select",{className:"input-sm col-xs-3 ",onChange:this.operatorSelect,value},_react2.default.createElement("option",{value:""}),operators);if(this.props.rule.operator&&this.props.rule.operator!=="isNull"&&this.props.rule.operator!=="isNotNull"){switch(operatorKey){case"enum":inputOptions=enumToArray(this.props.rule.fieldType);options=inputOptions.map(function(option){return _react2.default.createElement("option",{value:option},option)});value=this.props.rule.value?this.props.rule.value:"";input=_react2.default.createElement("select",{className:"input-sm col-xs-3",onChange:this.valueChange,value},_react2.default.createElement("option",{value:""}),options);break;default:input=_react2.default.createElement("input",{type:"text",className:"input-sm col-xs-3",onChange:this.valueChange,value:this.props.rule.value});break}}if(this.props.rule.visit){visits=Object.keys(this.props.Visits).map(function(visit){return _react2.default.createElement("option",{value:visit},visit)});forVisits=_react2.default.createElement("select",{className:"input-sm col-xs-3",onChange:this.updateVisit,value:this.props.rule.visit},_react2.default.createElement("option",{value:"all"},"All Visits"),visits)}}rule=_react2.default.createElement("div",null,_react2.default.createElement("div",{className:"col-xs-12"},_react2.default.createElement("label",{className:"instrumentLabel"},this.props.rule.instrument)),_react2.default.createElement("div",{className:"col-xs-10"},_react2.default.createElement("select",{className:"input-sm col-xs-3",onChange:this.fieldSelect,value:fieldIndex},_react2.default.createElement("option",{value:""}),fields),operatorSelect,input,forVisits))}else{var _options=this.props.items.map(function(item){return _react2.default.createElement("option",{value:item.category},item.category)});rule=_react2.default.createElement("select",{onChange:this.selectInstrument,className:"input-sm col-xs-10"},_react2.default.createElement("option",{value:""}),_options)}return _react2.default.createElement("div",{className:"panel panel-default"},_react2.default.createElement("div",{className:"panel-body"},rule,_react2.default.createElement("div",{className:"col-xs-2"},_react2.default.createElement("button",{className:"btn btn-danger btn-sm pull-right",onClick:this.props.deleteRule.bind(this,this.props.index)},_react2.default.createElement("span",{className:"glyphicon glyphicon-remove"})," Delete"))))}}]);return FilterRule}(_react.Component);var FilterGroup=function(_Component3){_inherits(FilterGroup,_Component3);function FilterGroup(props){_classCallCheck(this,FilterGroup);var _this3=_possibleConstructorReturn(this,(FilterGroup.__proto__||Object.getPrototypeOf(FilterGroup)).call(this,props));_this3.state={};_this3.updateChild=_this3.updateChild.bind(_this3);_this3.updateGroupOperator=_this3.updateGroupOperator.bind(_this3);_this3.updateSessions=_this3.updateSessions.bind(_this3);_this3.addChild=_this3.addChild.bind(_this3);_this3.deleteChild=_this3.deleteChild.bind(_this3);return _this3}_createClass(FilterGroup,[{key:"updateChild",value:function updateChild(index,child){var group=this.props.group;group.children[index]=child;if(this.props.index){this.props.updateGroup(this.props.index,group)}else{this.props.updateFilter(group)}}},{key:"updateGroupOperator",value:function updateGroupOperator(operator){var group=this.props.group;group.activeOperator=operator;group.session=getSessions(group);if(this.props.index){this.props.updateGroup(this.props.index,group)}else{this.props.updateFilter(group)}}},{key:"updateSessions",value:function updateSessions(index,child){var group=this.props.group,sessions=[],session=[];group.children[index]=child;group.session=getSessions(group);if(this.props.index){this.props.updateSessions(this.props.index,group)}else{this.props.updateFilter(group)}}},{key:"addChild",value:function addChild(type){var child=void 0,group=this.props.group;if(type==="rule"){child={type:"rule"}}else{child={type:"group",activeOperator:0,children:[{type:"rule"}]}}group.children.push(child);if(this.props.index){this.props.updateGroup(this.props.index,group)}else{this.props.updateFilter(group)}}},{key:"deleteChild",value:function deleteChild(index){var group=this.props.group;group.children.splice(index,1);group.session=getSessions(group);if(this.props.index){this.props.updateGroup(this.props.index,group)}else{this.props.updateFilter(group)}}},{key:"render",value:function render(){var logicOperator=_react2.default.createElement(LogicOperator,{logicOperator:this.props.group.activeOperator,updateGroupOperator:this.updateGroupOperator}),that=this,children=this.props.group.children.map(function(child,index){if(child.type==="rule"){return _react2.default.createElement("li",null,_react2.default.createElement(FilterRule,{rule:child,items:that.props.items,index,updateRule:that.updateChild,updateSessions:that.updateSessions,deleteRule:that.deleteChild,Visits:that.props.Visits}))}else if(child.type==="group"){return _react2.default.createElement("li",null,_react2.default.createElement(FilterGroup,{group:child,items:that.props.items,index,updateGroup:that.updateChild,updateSessions:that.updateSessions,deleteGroup:that.deleteChild,Visits:that.props.Visits}))}}),deleteButton=void 0;if(this.props.deleteGroup){deleteButton=_react2.default.createElement("button",{className:"btn btn-danger btn-sm pull-right",onClick:this.props.deleteGroup.bind(this,this.props.index)},_react2.default.createElement("span",{className:"glyphicon glyphicon-remove"})," Delete Group")}return _react2.default.createElement("div",{className:"tree"},_react2.default.createElement("ul",{className:"firstUL"},_react2.default.createElement("li",null,_react2.default.createElement("div",{className:"row"},_react2.default.createElement("div",{className:"col-xs-2"},logicOperator),_react2.default.createElement("div",{className:"col-xs-10"},deleteButton,_react2.default.createElement("button",{className:"btn btn-primary btn-sm pull-right",onClick:this.addChild.bind(this,"group")},_react2.default.createElement("span",{className:"glyphicon glyphicon-add"})," Add Group"),_react2.default.createElement("button",{className:"btn btn-primary btn-sm pull-right",onClick:this.addChild.bind(this,"rule")},_react2.default.createElement("span",{className:"glyphicon glyphicon-add"})," Add Rule"))),_react2.default.createElement("ul",null,children))))}}]);return FilterGroup}(_react.Component);var FilterBuilder=function(_Component4){_inherits(FilterBuilder,_Component4);function FilterBuilder(props){_classCallCheck(this,FilterBuilder);var _this4=_possibleConstructorReturn(this,(FilterBuilder.__proto__||Object.getPrototypeOf(FilterBuilder)).call(this,props));_this4.state={};return _this4}_createClass(FilterBuilder,[{key:"render",value:function render(){return _react2.default.createElement("div",null,_react2.default.createElement("h1",{className:"col-xs-12"},"Filter"),_react2.default.createElement("div",{className:"col-xs-12"},_react2.default.createElement("div",{className:"well well-primary"},_react2.default.createElement(FilterGroup,{group:this.props.filter,items:this.props.items,updateFilter:this.props.updateFilter,Visits:this.props.Visits}))))}}]);return FilterBuilder}(_react.Component);window.LogicOperator=LogicOperator;window.FilterRule=FilterRule;window.FilterGroup=FilterGroup;window.FilterBuilder=FilterBuilder;exports.default={LogicOperator,FilterRule,FilterGroup,FilterBuilder}}});
//# sourceMappingURL=react.filterBuilder.js.map