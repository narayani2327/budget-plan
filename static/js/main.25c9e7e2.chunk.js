(this["webpackJsonpbudget-tracker"]=this["webpackJsonpbudget-tracker"]||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},16:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),l=a.n(r),s=(a(15),a(1)),u=a(8),m=a(2),o=function(e,t){switch(t.type){case"ADD_EXPENSE":return Object(m.a)(Object(m.a)({},e),{},{expenses:[].concat(Object(u.a)(e.expenses),[t.payload])});case"DELETE_EXPENSE":return Object(m.a)(Object(m.a)({},e),{},{expenses:e.expenses.filter((function(e){return e.id!==t.payload}))});case"SET_BUDGET":return Object(m.a)(Object(m.a)({},e),{},{budget:t.payload});default:return e}},i={budget:0,expenses:[]},d=Object(n.createContext)(),E=function(e){var t=Object(n.useReducer)(o,i),a=Object(s.a)(t,2),r=a[0],l=a[1];return c.a.createElement(d.Provider,{value:{expenses:r.expenses,budget:r.budget,dispatch:l}},e.children)},b=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("span",null,"Budget: \u20b9",e.budget),c.a.createElement("button",{type:"button",class:"btn btn-primary",onClick:e.handleEditClick},"Edit"))},p=function(e){var t=Object(n.useState)(e.budget),a=Object(s.a)(t,2),r=a[0],l=a[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{required:"required",type:"number",class:"form-control mr-3",id:"name",value:r,min:"0",onChange:function(e){return l(e.target.value)}}),c.a.createElement("button",{type:"button",class:"btn btn-success",onClick:function(){return e.handleSaveClick(r)}},"Save"))},f=function(){var e=Object(n.useContext)(d),t=e.budget,a=e.dispatch,r=Object(n.useState)(!1),l=Object(s.a)(r,2),u=l[0],m=l[1];return c.a.createElement("div",{class:"alert alert-secondary p-3 d-flex align-items-center justify-content-between"},u?c.a.createElement(p,{handleSaveClick:function(e){a({type:"SET_BUDGET",payload:e}),m(!1)},budget:t}):c.a.createElement(b,{handleEditClick:function(){m(!0)},budget:t}))},v=function(){var e=Object(n.useContext)(d).expenses.reduce((function(e,t){return e+t.cost}),0);return c.a.createElement("div",{class:"alert alert-primary p-4"},c.a.createElement("span",null,"Spent so far: \u20b9",e))},g=a(7),j=function(e){var t=Object(n.useContext)(d).dispatch;return c.a.createElement("li",{class:"list-group-item d-flex justify-content-between align-items-center"},e.name,c.a.createElement("div",null,c.a.createElement("span",{class:"badge badge-primary badge-pill mr-3"},"\u20b9 ",e.cost),c.a.createElement(g.a,{size:"1.5em",color:"red",onClick:function(){t({type:"DELETE_EXPENSE",payload:e.id})}})))},O=function(){var e=Object(n.useContext)(d).expenses,t=Object(n.useState)(e||[]),a=Object(s.a)(t,2),r=a[0],l=a[1];Object(n.useEffect)((function(){l(e)}),[e]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{type:"text",class:"form-control mb-2 mr-sm-2 search",placeholder:"Type to search...",onChange:function(t){var a=e.filter((function(e){return e.name.toLowerCase().includes(t.target.value)}));l(a)}}),c.a.createElement("ul",{class:"list-group mt-3 mb-3"},r.map((function(e){return c.a.createElement(j,{id:e.id,name:e.name,cost:e.cost})}))))},y=a(17),x=function(e){var t=Object(n.useContext)(d).dispatch,a=Object(n.useState)(""),r=Object(s.a)(a,2),l=r[0],u=r[1],m=Object(n.useState)(""),o=Object(s.a)(m,2),i=o[0],E=o[1];return c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={id:Object(y.a)(),name:l,cost:parseInt(i)};t({type:"ADD_EXPENSE",payload:a}),u(""),E("")}},c.a.createElement("div",{class:"row"},c.a.createElement("div",{class:"col-sm col-lg-4"},c.a.createElement("label",{for:"name"},"Name"),c.a.createElement("input",{required:"required",type:"text",class:"form-control",id:"name",value:l,onChange:function(e){return u(e.target.value)}})),c.a.createElement("div",{class:"col-sm col-lg-4"},c.a.createElement("label",{for:"cost"},"Cost"),c.a.createElement("input",{required:"required",type:"number",class:"form-control",id:"cost",min:"0",value:i,onChange:function(e){return E(e.target.value)}}))),c.a.createElement("div",{class:"row mt-3"},c.a.createElement("div",{class:"col-sm"},c.a.createElement("button",{type:"submit",class:"btn btn-success"},"Save"))))},h=function(){var e=Object(n.useContext)(d),t=e.expenses,a=e.budget,r=t.reduce((function(e,t){return e+t.cost}),0),l=r>a?"alert-danger":"alert-success";return c.a.createElement("div",{class:"alert p-4 ".concat(l)},c.a.createElement("span",null,"Remaining: \u20b9",a-r))},C=function(){return c.a.createElement(E,null,c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"mt-5 mb-5"},"My Budget Planner"),c.a.createElement("div",{className:"row mt-3"},c.a.createElement("div",{className:"col-sm"},c.a.createElement(f,null)),c.a.createElement("div",{className:"col-sm"},c.a.createElement(h,null)),c.a.createElement("div",{className:"col-sm"},c.a.createElement(v,null))),c.a.createElement("h3",{className:"mt-3"},"Expenses"),c.a.createElement("div",{className:"row "},c.a.createElement("div",{className:"col-sm"},c.a.createElement(O,null))),c.a.createElement("h3",{className:"mt-3"},"Add Expense"),c.a.createElement("div",{className:"row mt-3"},c.a.createElement("div",{className:"col-sm"},c.a.createElement(x,null)))))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(C,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.25c9e7e2.chunk.js.map