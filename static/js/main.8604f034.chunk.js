(this.webpackJsonptarea3=this.webpackJsonptarea3||[]).push([[0],{106:function(e,t,n){"use strict";n.r(t);var s,c=n(0),a=n(49),o=n.n(a),r=n(57),u=n(22),j=(n(62),n(50)),i=n.n(j),l=n(2),m=function(e){var t=e.setMessage,n=e.sendMessage,s=e.message;return Object(l.jsxs)("form",{className:"form",children:[Object(l.jsx)("input",{className:"input",type:"text",placeholder:"Type a message...",value:s,onChange:function(e){var n=e.target.value;return t(n)},onKeyPress:function(e){return"Enter"===e.key?n(e):null}}),Object(l.jsx)("button",{className:"sendButton",onClick:function(e){return n(e)},children:"Send"})]})},b=n(56),f=n(53),O=n.n(f),g=function(e){var t=e.message,n=t.name,s=t.date,c=t.message,a=(e.my_name,new Date(parseInt(s)));return console.log("VIENE LA HORA"),console.log(a.day),Object(l.jsxs)("div",{children:[Object(l.jsxs)("h4",{children:[n,":"]}),Object(l.jsx)("p",{children:c}),Object(l.jsx)("h5",{children:O()(a).format("DD-MM-YYYY HH:mm:ss")})]})},d=function(e){var t=e.messages,n=e.my_name;return Object(l.jsx)(b.a,{className:"messages",children:t.map((function(e,t){return Object(l.jsx)("div",{children:Object(l.jsx)(g,{message:e,my_name:n})},t)}))})},h=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)([]),j=Object(u.a)(o,2),b=j[0],f=j[1],O=Object(c.useState)(""),g=Object(u.a)(O,2),h=g[0],p=g[1];Object(c.useEffect)((function(){s=i()("wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl/",{path:"/flights"})}),[]),Object(c.useEffect)((function(){s.emit("FLIGHTS")}),[]),Object(c.useEffect)((function(){s.on("FLIGHTS",(function(e){console.log(e),console.log("MENSAJE TREMENDO")}))}),[]),Object(c.useEffect)((function(){s.on("CHAT",(function(e){f((function(t){return[].concat(Object(r.a)(t),[e])})),console.log(e),console.log("RECIBIDO COMPADRE")}))}),[]);return Object(l.jsxs)("div",{children:[Object(l.jsx)(d,{messages:b,name:n}),Object(l.jsx)("input",{placeholder:"Name",type:"text",onChange:function(e){return a(e.target.value)}}),Object(l.jsx)(m,{message:h,setMessage:p,sendMessage:function(e){e.preventDefault(),h&&(s.emit("CHAT",{message:h,name:n}),p(""))}})]})},p=n(54),x=n(3),E=function(){return Object(l.jsx)(p.a,{children:Object(l.jsx)(x.a,{path:"/",component:h})})};o.a.render(Object(l.jsx)(E,{}),document.getElementById("root"))}},[[106,1,2]]]);
//# sourceMappingURL=main.8604f034.chunk.js.map