(function(){"use strict";var n={6863:function(n,e,t){var o=t(9242),l=t(3396);const i={class:"header"},r=(0,l.Uk)("Back"),u=(0,l.Uk)("First "),a=(0,l._)("br",null,null,-1),s=(0,l.Uk)(" list"),c=(0,l.Uk)("Second "),d=(0,l._)("br",null,null,-1),p=(0,l.Uk)(" list");function h(n,e){const t=(0,l.up)("router-link"),o=(0,l.up)("router-view");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",i,[(0,l._)("nav",null,[(0,l.Wm)(t,{to:"/",class:"b"},{default:(0,l.w5)((()=>[r])),_:1}),(0,l.Wm)(t,{to:"/ListOne"},{default:(0,l.w5)((()=>[u,a,s])),_:1}),(0,l.Wm)(t,{to:"/ListTwo"},{default:(0,l.w5)((()=>[c,d,p])),_:1})])]),(0,l.Wm)(o)],64)}var f=t(89);const v={},w=(0,f.Z)(v,[["render",h]]);var m=w,g=t(2483);function k(n,e,t,o,i,r){return(0,l.wg)(),(0,l.iD)("div")}var _={name:"Home_Page"};const b=(0,f.Z)(_,[["render",k]]);var y=b,O=t(7139);const C={class:"card"},D={class:"form-control"},V=["placeholder","value"],T=(0,l._)("hr",null,null,-1),U={key:0,class:"list"},j=["onClick"],x={key:1,class:"null"};function z(n,e,t,i,r,u){return(0,l.wg)(),(0,l.iD)("div",C,[(0,l._)("div",D,[(0,l._)("h1",null,(0,O.zw)(r.title),1),(0,l._)("input",{type:"text",placeholder:r.myplaceholder,value:r.inputValue,onInput:e[0]||(e[0]=(...n)=>u.inputChange&&u.inputChange(...n)),onKeypress:e[1]||(e[1]=(0,o.D2)(((...n)=>u.addnew&&u.addnew(...n)),["enter"]))},null,40,V)]),(0,l._)("button",{class:"btn_add",onClick:e[2]||(e[2]=(...n)=>u.addnew&&u.addnew(...n))},"Add"),T,0!==r.notes.length?((0,l.wg)(),(0,l.iD)("ol",U,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.notes,((n,e)=>((0,l.wg)(),(0,l.iD)("li",{class:"list-item",key:e},[(0,l.Uk)((0,O.zw)(e+1)+". "+(0,O.zw)(n)+" ",1),(0,l._)("button",{class:"btn_delete",onClick:n=>u.removenote(e)},"delete",8,j)])))),128))])):(0,l.kq)("",!0),0===r.notes.length?((0,l.wg)(),(0,l.iD)("div",x,"Список заметок пока пуст.")):(0,l.kq)("",!0)])}t(7658);var q={name:"Todo_One",data(){return{title:"Список заметок 1",myplaceholder:"Введите заметку...",inputValue:"",notes:[],show:!1}},methods:{inputChange(n){this.inputValue=n.target.value},addnew(){""!==this.inputValue&&(this.notes.push(this.inputValue),this.inputValue="")},removenote(n){this.notes.splice(n,1)}}};const H=(0,f.Z)(q,[["render",z]]);var K=H;const L={class:"card"},P={class:"form-control"},W=["placeholder","value"],Z=(0,l._)("hr",null,null,-1),F={key:0,class:"list"},Y=["onClick"],A={key:1,class:"null"};function I(n,e,t,i,r,u){return(0,l.wg)(),(0,l.iD)("div",L,[(0,l._)("div",P,[(0,l._)("h1",null,(0,O.zw)(r.title),1),(0,l._)("input",{type:"text",placeholder:r.myplaceholder,value:r.inputValue,onInput:e[0]||(e[0]=(...n)=>u.inputChange&&u.inputChange(...n)),onKeypress:e[1]||(e[1]=(0,o.D2)(((...n)=>u.addnew&&u.addnew(...n)),["enter"]))},null,40,W)]),(0,l._)("button",{class:"btn_add",onClick:e[2]||(e[2]=(...n)=>u.addnew&&u.addnew(...n))},"Add"),Z,0!==r.notes.length?((0,l.wg)(),(0,l.iD)("ol",F,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.notes,((n,e)=>((0,l.wg)(),(0,l.iD)("li",{class:"list-item",key:e},[(0,l.Uk)((0,O.zw)(e+1)+". "+(0,O.zw)(n)+" ",1),(0,l._)("button",{class:"btn_delete",onClick:n=>u.removenote(e)},"delete",8,Y)])))),128))])):(0,l.kq)("",!0),0===r.notes.length?((0,l.wg)(),(0,l.iD)("div",A,"Список заметок пока пуст.")):(0,l.kq)("",!0)])}var S={name:"Todo_Two",data(){return{title:"Список заметок 2",myplaceholder:"Введите заметку...",inputValue:"",notes:[],show:!1}},methods:{inputChange(n){this.inputValue=n.target.value},addnew(){""!==this.inputValue&&(this.notes.push(this.inputValue),this.inputValue="")},removenote(n){this.notes.splice(n,1)}}};const B=(0,f.Z)(S,[["render",I]]);var E=B;const M=[{path:"/",name:"back",component:y},{path:"/ListOne",name:"First",component:K},{path:"/ListTwo",name:"Second",component:E}],G=(0,g.p7)({history:(0,g.PO)(),mode:"history",routes:M});var J=G;(0,o.ri)(m).use(J).mount("#app")}},e={};function t(o){var l=e[o];if(void 0!==l)return l.exports;var i=e[o]={exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,function(){var n=[];t.O=function(e,o,l,i){if(!o){var r=1/0;for(c=0;c<n.length;c++){o=n[c][0],l=n[c][1],i=n[c][2];for(var u=!0,a=0;a<o.length;a++)(!1&i||r>=i)&&Object.keys(t.O).every((function(n){return t.O[n](o[a])}))?o.splice(a--,1):(u=!1,i<r&&(r=i));if(u){n.splice(c--,1);var s=l();void 0!==s&&(e=s)}}return e}i=i||0;for(var c=n.length;c>0&&n[c-1][2]>i;c--)n[c]=n[c-1];n[c]=[o,l,i]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,o){var l,i,r=o[0],u=o[1],a=o[2],s=0;if(r.some((function(e){return 0!==n[e]}))){for(l in u)t.o(u,l)&&(t.m[l]=u[l]);if(a)var c=a(t)}for(e&&e(o);s<r.length;s++)i=r[s],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(c)},o=self["webpackChunktodo"]=self["webpackChunktodo"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(6863)}));o=t.O(o)})();
//# sourceMappingURL=app.80a5cbec.js.map