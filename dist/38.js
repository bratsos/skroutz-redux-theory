(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{302:function(t,e,n){!function(t){"use strict";var e=function(t){return new RegExp("^(?:"+t.join("|")+")$","i")};t.defineMode("cypher",function(n){var r,i=function(t){var e=t.next();if('"'===e)return t.match(/.*?"/),"string";if("'"===e)return t.match(/.*?'/),"string";if(/[{}\(\),\.;\[\]]/.test(e))return r=e,"node";if("/"===e&&t.eat("/"))return t.skipToEnd(),"comment";if(u.test(e))return t.eatWhile(u),null;if(t.eatWhile(/[_\w\d]/),t.eat(":"))return t.eatWhile(/[\w\d_\-]/),"atom";var n=t.current();return s.test(n)?"builtin":l.test(n)?"def":d.test(n)?"keyword":"variable"},o=function(t,e,n){return t.context={prev:t.context,indent:t.indent,col:n,type:e}},a=function(t){return t.indent=t.context.indent,t.context=t.context.prev},c=n.indentUnit,s=e(["abs","acos","allShortestPaths","asin","atan","atan2","avg","ceil","coalesce","collect","cos","cot","count","degrees","e","endnode","exp","extract","filter","floor","haversin","head","id","keys","labels","last","left","length","log","log10","lower","ltrim","max","min","node","nodes","percentileCont","percentileDisc","pi","radians","rand","range","reduce","rel","relationship","relationships","replace","reverse","right","round","rtrim","shortestPath","sign","sin","size","split","sqrt","startnode","stdev","stdevp","str","substring","sum","tail","tan","timestamp","toFloat","toInt","toString","trim","type","upper"]),l=e(["all","and","any","contains","exists","has","in","none","not","or","single","xor"]),d=e(["as","asc","ascending","assert","by","case","commit","constraint","create","csv","cypher","delete","desc","descending","detach","distinct","drop","else","end","ends","explain","false","fieldterminator","foreach","from","headers","in","index","is","join","limit","load","match","merge","null","on","optional","order","periodic","profile","remove","return","scan","set","skip","start","starts","then","true","union","unique","unwind","using","when","where","with","call","yield"]),u=/[*+\-<>=&|~%^]/;return{startState:function(){return{tokenize:i,context:null,indent:0,col:0}},token:function(t,e){if(t.sol()&&(e.context&&null==e.context.align&&(e.context.align=!1),e.indent=t.indentation()),t.eatSpace())return null;var n=e.tokenize(t,e);if("comment"!==n&&e.context&&null==e.context.align&&"pattern"!==e.context.type&&(e.context.align=!0),"("===r)o(e,")",t.column());else if("["===r)o(e,"]",t.column());else if("{"===r)o(e,"}",t.column());else if(/[\]\}\)]/.test(r)){for(;e.context&&"pattern"===e.context.type;)a(e);e.context&&r===e.context.type&&a(e)}else"."===r&&e.context&&"pattern"===e.context.type?a(e):/atom|string|variable/.test(n)&&e.context&&(/[\}\]]/.test(e.context.type)?o(e,"pattern",t.column()):"pattern"!==e.context.type||e.context.align||(e.context.align=!0,e.context.col=t.column()));return n},indent:function(e,n){var r=n&&n.charAt(0),i=e.context;if(/[\]\}]/.test(r))for(;i&&"pattern"===i.type;)i=i.prev;var o=i&&r===i.type;return i?"keywords"===i.type?t.commands.newlineAndIndent:i.align?i.col+(o?0:1):i.indent+(o?0:c):0}}}),t.modeExtensions.cypher={autoFormatLineBreaks:function(t){for(var e=t.split("\n"),n=/\s+\b(return|where|order by|match|with|skip|limit|create|delete|set)\b\s/g,r=0;r<e.length;r++)e[r]=e[r].replace(n," \n$1 ").trim();return e.join("\n")}},t.defineMIME("application/x-cypher-query","cypher")}(n(8))}}]);