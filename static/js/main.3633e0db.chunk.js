(this["webpackJsonpletter-pairs-memo"]=this["webpackJsonpletter-pairs-memo"]||[]).push([[0],{10:function(e,t,r){},12:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),a=r(4),s=r.n(a),i=(r(9),r(2)),l=(r(10),function(e){var t=Math.trunc(e/60),r=e%60;return(t<10?"0"+t:t)+":"+(r<10?"0"+r:r)}),o=r(0),u=["start","memorized","check","do again"],j="ABCDEFGJKLMNOPQRSTUVWX";function b(e){var t=e.level,r=e.controlLevel,n=e.timeMemo,c=e.timeRecall,a=e.onRight,s=e.numberAttempts;return Object(o.jsxs)("div",{className:"painel-start",children:[Object(o.jsx)("h5",{children:"Put Your Desire Level (Max 11)"}),Object(o.jsxs)("div",{className:"painel-level",children:[Object(o.jsx)("button",{onClick:function(){return r(-1)},className:"waves-effect waves-light btn-large",children:Object(o.jsx)("i",{className:"material-icons",children:"arrow_downward"})}),Object(o.jsx)("div",{className:"level-display",children:Object(o.jsx)("h1",{children:t})}),Object(o.jsx)("button",{onClick:function(){return r(1)},className:"waves-effect waves-light btn-large",children:Object(o.jsx)("i",{className:"material-icons",children:"arrow_upward"})})]}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("h5",{children:["Number Attempts: ",s]}),Object(o.jsxs)("h5",{children:["Last Result: ",null===a?"Unkown":a?"Right":"Wrong"]}),Object(o.jsxs)("h5",{children:["Last Time Memo: ",l(n)]}),Object(o.jsxs)("h5",{children:["Last Time Recall: ",l(c)]})]})]})}function h(e){var t=e.letterPairs;return Object(o.jsx)("div",{className:"grid-pairs",children:t.map((function(e){return Object(o.jsx)("div",{className:"letter-pair",children:e})}))})}function d(e){var t=e.pairsToCheck,r=e.setPairsToCheck;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h5",{children:"Put the pairs in the right order using space between them:"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",value:t,onChange:function(e){return r(e.target.value.toUpperCase())},autoFocus:!0})]})}function O(e){var t=e.letterPairs,r=e.answers,n=e.pairsToCheck.split(" "),c=-1,a={borderColor:"red",color:"red"},s={borderColor:"#64dd17",color:"#64dd17"};return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"grid-pairs",children:t.map((function(e){return Object(o.jsx)("div",{className:"letter-pair",children:e})}))}),Object(o.jsx)("div",{className:"grid-pairs",children:n.map((function(e){return c++,Object(o.jsx)("div",{style:r[c]?s:a,className:"letter-pair",children:e})}))})]})}var v=function(){var e=Object(n.useState)(1),t=Object(i.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)(0),s=Object(i.a)(a,2),l=s[0],v=s[1],f=Object(n.useState)(0),m=Object(i.a)(f,2),p=m[0],x=m[1],g=Object(n.useState)(!1),S=Object(i.a)(g,2),k=S[0],C=S[1],N=Object(n.useState)(!1),w=Object(i.a)(N,2),I=w[0],P=w[1],T=Object(n.useState)(!1),L=Object(i.a)(T,2),M=L[0],R=L[1],y=Object(n.useState)(u[0]),F=Object(i.a)(y,2),A=F[0],B=F[1],D=Object(n.useState)([]),J=Object(i.a)(D,2),U=J[0],W=J[1],E=Object(n.useState)(""),_=Object(i.a)(E,2),z=_[0],G=_[1],K=Object(n.useState)([]),Q=Object(i.a)(K,2),V=Q[0],X=Q[1],Y=Object(n.useState)(null),q=Object(i.a)(Y,2),H=q[0],Z=q[1],$=Object(n.useState)(0),ee=Object(i.a)($,2),te=ee[0],re=ee[1],ne=function(){ce(),ae()},ce=function(){for(var e=2*r,t=[],n=function(e,t){for(var r=[],n=function(){var e=Math.floor(Math.random()*t);r.some((function(t){return t===e}))||r.push(e)};r.length<e;)n();return r}(e,j.length),c=0;c<e;c+=2){var a=j[n[c]]+j[n[c+1]];t.push(a)}W(t)},ae=function(){var e=l;if(!k){var t=setInterval((function(){e++,v(e)}),1e3);localStorage.clear(),localStorage.setItem("intervalId",t)}k&&clearInterval(localStorage.getItem("intervalId"))},se=function(){ie(),le(),oe()},ie=function(){var e=[],t=z.replace(/\s+/g,"").match(/.{1,2}/g);if(null!==t){for(var n in U)U[n]===t[n]?e.push(!0):e.push(!1);X(e),G(t.join(" ")),t.length===U.length&&e.every((function(e){return e}))?(c(r<11?function(e){return e+1}:r),Z(!0)):(c(r>1?function(e){return e-1}:r),Z(!1))}else c(r>1?function(e){return e-1}:r)},le=function(){var e=p;if(!I){var t=setInterval((function(){e++,x(e)}),1e3);localStorage.clear(),localStorage.setItem("intervalId2",t)}I&&clearInterval(localStorage.getItem("intervalId2"))},oe=function(){re((function(e){return e+1}))};return Object(o.jsxs)("div",{className:"painel center-align",children:[Object(o.jsx)("h4",{children:Object(o.jsx)("u",{children:"LetterPair Memory Trainer"})}),k?Object(o.jsx)(h,{level:r,letterPairs:U}):I?Object(o.jsx)(d,{pairsToCheck:z,setPairsToCheck:G}):M?Object(o.jsx)(O,{answers:V,pairsToCheck:z,letterPairs:U}):Object(o.jsx)(b,{numberAttempts:te,onRight:H,timeMemo:l,timeRecall:p,level:r,controlLevel:function(e){if(r>=1&&r<=11){if(1===r&&e<0)return;if(11===r&&e>0)return;c((function(t){return t+e}))}}}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{onClick:function(){return function(){switch(A){case u[0]:B(u[1]),C(!0),v(0),x(0),ne();break;case u[1]:B(u[2]),C(!1),P(!0),ae(),le();break;case u[2]:B(u[3]),R(!0),P(!1),se();break;case u[3]:B(u[0]),R(!1),X([]),G("");break;default:B(u[0]),R(!1),C(!1),P(!1)}}()},className:"btn-large",children:A}),k||I||M?Object(o.jsx)("h6",{}):Object(o.jsx)("h6",{children:"by Willian Pessoa"})]})},f=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,13)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;r(e),n(e),c(e),a(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root")),f()},9:function(e,t,r){}},[[12,1,2]]]);
//# sourceMappingURL=main.3633e0db.chunk.js.map