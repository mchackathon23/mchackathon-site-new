import{s as k,n as $,r as P,o as V,f as q}from"../chunks/scheduler.b95eede2.js";import{S as H,i as D,g as _,s as w,h as y,j as x,y as C,c as b,f as g,k as m,a as I,x as p,z as E,r as O,A as L,u as A,v as j,d as z,t as R,w as B}from"../chunks/index.d825366c.js";function F(f){let e,r,o='<div class="main-text"><h1 class="glitch one">Montgomery County</h1> <h1 class="glitch two">Hackathon</h1></div> <div class="bg-text"><h1 class="glitch">2023</h1></div>',s,a,i="REGISTER",h,n,d,c,v,t,l='<source src="first-bg.mp4"/>',M,S;return{c(){e=_("div"),r=_("div"),r.innerHTML=o,s=w(),a=_("button"),a.textContent=i,h=w(),n=_("div"),d=w(),c=_("div"),v=w(),t=_("video"),t.innerHTML=l,this.h()},l(T){e=y(T,"DIV",{class:!0,id:!0});var u=x(e);r=y(u,"DIV",{class:!0,"data-svelte-h":!0}),C(r)!=="svelte-nb0nc1"&&(r.innerHTML=o),s=b(u),a=y(u,"BUTTON",{class:!0,"data-svelte-h":!0}),C(a)!=="svelte-8lkpbl"&&(a.textContent=i),h=b(u),n=y(u,"DIV",{class:!0}),x(n).forEach(g),d=b(u),c=y(u,"DIV",{class:!0}),x(c).forEach(g),v=b(u),t=y(u,"VIDEO",{id:!0,preload:!0,"data-svelte-h":!0}),C(t)!=="svelte-1jc9fff"&&(t.innerHTML=l),u.forEach(g),this.h()},h(){m(r,"class","title-text"),m(a,"class","register-button hover-scale"),m(n,"class","scroll"),m(c,"class","bg-fade"),m(t,"id","first-page-bg"),m(t,"preload","auto"),t.autoplay=!0,t.loop=!0,t.muted=!0,m(e,"class","first-page"),m(e,"id","first-page")},m(T,u){I(T,e,u),p(e,r),p(e,s),p(e,a),p(e,h),p(e,n),p(e,d),p(e,c),p(e,v),p(e,t),M||(S=[E(a,"mouseenter",f[2]),E(a,"mouseleave",f[3])],M=!0)},p:$,i:$,o:$,d(T){T&&g(e),M=!1,P(S)}}}function G(f,e,r){let{y:o=0}=e,s=0,a=!1;V(()=>{let n=document.querySelector(".main-text"),d=document.querySelector(".bg-text"),c=document.querySelector(".register-button"),v=document.querySelector(".scroll");var t=0;setInterval(l,10);function l(){n.style.transform="translate("+Math.sin(t)+"vw, "+Math.cos(t)+"vw)",n.style.transform+="rotate("+Math.sin(t)*3+"deg)",d.style.transform="translate("+Math.sin(t*2)+"vw, "+Math.cos(t*2)+"vw)",d.style.transform+="rotate("+Math.sin(t*2)*3+"deg)",a?s<.95&&(s+=(1-s)/20):s>0&&(s/=1.2),c.style.fontSize=4+s*.7+"vw",c.style.transform="translate("+Math.sin(t*.5+Math.PI/8)*10+"px, "+Math.cos(t*.5-Math.PI/8)*10+"px)",c.style.transform+="rotate("+Math.sin(t*.5-Math.PI/2)*3+"deg)",v.style.opacity=1-o/300,t+=Math.PI/256}});const i=()=>{r(0,a=!0)},h=()=>{r(0,a=!1)};return f.$$set=n=>{"y"in n&&r(1,o=n.y)},[a,o,i,h]}class N extends H{constructor(e){super(),D(this,e,G,F,k,{y:1})}}function U(f){let e=!1,r=()=>{e=!1},o,s,a,i,h,n,d,c,v;return q(f[1]),i=new N({props:{y:f[0]}}),{c(){s=_("meta"),a=w(),O(i.$$.fragment),h=w(),n=_("div"),this.h()},l(t){const l=L("svelte-8p948b",document.head);s=y(l,"META",{name:!0,content:!0}),l.forEach(g),a=b(t),A(i.$$.fragment,t),h=b(t),n=y(t,"DIV",{class:!0}),x(n).forEach(g),this.h()},h(){document.title="MC Hackathon 2023",m(s,"name","description"),m(s,"content","MC Hackathon 2023"),m(n,"class","second-page")},m(t,l){p(document.head,s),I(t,a,l),j(i,t,l),I(t,h,l),I(t,n,l),d=!0,c||(v=E(window,"scroll",()=>{e=!0,clearTimeout(o),o=setTimeout(r,100),f[1]()}),c=!0)},p(t,[l]){l&1&&!e&&(e=!0,clearTimeout(o),scrollTo(window.pageXOffset,t[0]),o=setTimeout(r,100));const M={};l&1&&(M.y=t[0]),i.$set(M)},i(t){d||(z(i.$$.fragment,t),d=!0)},o(t){R(i.$$.fragment,t),d=!1},d(t){t&&(g(a),g(h),g(n)),g(s),B(i,t),c=!1,v()}}}function X(f,e,r){let o=0;function s(){r(0,o=window.pageYOffset)}return[o,s]}class K extends H{constructor(e){super(),D(this,e,X,U,k,{})}}export{K as component};
