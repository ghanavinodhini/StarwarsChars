(this.webpackJsonpstarwars=this.webpackJsonpstarwars||[]).push([[0],{20:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(16),s=n.n(r),o=(n(31),n(32),n.p+"static/media/Star_Wars_logo.svg.d8726020.png"),i=n(17),l=n(2),u=n(10),j=n.n(u),d=n(12),h=n(9),b=(n(20),n(1));var p=function(){return Object(b.jsx)("thead",{children:Object(b.jsx)("tr",{className:"table-header",children:Object(b.jsx)("th",{children:Object(b.jsx)("h3",{children:"CHARACTERS"})})})})},x=n(25),O=n.n(x);n(46);var f=function(e){var t=e.character,n=Object(c.useState)(!1),a=Object(h.a)(n,2),r=a[0],s=a[1];return Object(b.jsxs)("tr",{className:"charRowDetails",children:[Object(b.jsx)("td",{style:{cursor:"pointer"},onClick:function(){return s(!0)},children:Object(b.jsx)("u",{children:t.name})}),Object(b.jsx)(O.a,{className:"modal-dialog",centered:!0,isOpen:r,onRequestClose:function(){return s(!1)},children:Object(b.jsxs)("div",{className:"modal-content",children:[Object(b.jsxs)("header",{className:"m-Header",children:[Object(b.jsx)("h2",{className:"modalHeader",children:t.name}),Object(b.jsxs)("span",{children:[" ",Object(b.jsx)("button",{className:"closeBtn",onClick:function(){return s(!1)},children:"\xd7"})," "]})]}),Object(b.jsxs)("div",{className:"m-Body",children:[Object(b.jsxs)("p",{className:"modalBirth",children:["Birth Year: ",t.birth_year]}),Object(b.jsxs)("p",{className:"modalGender",children:["Gender: ",t.gender]}),Object(b.jsxs)("p",{className:"modalHeight",children:["Height: ",t.height]}),Object(b.jsxs)("p",{className:"modalSkinColor",children:["Skin Color: ",t.skin_color]}),Object(b.jsxs)("p",{className:"modalHairColor",children:["Hair Color: ",t.hair_color]}),Object(b.jsxs)("p",{className:"modalEyeColor",children:["Eye Color: ",t.eye_color]})]})]})})]})};n(47);var g=function(e){var t=e.rows,n=e.nextPage,c=e.prevPage;return console.log("rows value in Table:"+t),console.log("Next value in Table:"+n.replace("http","https")),console.log("Prev value in Table:"+c.replace("http","https")),Object(b.jsx)("div",{children:Object(b.jsxs)("table",{className:"displayTable",cellPadding:0,cellSpacing:0,children:[Object(b.jsx)(p,{}),Object(b.jsx)("tbody",{children:t.map((function(e){return Object(b.jsx)(f,{character:e},e.name)}))})]})})},m=(n(48),n(11));var v=function(){var e,t,n,a=Object(c.useState)([]),r=Object(h.a)(a,2),s=r[0],o=r[1],i=Object(c.useState)(""),l=Object(h.a)(i,2),u=l[0],p=l[1],x=Object(c.useState)(""),O=Object(h.a)(x,2),f=O[0],v=O[1],N=Object(c.useState)(""),w=Object(h.a)(N,2),C=w[0],y=w[1];return Object(c.useEffect)((function(){function e(){return(e=Object(d.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi.dev/api/people/?format=json");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(" Data fetched in FetchDataApi:"+n.results),o(n.results),p(n.next),v(n.previous);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),null!==u&&(e=Object(b.jsxs)("button",{className:"nextBtn",onClick:function(){if(console.log("NextPg value:"+u),""!==u){var e=function(){var e=Object(d.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(u);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log("Next data fetched in currentTableData:"+n.results),o(n.results),p(n.next),v(n.previous);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log("Inside return"),e()}},"data-tooltip":"Next Page",style:{backgroundColor:"white",width:"50px",height:"30px",align:"center",cursor:"pointer",marginLeft:"200px"},children:[" ",Object(b.jsx)(m.a,{})," "]})),null!==f&&(console.log("Inside if condition previousPg value:"+f),t=Object(b.jsxs)("button",{className:"prevBtn",onClick:function(){if(console.log("PreviousPg value:"+f),""!==f){var e=function(){var e=Object(d.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(f);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log("Next data fetched in currentTableData:"+n.results),o(n.results),p(n.next),v(n.previous);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log("Inside return"),e()}},"data-tooltip":"Prev Page",style:{backgroundColor:"white",width:"50px",height:"30px",align:"center",cursor:"pointer",marginRight:"200px"},children:[" ",Object(b.jsx)(m.b,{})," "]})),Object(b.jsxs)("div",{className:"table-data-container",children:[Object(b.jsx)("div",{className:"searchBox",children:Object(b.jsx)("input",{type:"text",placeholder:"Search starwars character in this page",value:C,onChange:function(e){return y(e.target.value)}})}),Object(b.jsx)(g,{rows:(n=s,n.filter((function(e){return e.name.toLowerCase().indexOf(C)>-1}))),nextPage:u,prevPage:f}),t," ",e]})};var N=function(){return Object(b.jsx)(i.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("header",{className:"App-header",children:[" ",Object(b.jsx)("img",{src:o,alt:"",height:100,width:250})," "]}),Object(b.jsx)(l.c,{children:Object(b.jsx)(l.a,{path:"/",component:v})})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root")),w()}},[[54,1,2]]]);
//# sourceMappingURL=main.53c0340b.chunk.js.map