(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{347:function(e,t,r){!function(e){"use strict";e.defineMode("pascal",function(){var e=function(e){for(var t={},r=e.split(" "),n=0;n<r.length;++n)t[r[n]]=!0;return t}("absolute and array asm begin case const constructor destructor div do downto else end file for function goto if implementation in inherited inline interface label mod nil not object of operator or packed procedure program record reintroduce repeat self set shl shr string then to type unit until uses var while with xor as class dispinterface except exports finalization finally initialization inline is library on out packed property raise resourcestring threadvar try absolute abstract alias assembler bitpacked break cdecl continue cppdecl cvar default deprecated dynamic enumerator experimental export external far far16 forward generic helper implements index interrupt iocheck local message name near nodefault noreturn nostackframe oldfpccall otherwise overload override pascal platform private protected public published read register reintroduce result safecall saveregisters softfloat specialize static stdcall stored strict unaligned unimplemented varargs virtual write"),t={null:!0},r=/[+\-*&%=<>!?|\/]/;function n(e,t){for(var r,n=!1;r=e.next();){if(")"==r&&n){t.tokenize=null;break}n="*"==r}return"comment"}return{startState:function(){return{tokenize:null}},token:function(a,i){if(a.eatSpace())return null;var o=(i.tokenize||function(a,i){var o,l=a.next();if("#"==l&&i.startOfLine)return a.skipToEnd(),"meta";if('"'==l||"'"==l)return i.tokenize=(o=l,function(e,t){for(var r,n=!1,a=!1;null!=(r=e.next());){if(r==o&&!n){a=!0;break}n=!n&&"\\"==r}return!a&&n||(t.tokenize=null),"string"}),i.tokenize(a,i);if("("==l&&a.eat("*"))return i.tokenize=n,n(a,i);if(/[\[\]{}\(\),;\:\.]/.test(l))return null;if(/\d/.test(l))return a.eatWhile(/[\w\.]/),"number";if("/"==l&&a.eat("/"))return a.skipToEnd(),"comment";if(r.test(l))return a.eatWhile(r),"operator";a.eatWhile(/[\w\$_]/);var s=a.current();return e.propertyIsEnumerable(s)?"keyword":t.propertyIsEnumerable(s)?"atom":"variable"})(a,i);return o},electricChars:"{}"}}),e.defineMIME("text/x-pascal","pascal")}(r(8))}}]);