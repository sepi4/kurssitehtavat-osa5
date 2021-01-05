(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(40)},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(15),l=n.n(u),c=n(1),o=n.n(c),i=n(4),s=n(2),m=n(5),d=n.n(m),p={login:function(){var e=Object(i.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},f={getAll:function(){return d.a.get("/api/blogs").then(function(e){return e.data})},createBlog:function(){var e=Object(i.a)(o.a.mark(function e(t,n){var a,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:"bearer ".concat(t)}},e.next=3,d.a.post("/api/blogs",n,a);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),likeBlog:function(){var e=Object(i.a)(o.a.mark(function e(t){var n,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={_id:t.id,user:t.user.id,likes:t.likes+1,author:t.author,title:t.title,url:t.url},e.next=3,d.a.put("".concat("/api/blogs","/").concat(t.id),n);case 3:return(a=e.sent).data.user=t.user,e.abrupt("return",a.data);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),removeBlog:function(){var e=Object(i.a)(o.a.mark(function e(t,n){var a,r,u;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:"bearer ".concat(n)}},r="".concat("/api/blogs","/").concat(t.id),e.next=4,d.a.delete(r,a);case 4:return u=e.sent,e.abrupt("return",u.data);case 6:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()},v=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:t.error?"error":"success"},t.text)},g=function(e){var t=e.message,n=e.username,a=e.password,u=e.setUsername,l=e.setPassword,c=e.handleLogin;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:c},r.a.createElement("h1",null,"log in to application"),r.a.createElement(v,{message:t}),r.a.createElement("div",null,"username",r.a.createElement("input",{className:"username",value:n,onChange:u,type:"text"})),r.a.createElement("div",null,"password",r.a.createElement("input",{className:"password",type:"password",value:a,onChange:l})),r.a.createElement("div",null,r.a.createElement("input",{type:"submit",value:"login"}))))},b=function(e){var t=e.user,n=e.addNewBlog,u=Object(a.useState)(""),l=Object(s.a)(u,2),c=l[0],m=l[1],d=Object(a.useState)(""),p=Object(s.a)(d,2),v=p[0],g=p[1],b=Object(a.useState)(""),h=Object(s.a)(b,2),E=h[0],w=h[1],k=function(){var e=Object(i.a)(o.a.mark(function e(a){var r,u;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),r={title:c,author:v,url:E},e.next=4,f.createBlog(t.token,r);case 4:u=e.sent,m(""),g(""),w(""),n(u);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:k},r.a.createElement("h2",null,"Create new blog"),r.a.createElement("div",null,"title:",r.a.createElement("input",{value:c,onChange:function(e){return m(e.target.value)},type:"text",name:"title"})),r.a.createElement("div",null,"author",r.a.createElement("input",{type:"text",value:v,onChange:function(e){return g(e.target.value)},name:"author"})),r.a.createElement("div",null,"url",r.a.createElement("input",{type:"text",value:E,onChange:function(e){return w(e.target.value)},name:"url"})),r.a.createElement("div",null,r.a.createElement("input",{type:"submit",value:"create"}))))},h=function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),u=n[0],l=n[1],c={display:u?"none":""},o={display:u?"":"none"},i=function(){l(!u)};return r.a.createElement("div",null,r.a.createElement("div",{style:c},r.a.createElement("button",{onClick:i},e.buttonLabel)),r.a.createElement("div",{style:o},e.children,r.a.createElement("button",{onClick:i},"cancel")))},E=function(e){var t=e.blog,n=e.handleLike,u=e.handleRemove,l=e.user,c=Object(a.useState)(!1),o=Object(s.a)(c,2),i=o[0],m=o[1];return r.a.createElement("div",null,i?r.a.createElement("div",{style:{backgroundColor:"#E0E0E0",padding:"1px 15px",margin:"10px 0"}},r.a.createElement("h2",{style:{cursor:"pointer"},onClick:function(){m(!i)}},t.title),r.a.createElement("div",null,"author: ",t.author),r.a.createElement("div",null,"added by: ",t.user.name?t.user.name:t.user.username),r.a.createElement("div",null,"url: ",r.a.createElement("a",{href:t.url},t.url)),r.a.createElement("div",null,"likes: ",t.likes,r.a.createElement("button",{onClick:function(){n(t)}},"like")),l.id===t.user.id?r.a.createElement("button",{onClick:function(){return u(t)}},"remove"):null):r.a.createElement("div",null,r.a.createElement("div",{style:{cursor:"pointer"},onClick:function(){m(!i)}},r.a.createElement("strong",{className:"title"},t.title),", by ",t.author)))},w=function(e){var t=e.blogs,n=e.handleLike,a=e.handleRemove,u=e.user,l=t.sort(function(e,t){return-(e.likes-t.likes)});return t.length>0?r.a.createElement("ul",null,l.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(E,{blog:e,handleLike:n,handleRemove:a,user:u}))})):null},k=function(e){var t=e.blogs,n=e.user,a=e.handleLogout,u=e.handleAddNewBlog,l=e.handleLike,c=e.handleRemove,o=e.message;return r.a.createElement("div",null,r.a.createElement("h1",null,"Blogs"),r.a.createElement("p",null,n.name?n.name:n.username," is logged in",r.a.createElement("button",{onClick:a},"logout")),r.a.createElement(v,{message:o}),r.a.createElement(h,{buttonLabel:"new blog"},r.a.createElement(b,{user:n,addNewBlog:u})),r.a.createElement(w,{blogs:t,handleLike:l,handleRemove:c,user:n}))},y=(n(39),function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],u=t[1],l=Object(a.useState)(""),c=Object(s.a)(l,2),m=c[0],d=c[1],v=Object(a.useState)(null),b=Object(s.a)(v,2),h=b[0],E=b[1],w=Object(a.useState)([]),y=Object(s.a)(w,2),O=y[0],j=y[1],x=Object(a.useState)(null),S=Object(s.a)(x,2),B=S[0],C=S[1];Object(a.useEffect)(function(){var e=window.localStorage.getItem("loggedBlogappUser");if(e){var t=JSON.parse(e);E(t)}f.getAll().then(function(e){return j(e)})},[]);var L=function(){var e=Object(i.a)(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm('Are you sure you want to remove "'.concat(t.title,'" by ').concat(t.author,"?"))){e.next=5;break}return e.next=4,f.removeBlog(t,h.token);case 4:j(O.filter(function(e){return e.id!==t.id}));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(i.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.likeBlog(t);case 2:n=e.sent,j(O.map(function(e){return e.id===n.id?n:e}));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(i.a)(o.a.mark(function e(t){var a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),e.next=4,p.login({username:n,password:m});case 4:a=e.sent,window.localStorage.setItem("loggedBlogappUser",JSON.stringify(a)),E(a),u(""),d(""),e.next=17;break;case 11:e.prev=11,e.t0=e.catch(0),u(""),d(""),C({text:"wrong username or password",error:!0}),setTimeout(function(){C(null)},3e3);case 17:case"end":return e.stop()}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,null===h?r.a.createElement(g,{message:B,username:n,password:m,setUsername:function(e){return u(e.target.value)},setPassword:function(e){return d(e.target.value)},handleLogin:A}):r.a.createElement(k,{blogs:O,user:h,handleLogout:function(){E(null),window.localStorage.removeItem("loggedBlogappUser")},handleAddNewBlog:function(e){j(O.concat(e)),C({text:"you added new blog '".concat(e.title,"', by ").concat(e.author),error:!1}),setTimeout(function(){C(null)},3e3)},handleLike:N,handleRemove:L,message:B}))});l.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.75946d60.chunk.js.map