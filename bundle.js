(()=>{"use strict";var t={365:(t,e,n)=>{n.d(e,{A:()=>d});var o=n(601),r=n.n(o),i=n(314),a=n.n(i)()(r());a.push([t.id,"body, html {\n    background-color: black;\n    color: white;\n    margin: 0;\n    height: 100%;\n    font-family: 'Montserrat', sans-serif;\n}\n\n.container {\n    height: 100%;\n    display: grid;\n    grid-template-columns: 300px 1fr;\n    grid-template-rows: 75px 1fr;\n}\n\n.barraSuperior {\n    grid-column-start: 1;\n    grid-column-end: 3;\n    border-bottom: 1px solid white;\n}\n.barraSuperior > h1 {\n    padding-left: 20px;\n}\n.barraLateralContainer {\n    grid-row: 2 / 3; \n    grid-column: 1; \n    border-right: 1px solid white;\n}\n.partecentral {\n    grid-row: 2 / 3; \n    grid-column: 2; \n    padding-left: 20px;\n    padding-right: 20px;\n}\n.barraLateral > div {\n    border: 1px solid white;\n    margin: 10px;\n    cursor: pointer;\n    height: 50px;\n}\n.anadirProyecto, .doDoAdd {\n    border: 1px solid white;\n    margin: 10px;\n    cursor: pointer;\n    display: grid;\n}\n.anadirProyecto {\n    height: 50px;\n    grid-template-columns: 1fr 60px;\n}\n.doDoAdd {\n    padding: 30px;\n    grid-template-columns: 1fr 120px 50px;\n    gap: 10px;\n}\n#taskDescription {\n    grid-column: span 2; \n}\n.anadirProyecto > input{\n    background-color: transparent; \n    height: 30px; \n    border: 1px solid white;\n    margin-top: auto; \n    margin-bottom: auto; \n    color: white; \n    font-size: 16px;\n    font-family: 'Montserrat', sans-serif; \n    margin-left: 10px;\n}\n\n.doDoAdd > input {\n    background-color: transparent; \n    height: 30px; \n    border: 1px solid white;\n    margin-top: auto; \n    margin-bottom: auto; \n    color: white; \n    font-size: 16px;\n    font-family: 'Montserrat', sans-serif; \n    margin-left: 10px;\n}\n.barraLateral > div > p {\n    padding-left: 10px;\n}\n\n#prioridad{\n    color: white;\n}\n.addToDo{\n    background-color: transparent;\n    color: white;\n    border: 1px solid white;\n}\n\n.buttonAddProject {\n    background-color: transparent;\n    height: 32px;\n    color: white;\n    border: 1px solid white;\n    margin: auto 10px;\n}\n.barraLateral > div {\n    display: grid;\n    grid-template-columns: 1fr 60px;\n}\n.barraLateral > div > button {\n    background-color: transparent;\n    height: 32px;\n    color: white;\n    border: 1px solid white;\n    margin: auto 10px;\n}\n.noborder{\n    border: 0px solid black !important;\n}\n.noborder:focus{\n    border: 0px solid black !important;\n    outline: none;\n}",""]);const d=a},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(o)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(a[s]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var i={},a=[],d=0;d<t.length;d++){var s=t[d],c=o.base?s[0]+o.base:s[0],l=i[c]||0,p="".concat(c," ").concat(l);i[c]=l+1;var u=n(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=r(m,o);o.byIndex=d,e.splice(d,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var i=o(t=t||[],r=r||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var d=n(i[a]);e[d].references--}for(var s=o(t,r),c=0;c<i.length;c++){var l=n(i[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},659:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return t[o](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0;var o=n(72),r=n.n(o),i=n(825),a=n.n(i),d=n(659),s=n.n(d),c=n(56),l=n.n(c),p=n(540),u=n.n(p),m=n(113),f=n.n(m),h=n(365),g={};g.styleTagTransform=f(),g.setAttributes=l(),g.insert=s().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=u(),r()(h.A,g),h.A&&h.A.locals&&h.A.locals;const v=document.getElementById("addProject"),y=document.getElementById("project");v.addEventListener("click",addProject),y.addEventListener("keypress",(t=>{"Enter"===t.key&&(w(),t.preventDefault())})),window.projects=[],window.toDoList=[];const b=t=>{document.getElementById("taskListPrint").innerHTML="",console.log(t);for(let e=0;e<window.toDoList.length;e++)if(toDoList[e].id===t){let t="";const n=`\n                  <div class="doDoAdd">\n                      <input readonly type="text" id="taskName" name="nombre" class="noborder" value="${toDoList[e].title}" required>\n                      <input readonly type="date" id="fecha" name="fecha" class="noborder" value="${toDoList[e].dueDate}" required>\n                      <input readonly type="number" id="prioridad" class="noborder" name="prioridad" min="1" max="5" value="${toDoList[e].priority}" required>\n                      <input readonly type="text" id="taskDescription" class="noborder" name="nombre" value="${toDoList[e].description}">\n                      <button class="addToDo" onClick="trashTask('${toDoList[e].idtask}' , '${toDoList[e].id}')" id="delTask"><i class="fas fa-trash"></i></button>\n                  </div>`;t=document.getElementById("taskListPrint").innerHTML,t+=n,document.getElementById("taskListPrint").innerHTML=t}D()};function x(t){return Array.from({length:t},(()=>Math.floor(10*Math.random()))).join("")}const w=()=>{const t=y.value;if(t){let e={name:t,id:x(10)};projects.push(e),L(),y.value=""}D()},L=()=>{const t=document.getElementById("barraLateral");t.innerHTML="";for(let e=0;e<projects.length;e++){const n=document.createElement("div");n.id=`project-${projects[e].name}`,n.innerHTML=`\n            <p onclick="visualize('${projects[e].id}')">${projects[e].name}</p>\n            <button onclick="deleteProject('${projects[e].id}')"> <i class="fas fa-trash"></i> </button>\n        `,t.appendChild(n)}};window.visualize=t=>{const e=projects.find((e=>e.id===t));if(document.getElementById("taskListPrint").innerHTML="",e){b(t);const n='\n        <div class="doDoAdd">\n            <input  type="text" id="taskName" name="nombre" placeholder="New Task" required>\n            <input  type="date" id="fecha" name="fecha" required>\n            <input  type="number" id="prioridad" name="prioridad" min="1" max="5" value="1" required>\n            <input  type="text" id="taskDescription" name="nombre" placeholder="Description">\n            <button class="addToDo" id="addTask">+</button>\n         \n        </div>';document.getElementById("toDoTitle").innerHTML=e.name,document.getElementById("taskList").innerHTML=n;const o=document.getElementById("taskName"),r=document.getElementById("fecha"),i=document.getElementById("prioridad"),a=document.getElementById("taskDescription"),d=document.getElementById("addTask"),s=t=>{const e=new k(o.value,a.value,r.value,i.value,t,x(10));toDoList.push(e),o.value="",r.value="",i.value=1,a.value="",b(t)};d.addEventListener("click",s),[o,r,i,a].forEach((e=>{e.addEventListener("keypress",(e=>{"Enter"===e.key&&(s(t),e.preventDefault())}))}))}D()},window.trashTask=(t,e)=>{const n=toDoList.findIndex((e=>e.idtask===t));if(n>=0&&n<window.toDoList.length){window.toDoList.splice(n,1),console.log(`La tarea con id ${t} ha sido eliminada.`);const e=toDoList[n]?.id;e&&b(e)}b(e)},window.deleteProject=t=>{const e=projects.findIndex((e=>e.id===t));e>=0&&e<window.projects.length?(window.projects.splice(e,1),console.log(`El proyecto con id ${t} ha sido eliminado.`),L()):console.log("Índice no válido.")};class k{constructor(t,e,n,o,r,i){this._title=t,this._description=e,this._dueDate=n,this._priority=o,this._id=r,this._idtask=i}get title(){return this._title}get id(){return this._id}get dueDate(){return this._dueDate}get priority(){return this._priority}get description(){return this._description}get idtask(){return this._idtask}}function D(){localStorage.setItem("projects",JSON.stringify(window.projects)),localStorage.setItem("toDoList",JSON.stringify(window.toDoList))}!function(){const t=localStorage.getItem("projects"),e=localStorage.getItem("toDoList");t&&(window.projects=JSON.parse(t)),e&&(window.toDoList=JSON.parse(e)),L()}()})();