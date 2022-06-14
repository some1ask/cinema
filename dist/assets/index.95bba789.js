var L=Object.defineProperty,C=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var y=(s,t,a)=>t in s?L(s,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[t]=a,h=(s,t)=>{for(var a in t||(t={}))j.call(t,a)&&y(s,a,t[a]);if(N)for(var a of N(t))F.call(t,a)&&y(s,a,t[a]);return s},p=(s,t)=>C(s,_(t));import{j as e,L as b,a as c,C as A,r as u,c as $,b as O,Y as M,u as I,d as B,e as w,V as R,A as P,f as T,g as V,O as q,M as D,h as E,R as H,B as U,P as W,i as Y,k as v}from"./vendor.9ffca9c8.js";const z=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=a(r);fetch(r.href,i)}};z();function G({movie:s}){return e("div",{className:"movie rounded-lg my-8 shadow-xl",children:e(b,{to:`movie/${s.id}`,children:c("div",{className:"movie-info flex flex-col justify-between ",children:[e("img",{className:"movie-poster rounded-lg rounded-b-none ",src:`https://image.tmdb.org/t/p/w400${s.backdrop_path}`}),e("h1",{className:"pt-2 h-16 rounded-lg text-white font-montserrat  bg-black rounded-t-none content-center",children:s.title})]})})})}const K=({setPage:s})=>e("div",{className:"container mb-10 m-auto",children:c("div",{className:"flex justify-between px-20",children:[e("button",{className:"px-4 py-2 bg-black text-white rounded-lg",onClick:()=>{s(o=>o<=1?o=1:o-1)},children:"Previous"}),e("button",{className:"px-4 py-2 bg-black text-white rounded-lg",onClick:()=>{s(o=>o+1)},children:"Next"})]})}),J=({setSearch:s})=>e("div",{className:"flex mt-10 px-10 flex-col",children:e("input",{placeholder:"Search a movie",onChange:t=>{s(t.target.value)},className:"w-full form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"})}),Q=s=>e("div",{className:"movie",children:e(A,p(h({speed:2,width:500,height:400,viewBox:"0 0 500 400",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb"},s),{children:e("rect",{x:"0",y:"0",rx:"8",ry:"8",width:"350",height:"260"})}))});function X(){const[s,t]=u.exports.useState(1),[a,o]=u.exports.useState(""),[r,i]=u.exports.useState([]),[n,f]=u.exports.useState(!1),m=`https://api.themoviedb.org/3/discover/movie?api_key=58a8d7b6d2c8a3b25f355836fb0e3d4d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${s}`,x=async()=>{await fetch(m).then(l=>l.json()).then(l=>{i(l.results),f(!0)})};u.exports.useEffect(()=>{x()},[n,s]);const g=r.filter(l=>l.title.toLowerCase().includes(a.toLocaleLowerCase()));return c("div",{className:"App",children:[e(J,{setSearch:o}),e("div",{className:"flex px-10 flex-wrap lg:justify-between justify-center ",children:n?g.map((l,d)=>e(G,{movie:l},d)):[...new Array(20)].map((l,d)=>e(Q,{},d))}),e(K,{setPage:t})]})}const Z="modulepreload",k={},ee="/",te=function(t,a){return!a||a.length===0?t():Promise.all(a.map(o=>{if(o=`${ee}${o}`,o in k)return;k[o]=!0;const r=o.endsWith(".css"),i=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const n=document.createElement("link");if(n.rel=r?"stylesheet":Z,r||(n.as="script",n.crossOrigin=""),n.href=o,document.head.appendChild(n),r)return new Promise((f,m)=>{n.addEventListener("load",f),n.addEventListener("error",m)})})).then(()=>t())},se=s=>{s&&s instanceof Function&&te(()=>import("./web-vitals.67dce932.js"),[]).then(({getCLS:t,getFID:a,getFCP:o,getLCP:r,getTTFB:i})=>{t(s),a(s),o(s),r(s),i(s)})},re={favorites:[]},S=$({name:"favorites",initialState:re,reducers:{addFavorite:(s,t)=>p(h({},s),{favorites:[...s.favorites,t.payload]}),deleteFavorite:(s,t)=>p(h({},s),{favorites:s.favorites.filter(a=>a.id!==t.payload.id)}),incrementByAmount:(s,t)=>{s.value+=t.payload}}}),{addFavorite:ae,deleteFavorite:oe,incrementByAmount:ge}=S.actions;var ie=S.reducer;const le=O({reducer:{favorites:ie}}),ne=()=>e("div",{className:"flex",children:e("input",{type:"text",className:"w-full form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"})}),ce=()=>c("div",{className:"container mx-auto",children:[e("h1",{children:"Leave a comment:"}),e(ne,{})]}),de=({data:s})=>{const t={height:"460",width:"820",playerVars:{autoplay:1}};return e("div",{className:"flex",children:e(M,{videoId:s.key,id:s.key,opts:t,iframeClassName:""})})};function ue(){let{id:s}=I();const[t,a]=u.exports.useState({}),[o,r]=u.exports.useState(!1),[i,n]=u.exports.useState(!1);u.exports.useEffect(()=>{let l={};fetch(`https://api.themoviedb.org/3/movie/${s}?api_key=58a8d7b6d2c8a3b25f355836fb0e3d4d`).then(d=>d.json()).then(d=>(l=d,fetch(`https://api.themoviedb.org/3/movie/${s}/videos?api_key=58a8d7b6d2c8a3b25f355836fb0e3d4d&language=en-US`))).then(d=>d.json()).then(d=>{a(Object.assign(l,d)),r(!0)}),g(t)},[o]);const f=B(),m=w(l=>l.favorites.favorites),x=Math.floor(t.vote_average),g=l=>{m.map(d=>d.id===l.id?n(!i):null)};return console.log(t),e("div",{className:"container mx-auto",children:o?c("div",{className:"flex flex-col",children:[c("div",{className:"flex flex-col py-4",children:[e("h1",{className:"font-montserrat text-center text-4xl font-bold",children:t.title}),e("div",{className:"flex flex-row justify-center",children:e("p",{className:"italic text-xl text-black",children:`"${t.tagline}"`})})]}),c("div",{className:"flex  space-x-8 sm:space-x-2 sm:flex-col sm:justify-center flex-row",children:[e("div",{className:"flex sm:justify-center",children:e("img",{className:"",src:`https://image.tmdb.org/t/p/w400${t.poster_path}`})}),c("div",{className:"flex flex-1 flex-col space-y-4 py-4 sm:py-2 sm:px-0",children:[c("div",{className:"flex flex-row space-x-1",children:[e("p",{className:"font-bold",children:"Genre:"}),e("div",{className:"flex space-x-1 flex-wrap",children:t.genres.map(l=>e("p",{children:l.name},l.id))})]}),c("div",{className:"flex",children:[e("p",{className:"font-bold",children:"Budget: "}),c("p",{className:"italic",children:["\xA0",t.budget,"$"]})]}),c("div",{className:"flex space-x-3",children:[e("div",{className:"flex",children:[...new Array(x)].map((l,d)=>e(P,{className:"text-2xl text-yellow-300"},d))}),e("div",{children:t.vote_average})]}),e("div",{className:"flex",children:t.overview}),e("div",{className:"flex",children:i?e(V,{className:"text-4xl text-red-600",onClick:()=>{f(oe(t)),n(!i)}}):e(T,{className:"text-4xl",onClick:()=>{f(ae(t)),n(!i)}})})]})]}),e("div",{className:"flex pt-4",children:e(de,{data:t.results[0]})}),e("div",{className:"flex",children:e(ce,{})})]}):e("div",{className:"flex justify-center pt-36 text-4xl",children:e(R,{className:"animate-spin"})})})}const fe=()=>e("div",{children:e(q,{})}),me=()=>{const s=w(t=>t.favorites.favorites.length);return e("header",{className:"z-10",children:c("div",{className:"flex text-center bg-[#1F1F1F] text-white py-4 justify-between px-10 py-3 content-center",children:[e(b,{to:"/",children:e("h1",{className:"font-bold text-2xl font-montserrat",children:"FILM"})}),e(b,{to:"/favorites",children:c("div",{className:"relative",children:[e("div",{className:"absolute top-[20px] left-[9px] text-[10px]",children:s}),e(D,{className:"text-red-500 text-2xl pt-1"})]})})]})})};function he(){return e("div",{className:"favorite-bg absolute",children:e("div",{className:"favorites"})})}const pe=E.createRoot(document.getElementById("root"));pe.render(e(H.StrictMode,{children:e(U,{children:c(W,{store:le,children:[e(me,{}),e(Y,{children:c(v,{path:"/",element:e(fe,{}),children:[e(v,{path:"/",element:e(X,{})}),e(v,{path:"movie/:id",element:e(ue,{})}),e(v,{path:"favorites",element:e(he,{})})]})})]})})}));se();