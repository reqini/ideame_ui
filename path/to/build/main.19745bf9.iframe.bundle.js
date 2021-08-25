(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{493:function(module,exports,__webpack_require__){__webpack_require__(494),__webpack_require__(651),__webpack_require__(652),__webpack_require__(860),__webpack_require__(861),__webpack_require__(868),__webpack_require__(869),__webpack_require__(867),__webpack_require__(864),__webpack_require__(870),__webpack_require__(863),__webpack_require__(865),__webpack_require__(871),module.exports=__webpack_require__(849)},561:function(module,exports){},652:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(351)},849:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(351).configure)([__webpack_require__(850),__webpack_require__(851)],module,!1)}).call(this,__webpack_require__(199)(module))},850:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=850},851:function(module,exports,__webpack_require__){var map={"./stories/Navs/PriceNav.stories.js":866};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=851},852:function(module,exports,__webpack_require__){},855:function(module,exports,__webpack_require__){},866:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"PriceNavHotels",(function(){return PriceNavHotels}));var objectSpread2=__webpack_require__(305),react=__webpack_require__(0),react_default=__webpack_require__.n(react),defineProperty=__webpack_require__(168),Room=__webpack_require__(470),Room_default=__webpack_require__.n(Room),makeStyles=__webpack_require__(891),useStyles=(__webpack_require__(852),Object(makeStyles.a)((function(theme){return{}}))),Typography_Typography=function Typography(_ref){var children=_ref.children,className=_ref.className,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"h1":_ref$variant,_ref$fontSize=_ref.fontSize,fontSize=void 0===_ref$fontSize?18:_ref$fontSize,_ref$fontWeight=_ref.fontWeight,fontWeight=void 0===_ref$fontWeight?300:_ref$fontWeight,_ref$lineHeight=_ref.lineHeight,lineHeight=void 0===_ref$lineHeight?null:_ref$lineHeight,_ref$textDecoration=_ref.textDecoration,textDecoration=void 0===_ref$textDecoration?"none":_ref$textDecoration,color=_ref.color,_ref$fontStyle=_ref.fontStyle,fontStyle=void 0===_ref$fontStyle?"normal":_ref$fontStyle,_ref$margin=_ref.margin,margin=void 0===_ref$margin?0:_ref$margin,textAlign=_ref.textAlign;useStyles({fontSize:fontSize,fontWeight:fontWeight,color:color,margin:margin,textAlign:textAlign,fontStyle:fontStyle,lineHeight:lineHeight,textDecoration:textDecoration});return react_default.a.createElement(variant,{className:"typography ".concat(className),style:{textDecoration:textDecoration,fontSize:fontSize,fontWeight:fontWeight,color:color||"#2F3143",margin:margin,textAlign:textAlign||"left",fontStyle:fontStyle,lineHeight:lineHeight}},children)};Typography_Typography.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{variant:{defaultValue:{value:"'h1'",computed:!1},required:!1},fontSize:{defaultValue:{value:"18",computed:!1},required:!1},fontWeight:{defaultValue:{value:"300",computed:!1},required:!1},lineHeight:{defaultValue:{value:"null",computed:!1},required:!1},textDecoration:{defaultValue:{value:"'none'",computed:!1},required:!1},fontStyle:{defaultValue:{value:"'normal'",computed:!1},required:!1},margin:{defaultValue:{value:"0",computed:!1},required:!1}}};var stories_Typography_Typography=react_default.a.memo(Typography_Typography);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Typography/Typography.js"]={name:"Typography",docgenInfo:Typography_Typography.__docgenInfo,path:"src/stories/Typography/Typography.js"});var objectDestructuringEmpty=__webpack_require__(467),classnames=__webpack_require__(468),classnames_default=__webpack_require__.n(classnames),react_jss_esm=__webpack_require__(471),jsx_runtime=__webpack_require__(46),Button_useStyles=Object(react_jss_esm.a)((function(_ref){return Object(objectDestructuringEmpty.a)(_ref),{button:function button(_ref2){var background=_ref2.background,color=_ref2.color,size=_ref2.size;return{fontWeight:"bold",transition:"background-color 0.25s linear, color 0.25s linear",background:background||"#DB0080",color:color||"white",cursor:"pointer",boxSizing:"border-box",borderRadius:50,border:"none",padding:"0 1rem 0 1rem",minWidth:48,width:_ref2.width||"100%",height:size,"&:active":{border:"none"}}},shadow:{"&:hover":{"box-shadow":"0 3px 3px 0 rgb(0 0 0 / 14%), 0 1px 7px 0 rgb(0 0 0 / 12%), 0 3px 1px -1px rgb(0 0 0 / 20%)"}},circle:{borderRadius:"50%"},fullWidth:{width:"100%"}}})),Button_Button=function Button(_ref3){var _ref3$onClick=_ref3.onClick,onClick=void 0===_ref3$onClick?null:_ref3$onClick,children=_ref3.children,_ref3$disabled=_ref3.disabled,disabled=void 0!==_ref3$disabled&&_ref3$disabled,_ref3$circle=_ref3.circle,circle=void 0!==_ref3$circle&&_ref3$circle,shadow=_ref3.shadow,_ref3$fullWidth=_ref3.fullWidth,fullWidth=void 0!==_ref3$fullWidth&&_ref3$fullWidth,background=_ref3.background,color=_ref3.color,size=_ref3.size,width=_ref3.width,classes=Button_useStyles({background:background,color:color,size:size,width:width});return Object(jsx_runtime.jsx)("button",{onClick:disabled?null:onClick,className:classnames_default()(classes.button,shadow&&classes.shadow,circle&&classes.circle,fullWidth&&classes.fullWidth),children:children})};Button_Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{onClick:{defaultValue:{value:"null",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},circle:{defaultValue:{value:"false",computed:!1},required:!1},fullWidth:{defaultValue:{value:"false",computed:!1},required:!1}}};var stories_Button=Button_Button;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Button.js"]={name:"Button",docgenInfo:Button_Button.__docgenInfo,path:"src/stories/Button.js"});__webpack_require__(855);var PriceNav_PriceNav=function PriceNav(_ref){var _jsx2,promoType=_ref.promoType,name=_ref.name,price=_ref.price,night=_ref.night,people=_ref.people,direction=_ref.direction,scroll=_ref.scroll,colorPromoType=_ref.colorPromoType;return Object(jsx_runtime.jsx)("div",{className:"nav ".concat(scroll&&"scroll"),children:Object(jsx_runtime.jsxs)("div",{className:"wrapper",children:[Object(jsx_runtime.jsxs)("div",{className:"info-hotel left",children:[Object(jsx_runtime.jsx)(stories_Typography_Typography,{fontSize:12,color:colorPromoType,fontWeight:"100",variant:"span",margin:"2px 0",children:promoType}),Object(jsx_runtime.jsx)(stories_Typography_Typography,(_jsx2={variant:"h3",fontSize:24,fontWeight:"500"},Object(defineProperty.a)(_jsx2,"variant","h2"),Object(defineProperty.a)(_jsx2,"children",name),_jsx2)),Object(jsx_runtime.jsxs)(stories_Typography_Typography,{variant:"span",fontSize:15,margin:"5px 0",className:"flex-center",children:[Object(jsx_runtime.jsx)(Room_default.a,{fontSize:"small"}),direction]}),Object(jsx_runtime.jsx)(stories_Button,{size:30,width:200,background:"#4A90E2",children:"All Inclusive"})]}),Object(jsx_runtime.jsxs)("div",{className:"info-hotel block-price-color center",children:[Object(jsx_runtime.jsx)(stories_Typography_Typography,{fontSize:16,fontWeight:"400",variant:"p",children:"Total final"}),Object(jsx_runtime.jsxs)(stories_Typography_Typography,{variant:"h3",fontSize:30,fontWeight:"700",children:["$",price]}),Object(jsx_runtime.jsxs)(stories_Typography_Typography,{fontSize:12,fontWeight:"100",variant:"span",margin:"5px 0",children:[night," noche, ",people," personas"]}),Object(jsx_runtime.jsx)(stories_Button,{size:48,width:"100%",children:"CONSULTAR"})]})]})})};PriceNav_PriceNav.defaultProps={scroll:!1,promoType:"Descuento exclusivo",colorPromoType:"",name:"Cristal Hotel de Ejemplo",direction:"Av. Bustillo Km. 2.5",price:"1400",night:3,people:2},PriceNav_PriceNav.__docgenInfo={description:"",methods:[],displayName:"PriceNav",props:{scroll:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},promoType:{defaultValue:{value:"'Descuento exclusivo'",computed:!1},type:{name:"shape",value:{}},required:!1,description:""},colorPromoType:{defaultValue:{value:"''",computed:!1},type:{name:"custom",raw:"PropTypes"},required:!1,description:""},name:{defaultValue:{value:"'Cristal Hotel de Ejemplo'",computed:!1},type:{name:"custom",raw:"PropTypes"},required:!1,description:""},direction:{defaultValue:{value:"'Av. Bustillo Km. 2.5'",computed:!1},type:{name:"custom",raw:"PropTypes"},required:!1,description:""},price:{defaultValue:{value:"'1400'",computed:!1},type:{name:"number"},required:!1,description:""},night:{defaultValue:{value:"3",computed:!1},type:{name:"number"},required:!1,description:""},people:{defaultValue:{value:"2",computed:!1},type:{name:"number"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/Navs/PriceNav.js"]={name:"PriceNav",docgenInfo:PriceNav_PriceNav.__docgenInfo,path:"src/stories/Navs/PriceNav.js"});__webpack_exports__.default={title:"Navs/PriceNav",component:PriceNav_PriceNav};var PriceNavHotels=function Template(args){return Object(jsx_runtime.jsx)(PriceNav_PriceNav,Object(objectSpread2.a)({},args))}.bind({});PriceNavHotels.argTypes={promoType:{name:"tipo de promo",description:"Descuentos",type:{name:"string",required:!0},control:{type:"text"},defaultValue:"Descuento exclusivo para parejas",table:{type:{summary:"string"},defaultValue:{summary:"Button"}}},colorPromoType:{name:"color del texto en la promo",description:"color de Descuentos",type:{name:"string",required:!0},control:{type:"text"},defaultValue:"#4A90E2",table:{type:{summary:"string"},defaultValue:{summary:"Button"}}},direction:{name:"Direccion",description:"Direccion",type:{name:"string",required:!0},control:{type:"text"},defaultValue:"Av Seimpre viva 1234, Springfield",table:{type:{summary:"string"},defaultValue:{summary:"Button"}}},name:{name:"Nombre del Hotel",description:"Texto del titulo",type:{name:"string",required:!0},control:{type:"text"},defaultValue:"Nombre de ejemplo del Hotel",table:{type:{summary:"string"},defaultValue:{summary:"Button"}}},price:{name:"Precio",description:"1400",type:{name:"string",required:!0},control:{type:"number"},defaultValue:"1450",table:{type:{summary:"string"},defaultValue:{summary:"Button"}}},night:{name:"Noches",description:"Numero de Noches",type:{name:"string",required:!1},control:{type:"number"},defaultValue:"4",table:{type:{summary:"string"},defaultValue:{summary:"Button"}}},people:{name:"Personas",description:"Numero de Personas",type:{name:"string",required:!1},control:{type:"number"},defaultValue:"3",table:{type:{summary:"string"},defaultValue:{summary:"Button"}}},scroll:{name:"Scroll Action",description:"1400",type:{name:"string",required:!0},control:{type:"boolean"},defaultValue:!1,table:{type:{summary:"boolean"},defaultValue:{summary:"Button"}}}},PriceNavHotels.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <PriceNav {...args} />"}},PriceNavHotels.parameters)},871:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var client_api=__webpack_require__(894),types=__webpack_require__(889),esm=__webpack_require__(5),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(types.setGlobalRender)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))}},[[493,2,3]]]);