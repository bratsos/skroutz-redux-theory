(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{321:function(e,t,n){!function(e){"use strict";e.defineMode("go",function(t){var n,r=t.indentUnit,i={break:!0,case:!0,chan:!0,const:!0,continue:!0,default:!0,defer:!0,else:!0,fallthrough:!0,for:!0,func:!0,go:!0,goto:!0,if:!0,import:!0,interface:!0,map:!0,package:!0,range:!0,return:!0,select:!0,struct:!0,switch:!0,type:!0,var:!0,bool:!0,byte:!0,complex64:!0,complex128:!0,float32:!0,float64:!0,int8:!0,int16:!0,int32:!0,int64:!0,string:!0,uint8:!0,uint16:!0,uint32:!0,uint64:!0,int:!0,uint:!0,uintptr:!0,error:!0,rune:!0},o={true:!0,false:!0,iota:!0,nil:!0,append:!0,cap:!0,close:!0,complex:!0,copy:!0,delete:!0,imag:!0,len:!0,make:!0,new:!0,panic:!0,print:!0,println:!0,real:!0,recover:!0},a=/[+\-*&^%:=<>!|\/]/;function c(e,t){var r,l=e.next();if('"'==l||"'"==l||"`"==l)return t.tokenize=(r=l,function(e,t){for(var n,i=!1,o=!1;null!=(n=e.next());){if(n==r&&!i){o=!0;break}i=!i&&"`"!=r&&"\\"==n}return(o||!i&&"`"!=r)&&(t.tokenize=c),"string"}),t.tokenize(e,t);if(/[\d\.]/.test(l))return"."==l?e.match(/^[0-9]+([eE][\-+]?[0-9]+)?/):"0"==l?e.match(/^[xX][0-9a-fA-F]+/)||e.match(/^0[0-7]+/):e.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/),"number";if(/[\[\]{}\(\),;\:\.]/.test(l))return n=l,null;if("/"==l){if(e.eat("*"))return t.tokenize=u,u(e,t);if(e.eat("/"))return e.skipToEnd(),"comment"}if(a.test(l))return e.eatWhile(a),"operator";e.eatWhile(/[\w\$_\xa1-\uffff]/);var f=e.current();return i.propertyIsEnumerable(f)?("case"!=f&&"default"!=f||(n="case"),"keyword"):o.propertyIsEnumerable(f)?"atom":"variable"}function u(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize=c;break}r="*"==n}return"comment"}function l(e,t,n,r,i){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=i}function f(e,t,n){return e.context=new l(e.indented,t,n,null,e.context)}function s(e){if(e.context.prev){var t=e.context.type;return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}}return{startState:function(e){return{tokenize:null,context:new l((e||0)-r,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,t){var r=t.context;if(e.sol()&&(null==r.align&&(r.align=!1),t.indented=e.indentation(),t.startOfLine=!0,"case"==r.type&&(r.type="}")),e.eatSpace())return null;n=null;var i=(t.tokenize||c)(e,t);return"comment"==i?i:(null==r.align&&(r.align=!0),"{"==n?f(t,e.column(),"}"):"["==n?f(t,e.column(),"]"):"("==n?f(t,e.column(),")"):"case"==n?r.type="case":"}"==n&&"}"==r.type?s(t):n==r.type&&s(t),t.startOfLine=!1,i)},indent:function(t,n){if(t.tokenize!=c&&null!=t.tokenize)return e.Pass;var i=t.context,o=n&&n.charAt(0);if("case"==i.type&&/^(?:case|default)\b/.test(n))return t.context.type="}",i.indented;var a=o==i.type;return i.align?i.column+(a?0:1):i.indented+(a?0:r)},electricChars:"{}):",closeBrackets:"()[]{}''\"\"``",fold:"brace",blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//"}}),e.defineMIME("text/x-go","go")}(n(8))}}]);