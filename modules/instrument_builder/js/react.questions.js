(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=58)})({0:function(module,exports){module.exports=React},1:function(module,exports,__webpack_require__){if(false){var throwOnDirectAccess,isValidElement,REACT_ELEMENT_TYPE}else{module.exports=__webpack_require__(2)()}},2:function(module,exports,__webpack_require__){"use strict";var ReactPropTypesSecret=__webpack_require__(3);function emptyFunction(){}module.exports=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret===ReactPropTypesSecret){return}var err=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. "+"Use PropTypes.checkPropTypes() to call them. "+"Read more at http://fb.me/use-check-prop-types");err.name="Invariant Violation";throw err}shim.isRequired=shim;function getShim(){return shim}var ReactPropTypes={array:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim};ReactPropTypes.checkPropTypes=emptyFunction;ReactPropTypes.PropTypes=ReactPropTypes;return ReactPropTypes}},3:function(module,exports,__webpack_require__){"use strict";var ReactPropTypesSecret="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";module.exports=ReactPropTypesSecret},58:function(module,exports,__webpack_require__){"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _propTypes=__webpack_require__(1);var _propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&((typeof call==="undefined"?"undefined":_typeof(call))==="object"||typeof call==="function")?call:self}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==="undefined"?"undefined":_typeof(superClass)))}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var LorisElement=function(_Component){_inherits(LorisElement,_Component);function LorisElement(props){_classCallCheck(this,LorisElement);var _this=_possibleConstructorReturn(this,(LorisElement.__proto__||Object.getPrototypeOf(LorisElement)).call(this,props));_this.state={};return _this}_createClass(LorisElement,[{key:"render",value:function render(){var element=this.props.element;var elementHtml="";switch(element.Type){case"header":elementHtml=_react2.default.createElement("h2",null,element.Description);break;case"label":elementHtml=_react2.default.createElement("p",null,element.Description);break;case"score":elementHtml=_react2.default.createElement(StaticElement,{text:0,label:element.Description});break;case"text":if(element.Options.Type==="small"){elementHtml=_react2.default.createElement(TextboxElement,{label:element.Description})}else{elementHtml=_react2.default.createElement(TextareaElement,{label:element.Description})}break;case"select":if(element.Options.AllowMultiple){elementHtml=_react2.default.createElement(SelectElement,{label:element.Description,options:element.Options.Values,multiple:true})}else{elementHtml=_react2.default.createElement(SelectElement,{label:element.Description,options:element.Options.Values})}break;case"date":elementHtml=_react2.default.createElement(DateElement,{label:element.Description,minYear:element.Options.MinDate,maxYear:element.Options.MaxDate});break;case"numeric":elementHtml=_react2.default.createElement(NumericElement,{label:element.Description,min:element.Options.MinValue,max:element.Options.MaxValue});break;default:break}return _react2.default.createElement("div",null,elementHtml)}}]);return LorisElement}(_react.Component);var QuestionText=function(_Component2){_inherits(QuestionText,_Component2);function QuestionText(props){_classCallCheck(this,QuestionText);var _this2=_possibleConstructorReturn(this,(QuestionText.__proto__||Object.getPrototypeOf(QuestionText)).call(this,props));_this2.state={};_this2.onChange=_this2.onChange.bind(_this2);return _this2}_createClass(QuestionText,[{key:"onChange",value:function onChange(e){this.props.updateState({Description:e.target.value})}},{key:"render",value:function render(){var errorMessage="";var errorClass="form-group";if(this.props.element.error&&this.props.element.error.questionText){errorMessage=_react2.default.createElement("font",{className:"form-error"},this.props.element.error.questionText);errorClass+=" has-error"}return _react2.default.createElement("div",{className:errorClass},_react2.default.createElement("label",{className:"col-sm-2 control-label"},this.props.inputLabel,": "),_react2.default.createElement("div",{className:"col-sm-6"},_react2.default.createElement("input",{className:"form-control col-xs-12",type:"text",id:"questionText",size:"75",value:this.props.element?this.props.element.Description:"",onChange:this.onChange}),errorMessage))}}]);return QuestionText}(_react.Component);QuestionText.propTypes={inputLabel:_propTypes2.default.string};QuestionText.defaultProps={inputLabel:"Question Text"};var BasicOptions=function(_Component3){_inherits(BasicOptions,_Component3);function BasicOptions(props){_classCallCheck(this,BasicOptions);var _this3=_possibleConstructorReturn(this,(BasicOptions.__proto__||Object.getPrototypeOf(BasicOptions)).call(this,props));_this3.state={};_this3.onChange=_this3.onChange.bind(_this3);return _this3}_createClass(BasicOptions,[{key:"onChange",value:function onChange(e){var questionName=e.target.value.trim().split(" ").join("_");this.props.updateState({Name:questionName})}},{key:"render",value:function render(){var errorMessage="";var errorClass="form-group";if(this.props.element.error&&this.props.element.error.questionName){errorMessage=_react2.default.createElement("font",{className:"form-error"},this.props.element.error.questionName);errorClass+=" has-error"}return _react2.default.createElement("div",null,_react2.default.createElement("div",{className:errorClass},_react2.default.createElement("label",{className:"col-sm-2 control-label"},"Question Name: "),_react2.default.createElement("div",{className:"col-sm-6"},_react2.default.createElement("input",{className:"form-control",type:"text",id:"questionName",onChange:this.onChange,value:this.props.element?this.props.element.Name:""}),errorMessage)),_react2.default.createElement(QuestionText,{updateState:this.props.updateState,element:this.props.element}))}}]);return BasicOptions}(_react.Component);var DropdownOptions=function(_Component4){_inherits(DropdownOptions,_Component4);function DropdownOptions(props){_classCallCheck(this,DropdownOptions);var _this4=_possibleConstructorReturn(this,(DropdownOptions.__proto__||Object.getPrototypeOf(DropdownOptions)).call(this,props));_this4.state={option:""};_this4.onChange=_this4.onChange.bind(_this4);_this4.addOption=_this4.addOption.bind(_this4);_this4.resetOptions=_this4.resetOptions.bind(_this4);return _this4}_createClass(DropdownOptions,[{key:"onChange",value:function onChange(e){this.setState({option:e.target.value})}},{key:"addOption",value:function addOption(){var option=this.state.option.trim();if(option===""){var _temp=this.state.error?this.state.error:{};_temp.newSelectOption="Dropdown options cannot be empty!";this.setState({error:_temp});return}if(this.state.error){var _temp2=this.state.error;delete _temp2.newSelectOption;this.setState({error:_temp2})}var temp=Instrument.clone(this.props.element.Options);var key=Instrument.enumize(this.state.option);temp.Values[key]=this.state.option;this.props.updateState({Options:temp});this.state.option=""}},{key:"resetOptions",value:function resetOptions(){var temp=Instrument.clone(this.props.element.Options);temp.Values={};this.props.updateState({Options:temp})}},{key:"render",value:function render(){var multi="";var options=Instrument.clone(this.props.element.Options.Values);var errorMessage="";var dropdownClass="form-group";if(this.props.element.Options.AllowMultiple){multi="multiple"}if(this.state.error&&this.state.error.newSelectOption){errorMessage=_react2.default.createElement("span",{className:"form-error"},this.state.error.newSelectOption);dropdownClass+=" has-error"}return _react2.default.createElement("div",null,_react2.default.createElement(BasicOptions,{updateState:this.props.updateState,element:this.props.element}),_react2.default.createElement("div",{className:dropdownClass},_react2.default.createElement("label",{className:"col-sm-2 control-label"},"Dropdown Option: "),_react2.default.createElement("div",{className:"col-sm-3"},_react2.default.createElement("input",{className:"form-control",type:"text",id:"newSelectOption",value:this.state.option,onChange:this.onChange})),_react2.default.createElement("input",{className:"btn btn-default",type:"button",value:"Add option",onClick:this.addOption.bind(this,false)}),_react2.default.createElement("input",{className:"btn btn-default",type:"button",value:"Reset",onClick:this.resetOptions}),_react2.default.createElement("div",{className:"col-sm-6 col-sm-offset-2"},errorMessage)),_react2.default.createElement("div",{className:"form-group"},_react2.default.createElement("label",{className:"col-sm-2 control-label"},"Preview: "),_react2.default.createElement("div",{className:"col-sm-2"},_react2.default.createElement("select",{multiple:multi,id:"selectOptions",className:"form-control"},Object.keys(options).map(function(option,key){return _react2.default.createElement("option",{key},options[option])})))))}}]);return DropdownOptions}(_react.Component);var DateOptions=function(_Component5){_inherits(DateOptions,_Component5);function DateOptions(props){_classCallCheck(this,DateOptions);var _this5=_possibleConstructorReturn(this,(DateOptions.__proto__||Object.getPrototypeOf(DateOptions)).call(this,props));_this5.state={dateFormat:{Date:"Standard Date",BasicDate:"Basic Date (does not include 'Not Answered' option)",MonthYear:"Month Year (does not include day of the month)"}};_this5.onChange=_this5.onChange.bind(_this5);return _this5}_createClass(DateOptions,[{key:"componentDidMount",value:function componentDidMount(){this.props.element.Options.dateFormat=""}},{key:"onChange",value:function onChange(e){var options=Instrument.clone(this.props.element.Options);if(e.target.id==="datemin"&&e.target.value.length>0){options.MinDate=e.target.value+"-01-01"}else if(e.target.id==="datemax"&&e.target.value.length>0){options.MaxDate=e.target.value+"-12-31"}else if(e.target.id==="dateFormat"){options.dateFormat=e.target.value}this.props.updateState({Options:options})}},{key:"render",value:function render(){var minYear=this.props.element.Options.MinDate.split("-")[0];var maxYear=this.props.element.Options.MaxDate.split("-")[0];var dateOptionsClass="options form-group";var errorMessage="";var dateFormatOptions=this.state.dateFormat;if(this.props.element.error&&this.props.element.error.dateOption){errorMessage=_react2.default.createElement("span",{className:"form-error"},this.props.element.error.dateOption);dateOptionsClass+=" has-error"}return _react2.default.createElement("div",null,_react2.default.createElement(BasicOptions,{updateState:this.props.updateState,element:this.props.element}),_react2.default.createElement("div",{id:"dateoptions",className:dateOptionsClass},_react2.default.createElement("label",{className:"col-sm-2 control-label"},"Start year: "),_react2.default.createElement("div",{className:"col-sm-2"},_react2.default.createElement("input",{className:"form-control",type:"number",id:"datemin",min:"1900",max:"2100",value:minYear,onChange:this.onChange}),errorMessage),_react2.default.createElement("label",{className:"col-sm-2 control-label"},"End year: "),_react2.default.createElement("div",{className:"col-sm-2"},_react2.default.createElement("input",{className:"form-control",type:"number",id:"datemax",min:"1900",max:"2100",onChange:this.onChange,value:maxYear}))),_react2.default.createElement("div",{className:"form-group"},_react2.default.createElement("label",{className:"col-sm-2 control-label"},"Date Format: "),_react2.default.createElement("div",{className:"col-sm-6"},_react2.default.createElement("select",{id:"dateFormat",className:"form-control",onChange:this.onChange},Object.keys(dateFormatOptions).map(function(option,key){return _react2.default.createElement("option",{key,value:option},dateFormatOptions[option])})))))}}]);return DateOptions}(_react.Component);var NumericOptions=function(_Component6){_inherits(NumericOptions,_Component6);function NumericOptions(props){_classCallCheck(this,NumericOptions);var _this6=_possibleConstructorReturn(this,(NumericOptions.__proto__||Object.getPrototypeOf(NumericOptions)).call(this,props));_this6.state={};_this6.onChange=_this6.onChange.bind(_this6);return _this6}_createClass(NumericOptions,[{key:"onChange",value:function onChange(e){var options=Instrument.clone(this.props.element.Options);if(e.target.id==="numericmin"){options.MinValue=parseInt(e.target.value,10)}else if(e.target.id==="numericmax"){options.MaxValue=parseInt(e.target.value,10)}this.props.updateState({Options:options})}},{key:"render",value:function render(){var errorMessage="";var optionsClass="options form-group";if(this.props.element.error&&this.props.element.error.numeric){errorMessage=_react2.default.createElement("span",{className:"form-error"},this.props.element.error.numeric);optionsClass+="options form-group has-error"}return _react2.default.createElement("div",null,_react2.default.createElement(BasicOptions,{updateState:this.props.updateState,element:this.props.element}),_react2.default.createElement("div",{id:"numericoptions",className:optionsClass},_react2.default.createElement("label",{className:"col-sm-2 control-label"},"Min: "),_react2.default.createElement("div",{className:"col-sm-2"},_react2.default.createElement("input",{className:"form-control",type:"number",id:"numericmin",onChange:this.onChange,value:this.props.element.Options.MinValue})),_react2.default.createElement("label",{className:"col-sm-2 control-label"},"Max: "),_react2.default.createElement("div",{className:"col-sm-2"},_react2.default.createElement("input",{className:"form-control",type:"number",id:"numericmax",onChange:this.onChange,value:this.props.element.Options.MaxValue})),_react2.default.createElement("div",{className:"col-sm-offset-2 col-sm-10"},errorMessage)))}}]);return NumericOptions}(_react.Component);var ListElements=function(_Component7){_inherits(ListElements,_Component7);function ListElements(props){_classCallCheck(this,ListElements);var _this7=_possibleConstructorReturn(this,(ListElements.__proto__||Object.getPrototypeOf(ListElements)).call(this,props));_this7.state={};_this7.selectType=_this7.selectType.bind(_this7);return _this7}_createClass(ListElements,[{key:"selectType",value:function selectType(newId,newValue){var newState={selected:{id:newId,value:newValue}};var multi=false;var textSize="small";switch(newId){case"textarea":textSize="large";case"textbox":newState.Options={Type:textSize};break;case"multiselect":multi=true;case"dropdown":newState.Options={Values:{},AllowMultiple:multi};break;case"date":newState.Options={MinDate:"",MaxDate:""};break;case"numeric":newState.Options={MinValue:0,MaxValue:0};break;default:break}this.props.updateState(newState)}},{key:"render",value:function render(){return _react2.default.createElement("div",{className:"form-group"},_react2.default.createElement("label",{htmlFor:"selected-input",className:"col-sm-2 control-label"},"Question Type:"),_react2.default.createElement("div",{className:"col-sm-4"},_react2.default.createElement("div",{className:"btn-group"},_react2.default.createElement("button",{id:"selected-input",type:"button",className:"btn btn-default dropdown-toggle","data-toggle":"dropdown"},_react2.default.createElement("span",{id:"search_concept"},this.props.value," "),_react2.default.createElement("span",{className:"caret"})),_react2.default.createElement("ul",{className:"dropdown-menu",role:"menu"},_react2.default.createElement("li",null,_react2.default.createElement("div",{className:"col-sm-12"},_react2.default.createElement("h5",{className:""},"Information"))),_react2.default.createElement("li",{onClick:this.selectType.bind(this,"header","Header")},_react2.default.createElement("a",{id:"header",className:"option",title:"Centered, header information"},"Header")),_react2.default.createElement("li",{onClick:this.selectType.bind(this,"label","Label")},_react2.default.createElement("a",{id:"label",className:"option",title:"Unemphasized display text"},"Label")),_react2.default.createElement("li",{onClick:this.selectType.bind(this,"score","Scored Field")},_react2.default.createElement("a",{id:"scored",className:"option",title:"Column which stores calculated data"},"Scored Field")),_react2.default.createElement("li",{className:"divider"}),_react2.default.createElement("li",null,_react2.default.createElement("div",{className:"col-sm-12"},_react2.default.createElement("h5",{className:""},"Data entry"))),_react2.default.createElement("li",{onClick:this.selectType.bind(this,"textbox","Textbox")},_react2.default.createElement("a",{id:"textbox",className:"option",title:"Text box for user data entry"},"Textbox")),_react2.default.createElement("li",{onClick:this.selectType.bind(this,"textarea","Textarea")},_react2.default.createElement("a",{id:"textarea",className:"option",title:"Larger text area for data entry"},"Textarea")),_react2.default.createElement("li",{onClick:this.selectType.bind(this,"dropdown","Dropdown")},_react2.default.createElement("a",{id:"dropdown",className:"option",title:"Dropdown menu for users to select data from"},"Dropdown")),_react2.default.createElement("li",{onClick:this.selectType.bind(this,"multiselect","Multiselect")},_react2.default.createElement("a",{id:"multiselect",className:"option",title:"Data entry where multiple options may be selected"},"Multiselect")),_react2.default.createElement("li",{onClick:this.selectType.bind(this,"date","Date")},_react2.default.createElement("a",{id:"date",className:"option",title:"User data entry of a date"},"Date")),_react2.default.createElement("li",{onClick:this.selectType.bind(this,"numeric","Numeric")},_react2.default.createElement("a",{id:"numeric",className:"option",title:"User data entry of a number"},"Numeric")),_react2.default.createElement("li",{className:"divider"}),_react2.default.createElement("li",null,_react2.default.createElement("div",{className:"col-sm-12"},_react2.default.createElement("h5",{className:""},"Formatting"))),_react2.default.createElement("li",{onClick:this.selectType.bind(this,"line","Blank Line")},_react2.default.createElement("a",{id:"line",className:"option",title:"Empty line"},"Blank Line")),_react2.default.createElement("li",{onClick:this.selectType.bind(this,"page-break","Page Break")},_react2.default.createElement("a",{id:"page-break",className:"option",title:"Start a new page"},"Page Break"))))))}}]);return ListElements}(_react.Component);var AddElement=function(_Component8){_inherits(AddElement,_Component8);function AddElement(props){_classCallCheck(this,AddElement);var _this8=_possibleConstructorReturn(this,(AddElement.__proto__||Object.getPrototypeOf(AddElement)).call(this,props));if(_this8.props!==undefined&&_this8.props.element){_this8.state={Options:Instrument.clone(_this8.props.element.Options),Description:Instrument.clone(_this8.props.element.Description),Name:Instrument.clone(_this8.props.element.Name),selected:Instrument.clone(_this8.props.element.selected)}}else{_this8.state={Options:{},Description:"",Name:"",selected:{id:"",value:"Select One"}}}_this8.updateState=_this8.updateState.bind(_this8);_this8.addQuestion=_this8.addQuestion.bind(_this8);_this8.addOption=_this8.addOption.bind(_this8);_this8.resetOptions=_this8.resetOptions.bind(_this8);return _this8}_createClass(AddElement,[{key:"updateState",value:function updateState(newState){this.setState(newState)}},{key:"addQuestion",value:function addQuestion(){var selected=this.state.selected.id;var questionText=this.state.Description;var questionName=this.state.Name;var hasError=false;if(questionName&&questionName.indexOf("status")>-1){alert("Question name can't contain 'status' as part of the name!");return}if(!selected){alert("No element type selected");return}if(selected==="date"){var min=this.state.Options.MinDate;var max=this.state.Options.MaxDate;var minYear=parseInt(min,10);var maxYear=parseInt(max,10);var minDate=Date.parse(min);var maxDate=Date.parse(max);if(isNaN(minDate)&&min!==""||isNaN(maxDate)&&max!==""){var temp=this.state.error?this.state.error:{};temp.dateOption="Invalid date provided";this.setState({error:temp});hasError=true}if(minDate>maxDate&&min!==""&&max!==""){var _temp3=this.state.error?this.state.error:{};_temp3.dateOption="End year append before start year";this.setState({error:_temp3});hasError=true}if(minYear>9999||minYear<1e3||maxYear>9999||maxYear<1e3){var _temp4=this.state.error?this.state.error:{};_temp4.dateOption="The year must have exactly 4 digits. Please choose an integer number between 1000 and 9999.";this.setState({error:_temp4});hasError=true}if(!hasError&&this.state.error){var _temp5=this.state.error;delete _temp5.dateOption;this.setState({error:_temp5})}}if(selected==="numeric"){var _min=this.state.Options.MinValue;var _max=this.state.Options.MaxValue;if(_min>=_max){var _temp6=this.state.error?this.state.error:{};_temp6.numeric="Max value must be larger than min value";this.setState({error:_temp6});hasError=true}if(!hasError&&this.state.error){var _temp7=this.state.error;delete _temp7.numeric;this.setState({error:_temp7})}}if(questionText===""&&selected!=="line"){var _temp8=this.state.error?this.state.error:{};if(selected==="page-break"){_temp8.questionText="Must use question text as page header"}else{_temp8.questionText="No question text specified"}this.setState({error:_temp8});hasError=true}if(!hasError&&this.state.error){var _temp9=this.state.error;delete _temp9.questionText;this.setState({error:_temp9})}if(questionName===""&&selected!=="header"&&selected!=="label"&&selected!=="line"&&selected!=="page-break"){var _temp10=this.state.error?this.state.error:{};_temp10.questionName="Must specifiy name for database to save value into";this.setState({error:_temp10});hasError=true}else if(this.state.error){var _temp11=this.state.error;delete _temp11.questionName;this.setState({error:_temp11})}if(hasError){return}switch(selected){case"header":case"label":questionName="";break;case"textbox":case"textarea":selected="text";break;case"dropdown":case"multiselect":selected="select";break;case"page-break":this.props.addPage(questionText);return;default:break}delete this.state.error;var element={Type:selected,Description:questionText,Name:questionName,Options:this.state.Options,selected:this.state.selected};if(typeof this.props.index==="undefined"){hasError=!this.props.updateQuestions(element)}else{hasError=!this.props.updateQuestions(element,this.props.index)}if(hasError){this.setState(function(state){var temp=state.error?state.error:{};temp.questionName="Duplicate question name";return{error:temp}})}}},{key:"addOption",value:function addOption(multi){this.setState(function(state){var temp=state.options;var option=multi?$("#newmultiSelectOption").val():$("#newSelectOption").val();temp.push(option);return{options:temp}})}},{key:"resetOptions",value:function resetOptions(){this.setState({options:[]})}},{key:"render",value:function render(){var questionInput=void 0;var header="";var buttons=void 0;switch(this.state.selected.id){case"header":case"label":questionInput=_react2.default.createElement(QuestionText,{updateState:this.updateState,element:this.state});break;case"page-break":questionInput=_react2.default.createElement(QuestionText,{updateState:this.updateState,element:this.state,inputLabel:"Page Name"});break;case"score":case"textbox":case"textarea":questionInput=_react2.default.createElement(BasicOptions,{updateState:this.updateState,element:this.state});break;case"multiselect":case"dropdown":questionInput=_react2.default.createElement(DropdownOptions,{updateState:this.updateState,element:this.state});break;case"date":questionInput=_react2.default.createElement(DateOptions,{updateState:this.updateState,element:this.state});break;case"numeric":questionInput=_react2.default.createElement(NumericOptions,{updateState:this.updateState,element:this.state});break;default:break}if(this.props.element){buttons=_react2.default.createElement("input",{className:"btn btn-default",type:"button",value:"Edit Row",onClick:this.addQuestion})}else{header=_react2.default.createElement("h2",null,"Add Question");buttons=_react2.default.createElement("input",{className:"btn btn-default",type:"button",value:"Add Row",onClick:this.addQuestion})}return _react2.default.createElement("div",{className:"col-xs-12"},header,_react2.default.createElement("div",{className:"form-horizontal",role:"form"},_react2.default.createElement(ListElements,{updateState:this.updateState,value:this.state.selected.value}),questionInput,_react2.default.createElement("div",{className:"form-group"},_react2.default.createElement("div",{className:"col-sm-offset-2 col-sm-10"},buttons))))}}]);return AddElement}(_react.Component);window.LorisElement=LorisElement;window.QuestionText=QuestionText;window.BasicOptions=BasicOptions;window.DropdownOptions=DropdownOptions;window.DateOptions=DateOptions;window.NumericOptions=NumericOptions;window.ListElements=ListElements;window.AddElement=AddElement;exports.default={LorisElement,QuestionText,BasicOptions,DropdownOptions,DateOptions,NumericOptions,ListElements,AddElement}}});
//# sourceMappingURL=react.questions.js.map