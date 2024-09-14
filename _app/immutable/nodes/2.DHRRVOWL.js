import{s as S,n as f,x as Ne,y as Ge,b as Re}from"../chunks/scheduler.D9Mk-h9A.js";import{S as L,i as z,e as h,c as u,d,g as r,o as s,j as _,k as n,y as Oe,z as we,A as w,B as k,u as B,s as D,b as pe,v as A,h as M,C as $,f as fe,w as T,t as H,a as j,x as N}from"../chunks/index.DVX-LabS.js";import{p as Je}from"../chunks/stores.XhdSTQGp.js";function Te(o){return(o==null?void 0:o.length)!==void 0?o:Array.from(o)}function He(o,e,l){const t=o.slice();return t[3]=e[l],t[5]=l,t}function je(o){let e,l;return{c(){e=h("img"),this.h()},l(t){e=u(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){Ne(e.src,l=o[3])||s(e,"src",l),s(e,"alt","avatar"),s(e,"class","svelte-4snuv0"),we(e,"visible",o[5]===o[0]),we(e,"hidden",o[5]!=o[0])},m(t,a){_(t,e,a)},p(t,a){a&1&&we(e,"visible",t[5]===t[0]),a&1&&we(e,"hidden",t[5]!=t[0])},d(t){t&&r(e)}}}function Fe(o){let e,l,t=Te(o[1]),a=[];for(let i=0;i<t.length;i+=1)a[i]=je(He(o,t,i));return{c(){e=h("div"),l=h("div");for(let i=0;i<a.length;i+=1)a[i].c();this.h()},l(i){e=u(i,"DIV",{class:!0});var c=d(e);l=u(c,"DIV",{class:!0});var v=d(l);for(let p=0;p<a.length;p+=1)a[p].l(v);v.forEach(r),c.forEach(r),this.h()},h(){s(l,"class","avatar"),s(e,"class","root svelte-4snuv0")},m(i,c){_(i,e,c),n(e,l);for(let v=0;v<a.length;v+=1)a[v]&&a[v].m(l,null)},p(i,[c]){if(c&3){t=Te(i[1]);let v;for(v=0;v<t.length;v+=1){const p=He(i,t,v);a[v]?a[v].p(p,c):(a[v]=je(p),a[v].c(),a[v].m(l,null))}for(;v<a.length;v+=1)a[v].d(1);a.length=t.length}},i:f,o:f,d(i){i&&r(e),Oe(a,i)}}}function We(o,e,l){let t=["avatar1.png","avatar2.png","avatar3.png"],a=0,i=1;return setInterval(()=>{l(0,a=(a+1)%t.length),i=(i+1)%t.length},1e4),[a,t]}class Ue extends L{constructor(e){super(),z(this,e,We,Fe,S,{})}}function Qe(o){let e,l,t;return{c(){e=w("svg"),l=w("path"),t=w("polyline"),this.h()},l(a){e=k(a,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var i=d(e);l=k(i,"path",{d:!0}),d(l).forEach(r),t=k(i,"polyline",{points:!0}),d(t).forEach(r),i.forEach(r),this.h()},h(){s(l,"d","M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"),s(t,"points","22,6 12,13 2,6"),s(e,"xmlns","http://www.w3.org/2000/svg"),s(e,"width",o[0]),s(e,"height",o[0]),s(e,"viewBox","0 0 24 24"),s(e,"fill","none"),s(e,"stroke",o[1]),s(e,"stroke-width","2"),s(e,"stroke-linecap","round"),s(e,"stroke-linejoin","round"),s(e,"class","feather feather-mail svelte-1342i8a")},m(a,i){_(a,e,i),n(e,l),n(e,t)},p(a,[i]){i&1&&s(e,"width",a[0]),i&1&&s(e,"height",a[0]),i&2&&s(e,"stroke",a[1])},i:f,o:f,d(a){a&&r(e)}}}function Xe(o,e,l){let{size:t=24}=e,{color:a="currentColor"}=e;return o.$$set=i=>{"size"in i&&l(0,t=i.size),"color"in i&&l(1,a=i.color)},[t,a]}class Ze extends L{constructor(e){super(),z(this,e,Xe,Qe,S,{size:0,color:1})}}function Ke(o){let e,l;return{c(){e=w("svg"),l=w("path"),this.h()},l(t){e=k(t,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var a=d(e);l=k(a,"path",{d:!0}),d(l).forEach(r),a.forEach(r),this.h()},h(){s(l,"d","M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"),s(e,"xmlns","http://www.w3.org/2000/svg"),s(e,"width",o[0]),s(e,"height",o[0]),s(e,"viewBox","0 0 24 24"),s(e,"fill","none"),s(e,"stroke",o[1]),s(e,"stroke-width","2"),s(e,"stroke-linecap","round"),s(e,"stroke-linejoin","round"),s(e,"class","feather feather-phone-call svelte-1yq0g2a")},m(t,a){_(t,e,a),n(e,l)},p(t,[a]){a&1&&s(e,"width",t[0]),a&1&&s(e,"height",t[0]),a&2&&s(e,"stroke",t[1])},i:f,o:f,d(t){t&&r(e)}}}function Ye(o,e,l){let{size:t=24}=e,{color:a="currentColor"}=e;return o.$$set=i=>{"size"in i&&l(0,t=i.size),"color"in i&&l(1,a=i.color)},[t,a]}class et extends L{constructor(e){super(),z(this,e,Ye,Ke,S,{size:0,color:1})}}function tt(o){let e,l,t;return{c(){e=w("svg"),l=w("path"),t=w("circle"),this.h()},l(a){e=k(a,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var i=d(e);l=k(i,"path",{d:!0}),d(l).forEach(r),t=k(i,"circle",{cx:!0,cy:!0,r:!0}),d(t).forEach(r),i.forEach(r),this.h()},h(){s(l,"d","M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"),s(t,"cx","12"),s(t,"cy","10"),s(t,"r","3"),s(e,"xmlns","http://www.w3.org/2000/svg"),s(e,"width",o[0]),s(e,"height",o[0]),s(e,"viewBox","0 0 24 24"),s(e,"fill","none"),s(e,"stroke",o[1]),s(e,"stroke-width","2"),s(e,"stroke-linecap","round"),s(e,"stroke-linejoin","round"),s(e,"class","feather feather-map-pin svelte-1lh7xnf")},m(a,i){_(a,e,i),n(e,l),n(e,t)},p(a,[i]){i&1&&s(e,"width",a[0]),i&1&&s(e,"height",a[0]),i&2&&s(e,"stroke",a[1])},i:f,o:f,d(a){a&&r(e)}}}function st(o,e,l){let{size:t=24}=e,{color:a="currentColor"}=e;return o.$$set=i=>{"size"in i&&l(0,t=i.size),"color"in i&&l(1,a=i.color)},[t,a]}class at extends L{constructor(e){super(),z(this,e,st,tt,S,{size:0,color:1})}}function it(o){let e,l,t,a,i,c,v,p,I,C,E;return{c(){e=w("svg"),l=w("g"),t=w("g"),a=w("g"),i=w("g"),c=w("path"),v=w("path"),p=w("path"),I=w("path"),C=w("path"),E=w("path"),this.h()},l(m){e=k(m,"svg",{fill:!0,height:!0,width:!0,stroke:!0,version:!0,id:!0,xmlns:!0,"xmlns:xlink":!0,viewBox:!0,"enable-background":!0,"xml:space":!0});var b=d(e);l=k(b,"g",{id:!0,"stroke-width":!0}),d(l).forEach(r),t=k(b,"g",{id:!0,"stroke-linecap":!0,"stroke-linejoin":!0}),d(t).forEach(r),a=k(b,"g",{id:!0});var g=d(a);i=k(g,"g",{id:!0});var x=d(i);c=k(x,"path",{d:!0}),d(c).forEach(r),v=k(x,"path",{d:!0}),d(v).forEach(r),p=k(x,"path",{d:!0}),d(p).forEach(r),I=k(x,"path",{d:!0}),d(I).forEach(r),C=k(x,"path",{d:!0}),d(C).forEach(r),E=k(x,"path",{d:!0}),d(E).forEach(r),x.forEach(r),g.forEach(r),b.forEach(r),this.h()},h(){s(l,"id","SVGRepo_bgCarrier"),s(l,"stroke-width","1"),s(t,"id","SVGRepo_tracerCarrier"),s(t,"stroke-linecap","round"),s(t,"stroke-linejoin","round"),s(c,"d","M58.3496017,4.1445498H5.6494002C2.5342,4.1445498,0,6.6786499,0,9.7939501v36.5263023 c0,3.1152992,2.5342,5.6493988,5.6494002,5.6493988h18.1132984c0.5528011,0,1-0.4472008,1-1c0-0.5527-0.4471989-1-1-1H5.6494002 C3.6368001,49.9696503,2,48.3329506,2,46.3202515V9.7939501C2,7.78125,3.6368001,6.1445498,5.6494002,6.1445498h52.7002029 C60.3623009,6.1445498,62,7.78125,62,9.7939501v36.5263023c0,2.0126991-1.6376991,3.6493988-3.6503983,3.6493988 c-0.5527,0-1,0.4473-1,1c0,0.5527992,0.4473,1,1,1C61.464901,51.9696503,64,49.4355507,64,46.3202515V9.7939501 C64,6.6786499,61.464901,4.1445498,58.3496017,4.1445498z"),s(v,"d","M22,32.1445503H10c-0.5527,0-1,0.4472008-1,1c0,0.5527,0.4473,1,1,1h12c0.5527992,0,1-0.4473,1-1 C23,32.5917511,22.5527992,32.1445503,22,32.1445503z"),s(p,"d","M22,38.6943512H10c-0.5527,0-1,0.447197-1,1c0,0.5527,0.4473,1,1,1h12c0.5527992,0,1-0.4473,1-1 C23,39.1415482,22.5527992,38.6943512,22,38.6943512z"),s(I,"d","M51.7373009,42.0009499c-0.0184021-0.0629997-0.0586014-0.1109009-0.0876007-0.167099 C53.7256012,39.5299492,55,36.4897499,55,33.1445503c0-7.1797009-5.8203011-13-13-13s-13,5.8202991-13,13 c0,3.3083992,1.2462006,6.3186989,3.2815018,8.6133995c-0.0209999,0.0455017-0.054203,0.0820999-0.0686035,0.1316986 l-4.2069988,14.4238014c-0.1103992,0.3788986,0.0116997,0.7860985,0.3115005,1.0419998 c0.2998009,0.2558022,0.7217007,0.3096008,1.0771999,0.1416016l4.4160004-2.097702l2.7743988,4.0235023 c0.1884995,0.2733994,0.4980011,0.4325981,0.8232002,0.4325981c0.0567017,0,0.1133003-0.0048981,0.170002-0.014698 c0.384697-0.0664024,0.6952972-0.3496017,0.7958984-0.7265015l3.476799-12.9772987 C41.9011002,46.1375504,41.9496994,46.1445503,42,46.1445503c0.0237999,0,0.0467987-0.0035019,0.0705986-0.0036011 l3.4773026,12.9733009c0.1005974,0.3759995,0.410099,0.6591988,0.7938995,0.7265015 c0.0575981,0.0098,0.1152992,0.014698,0.1718979,0.014698c0.3241997,0,0.6318016-0.1571999,0.8213005-0.4286995 l2.7831993-4.0038986l4.4111023,2.0760994c0.3544998,0.1660995,0.7753983,0.1103973,1.0761986-0.1455002 c0.2988014-0.2558022,0.419899-0.6621017,0.3096008-1.0400009L51.7373009,42.0009499z M42,22.1445503 c6.0654984,0,11,4.9344997,11,11c0,6.0653992-4.9345016,11-11,11c-6.0653992,0-11-4.9346008-11-11 C31,27.0790501,35.9346008,22.1445503,42,22.1445503z M37.0029984,56.5058517l-2.0292969-2.9424019 c-0.2784004-0.4033012-0.8067017-0.5479012-1.2520027-0.3358994l-3.1718979,1.5067978l3.3372993-11.441597 c1.6879005,1.3512001,3.7200012,2.2819977,5.9437981,2.6563988L37.0029984,56.5058517z M50.205101,53.2529488 c-0.4424019-0.2050972-0.9687004-0.0664978-1.2471008,0.3339005l-2.0360985,2.9296989L44.092701,45.9608498 c2.2247009-0.3610001,4.2586975-1.2793007,5.9528999-2.6175995l3.3274994,11.400898L50.205101,53.2529488z"),s(C,"d","M23,15.1445503c0-1.1046-0.8953991-2-2-2H11c-1.1044998,0-2,0.8954-2,2v10c0,1.1044998,0.8955002,2,2,2h10 c1.1046009,0,2-0.8955002,2-2V15.1445503z M21,25.1445503H11v-10h10V25.1445503z"),s(E,"d","M42,39.1445503c3.3138008,0,6-2.6863022,6-6c0-3.3138008-2.6861992-6-6-6c-3.3137016,0-6,2.6861992-6,6 C36,36.4582481,38.6862984,39.1445503,42,39.1445503z M42,29.1445503c2.2056999,0,4,1.7943001,4,4c0,2.2056007-1.7943001,4-4,4 c-2.2056007,0-4-1.7943993-4-4C38,30.9388504,39.7943993,29.1445503,42,29.1445503z"),s(i,"id","Certificate"),s(a,"id","SVGRepo_iconCarrier"),s(e,"fill","none"),s(e,"height",o[0]),s(e,"width",o[0]),s(e,"stroke",o[1]),s(e,"version","1.1"),s(e,"id","Layer_1"),s(e,"xmlns","http://www.w3.org/2000/svg"),s(e,"xmlns:xlink","http://www.w3.org/1999/xlink"),s(e,"viewBox","0 0 64 64"),s(e,"enable-background","new 0 0 64 64"),s(e,"xml:space","preserve")},m(m,b){_(m,e,b),n(e,l),n(e,t),n(e,a),n(a,i),n(i,c),n(i,v),n(i,p),n(i,I),n(i,C),n(i,E)},p(m,[b]){b&1&&s(e,"height",m[0]),b&1&&s(e,"width",m[0]),b&2&&s(e,"stroke",m[1])},i:f,o:f,d(m){m&&r(e)}}}function lt(o,e,l){let{size:t=24}=e,{color:a="currentColor"}=e;return o.$$set=i=>{"size"in i&&l(0,t=i.size),"color"in i&&l(1,a=i.color)},[t,a]}class ot extends L{constructor(e){super(),z(this,e,lt,it,S,{size:0,color:1})}}function nt(o){let e,l,t,a;return{c(){e=w("svg"),l=w("path"),t=w("rect"),a=w("circle"),this.h()},l(i){e=k(i,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var c=d(e);l=k(c,"path",{d:!0}),d(l).forEach(r),t=k(c,"rect",{x:!0,y:!0,width:!0,height:!0}),d(t).forEach(r),a=k(c,"circle",{cx:!0,cy:!0,r:!0}),d(a).forEach(r),c.forEach(r),this.h()},h(){s(l,"d","M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"),s(t,"x","2"),s(t,"y","9"),s(t,"width","4"),s(t,"height","12"),s(a,"cx","4"),s(a,"cy","4"),s(a,"r","2"),s(e,"xmlns","http://www.w3.org/2000/svg"),s(e,"width",o[0]),s(e,"height",o[0]),s(e,"viewBox","0 0 24 24"),s(e,"fill","none"),s(e,"stroke",o[1]),s(e,"stroke-width","2"),s(e,"stroke-linecap","round"),s(e,"stroke-linejoin","round"),s(e,"class","feather feather-linkedinfeather-linkedin")},m(i,c){_(i,e,c),n(e,l),n(e,t),n(e,a)},p(i,[c]){c&1&&s(e,"width",i[0]),c&1&&s(e,"height",i[0]),c&2&&s(e,"stroke",i[1])},i:f,o:f,d(i){i&&r(e)}}}function rt(o,e,l){let{size:t=24}=e,{color:a="currentColor"}=e;return o.$$set=i=>{"size"in i&&l(0,t=i.size),"color"in i&&l(1,a=i.color)},[t,a]}class ct extends L{constructor(e){super(),z(this,e,rt,nt,S,{size:0,color:1})}}function dt(o){let e,l,t,a;return{c(){e=h("div"),l=h("div"),t=h("img"),this.h()},l(i){e=u(i,"DIV",{class:!0});var c=d(e);l=u(c,"DIV",{class:!0});var v=d(l);t=u(v,"IMG",{src:!0,width:!0,height:!0,alt:!0}),v.forEach(r),c.forEach(r),this.h()},h(){Ne(t.src,a="GCP.png")||s(t,"src",a),s(t,"width",o[0]),s(t,"height",o[0]),s(t,"alt","gcp ace certified"),s(l,"class",Ge(o[1])+" svelte-1wuv8qf"),s(e,"class","root")},m(i,c){_(i,e,c),n(e,l),n(l,t)},p:f,i:f,o:f,d(i){i&&r(e)}}}function vt(o,e,l){let t;Re(o,Je,v=>l(2,t=v));const a=t.url.searchParams.has("pdf");return[a?"102":"172",a?"pdf":"browser"]}class ht extends L{constructor(e){super(),z(this,e,vt,dt,S,{})}}function ut(o){let e,l='<div><a href="VirgileDevaux-CV-202409.pdf" class="soft-link svelte-v9qe6o" target="_blank">Get the pdf version!</a></div>';return{c(){e=h("div"),e.innerHTML=l,this.h()},l(t){e=u(t,"DIV",{class:!0,"data-svelte-h":!0}),$(e)!=="svelte-1y98dw5"&&(e.innerHTML=l),this.h()},h(){s(e,"class","cv svelte-v9qe6o")},m(t,a){_(t,e,a)},d(t){t&&r(e)}}}function pt(o){let e,l,t,a,i,c,v,p,I,C="Virgile Devaux",E,m,b="Senior Backend Engineer<sup>++</sup>",g,x,q,P,Q,De="Master in CS",ke,V,R,X,xe,Z,Me="I live in  ",K,Se="Lyon, France",ye,J,Y,be,ee,Le="Reach me at  ",te,ze='<a class="soft-link svelte-v9qe6o" href="mailto:vdevaux@gmail.com" alt="Email">vdevaux@gmail.com</a>',Ie,G,se,Ce,ae,qe="just give me a call  ",ie,Pe="+33 (0)6 18 18 43 01",$e,O,le,_e,oe,Ve="or through ",ne,Be='<a class="soft-link svelte-v9qe6o" href="https://www.linkedin.com/in/virgile-devaux-67088882/" target="_blank">LinkedIn</a>',Ee,me;a=new Ue({}),c=new ht({}),q=new ot({props:{size:"18",color:"white"}}),X=new at({props:{size:"18",color:"white"}}),Y=new Ze({props:{size:"18",color:"white"}}),se=new et({props:{size:"18",color:"white"}}),le=new ct({props:{size:"18",color:"white"}});let F=!o[0]&&ut();return{c(){e=h("div"),l=h("div"),t=h("div"),B(a.$$.fragment),i=D(),B(c.$$.fragment),v=D(),p=h("div"),I=h("div"),I.textContent=C,E=D(),m=h("div"),m.innerHTML=b,g=D(),x=h("div"),B(q.$$.fragment),P=pe(" "),Q=h("span"),Q.textContent=De,ke=D(),V=h("div"),R=h("div"),B(X.$$.fragment),xe=pe("  "),Z=h("span"),Z.textContent=Me,K=h("span"),K.textContent=Se,ye=D(),J=h("div"),B(Y.$$.fragment),be=pe("  "),ee=h("span"),ee.textContent=Le,te=h("span"),te.innerHTML=ze,Ie=D(),G=h("div"),B(se.$$.fragment),Ce=pe("  "),ae=h("span"),ae.textContent=qe,ie=h("span"),ie.textContent=Pe,$e=D(),O=h("div"),B(le.$$.fragment),_e=pe("  "),oe=h("span"),oe.textContent=Ve,ne=h("span"),ne.innerHTML=Be,Ee=D(),F&&F.c(),this.h()},l(y){e=u(y,"DIV",{class:!0});var re=d(e);l=u(re,"DIV",{class:!0});var W=d(l);t=u(W,"DIV",{class:!0});var Ae=d(t);A(a.$$.fragment,Ae),Ae.forEach(r),i=M(W),A(c.$$.fragment,W),v=M(W),p=u(W,"DIV",{class:!0});var ce=d(p);I=u(ce,"DIV",{class:!0,"data-svelte-h":!0}),$(I)!=="svelte-139rpqx"&&(I.textContent=C),E=M(ce),m=u(ce,"DIV",{class:!0,"data-svelte-h":!0}),$(m)!=="svelte-urwzu4"&&(m.innerHTML=b),g=M(ce),x=u(ce,"DIV",{class:!0});var ge=d(x);A(q.$$.fragment,ge),P=fe(ge," "),Q=u(ge,"SPAN",{class:!0,"data-svelte-h":!0}),$(Q)!=="svelte-nbkysm"&&(Q.textContent=De),ge.forEach(r),ce.forEach(r),ke=M(W),V=u(W,"DIV",{class:!0});var U=d(V);R=u(U,"DIV",{class:!0});var de=d(R);A(X.$$.fragment,de),xe=fe(de,"  "),Z=u(de,"SPAN",{class:!0,"data-svelte-h":!0}),$(Z)!=="svelte-nkdlil"&&(Z.textContent=Me),K=u(de,"SPAN",{class:!0,"data-svelte-h":!0}),$(K)!=="svelte-ya72ti"&&(K.textContent=Se),de.forEach(r),ye=M(U),J=u(U,"DIV",{class:!0});var ve=d(J);A(Y.$$.fragment,ve),be=fe(ve,"  "),ee=u(ve,"SPAN",{class:!0,"data-svelte-h":!0}),$(ee)!=="svelte-16ebgsf"&&(ee.textContent=Le),te=u(ve,"SPAN",{class:!0,"data-svelte-h":!0}),$(te)!=="svelte-md4pc8"&&(te.innerHTML=ze),ve.forEach(r),Ie=M(U),G=u(U,"DIV",{class:!0});var he=d(G);A(se.$$.fragment,he),Ce=fe(he,"  "),ae=u(he,"SPAN",{class:!0,"data-svelte-h":!0}),$(ae)!=="svelte-14u1rkv"&&(ae.textContent=qe),ie=u(he,"SPAN",{class:!0,"data-svelte-h":!0}),$(ie)!=="svelte-m83td9"&&(ie.textContent=Pe),he.forEach(r),$e=M(U),O=u(U,"DIV",{class:!0});var ue=d(O);A(le.$$.fragment,ue),_e=fe(ue,"  "),oe=u(ue,"SPAN",{class:!0,"data-svelte-h":!0}),$(oe)!=="svelte-frdu7d"&&(oe.textContent=Ve),ne=u(ue,"SPAN",{class:!0,"data-svelte-h":!0}),$(ne)!=="svelte-1ulozug"&&(ne.innerHTML=Be),ue.forEach(r),U.forEach(r),W.forEach(r),Ee=M(re),F&&F.l(re),re.forEach(r),this.h()},h(){s(t,"class","avatar svelte-v9qe6o"),s(I,"class","name svelte-v9qe6o"),s(m,"class","current-position svelte-v9qe6o"),s(Q,"class","prefix svelte-v9qe6o"),s(x,"class","diploma"),s(p,"class","main svelte-v9qe6o"),s(Z,"class","prefix svelte-v9qe6o"),s(K,"class","info svelte-v9qe6o"),s(R,"class","location svelte-v9qe6o"),s(ee,"class","prefix svelte-v9qe6o"),s(te,"class","info svelte-v9qe6o"),s(J,"class","email svelte-v9qe6o"),s(ae,"class","prefix svelte-v9qe6o"),s(ie,"class","info svelte-v9qe6o"),s(G,"class","phone svelte-v9qe6o"),s(oe,"class","prefix svelte-v9qe6o"),s(ne,"class","info svelte-v9qe6o"),s(O,"class","linkedin svelte-v9qe6o"),s(V,"class","reach svelte-v9qe6o"),s(l,"class","header-container svelte-v9qe6o"),s(e,"class","root")},m(y,re){_(y,e,re),n(e,l),n(l,t),T(a,t,null),n(l,i),T(c,l,null),n(l,v),n(l,p),n(p,I),n(p,E),n(p,m),n(p,g),n(p,x),T(q,x,null),n(x,P),n(x,Q),n(l,ke),n(l,V),n(V,R),T(X,R,null),n(R,xe),n(R,Z),n(R,K),n(V,ye),n(V,J),T(Y,J,null),n(J,be),n(J,ee),n(J,te),n(V,Ie),n(V,G),T(se,G,null),n(G,Ce),n(G,ae),n(G,ie),n(V,$e),n(V,O),T(le,O,null),n(O,_e),n(O,oe),n(O,ne),n(e,Ee),F&&F.m(e,null),me=!0},p:f,i(y){me||(H(a.$$.fragment,y),H(c.$$.fragment,y),H(q.$$.fragment,y),H(X.$$.fragment,y),H(Y.$$.fragment,y),H(se.$$.fragment,y),H(le.$$.fragment,y),me=!0)},o(y){j(a.$$.fragment,y),j(c.$$.fragment,y),j(q.$$.fragment,y),j(X.$$.fragment,y),j(Y.$$.fragment,y),j(se.$$.fragment,y),j(le.$$.fragment,y),me=!1},d(y){y&&r(e),N(a),N(c),N(q),N(X),N(Y),N(se),N(le),F&&F.d()}}}function ft(o,e,l){let t;return Re(o,Je,i=>l(1,t=i)),[t.url.searchParams.has("pdf")]}class mt extends L{constructor(e){super(),z(this,e,ft,pt,S,{})}}function gt(o){let e,l=`<div class="position svelte-122kx6a">Open to a position of <span class="em svelte-122kx6a">Senior Backend Engineer</span> or
		<span class="em svelte-122kx6a">Engineering Manager</span>  (full remote or hybrid on Lyon).</div> <div class="few-words svelte-122kx6a"><div class="title svelte-122kx6a">In a few words</div> <div class="who svelte-122kx6a">I&#39;m a <span class="em svelte-122kx6a">passionate, hard-working</span> software engineer with a strong focus
			on
			<span class="em svelte-122kx6a">backend development</span>.</div> <div class="who svelte-122kx6a">I lead by transparency and example, and if I love sharing ideas and knowledge to reach a
			<span class="em svelte-122kx6a">consensus</span> I know when to make a <span class="em svelte-122kx6a">decision</span>.</div> <div class="who svelte-122kx6a"><span class="em svelte-122kx6a">Simplicity</span> is my motto, as the &quot;art of maximizing the amount of work
			not done&quot;<span class="note"><sup><a href="https://agilemanifesto.org/principles.html" target="_blank" alt="Agile Manifesto Principles">(1)</a></sup></span>.</div> <div class="who svelte-122kx6a"><span class="em svelte-122kx6a">Open-minded</span>, curious of others, I grow by helping my
			<span class="em svelte-122kx6a">teammates be their best selves</span>.</div></div>`;return{c(){e=h("div"),e.innerHTML=l,this.h()},l(t){e=u(t,"DIV",{class:!0,"data-svelte-h":!0}),$(e)!=="svelte-6nmm9b"&&(e.innerHTML=l),this.h()},h(){s(e,"class","looking-for-container svelte-122kx6a")},m(t,a){_(t,e,a)},p:f,i:f,o:f,d(t){t&&r(e)}}}class wt extends L{constructor(e){super(),z(this,e,null,gt,S,{})}}function kt(o){let e,l=`<div class="hard svelte-19e0va4"><div class="title svelte-19e0va4">Hard Skills</div> <div class="skill-level svelte-19e0va4"><div class="level svelte-19e0va4">Used daily:</div> <ul class="skills svelte-19e0va4"><li class="svelte-19e0va4">NodeJs</li> <li class="svelte-19e0va4">Python</li> <li class="svelte-19e0va4">Git - Gitlab CI/CD</li> <li class="svelte-19e0va4">Docker</li> <li class="svelte-19e0va4">Linux Admin</li> <li class="svelte-19e0va4">MongoDB</li> <li class="svelte-19e0va4">Redis</li> <li class="svelte-19e0va4">Bash scripts</li></ul></div> <div class="skill-level svelte-19e0va4"><div class="level svelte-19e0va4">Used to be good at:</div> <ul class="skills svelte-19e0va4"><li class="svelte-19e0va4">C</li> <li class="svelte-19e0va4">C++</li> <li class="svelte-19e0va4">Java</li> <li class="svelte-19e0va4">MySQL</li> <li class="svelte-19e0va4">PostgreSQL</li> <li class="svelte-19e0va4">ElasticSearch</li></ul></div> <div class="skill-level svelte-19e0va4"><div class="level svelte-19e0va4">I&#39;d rather do:</div> <ul class="skills svelte-19e0va4"><li class="svelte-19e0va4">Go</li> <li class="svelte-19e0va4">NodeJs</li> <li class="svelte-19e0va4">Python</li> <li class="endit svelte-19e0va4">But I&#39;m very open-minded there...</li> <li class="level except endit svelte-19e0va4">Except maybe:</li> <li class="svelte-19e0va4">Java</li></ul></div></div> <div class="soft"><div class="title svelte-19e0va4">Soft Skills</div> <div class="sskills svelte-19e0va4">Relaxed but true and natural leadership - Resource person - Experience of addressing a wide
			range of audiences from CTOs to trainees, through researchers, developers, architects and
			managers, in a multicultural environment - Always good mood and kind 😉</div></div>`;return{c(){e=h("div"),e.innerHTML=l,this.h()},l(t){e=u(t,"DIV",{class:!0,"data-svelte-h":!0}),$(e)!=="svelte-74a3hm"&&(e.innerHTML=l),this.h()},h(){s(e,"class","skills-container svelte-19e0va4")},m(t,a){_(t,e,a)},p:f,i:f,o:f,d(t){t&&r(e)}}}class xt extends L{constructor(e){super(),z(this,e,null,kt,S,{})}}function yt(o){let e,l=`<div class="experiences-title-line svelte-r9oo8h">The things I do</div> <div class="experiences svelte-r9oo8h"><div class="outer"><div class="experience svelte-r9oo8h"><div class="info svelte-r9oo8h"><div class="title-line svelte-r9oo8h"><p class="title svelte-r9oo8h"><span class="introduce svelte-r9oo8h">as a</span> Senior R&amp;D Engineer</p> <p class="date svelte-r9oo8h">since 2018</p></div> <div class="resume svelte-r9oo8h"><div class="used svelte-r9oo8h">Python, NodeJs, AI, Infrastructure, Ops, Innovation, Techs Lifecycle...</div></div> <div class="detail details-1 svelte-r9oo8h">Awarded <span class="emp svelte-r9oo8h">&quot;Senior Expert in Machine Learning, Data integration and Software&quot;</span>
						by my company, I joined the Scientific and Technical Direction team of the R&amp;D/Labs departement.<br/><br/>
						My position is three-folds:
						<ul class="three-fold svelte-r9oo8h"><li class="svelte-r9oo8h"><span class="emp svelte-r9oo8h">In charge of the Labs on-premise Infrastructure</span>: the Labs
								has its own hosting infrastructure and compute farm, about twenty host servers for
								the oVirt virtualization solution. Deployment and maintenance of all tools for the
								Labs: shared databases, creation of specialized VMs, Swarm docker for the deployment
								of demo services, GitLab runners, package managers, ... I also help the R&amp;D
								colleagues to use these tools and services.</li> <li class="svelte-r9oo8h"><span class="emp svelte-r9oo8h">Promote innovation</span> by developping tools like the company&#39;s
								<span class="emp svelte-r9oo8h">Techradar</span>
								or a service to help each BU&#39;s Labs entity to manage their
								<span class="emp svelte-r9oo8h">roadmaps</span>. I also give internal talks about new trends in
								technology. Lastly I led the acceptance of Rust as the primary low-level language
								for Worldline or a gitlab crawler to ensure secure, consistent and updated design of
								projects.</li> <li class="svelte-r9oo8h">As one of the few engineers in the R&amp;D department which is mostly composed of PhDs
								in CS, <span class="emp svelte-r9oo8h">turn proof-of-concepts and even raw material like machine learning models into
									viable, production ready solutions</span>. This is my prefered part of the job, when I interact with people to help them
								ship their findings to the real world.</li></ul>
						During these 6 years, I strengthen my skills and learned a lot too, from Python to Go, from
						Linux administration to virtualization and cloud, from Tensorflow to Svelte, from Blockchains
						to Quarkus, I jumped happily from one technical stack to another, always eager to learn and
						pass on back my new technical crushes.</div></div></div> <div class="experience svelte-r9oo8h"><div class="info svelte-r9oo8h"><div class="title-line svelte-r9oo8h"><p class="title svelte-r9oo8h"><span class="introduce svelte-r9oo8h">as a</span> Senior R&amp;D Engineer - Senior Project Leader</p> <p class="date svelte-r9oo8h">from 2015 to 2017</p></div> <div class="resume svelte-r9oo8h"><div class="used svelte-r9oo8h">AI, NodeJs, Python, MongoDB, redis, Docker, Fraud detection, C++ ...</div></div> <div class="detail details-2 svelte-r9oo8h">Back from a BigData world, I then integrated the HPC team in R&amp;D where I notably first
						encountered AI.<br/>
						In a small team I worked mostly in autonomy, designing and developping several solutions,
						e.g.:
						<ul class="svelte-r9oo8h"><li class="svelte-r9oo8h"><span class="emp svelte-r9oo8h">InstantScore: Containerized AI as a service</span> solution with automatic model
								re-training. (NodeJs, Python, MongoDB, redis). Currently used in production for
								fraud detection in Belgium issuing transactions (200K trx/day) and for predictive
								maintenance for French ATMs (helped lower the overall downtime of the fleet by 15%).</li> <li class="svelte-r9oo8h"><span class="emp svelte-r9oo8h">SmartStream: real-time, lightweight, containerized, multi-languages data integration
								toolkit</span>; it is a pipeline of microservices not based on a message bus (Java, Python,
								ZMQ, Spring)</li> <li class="svelte-r9oo8h"><span class="emp svelte-r9oo8h">Digital-Signage: rework of an interactive advertising PoC with facial, gender and
								age recognition and customers tracking</span>; redesign of the architecture for
								distributability, switch to more efficient technologies and libraries, rewriting of
								tracking algorithms. Creation of the administration and statistics web service
								(Java, C++, Python, Angular, OpenCv, Cuda, DLib, ZMQ, ...)</li></ul></div></div></div> <div class="experience svelte-r9oo8h"><div class="info svelte-r9oo8h"><div class="title-line svelte-r9oo8h"><p class="title svelte-r9oo8h"><span class="introduce svelte-r9oo8h">as a</span> Senior Data Engineer</p> <p class="date svelte-r9oo8h">from 2013 to 2015</p></div> <div class="resume svelte-r9oo8h"><div class="used svelte-r9oo8h">BigData, NodeJs, Spark, Hadoop, ElasticSearch, MongoDB</div></div> <div class="detail details-3 svelte-r9oo8h">I first <span class="emp svelte-r9oo8h">led the technical side of the creation of the &quot;BI &amp; BigData Business Center&quot;</span>.
						With a marketing specialist we interviewed several Business Units Manager to gather
						needs around the emerging topic of BigData and made several proposal for new assets and
						services around the subject.<br/>
						This led to the design and development of &quot;DataValueFactory&quot;, an advertising targeting tool
						operated as a trusted third party. We gathered from suppliers and partners personnal user
						data that were then cleaned, processed and used to define very precise target for advertising
						campaigns.<br/>
						We used, amongst others, the following technologies: Angular, NodeJs/HapiJS for the REST
						API, Spark, Hadoop, ElasticSearch, MongoDB</div></div></div> <div class="experience svelte-r9oo8h"><div class="info svelte-r9oo8h"><div class="title-line svelte-r9oo8h"><p class="title svelte-r9oo8h"><span class="introduce svelte-r9oo8h">as a</span> Senior R&amp;D Engineer</p> <p class="date svelte-r9oo8h">from 2010 to 2013</p></div> <div class="resume svelte-r9oo8h"><div class="used svelte-r9oo8h">NodeJs/SocketIO, ElasticSearch, MongoDB, Pre-sales, ...</div></div> <div class="detail details-4 svelte-r9oo8h">After 2 years of managerial functions I wanted to return to a technical position and
						integrated the &quot;Prospective and Emerging Projects&quot; team of the R&amp;D department.<br/>
						This team of 5 enthousiast and talented engineers was developping proof-of-concepts and tooling
						services to explore innovative technologies and usages.<br/>
						Our key achievment was the design and development of the first OpenData platform of the company,
						&quot;SmartData&quot;. After a first proof of concept using OSGi, Java Spring and CouchDB, we switched
						to then emerging stacks: <span class="emp svelte-r9oo8h">NodeJs/SocketIO, ElasticSearch and MongoDB</span>.<br/>
						&quot;SmartData&quot; was kind of an <span class="emp svelte-r9oo8h">automatic ETL as a service</span> which could ingest, process, store,
						and distribute semi-structured data from a wide range of formats though versatile and open
						APIs.<br/><br/>
						While actively developping these solutions I also helped business units in pre-sales activities
						at the innovation side of events.</div></div></div> <div class="experience svelte-r9oo8h"><div class="info svelte-r9oo8h"><div class="title-line svelte-r9oo8h"><p class="title svelte-r9oo8h"><span class="introduce svelte-r9oo8h">as a</span> Team(s) Manager</p> <p class="date svelte-r9oo8h">from 2008 to 2010</p></div> <div class="resume svelte-r9oo8h"><div class="used svelte-r9oo8h">Managed 2 teams, Business, Product, Leadership, Innovation, Change mgmt, ...</div></div> <div class="detail details-5 svelte-r9oo8h">I first managed the team responsible for delivering the WebMail part (including the XML
						APIs) of the &quot;GoLive!&quot; mail plateform. Under my leadership, we migrated from an in-house
						JSP-like solution to generate the XML stream to an open-source stack and finally get rid
						of 90% of deployments&#39;rollbacks.<br/>
						Then I also took responsability for the &quot;Small Clients&quot; business, including ISPs like DartyBox
						or professionals like Allianz, PMU, ... The goal there was to prevent them from leaving,
						which I did by simply restoring a transparent and honest relationship.<br/> <span class="emp svelte-r9oo8h">Managed 10 Eng. (plus trainees) - 3.6M€CA</span><br/><br/>
						One of the best parts of the job, though, was to help restoring my teammates self-confidence,
						motivating them to reach their full potential.</div></div></div> <div class="experience svelte-r9oo8h"><div class="info svelte-r9oo8h"><div class="title-line svelte-r9oo8h"><p class="title svelte-r9oo8h"><span class="introduce svelte-r9oo8h">as a</span> Tech Leader</p> <p class="date svelte-r9oo8h">from 2007 to 2008</p></div> <div class="resume svelte-r9oo8h"><div class="used svelte-r9oo8h">Java, Build&amp;Run, Mail Platform, Leadership, ...</div></div> <div class="detail details-6 svelte-r9oo8h">Technically leading the team (6 Eng.) responsible for specific developments and delivery
						of the LaPoste.Net mail solution (23M mailboxes) based on an in-house mail platform
						solution, &quot;GoLive!&quot;</div></div></div> <div class="experience svelte-r9oo8h"><div class="info svelte-r9oo8h"><div class="title-line svelte-r9oo8h"><p class="title svelte-r9oo8h"><span class="introduce svelte-r9oo8h">as a</span> R&amp;D Engineer</p> <p class="date svelte-r9oo8h">at JetMultimedia from 2000 to 2007</p></div> <div class="resume svelte-r9oo8h"><div class="used svelte-r9oo8h">MultiChannel, Vocal, C++, XML, ...</div></div> <div class="detail details-7 svelte-r9oo8h">I was developping services, used by the business units or our clients themselves to
						developp added value services. E.g. :
						<ul class="svelte-r9oo8h"><li class="svelte-r9oo8h"><span class="emp svelte-r9oo8h">Easyclick: Access value-added webservices</span> by calling premium phone number and
								connect through the Easyclick proxy</li> <li class="svelte-r9oo8h"><span class="emp svelte-r9oo8h">JvmlBrowser: an in-house precursor of a VoiceXml solution</span></li> <li class="svelte-r9oo8h"><span class="emp svelte-r9oo8h">VdxmlBrowser: allowing web developpers to easily deliver VideoText (Minitel)
								applications</span></li> <li class="svelte-r9oo8h"><span class="emp svelte-r9oo8h">Serpent: multi-agent software monitoring all company&#39;s services</span> and
								infrastructure with automatic multi-channel alerting of operation teams.</li></ul>
						In this little department full of talented people, I had the opportunity to develop the main
						moto of my career: always strive for the simplest solution to the most complex goals.</div></div></div> <div class="experience svelte-r9oo8h"><div class="info svelte-r9oo8h"><div class="title-line svelte-r9oo8h"><p class="title svelte-r9oo8h"><span class="introduce svelte-r9oo8h">as a</span> Design And Development Engineer</p> <p class="date svelte-r9oo8h">at CosmosBay from 1999 to 2000</p></div> <div class="resume svelte-r9oo8h"><div class="used svelte-r9oo8h">MultiChannel, Internal/External Trainer, Consulting, ...</div></div> <div class="detail details-8 svelte-r9oo8h">During my first permanent contract, I studied and developed audiotel, minitel, web and
						wap services (Crédit Agricole, Crédit Foncier Banque...) per day or project.<br/>
						I also rapidely became an internal and external trainer on the company&#39;s products, in particular
						CosmosSuite (multi-channel design IDE)<br/>
						I even sometimes serve as a technical consultant in support of pre-sales teams on these products<br/><br/>
						I learned a lot about the way work is organised in an IT company and I confirmed my penchant
						for technology, especially backend solutions.</div></div></div> <div class="experience svelte-r9oo8h"><div class="info svelte-r9oo8h"><div class="title-line svelte-r9oo8h"><p class="title svelte-r9oo8h"><span class="introduce svelte-r9oo8h">as a</span> Programming Analyst</p> <p class="date svelte-r9oo8h">at multiple companies from 1998 to 1999</p></div> <div class="resume svelte-r9oo8h"><div class="used svelte-r9oo8h">First Experiences, Discovering IT...</div></div> <div class="detail details-9 svelte-r9oo8h">As a contractor for multiple companies, I spent a year exploring the different
						possibilities offered by my formation.<br/>
						I notably developed in Visual C++ in an industrial context, on mainframe for a notarial activities
						company, as a pure analyst programmer for the Renault SA HR departement.<br/>
						These experiences helped me made up my mind about my prefered activities in the IT world.</div></div></div></div> <div class="end-of-experiences svelte-r9oo8h"><div class="to-surprise"><img src="arrow.png" alt="follow me"/></div> <div class="surprise-reward svelte-r9oo8h"><div class="surprise svelte-r9oo8h">Whooo, you made it here ?</div> <div class="reward svelte-r9oo8h">Then here&#39;s something more personal</div></div></div></div>`;return{c(){e=h("div"),e.innerHTML=l,this.h()},l(t){e=u(t,"DIV",{class:!0,"data-svelte-h":!0}),$(e)!=="svelte-bgpnh6"&&(e.innerHTML=l),this.h()},h(){s(e,"class","root svelte-r9oo8h")},m(t,a){_(t,e,a)},p:f,i:f,o:f,d(t){t&&r(e)}}}class bt extends L{constructor(e){super(),z(this,e,null,yt,S,{})}}function It(o){let e,l=`<div class="title svelte-1nrpndc">On the personal side</div> <div class="detail svelte-1nrpndc">I&#39;m almost 50, I&#39;m single, I got a grown-up son, he&#39;s 18 now and the most important part of my
		life 💗<br/>
		IT is my second passion so in my spare time I often throw new ideas, processes and techs at my daytime
		tasks to learn and improve. I personaly think that my company&#39;s projects are the best playground
		to learn new skills 💻<br/>
		On my spare-spare time, I&#39;d rather hangout with friends than doing sports ¯\\_(ツ)_/¯ <br/>
		My vision of a perfect evening though is reading a good book 📖, listening to some Blues 🎸
		while enjoying a fine glass of wine 🍷.</div>`;return{c(){e=h("div"),e.innerHTML=l,this.h()},l(t){e=u(t,"DIV",{class:!0,"data-svelte-h":!0}),$(e)!=="svelte-qjm699"&&(e.innerHTML=l),this.h()},h(){s(e,"class","root svelte-1nrpndc")},m(t,a){_(t,e,a)},p:f,i:f,o:f,d(t){t&&r(e)}}}class Ct extends L{constructor(e){super(),z(this,e,null,It,S,{})}}function $t(o){let e,l,t,a,i,c,v,p,I,C,E,m,b;return t=new mt({}),c=new wt({}),p=new xt({}),C=new bt({}),m=new Ct({}),{c(){e=h("div"),l=h("div"),B(t.$$.fragment),a=D(),i=h("div"),B(c.$$.fragment),v=D(),B(p.$$.fragment),I=D(),B(C.$$.fragment),E=D(),B(m.$$.fragment),this.h()},l(g){e=u(g,"DIV",{class:!0});var x=d(e);l=u(x,"DIV",{class:!0});var q=d(l);A(t.$$.fragment,q),a=M(q),i=u(q,"DIV",{class:!0});var P=d(i);A(c.$$.fragment,P),v=M(P),A(p.$$.fragment,P),I=M(P),A(C.$$.fragment,P),E=M(P),A(m.$$.fragment,P),P.forEach(r),q.forEach(r),x.forEach(r),this.h()},h(){s(i,"class","frame svelte-eudljm"),s(l,"class","blue-frame svelte-eudljm"),s(e,"class","root svelte-eudljm")},m(g,x){_(g,e,x),n(e,l),T(t,l,null),n(l,a),n(l,i),T(c,i,null),n(i,v),T(p,i,null),n(i,I),T(C,i,null),n(i,E),T(m,i,null),b=!0},p:f,i(g){b||(H(t.$$.fragment,g),H(c.$$.fragment,g),H(p.$$.fragment,g),H(C.$$.fragment,g),H(m.$$.fragment,g),b=!0)},o(g){j(t.$$.fragment,g),j(c.$$.fragment,g),j(p.$$.fragment,g),j(C.$$.fragment,g),j(m.$$.fragment,g),b=!1},d(g){g&&r(e),N(t),N(c),N(p),N(C),N(m)}}}class Mt extends L{constructor(e){super(),z(this,e,null,$t,S,{})}}export{Mt as component};
