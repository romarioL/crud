(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a.p+"static/media/logo.6777486e.png"},43:function(e,t,a){e.exports=a(91)},49:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){},62:function(e,t,a){},64:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){},89:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(31),c=a.n(r),o=(a(49),a(51),a(53),a(55),a(57),a(32)),s=a.n(o),i=a(8),m=function(e){return l.a.createElement("aside",{className:"logo"},l.a.createElement(i.b,{to:"/",className:"logo"},l.a.createElement("img",{src:s.a,alt:"Logo"})))},u=(a(62),function(e){return l.a.createElement("aside",{className:"menu-area"},l.a.createElement("nav",{className:"menu"},l.a.createElement(i.b,{to:"/"},l.a.createElement("i",{className:"fa fa-home"}),"In\xedcio"),l.a.createElement(i.b,{to:"/users"},l.a.createElement("i",{className:"fa fa-users"}),"Usu\xe1rios")))}),d=(a(64),function(e){return l.a.createElement("footer",{className:"footer"},l.a.createElement("span",null,"Desenvolvido com ",l.a.createElement("i",{className:"fa fa-heart text-danger"})," por ",l.a.createElement("strong",null,"Cod",l.a.createElement("span",{className:"text-danger"},"3"),"r")))}),E=a(10),f=(a(66),a(68),function(e){return l.a.createElement("header",{className:"header d-none d-sm-flex flex-column"},l.a.createElement("h1",{className:"mt-3"},l.a.createElement("i",{className:"fa fa-".concat(e.icon)}),e.title),l.a.createElement("p",{className:"lead text-muted"},e.subtitle))}),h=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(f,e),l.a.createElement("main",{className:"content container-fluid"},l.a.createElement("div",{className:"p-3 mt-3"},e.children)))},v=function(e){return l.a.createElement(h,{icon:"home",title:"In\xedcio",subtitle:"Segundo projeto do ca\u1e55itulo de React."},l.a.createElement("div",{className:"display-4"},"Bem-vindo!"),l.a.createElement("hr",null),l.a.createElement("p",{className:"mb-0"},"Sistema para exemplificar a constru\xe7\xe3o de um cadastro de usu\xe1rio desenvolvido em React."))},p=a(23),b=a(38),N=a(39),g=a(41),y=a(40),k=a(42),w=a(17),x=a.n(w),C=(a(89),"http://localhost:3001/users"),j={user:{name:"",email:""},list:[]},S={icon:"users",title:"Usu\xe1rios",subtitle:"Cadastro de usu\xe1rios: Incluir, Listar, Alterar, e Excluir"},O=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(g.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(l)))).state=Object(p.a)({},j),a}return Object(k.a)(t,e),Object(N.a)(t,[{key:"componentWillMount",value:function(){var e=this;x()(C).then(function(t){e.setState({list:t.data})})}},{key:"clear",value:function(){this.setState({user:j.user})}},{key:"save",value:function(){var e=this,t=this.state.user,a=t.id?"put":"post",n=t.id?"".concat(C,"/").concat(t.id):C;x.a[a](n,t).then(function(t){var a=e.getUpdatedList(t.data);e.setState({user:j.user,list:a})})}},{key:"getUpdatedList",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=this.state.list.filter(function(t){return t.id!==e.id});return t&&a.unshift(e),a}},{key:"updateField",value:function(e){var t=Object(p.a)({},this.state.user);t[e.target.name]=e.target.value,this.setState({user:t})}},{key:"renderForm",value:function(){var e=this;return l.a.createElement("div",{className:"form"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Nome"),l.a.createElement("input",{type:"text",className:"form-control",name:"name",value:this.state.user.name,onChange:function(t){return e.updateField(t)},placeholder:"Digite seu nome..."}))),l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"E-mail"),l.a.createElement("input",{type:"text",className:"form-control",name:"email",value:this.state.user.email,onChange:function(t){return e.updateField(t)},placeholder:"Digite seu E-mail..."})))),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 d-flex justify-content-end"},l.a.createElement("button",{className:"btn btn-primary",onClick:function(t){return e.save(t)}},"Salvar"),l.a.createElement("button",{className:"btn btn-secondary ml-2",onClick:function(t){return e.save(t)}},"Cancelar"))))}},{key:"load",value:function(e){this.setState({user:e})}},{key:"remove",value:function(e){var t=this;x.a.delete("".concat(C,"/").concat(e.id)).then(function(a){var n=t.getUpdatedList(e,!1);t.setState({list:n})})}},{key:"renderTable",value:function(){return l.a.createElement("table",{className:"table mt-4"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Nome"),l.a.createElement("th",null,"E-mail"),l.a.createElement("th",null,"A\xe7\xf5es"))),l.a.createElement("tbody",null,this.renderRows()))}},{key:"renderRows",value:function(){var e=this;return this.state.list.map(function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.email),l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-warning"},l.a.createElement("i",{className:"fa fa-pencil",onClick:function(){return e.load(t)}}))),l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-danger ml-2"},l.a.createElement("i",{className:"fa fa-trash",onClick:function(){return e.remove(t)}}))))})}},{key:"render",value:function(){return l.a.createElement(h,S,this.renderForm(),this.renderTable())}}]),t}(n.Component),F=function(e){return l.a.createElement(E.c,null,l.a.createElement(E.b,{exact:!0,path:"/",component:v}),l.a.createElement(E.b,{path:"/users",component:O}),l.a.createElement(E.a,{from:"*",to:"/"}))},L=function(e){return l.a.createElement(i.a,null,l.a.createElement("div",{className:"app"},l.a.createElement(m,null),l.a.createElement(u,null),l.a.createElement(F,null),l.a.createElement(d,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,2,1]]]);
//# sourceMappingURL=main.bb8cb5cb.chunk.js.map