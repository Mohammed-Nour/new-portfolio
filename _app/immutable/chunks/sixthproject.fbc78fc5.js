import{t as A,d as k}from"./index.02e42ad9.js";import{r as q}from"./scheduler.9661d205.js";function C(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function D(t,d){A(t,1,1,()=>{d.delete(t.key)})}function E(t,d,_,x,F,r,p,M,g,v,l,S){let o=t.length,c=r.length,i=o;const h={};for(;i--;)h[t[i].key]=i;const a=[],m=new Map,u=new Map,j=[];for(i=c;i--;){const e=S(F,r,i),s=_(e);let n=p.get(s);n?x&&j.push(()=>n.p(e,d)):(n=v(s,e),n.c()),m.set(s,a[i]=n),s in h&&u.set(s,Math.abs(i-h[s]))}const b=new Set,y=new Set;function w(e){k(e,1),e.m(M,l),p.set(e.key,e),l=e.first,c--}for(;o&&c;){const e=a[c-1],s=t[o-1],n=e.key,f=s.key;e===s?(l=e.first,o--,c--):m.has(f)?!p.has(n)||b.has(n)?w(e):y.has(f)?o--:u.get(n)>u.get(f)?(y.add(n),w(e)):(b.add(f),o--):(g(s,p),o--)}for(;o--;){const e=t[o];m.has(e.key)||g(e,p)}for(;c;)w(a[c-1]);return q(j),a}const G="/new-portfolio/_app/immutable/assets/firstproject.98772612.png",H="/new-portfolio/_app/immutable/assets/secondproject.99bcce43.png",I="/new-portfolio/_app/immutable/assets/thirdproject.840d0b5f.png",J="/new-portfolio/_app/immutable/assets/Fourthproject.295d74de.png",K="/new-portfolio/_app/immutable/assets/fifthproject.0af4e18d.png",L="/new-portfolio/_app/immutable/assets/sixthproject.5b89df63.png";export{J as F,K as a,L as b,C as e,G as f,D as o,H as s,I as t,E as u};