(this["webpackJsonpbutton-aesthetics"]=this["webpackJsonpbutton-aesthetics"]||[]).push([[0],{21:function(t,e,c){},31:function(t,e,c){"use strict";c.r(e);var n=c(0),o=c.n(n),r=c(14),a=c.n(r),s=(c(21),c(9)),b=c(2),j=c(16),i=c(1),u=function(t){for(var e=t.colorNum,c=[],n=0;n<e;n++){var o=Math.floor(255*Math.random()),r=Math.floor(255*Math.random()),a=Math.floor(255*Math.random());c.push("rgb(".concat(o,", ").concat(r,", ").concat(a,")"))}return Object(i.jsx)("div",{children:c.map((function(t){return Object(i.jsx)("button",{className:"color-btn",style:{backgroundColor:"".concat(t)},onClick:function(){document.body.style.backgroundColor=t},children:t})}))})},h=function(){var t=Object(n.useState)(""),e=Object(j.a)(t,2),c=e[0],o=e[1];return c>1e3&&o("0"),Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Type a number between 1 and 1000"}),Object(i.jsx)("input",{type:"number",placeholder:"Type a number between 1 and 999",className:"input-colorNum",onChange:function(t){return o(t.target.value)}}),Object(i.jsx)(u,{colorNum:c})]})},l=function(){return Object(i.jsx)("div",{children:Object(i.jsx)(h,{})})},d=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("p",{className:"about-txt",children:"This page is just a very simple project to generate random colored buttons. That's it :P"})})},x=function(){return Object(i.jsxs)(s.a,{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("button",{className:"pages-btn",children:Object(i.jsx)(s.b,{to:"/button-aesthetics",children:"Home"})}),Object(i.jsx)("button",{className:"pages-btn",children:Object(i.jsx)(s.b,{to:"/about",children:"What is this page about?"})})]}),Object(i.jsx)("div",{children:Object(i.jsxs)(b.c,{children:[Object(i.jsx)(b.a,{exact:!0,path:"/button-aesthetics",children:Object(i.jsx)(l,{})}),Object(i.jsx)(b.a,{path:"/about",children:Object(i.jsx)(d,{})})]})})]})};a.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.3352ad34.chunk.js.map