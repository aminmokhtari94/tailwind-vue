(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ali"],{"0234":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),i=Object(r["j"])("div",{class:"flex justify-center"},null,-1),a={class:"flex items-center flex-col space-y-4"},c=Object(r["j"])("div",null,"#Ali",-1),l=Object(r["i"])(" some text "),o=Object(r["i"])(" test "),u=Object(r["j"])("a",{class:"flex w-full justify-between items-center rounded px-2 py-1 my-1 hover:bg-indigo-600 hover:text-white",href:"#"},"Profile",-1),s=Object(r["j"])("a",{class:"flex w-full justify-between items-center rounded px-2 py-1 my-1 hover:bg-indigo-600 hover:text-white",href:"#"},"Settings",-1),d=Object(r["j"])("a",{class:"flex w-full justify-between items-center rounded px-2 py-1 my-1 hover:bg-indigo-600 hover:text-white",href:"#"},"Help",-1),f=Object(r["j"])("hr",null,null,-1),b=Object(r["j"])("a",{class:"flex w-full justify-between items-center rounded px-2 py-1 my-1 hover:bg-red-600 hover:text-white",href:"#"},"Logout",-1),p=Object(r["i"])(" هشدار هشدار هشدار هشدار هشدار هشدار هشدار هشدار هشدار هشدار هشدار هشدار ");function v(e,t,n,v,g,h){var j=Object(r["C"])("TextInput"),x=Object(r["C"])("t-button"),O=Object(r["C"])("t-menu"),m=Object(r["C"])("t-alert"),y=Object(r["C"])("t-breadcrumb");return Object(r["u"])(),Object(r["f"])(r["a"],null,[i,Object(r["j"])("div",a,[c,Object(r["i"])(" "+Object(r["F"])(e.text)+" ",1),Object(r["j"])(j,{modelValue:e.text,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.text=t}),modelModifiers:{"format:&:4":!0},variant:"warning",outline:"",align:"right",leftIcon:"add_task",rightIcon:"add_task",disabled:"",rounded:""},null,8,["modelValue"]),Object(r["j"])(x,{variant:"primary",icon:"accessible"},{default:Object(r["L"])((function(){return[l]})),_:1}),Object(r["j"])(O,{placement:"right",full:""},{button:Object(r["L"])((function(){return[Object(r["j"])(x,{class:"z-10",variant:"primary",full:"",outline:"",icon:"accessible"},{default:Object(r["L"])((function(){return[o]})),_:1})]})),content:Object(r["L"])((function(){return[u,s,d,f,b]})),_:1}),Object(r["j"])(m,{icon:"add_task",variant:"primary"},{default:Object(r["L"])((function(){return[p]})),_:1}),Object(r["j"])(y,{modelValue:e.items,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.items=t})},null,8,["modelValue"])])],64)}var g=n("0839"),h={class:"relative"};function j(e,t,n,i,a,c){return Object(r["u"])(),Object(r["f"])("div",h,[Object(r["j"])("div",{class:" relative flex items-center focus:outline-none min-w-full ",onClick:t[1]||(t[1]=function(t){return!e.disabled&&(e.open=!e.open)})},[Object(r["B"])(e.$slots,"button")]),e.open?(Object(r["u"])(),Object(r["f"])("button",{key:0,class:"fixed inset-0 h-full w-full cursor-default focus:outline-none",onClick:t[2]||(t[2]=function(t){return e.open=!1}),tabindex:"-1"})):Object(r["g"])("",!0),Object(r["j"])(r["c"],{"enter-active-class":"transition-all duration-200 ease-out","leave-active-class":"transition-all duration-750 ease-in","enter-class":"opacity-0 scale-75","enter-to-class":"opacity-100 scale-100","leave-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-75"},{default:Object(r["L"])((function(){return[e.open&&!e.disabled?(Object(r["u"])(),Object(r["f"])("div",{key:0,class:["absolute shadow-lg border rounded py-1 px-2 text-sm bg-white z-10 rounded-t-none",{"right-0":"right"===e.placement,"left-0":"right"!==e.placement,"w-full":e.full}]},[Object(r["B"])(e.$slots,"content")],2)):Object(r["g"])("",!0)]})),_:1})])}n("c975");var x=Object(r["k"])({data:function(){return{open:!1}},props:{placement:{type:String,default:"right",validator:function(e){return-1!==["right","left"].indexOf(e)}},disabled:{type:Boolean,default:!1,required:!1},full:{required:!1,default:!1,type:Boolean}},methods:{onEscape:function(e){"Esc"!==e.key&&"Escape"!==e.key||(this.open=!1)}},mounted:function(){document.addEventListener("keydown",this.onEscape)},beforeUnmount:function(){document.removeEventListener("keydown",this.onEscape)}});x.render=j;var O=x,m={class:"flex items-start"},y={key:0,class:""},w={class:"text-sm"},E={class:"flex-1 flex justify-end items-center"},k=Object(r["j"])("path",{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"},null,-1);function S(e,t,n,i,a,c){var l=Object(r["C"])("t-icon");return e.show?(Object(r["u"])(),Object(r["f"])("div",{key:0,class:["mb-4 border-r-4 rounded-sm px-4 py-3",e.wrapperColor],role:"alert"},[Object(r["j"])("div",m,[e.icon?(Object(r["u"])(),Object(r["f"])("div",y,[Object(r["j"])(l,{name:e.icon},null,8,["name"])])):Object(r["g"])("",!0),Object(r["j"])("div",null,[Object(r["j"])("p",w,[Object(r["B"])(e.$slots,"default")])]),Object(r["j"])("div",E,[Object(r["j"])("div",{class:"cursor-pointer",onClick:t[1]||(t[1]=function(){return e.closeAlert&&e.closeAlert.apply(e,arguments)})},[(Object(r["u"])(),Object(r["f"])("svg",{class:["fill-current h-4 w-4 mr-4",e.svgColor+" hover:"+e.wrapperColor],xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[k],2))])])])],2)):Object(r["g"])("",!0)}n("99af");var I=n("f354"),R=n("04ca"),C=Object(r["k"])({components:{TIcon:I["a"]},data:function(){return{show:!0}},computed:{shade:function(){return"bg-".concat(this.variant,"-100 text-").concat(this.variant,"-900 border-").concat(this.variant,"-50")},wrapperColor:function(){return this.shade},svgColor:function(){return"text-".concat(this.variant,"-500")}},methods:{closeAlert:function(){this.show=!1,this.$emit("closeClick",!0)}},props:{icon:{required:!1,default:"",type:String},variant:{type:String,default:"primary",validator:function(e){return!!R["e"][e]}}}});C.render=S;var T=C,P={class:"flex text-gray-700"},_={key:0,class:"px-2"},$={href:"#",class:"hover:underline"},A={key:1,class:"px-2 text-indigo-600"},L={key:2,class:"text-gray-500 select-none"};function B(e,t,n,i,a,c){return Object(r["u"])(),Object(r["f"])("ol",P,[(Object(r["u"])(!0),Object(r["f"])(r["a"],null,Object(r["A"])(e.returnValues,(function(t,n){return Object(r["u"])(),Object(r["f"])(r["a"],{key:t},[t.active?(Object(r["u"])(),Object(r["f"])("li",A,Object(r["F"])(t.text),1)):(Object(r["u"])(),Object(r["f"])("li",_,[Object(r["j"])("a",$,Object(r["F"])(t.text),1)])),n+1<e.returnValues.length?(Object(r["u"])(),Object(r["f"])("li",L," / ")):Object(r["g"])("",!0)],64)})),128))])}var U=Object(r["k"])({props:{modelValue:{required:!0,type:Object,default:function(){return[]}}},computed:{returnValues:function(){var e;return(null===(e=this.modelValue)||void 0===e?void 0:e.length)>0?this.modelValue:[]}}});U.render=B;var V=U,q=n("ade3"),M={key:0,for:"price",class:"block text-sm font-medium text-gray-700 text-right"},N={class:"mt-1 relative rounded-md shadow-sm"},F={key:0,class:"absolute inset-y-0 left-2 flex items-center"},z={key:1,class:"absolute inset-y-0 right-2 flex items-center pointer-events-none"};function D(e,t,n,i,a,c){var l;return Object(r["u"])(),Object(r["f"])(r["a"],null,[e.label?(Object(r["u"])(),Object(r["f"])("label",M,Object(r["F"])(e.label),1)):Object(r["g"])("",!0),Object(r["j"])("div",N,[e.leftPadding?(Object(r["u"])(),Object(r["f"])("div",F,[e.leftIcon?(Object(r["u"])(),Object(r["f"])("span",{key:0,class:["material-icons z-10",{"text-gray-200":e.disabled}]},Object(r["F"])(e.leftIcon),3)):Object(r["B"])(e.$slots,"rightSlot",{key:1})])):Object(r["g"])("",!0),Object(r["j"])("input",Object(r["o"])({type:"text",disabled:e.disabled},e.$attrs,{value:e.modelValue,onInput:t[1]||(t[1]=function(t){return e.emitHandler(t.target.value)}),class:["block min-h-48 w-full sm:text-sm outline-none h-10",(l={" pr-8":e.rightPadding," pr-3":!e.rightPadding," pl-8":e.leftPadding," pl0-3":!e.leftPadding,"rounded-full":e.rounded,"rounded-sm":!e.rounded},Object(q["a"])(l,e.variantClasses,!0),Object(q["a"])(l,"text-right",e.isRight),Object(q["a"])(l,"text-center",e.isCenter),Object(q["a"])(l,"text-left",e.isLeft),l)]}),null,16,["disabled","value"]),e.rightPadding?(Object(r["u"])(),Object(r["f"])("div",z,[e.rightIcon?(Object(r["u"])(),Object(r["f"])("span",{key:0,class:["material-icons z-10",{"text-gray-200":e.disabled}]},Object(r["F"])(e.rightIcon),3)):Object(r["B"])(e.$slots,"rightSlot",{key:1})])):Object(r["g"])("",!0)])],64)}function H(e){if(Array.isArray(e))return e}n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");function K(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,a=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done);r=!0)if(n.push(c.value),t&&n.length===t)break}catch(o){i=!0,a=o}finally{try{r||null==l["return"]||l["return"]()}finally{if(i)throw a}}return n}}var Y=n("06c5");function G(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function J(e,t){return H(e)||K(e,t)||Object(Y["a"])(e,t)||G()}n("c740"),n("caad"),n("a434"),n("b64b"),n("4d63"),n("ac1f"),n("25f0"),n("2532"),n("5319"),n("1276");var X=n("2909"),Q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3;if(void 0===e)return"";var r=e.toString();if(r=r.replace(/[^\d]/g,""),r.length>n){var i="\\B(?=(?:\\d{"+n+"})+(?!\\d))";r=r.replace(new RegExp(i,"g"),t)}return r},W=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.separator,r=void 0===n?",":n,i=t.digitLength,a=void 0===i?3:i;return Q(e,r,a)};function Z(e,t){var n=Object.keys(t),r=function(e){return n.findIndex((function(t){return t.includes(e)}))},i=function(e){if(e.split(":").length>1){var t=e.split(":");return t.splice(0,1),2===t.length?t:[].concat(Object(X["a"])(t),[3])}return[",",3]},a=r(e),c=i(n[a]);return[-1!==a,c]}var ee=Object(r["k"])({name:"TTextInput",props:{variant:{type:String,default:"primary",validator:function(e){return!!R["e"][e]}},inputType:{type:String,default:"primary",validator:function(e){return!!R["d"][e]}},label:{required:!1,type:String,default:""},leftIcon:{required:!1,type:String,default:""},rightIcon:{required:!1,type:String,default:""},rounded:{type:Boolean,required:!1,default:!1},outline:{type:Boolean,required:!1,default:!1},align:{type:String,required:!1,default:"right",validator:function(e){return!!R["c"][e]}},modelValue:{type:String,required:!0},modelModifiers:{default:function(){return{}}},disabled:{type:Boolean,required:!1,default:!1}},computed:{isRight:function(){return this.align===R["c"].right},isLeft:function(){return this.align===R["c"].left},isCenter:function(){return this.align===R["c"].center}},setup:function(e,t){var n=t.slots,i=Object(r["d"])((function(){return!(!n.rightSlot&&!e.rightIcon)})),a=Object(r["d"])((function(){return!(!n.leftSlot&&!e.leftIcon)})),c=Object(r["d"])((function(){return(e.outline?"transition hover:opacity-80 disabled:opacity-50 ":"hover:opacity-80 transition text-white disabled:opacity-50 ")+(e.outline?"bg-white text-dark hover:bg-".concat(e.variant,"-50 border-4 border-").concat(e.variant," focus:border-").concat(e.variant,"-500 focus:border-").concat(e.variant,"-500"):"bg-".concat(e.variant))}));return{rightPadding:i,leftPadding:a,variantClasses:c}},watch:{modelValue:{immediate:!0,handler:function(e){this.emitHandler(e,!0)}}},methods:{emitHandler:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Z(R["a"].format,this.modelModifiers),r=J(n,2),i=r[0],a=r[1];i&&(e=W(e,{separator:a[0],digitLength:a[1]}),t&&this.$emit("update:modelValue",e)),!t&&this.$emit("update:modelValue",e)}}});ee.render=D;var te=ee,ne=Object(r["k"])({name:"App",components:{TButton:g["a"],TMenu:O,TAlert:T,TBreadcrumb:V,TextInput:te},data:function(){return{items:[{text:"تست۱",url:"مقدار ۱"},{text:"تست۲",url:"مقدار ۲"},{text:"تست۳",url:"مقدار ۳",active:!0}],text:12223}},setup:function(){var e=Object(r["z"])(3),t=Object(r["z"])(!1),n=function(){return console.log("modal has been closed"),!0};return{numberPickerCount:e,modal:t,modalCloseCallback:n}},mounted:function(){var e=this;setTimeout((function(){e.text=222222222222}),4e3)}});ne.render=v;t["default"]=ne},1276:function(e,t,n){"use strict";var r=n("d784"),i=n("44e7"),a=n("825a"),c=n("1d80"),l=n("4840"),o=n("8aa5"),u=n("50c4"),s=n("14c3"),d=n("9263"),f=n("d039"),b=[].push,p=Math.min,v=4294967295,g=!f((function(){return!RegExp(v,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(c(this)),a=void 0===n?v:n>>>0;if(0===a)return[];if(void 0===e)return[r];if(!i(e))return t.call(r,e,a);var l,o,u,s=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,g=new RegExp(e.source,f+"g");while(l=d.call(g,r)){if(o=g.lastIndex,o>p&&(s.push(r.slice(p,l.index)),l.length>1&&l.index<r.length&&b.apply(s,l.slice(1)),u=l[0].length,p=o,s.length>=a))break;g.lastIndex===l.index&&g.lastIndex++}return p===r.length?!u&&g.test("")||s.push(""):s.push(r.slice(p)),s.length>a?s.slice(0,a):s}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var i=c(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,i,n):r.call(String(i),t,n)},function(e,i){var c=n(r,e,this,i,r!==t);if(c.done)return c.value;var d=a(e),f=String(this),b=l(d,RegExp),h=d.unicode,j=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),x=new b(g?d:"^(?:"+d.source+")",j),O=void 0===i?v:i>>>0;if(0===O)return[];if(0===f.length)return null===s(x,f)?[f]:[];var m=0,y=0,w=[];while(y<f.length){x.lastIndex=g?y:0;var E,k=s(x,g?f:f.slice(y));if(null===k||(E=p(u(x.lastIndex+(g?0:y)),f.length))===m)y=o(f,y,h);else{if(w.push(f.slice(m,y)),w.length===O)return w;for(var S=1;S<=k.length-1;S++)if(w.push(k[S]),w.length===O)return w;y=m=E}}return w.push(f.slice(m)),w}]}),!g)},"14c3":function(e,t,n){var r=n("c6b6"),i=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var a=n.call(e,t);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},"4d63":function(e,t,n){var r=n("83ab"),i=n("da84"),a=n("94ca"),c=n("7156"),l=n("9bf2").f,o=n("241c").f,u=n("44e7"),s=n("ad6d"),d=n("9f7f"),f=n("6eeb"),b=n("d039"),p=n("69f3").set,v=n("2626"),g=n("b622"),h=g("match"),j=i.RegExp,x=j.prototype,O=/a/g,m=/a/g,y=new j(O)!==O,w=d.UNSUPPORTED_Y,E=r&&a("RegExp",!y||w||b((function(){return m[h]=!1,j(O)!=O||j(m)==m||"/a/i"!=j(O,"i")})));if(E){var k=function(e,t){var n,r=this instanceof k,i=u(e),a=void 0===t;if(!r&&i&&e.constructor===k&&a)return e;y?i&&!a&&(e=e.source):e instanceof k&&(a&&(t=s.call(e)),e=e.source),w&&(n=!!t&&t.indexOf("y")>-1,n&&(t=t.replace(/y/g,"")));var l=c(y?new j(e,t):j(e,t),r?this:x,k);return w&&n&&p(l,{sticky:n}),l},S=function(e){e in k||l(k,e,{configurable:!0,get:function(){return j[e]},set:function(t){j[e]=t}})},I=o(j),R=0;while(I.length>R)S(I[R++]);x.constructor=k,k.prototype=x,f(i,"RegExp",k)}v("RegExp")},5319:function(e,t,n){"use strict";var r=n("d784"),i=n("825a"),a=n("7b0b"),c=n("50c4"),l=n("a691"),o=n("1d80"),u=n("8aa5"),s=n("14c3"),d=Math.max,f=Math.min,b=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,g=function(e){return void 0===e?e:String(e)};r("replace",2,(function(e,t,n,r){var h=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,j=r.REPLACE_KEEPS_$0,x=h?"$":"$0";return[function(n,r){var i=o(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,i,r):t.call(String(i),n,r)},function(e,r){if(!h&&j||"string"===typeof r&&-1===r.indexOf(x)){var a=n(t,e,this,r);if(a.done)return a.value}var o=i(e),b=String(this),p="function"===typeof r;p||(r=String(r));var v=o.global;if(v){var m=o.unicode;o.lastIndex=0}var y=[];while(1){var w=s(o,b);if(null===w)break;if(y.push(w),!v)break;var E=String(w[0]);""===E&&(o.lastIndex=u(b,c(o.lastIndex),m))}for(var k="",S=0,I=0;I<y.length;I++){w=y[I];for(var R=String(w[0]),C=d(f(l(w.index),b.length),0),T=[],P=1;P<w.length;P++)T.push(g(w[P]));var _=w.groups;if(p){var $=[R].concat(T,C,b);void 0!==_&&$.push(_);var A=String(r.apply(void 0,$))}else A=O(R,b,C,T,_,r);C>=S&&(k+=b.slice(S,C)+A,S=C+R.length)}return k+b.slice(S)}];function O(e,n,r,i,c,l){var o=r+e.length,u=i.length,s=v;return void 0!==c&&(c=a(c),s=p),t.call(l,s,(function(t,a){var l;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return n.slice(0,r);case"'":return n.slice(o);case"<":l=c[a.slice(1,-1)];break;default:var s=+a;if(0===s)return t;if(s>u){var d=b(s/10);return 0===d?t:d<=u?void 0===i[d-1]?a.charAt(1):i[d-1]+a.charAt(1):t}l=i[s-1]}return void 0===l?"":l}))}}))},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("ad6d"),i=n("9f7f"),a=RegExp.prototype.exec,c=String.prototype.replace,l=a,o=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),u=i.UNSUPPORTED_Y||i.BROKEN_CARET,s=void 0!==/()??/.exec("")[1],d=o||s||u;d&&(l=function(e){var t,n,i,l,d=this,f=u&&d.sticky,b=r.call(d),p=d.source,v=0,g=e;return f&&(b=b.replace("y",""),-1===b.indexOf("g")&&(b+="g"),g=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(p="(?: "+p+")",g=" "+g,v++),n=new RegExp("^(?:"+p+")",b)),s&&(n=new RegExp("^"+p+"$(?!\\s)",b)),o&&(t=d.lastIndex),i=a.call(f?n:d,g),f?i?(i.input=i.input.slice(v),i[0]=i[0].slice(v),i.index=d.lastIndex,d.lastIndex+=i[0].length):d.lastIndex=0:o&&i&&(d.lastIndex=d.global?i.index+i[0].length:t),s&&i&&i.length>1&&c.call(i[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(i[l]=void 0)})),i}),e.exports=l},"9f7f":function(e,t,n){"use strict";var r=n("d039");function i(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},c975:function(e,t,n){"use strict";var r=n("23e7"),i=n("4d64").indexOf,a=n("a640"),c=n("ae40"),l=[].indexOf,o=!!l&&1/[1].indexOf(1,-0)<0,u=a("indexOf"),s=c("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:o||!u||!s},{indexOf:function(e){return o?l.apply(this,arguments)||0:i(this,e,arguments.length>1?arguments[1]:void 0)}})},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("d039"),a=n("b622"),c=n("9263"),l=n("9112"),o=a("species"),u=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),s=function(){return"$0"==="a".replace(/./,"$0")}(),d=a("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),b=!i((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,d){var p=a(e),v=!i((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),g=v&&!i((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[o]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return t=!0,null},n[p](""),!t}));if(!v||!g||"replace"===e&&(!u||!s||f)||"split"===e&&!b){var h=/./[p],j=n(p,""[e],(function(e,t,n,r,i){return t.exec===c?v&&!i?{done:!0,value:h.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),x=j[0],O=j[1];r(String.prototype,e,x),r(RegExp.prototype,p,2==t?function(e,t){return O.call(e,this,t)}:function(e){return O.call(e,this)})}d&&l(RegExp.prototype[p],"sham",!0)}}}]);
//# sourceMappingURL=ali.916d08e8.js.map