(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports={Container:"Container_Container__14gV0"}},,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(7),o=n.n(c),i=(n(19),n(12)),l=n(3),s=n(4),u=n(6),d=n(5),h=n(13),b=n(11),m=n.n(b),j=n(0);var f=function(e){var t=e.children;return Object(j.jsx)("div",{className:m.a.Container,children:t})},p=n(2),v=(n(21),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleNameChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(p.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.props.onClose(),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(j.jsx)("form",{className:"Form",onSubmit:this.handleSubmit,children:Object(j.jsxs)("div",{className:"Form__box",children:[Object(j.jsx)("label",{className:"Form__label",children:"Name"}),Object(j.jsx)("input",{className:"Form__input",value:t,onChange:this.handleNameChange,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),Object(j.jsx)("label",{className:"Form__label",children:"Number"}),Object(j.jsx)("input",{className:"Form__input",value:n,onChange:this.handleNameChange,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),Object(j.jsx)("button",{className:"Form__button",type:"submit",children:"Add contact"})]})})}}]),n}(a.Component)),O=v,g=(n(22),n(9)),y=n(14),w=(n(23),["children","onClick"]),x=function(e){var t=e.children,n=e.onClick,a=Object(y.a)(e,w);return Object(j.jsx)("button",Object(g.a)(Object(g.a)({type:"button",className:"IconButton",onClick:n},a),{},{children:t}))};x.defaultProps={onClick:function(){return null},children:null};var C,k=x,N=["title","titleId"];function _(){return _=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},_.apply(this,arguments)}function S(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function M(e,t){var n=e.title,r=e.titleId,c=S(e,N);return a.createElement("svg",_({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:t,"aria-labelledby":r},c),void 0===n?a.createElement("title",{id:r},"minus"):n?a.createElement("title",{id:r},n):null,C||(C=a.createElement("path",{d:"M0 13v6c0 0.552 0.448 1 1 1h30c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1h-30c-0.552 0-1 0.448-1 1z"})))}var E=a.forwardRef(M);n.p;var D=function(e){var t=e.name,n=e.number,a=e.onDelete;return Object(j.jsxs)("div",{className:"contact",children:[Object(j.jsxs)("li",{className:"contact__item",children:[t,": ",n]}),Object(j.jsx)(k,{onClick:function(){return a(t)},"aria-label":"minus",children:Object(j.jsx)(E,{width:"20",height:"20"})})]})},F=n(10),B=n.n(F);D.propTypes={contacts:B.a.array,onDelete:B.a.func};var I=function(e){var t=e.contacts,n=e.onDelete;return Object(j.jsx)("ul",{children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(j.jsx)(D,{name:a,number:r,onDelete:n},t)}))})};n(26);var P,A=function(e){var t=e.value,n=e.onChange;return Object(j.jsxs)("div",{className:"filter",children:[Object(j.jsx)("label",{className:"filter__label",children:"Find contacts by name"}),Object(j.jsx)("input",{className:"filter__input",type:"text",value:t,onChange:n})]})},z=["title","titleId"];function J(){return J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},J.apply(this,arguments)}function L(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function T(e,t){var n=e.title,r=e.titleId,c=L(e,z);return a.createElement("svg",J({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:t,"aria-labelledby":r},c),void 0===n?a.createElement("title",{id:r},"plus"):n?a.createElement("title",{id:r},n):null,P||(P=a.createElement("path",{d:"M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"})))}var q=a.forwardRef(T),K=(n.p,n(27),document.querySelector("#modal-root")),Z=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e;return Object(c.createPortal)(Object(j.jsx)("div",(e={className:"Modal__backdrop",onClick:this.handleBackdropClick},Object(p.a)(e,"onClick",this.handleBackdropClick),Object(p.a)(e,"children",Object(j.jsx)("div",{className:"Modal__content",children:this.props.children})),e)),K)}}]),n}(a.Component),R=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[],filter:"",showModal:!1},e.addContact=function(t){var n=t.name,a=t.number;e.state.contacts.map((function(e){return e.name})).includes(n)?alert("".concat(n," is already in contacts")):e.setState((function(e){return{contacts:[].concat(Object(i.a)(e.contacts),[{name:n,number:a,id:Object(h.a)()}])}}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.name!==t}))}}))},e.handleFilterChange=function(t){e.setState({filter:t.currentTarget.value})},e.visibleContactsByName=function(){var t=e.state,n=t.filter,a=t.contacts,r=n.toLowerCase();return a.filter((function(e){return e.name.toLowerCase().includes(r)}))},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("contacts"),t=JSON.parse(e);this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(e){var t=this.state.contacts;t!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(t))}},{key:"render",value:function(){var e=this.visibleContactsByName();return Object(j.jsxs)(f,{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(k,{"aria-label":"plus",onClick:this.toggleModal,children:Object(j.jsx)(q,{width:"20",height:"20"})})]}),this.state.showModal&&Object(j.jsx)(Z,{onClose:this.toggleModal,children:Object(j.jsx)(O,{onSubmit:this.addContact,onClose:this.toggleModal})}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(A,{value:this.filter,onChange:this.handleFilterChange}),Object(j.jsx)(I,{contacts:e,onDelete:this.deleteContact})]})}}]),n}(a.Component),U=R;o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(U,{})}),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.293db825.chunk.js.map