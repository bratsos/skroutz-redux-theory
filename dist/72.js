(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{344:function(_,I,n){!function(_){"use strict";_.defineMode("ntriples",function(){var _={PRE_SUBJECT:0,WRITING_SUB_URI:1,WRITING_BNODE_URI:2,PRE_PRED:3,WRITING_PRED_URI:4,PRE_OBJ:5,WRITING_OBJ_URI:6,WRITING_OBJ_BNODE:7,WRITING_OBJ_LITERAL:8,WRITING_LIT_LANG:9,WRITING_LIT_TYPE:10,POST_OBJ:11,ERROR:12};function I(I,n){var R,e=I.location;R=e==_.PRE_SUBJECT&&"<"==n?_.WRITING_SUB_URI:e==_.PRE_SUBJECT&&"_"==n?_.WRITING_BNODE_URI:e==_.PRE_PRED&&"<"==n?_.WRITING_PRED_URI:e==_.PRE_OBJ&&"<"==n?_.WRITING_OBJ_URI:e==_.PRE_OBJ&&"_"==n?_.WRITING_OBJ_BNODE:e==_.PRE_OBJ&&'"'==n?_.WRITING_OBJ_LITERAL:e==_.WRITING_SUB_URI&&">"==n?_.PRE_PRED:e==_.WRITING_BNODE_URI&&" "==n?_.PRE_PRED:e==_.WRITING_PRED_URI&&">"==n?_.PRE_OBJ:e==_.WRITING_OBJ_URI&&">"==n?_.POST_OBJ:e==_.WRITING_OBJ_BNODE&&" "==n?_.POST_OBJ:e==_.WRITING_OBJ_LITERAL&&'"'==n?_.POST_OBJ:e==_.WRITING_LIT_LANG&&" "==n?_.POST_OBJ:e==_.WRITING_LIT_TYPE&&">"==n?_.POST_OBJ:e==_.WRITING_OBJ_LITERAL&&"@"==n?_.WRITING_LIT_LANG:e==_.WRITING_OBJ_LITERAL&&"^"==n?_.WRITING_LIT_TYPE:" "!=n||e!=_.PRE_SUBJECT&&e!=_.PRE_PRED&&e!=_.PRE_OBJ&&e!=_.POST_OBJ?e==_.POST_OBJ&&"."==n?_.PRE_SUBJECT:_.ERROR:e,I.location=R}return{startState:function(){return{location:_.PRE_SUBJECT,uris:[],anchors:[],bnodes:[],langs:[],types:[]}},token:function(_,n){var R=_.next();if("<"==R){I(n,R);var e="";return _.eatWhile(function(_){return"#"!=_&&">"!=_&&(e+=_,!0)}),n.uris.push(e),_.match("#",!1)?"variable":(_.next(),I(n,">"),"variable")}if("#"==R){var t="";return _.eatWhile(function(_){return">"!=_&&" "!=_&&(t+=_,!0)}),n.anchors.push(t),"variable-2"}if(">"==R)return I(n,">"),"variable";if("_"==R){I(n,R);var r="";return _.eatWhile(function(_){return" "!=_&&(r+=_,!0)}),n.bnodes.push(r),_.next(),I(n," "),"builtin"}if('"'==R)return I(n,R),_.eatWhile(function(_){return'"'!=_}),_.next(),"@"!=_.peek()&&"^"!=_.peek()&&I(n,'"'),"string";if("@"==R){I(n,"@");var i="";return _.eatWhile(function(_){return" "!=_&&(i+=_,!0)}),n.langs.push(i),_.next(),I(n," "),"string-2"}if("^"==R){_.next(),I(n,"^");var T="";return _.eatWhile(function(_){return">"!=_&&(T+=_,!0)}),n.types.push(T),_.next(),I(n,">"),"variable"}" "==R&&I(n,R),"."==R&&I(n,R)}}}),_.defineMIME("application/n-triples","ntriples"),_.defineMIME("application/n-quads","ntriples"),_.defineMIME("text/n-triples","ntriples")}(n(8))}}]);