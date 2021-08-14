(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{169:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),r=a(29),c=a.n(r),i=(a(74),a(75),a(76),a(18)),o=a(5),l=a(19),u=a(20),d=a(22),h=a(21),j=a(4),b=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(i.b,{className:"navbar-brand",to:"/",children:"NotesApp"}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(j.jsxs)("ul",{className:"navbar-nav ms-auto",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(i.b,{className:"nav-link",to:"/",children:"Notes"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(i.b,{className:"nav-link",to:"/create",children:"Create Note"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(i.b,{className:"nav-link",to:"/user",children:"Create User"})})]})})]})})}}]),a}(n.Component),p=a(7),m=a.n(p),v=a(16),f=a(11),x=a.n(f),O=a(67),g=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={notes:[]},e.deletNote=function(){var t=Object(v.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.delete("http://localhost:4000/api/notes/"+a);case 2:e.getNotes();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getNotes()}},{key:"getNotes",value:function(){var e=Object(v.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("http://localhost:4000/api/notes");case 2:t=e.sent,this.setState({notes:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{className:"row",children:this.state.notes.map((function(t){return Object(j.jsx)("div",{className:"col-md-4 p-2",children:Object(j.jsxs)("div",{className:"card",children:[Object(j.jsxs)("div",{className:"card-header d-flex justify-content-between",children:[Object(j.jsxs)("h5",{children:[" ",t.title," "]}),Object(j.jsx)(i.b,{className:"btn btn-secondary",to:"/edit/"+t._id,children:"Editar"})]}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("p",{children:t.content}),Object(j.jsxs)("p",{children:[" ",t.author," "]}),Object(j.jsxs)("p",{children:[" ",Object(O.a)(t.date)," "]})]}),Object(j.jsx)("div",{className:"card-footer",children:Object(j.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.deletNote(t._id)},children:"Delete"})})]})},t._id)}))})}}]),a}(n.Component),N=a(63),y=a(64),w=a.n(y),k=(a(101),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={users:[],userSelected:"",title:"",content:"",date:new Date,editing:!1,_id:""},e.onSubmit=function(){var t=Object(v.a)(m.a.mark((function t(a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n={title:e.state.title,content:e.state.content,date:e.state.date,author:e.state.userSelected},!e.state.editing){t.next=7;break}return t.next=5,x.a.put("http://localhost:4000/api/notes/"+e.state._id,n);case 5:t.next=9;break;case 7:return t.next=9,x.a.post("http://localhost:4000/api/notes",n);case 9:window.location.href="/";case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onInputChange=function(t){e.setState(Object(N.a)({},t.target.name,t.target.value))},e.onChangeDate=function(t){e.setState({date:t})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("http://localhost:4000/api/users");case 2:if(t=e.sent,this.setState({users:t.data.map((function(e){return e.username})),userSelected:t.data[0].username}),!this.props.match.params.id){e.next=9;break}return e.next=7,x.a.get("http://localhost:4000/api/notes/"+this.props.match.params.id);case 7:a=e.sent,this.setState({title:a.data.title,content:a.data.content,date:new Date(a.data.date),userSelected:a.data.author,editing:!0,_id:this.props.match.params.id});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(j.jsx)("div",{className:"col-md-6 offset-md-3 mb-3",children:Object(j.jsxs)("div",{className:"card card-body",children:[Object(j.jsx)("h4",{children:"Crear una Nota"}),Object(j.jsx)("div",{className:"form-group mb-3",children:Object(j.jsx)("select",{className:"form-control",name:"userSelected",onChange:this.onInputChange,value:this.state.userSelected,children:this.state.users.map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}))})}),Object(j.jsx)("div",{className:"form-group mb-3",children:Object(j.jsx)("input",{type:"text",className:"form-control",placeholder:"Titulo",name:"title",required:!0,onChange:this.onInputChange,value:this.state.title})}),Object(j.jsx)("div",{className:"form-group mb-3",children:Object(j.jsx)("textarea",{name:"content",className:"form-control",placeholder:"Contenido",required:!0,onChange:this.onInputChange,value:this.state.content})}),Object(j.jsx)("div",{className:"form-group mb-3",children:Object(j.jsx)(w.a,{className:"form-control",selected:this.state.date,onChange:this.onChangeDate})}),Object(j.jsx)("form",{onSubmit:this.onSubmit,children:Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Guardar nota"})})]})})}}]),a}(n.Component)),C=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={users:[],username:""},e.getUsers=Object(v.a)(m.a.mark((function t(){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("http://localhost:4000/api/users");case 2:a=t.sent,e.setState({users:a.data});case 4:case"end":return t.stop()}}),t)}))),e.onChangeUsername=function(t){e.setState({username:t.target.value})},e.onSubmit=function(){var t=Object(v.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,x.a.post("http://localhost:4000/api/users",{username:e.state.username});case 3:e.setState({username:""}),e.getUsers();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.deleteUser=function(){var t=Object(v.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.delete("http://localhost:4000/api/users/"+a);case 2:e.getUsers();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getUsers()}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-4",children:Object(j.jsxs)("div",{className:"card card-body",children:[Object(j.jsx)("h3",{children:"Crear nuevo usuario"}),Object(j.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{type:"text",className:"form-control",value:this.state.username,onChange:this.onChangeUsername})}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Guardar"})]})]})}),Object(j.jsx)("div",{className:"col-md-8",children:Object(j.jsx)("ul",{className:"list-group",children:this.state.users.map((function(t){return Object(j.jsx)("li",{className:"list-group-item list-group-item-action",onDoubleClick:function(){return e.deleteUser(t._id)},children:t.username},t._id)}))})})]})}}]),a}(n.Component);var S=function(){return Object(j.jsxs)(i.a,{children:[Object(j.jsx)(b,{}),Object(j.jsxs)("div",{className:"container p-4",children:[Object(j.jsx)(o.a,{exact:!0,path:"/",component:g}),Object(j.jsx)(o.a,{path:"/edit/:id",component:k}),Object(j.jsx)(o.a,{path:"/create",component:k}),Object(j.jsx)(o.a,{path:"/user",component:C})]})]})};a(145);c.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root"))},74:function(e,t,a){},76:function(e,t,a){}},[[169,1,2]]]);
//# sourceMappingURL=main.27437c68.chunk.js.map