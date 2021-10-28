(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{18:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(11),c=n.n(r),o=(n(17),n(18),n(3)),i=n.n(o),l=n(7),u=n(2),m=(n(20),n(4)),d=n.n(m),j=n(6),b=n(5),p=n(0);var h=function(e){var t=Object(a.useState)({username:"",email:"",password1:"",password2:""}),n=Object(u.a)(t,2),s=n[0],r=n[1],c=Object(a.useState)(null),o=Object(u.a)(c,2),i=o[0],l=o[1],m=function(e){var t=e.target,n=t.name,a=t.value;r((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(j.a)({},n,a))}))};return Object(p.jsxs)("form",{className:"mt-3",onSubmit:function(t){t.preventDefault(),s.password1!==s.password2?l("Passwords do not match."):e.handleRegistration(s)},children:[Object(p.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(p.jsx)("label",{htmlFor:"username",children:"Username"}),Object(p.jsx)("input",{type:"text",className:"form-control",id:"username",placeholder:"Enter username",required:!0,name:"username",onChange:m,value:s.username})]}),Object(p.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(p.jsx)("label",{htmlFor:"email",children:"Email"}),Object(p.jsx)("input",{type:"email",className:"form-control",id:"email",placeholder:"Enter email",required:!0,name:"email",onChange:m,value:s.email})]}),Object(p.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(p.jsx)("label",{htmlFor:"password1",children:"Password"}),Object(p.jsx)("input",{type:"password",className:"form-control",id:"password1",placeholder:"Enter password",required:!0,name:"password1",onChange:m,value:s.password1})]}),Object(p.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(p.jsx)("label",{htmlFor:"password2",children:"Confirm Password"}),Object(p.jsx)("input",{type:"password",className:"form-control",id:"password2",placeholder:"Confirm password",required:!0,name:"password2",onChange:m,value:s.password2}),Object(p.jsx)("span",{className:"text-danger mt-2",children:i})]}),Object(p.jsx)("button",{type:"submit",className:"bt btn-primary mt-3",children:"Register"})]})};var f=function(e){var t=Object(a.useState)({}),n=Object(u.a)(t,2),s=n[0],r=n[1],c=function(e){var t=e.target,n=t.message,a=t.value;r((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(j.a)({},n,a))}))};return Object(p.jsx)("form",{className:"mt-2",onSubmit:function(t){t.preventDefault(),e.handleMessage(s)},children:Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("textarea",{id:"body",className:"text-area",name:"body",placeholder:"Message here",onChange:c}),Object(p.jsx)("button",{type:"submit",name:e.user,onChange:c,children:"Send"})]})})},O=n(12);var x=function(e){var t=Object(a.useState)(),n=Object(u.a)(t,2),s=n[0],r=n[1],c=function(){var t=Object(l.a)(i.a.mark((function t(){var n,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":d.a.get("csrftoken")},body:JSON.stringify([s])},t.next=3,fetch("/api_v1/chats/rooms/",n);case 3:if(a=t.sent){t.next=8;break}console.warn(a),t.next=10;break;case 8:return r([].concat(Object(O.a)(e.roomList),[s])),t.abrupt("return",a.json());case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(p.jsx)("div",{children:Object(p.jsxs)("form",{className:"room-add",onSubmit:function(e){e.preventDefault(),c(s),console.log({newRoom:s})},children:[Object(p.jsx)("input",{type:"text",id:"text",placeholder:"Add New Room",name:"addnewroom",onChange:function(e){r(e.target.value)}}),Object(p.jsx)("button",{type:"submit",children:"Add"})]})})};var g=function(e){var t=e.roomList.map((function(t){return Object(p.jsx)("li",{className:"room-button",children:Object(p.jsx)("button",{value:t.id,className:"mt-2",type:"button",onClick:e.getMessages,children:t.title})},t.id)}));return Object(p.jsxs)("aside",{className:"room-side-bar",children:[Object(p.jsx)("header",{className:"rooms-header",children:"Chat Rooms"}),Object(p.jsx)("ul",{children:t}),Object(p.jsx)(x,{})]})};var v=function(e){var t=e.messageList.map((function(e){return Object(p.jsx)("div",{className:"message-body",children:e.body},e.id)}));return Object(p.jsx)("section",{className:"message-list-view",children:t})};var w=function(e){var t=Object(a.useState)({username:"",email:"",password:""}),n=Object(u.a)(t,2),s=n[0],r=n[1],c=Object(a.useState)(null),o=Object(u.a)(c,2),i=o[0],l=(o[1],function(e){var t=e.target,n=t.name,a=t.value;r((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(j.a)({},n,a))}))});return Object(p.jsxs)("form",{className:"mt-3",onSubmit:function(t){t.preventDefault(),e.handleLogin(s),r(s)},children:[Object(p.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(p.jsx)("label",{htmlFor:"username",children:"Username"}),Object(p.jsx)("input",{type:"text",className:"form-control",id:"username",placeholder:"Enter username",required:!0,name:"username",onChange:l,value:s.username})]}),Object(p.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(p.jsx)("label",{htmlFor:"email",children:"Email"}),Object(p.jsx)("input",{type:"email",className:"form-control",id:"email",placeholder:"Enter email",required:!0,name:"email",onChange:l,value:s.email})]}),Object(p.jsxs)("div",{className:"form-group text-left mb-3",children:[Object(p.jsx)("label",{htmlFor:"password",children:"Password"}),Object(p.jsx)("input",{type:"password",className:"form-control",id:"password",placeholder:"Enter password",required:!0,name:"password",onChange:l,value:s.password}),Object(p.jsx)("span",{className:"text-danger mt-2",children:i})]}),Object(p.jsx)("button",{type:"submit",className:"bt btn-primary mt-3",children:"Login"})]})};var y=function(){var e=function(e){return console.warn(e)},t=Object(a.useState)([]),n=Object(u.a)(t,2),s=n[0],r=n[1],c=Object(a.useState)([]),o=Object(u.a)(c,2),m=o[0],j=o[1],b=Object(a.useState)({id:0,title:"room0"}),O=Object(u.a)(b,2),x=O[0],y=O[1],N=Object(a.useState)(d.a.get("Authorization")?"messages":"login"),k=Object(u.a)(N,2),S=k[0],C=k[1],T=function(){var t=Object(l.a)(i.a.mark((function t(n){var a,s,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":d.a.get("csrftoken")},body:JSON.stringify(n)},t.next=3,fetch("/rest-auth/registration/",a).catch(e);case 3:if(s=t.sent){t.next=8;break}console.warn(s),t.next=13;break;case 8:return t.next=10,s.json();case 10:r=t.sent,d.a.set("Authorization","Token ".concat(r.key)),C("messages");case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),F=function(){var t=Object(l.a)(i.a.mark((function t(n){var a,s,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":d.a.get("csrftoken")},body:JSON.stringify(n)},t.next=3,fetch("/rest-auth/login/",a).catch(e);case 3:if(s=t.sent){t.next=8;break}console.warn(s),t.next=13;break;case 8:return t.next=10,s.json();case 10:r=t.sent,d.a.set("Authorization","Token ".concat(r.key)),C("messages");case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),R=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api_v1/chats/rooms");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function L(){return L=Object(l.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api_v1/chats/rooms/".concat(t.target.value,"/"));case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,r=s.find((function(e){return e.id.toString()===t.target.value})),y(r),j(a.messages);case 9:case"end":return e.stop()}}),e)}))),L.apply(this,arguments)}function E(){return(E=Object(l.a)(i.a.mark((function e(t,n){var a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={user:t,room:x.id,body:n},console.log({newMessage:a}),e.next=4,fetch("/api_v1/chats/".concat(x.id,"/"),{method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":d.a.get("csrftoken")},body:JSON.stringify(a)});case 4:if(!(s=e.sent).ok){e.next=7;break}return e.abrupt("return",s.json());case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){R()}),[]),Object(p.jsxs)(p.Fragment,{children:["login"===S&&Object(p.jsx)(w,{handleLogin:F}),"registration"===S&&Object(p.jsx)(h,{handleRegistration:T}),"messages"===S&&Object(p.jsxs)("div",{className:"app",children:[Object(p.jsx)("header",{className:"header",children:"The Return of AIM "}),Object(p.jsx)("button",{type:"button",onClick:function(){d.a.remove("Authorization"),C("login")},children:"Log Out"}),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"message-container",children:[Object(p.jsx)("header",{className:"message-window-header",children:"Message Window"}),Object(p.jsx)(v,{messageList:m,selectedRoom:x}),Object(p.jsx)(f,{handleMessage:function(e,t){return E.apply(this,arguments)}})]}),Object(p.jsx)("div",{className:"rooms-container",children:Object(p.jsx)(g,{roomList:s,getMessages:function(e){return L.apply(this,arguments)}})})]})]})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};c.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root")),N()}},[[22,1,2]]]);
//# sourceMappingURL=main.cb488409.chunk.js.map