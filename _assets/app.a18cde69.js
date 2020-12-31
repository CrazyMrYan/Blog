import{r as e,m as t,n,i as a,w as r,o,a as s,b as i,h as l,c,d as u,e as d,f as h,g as m,j as p,k as f,l as v,t as g,p as b,q as k,s as y,F as w,u as L,v as C,x,y as S,z as $,A as T,B as I,C as B,D as E}from"./common-d6bd45c0.js";const M=Symbol();function O(){return function(){const e=a(M);if(!e)throw new Error("useRouter() is called without provider.");return e}().route}function P(e,t,n=!1){const a=document.getElementById("app").offsetTop,r=e.classList.contains(".header-anchor")?e:document.querySelector(decodeURIComponent(t));if(r){const e=r.offsetTop-a-15;!n||Math.abs(e-window.scrollY)>window.innerHeight?window.scrollTo(0,e):window.scrollTo({left:0,top:e,behavior:"smooth"})}}function A(e,t){const n=Array.from(document.querySelectorAll("meta"));let a=!0;const o=e=>{a?a=!1:(n.forEach((e=>document.head.removeChild(e))),n.length=0,e&&e.length&&e.forEach((e=>{const t=function([e,t,n]){const a=document.createElement(e);for(const e in t)a.setAttribute(e,t[e]);n&&(a.innerHTML=n);return a}(e);document.head.appendChild(t),n.push(t)})))};r((()=>{const n=e.value,a=t.value,r=n&&n.title;document.title=(r?r+" | ":"")+a.title,o([["meta",{charset:"utf-8"}],["meta",{name:"viewport",content:"width=device-width,initial-scale=1"}],["meta",{name:"description",content:a.description}],...a.head,...n&&n.frontmatter.head||[]])}))}const D=Symbol();function j(){const e=a(D);if(!e)throw new Error("usePageData() is called without provider.");return e}const _="undefined"!=typeof window;function N(e){let t=e.replace(/\.html$/,"");if(t.endsWith("/")&&(t+="index"),_){const e="/blog/";t=t.slice(e.length).replace(/\//g,"_")+".md";t=`${e}_assets/${t}.${__VP_HASH_MAP__[t]}.js`}else t=`./${t.slice(1).replace(/\//g,"_")}.md.js`;return t}const q=new Set,R=()=>document.createElement("link");let H;const W=_&&(H=R())&&H.relList&&H.relList.supports&&H.relList.supports("prefetch")?e=>{const t=R();t.rel="prefetch",t.href=e,document.head.appendChild(t)}:e=>{const t=new XMLHttpRequest;t.open("GET",e,t.withCredentials=!0),t.send()};const z={setup(){const e=O();return function(){if(!_)return;if(!window.IntersectionObserver)return;let e;if((e=navigator.connection)&&(e.saveData||/2g/.test(e.effectiveType)))return;const t=window.requestIdleCallback||setTimeout;let n=null;const a=()=>{n&&n.disconnect(),n=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting){const t=e.target;n.unobserve(t);const{pathname:a}=t;if(!q.has(a)){q.add(a);const e=N(a);W(e)}}}))})),t((()=>{document.querySelectorAll(".vitepress-content a").forEach((e=>{const{target:t,hostname:a,pathname:r}=e;"_blank"!==t&&a===location.hostname&&(r!==location.pathname?n.observe(e):q.add(r))}))}))};o(a),s(a),i((()=>{n&&n.disconnect()}))}(),()=>e.contentComponent?l(e.contentComponent):null}};const F=c((U='{"lang":"en-US","title":"悲伤日记","description":"A VitePress site","base":"/blog/","head":[["meta",{"name":"viewport","content":"width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}],["meta",{"name":"keywords","content":"悲伤日记"}],["link",{"rel":"icon","href":"/favicon.ico"}],["link",{"rel":"stylesheet","href":"https://unpkg.com/gitalk/dist/gitalk.css"}],["script",{"src":"https://unpkg.com/gitalk/dist/gitalk.min.js"}]],"themeConfig":{"pages":[{"frontMatter":{"date":"2020-12-29","title":"如何优化 祖传代码","tags":["Vue","性能优化"],"describe":"“这页面加载也太慢了！”，一个宁静的下午就此打破，在老板和 PM 的 \\"威逼利诱之下\\" ，我开始了对这个祖传(shi)山项目进行了优化"},"regularPath":"/docs/vue-Optimize.html","relativePath":"docs/vue-Optimize.md"},{"frontMatter":{"date":"2020-12-22","title":"推荐一些奇奇怪怪的好东西","tags":["Vue","插件"],"describe":"总结一部分，特别实用的轮子，瞬间提高你的工作效率！"},"regularPath":"/docs/vue-PlugIn.html","relativePath":"docs/vue-PlugIn.md"},{"frontMatter":{"date":"2020-12-05","title":"初探 svelte","tags":["svelte","学习"],"describe":"svelte 不知道大家有没有了解过，最近一次偶然刷文章，发现了它"},"regularPath":"/docs/svelte-Study.html","relativePath":"docs/svelte-Study.md"},{"frontMatter":{"date":"2020-11-02","title":"vue 奇淫技巧","tags":["Vue","学习"],"describe":"很多小玩意小技巧都是自己慢慢实践出来的,所以做个小笔记"},"regularPath":"/docs/vue-technique.html","relativePath":"docs/vue-technique.md"},{"frontMatter":{"date":"2020-09-28","title":"自己动手写一个render函数","tags":["Vue","Render"],"describe":"简单实现一下 vue 的 render 函数"},"regularPath":"/docs/vue-Render.html","relativePath":"docs/vue-Render.md"},{"frontMatter":{"date":"2020-03-26","title":"详解 vue-tree-color","tags":["Vue","插件"],"describe":"vue-tree-color 的详细说明书 , 你值得入手"},"regularPath":"/docs/vue-TreeColor.html","relativePath":"docs/vue-TreeColor.md"}],"author":"悲伤日记","search":true,"nav":[{"text":"首页","link":"/"},{"text":"归档","link":"/docs"},{"text":"分类","link":"/tags"}]},"locales":{}}',u(JSON.parse(U))));var U;function V(){return F}const G="undefined"!=typeof window;function J(e,t){const n=function(e,t){t.sort(((e,t)=>{const n=t.split("/").length-e.split("/").length;return 0!==n?n:t.length-e.length}));for(const n of t)if(e.startsWith(n))return n}(t,Object.keys(e));return n?e[n]:void 0}function K(e,t){t=function(e,t){if(!G)return t;const n=e.base,a=n.endsWith("/")?n.slice(0,-1):n;return t.slice(a.length)}(e,t);const n=J(e.locales||{},t)||{},a=J(e.themeConfig&&e.themeConfig.locales||{},t)||{};return{...e,...n,themeConfig:{...e.themeConfig,...a,locales:{}},locales:{}}}function X(e=O()){return d((()=>K(F.value,e.path)))}const Y=/#.*$/,Q=/\.(md|html)$/,Z=/\/$/,ee=/^[a-z]+:/i;function te(e){return(V().value.base+e).replace(/\/+/g,"/")}function ne(e){return ee.test(e)}function ae(e){return decodeURI(e).replace(Y,"").replace(Q,"")}const re={class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},oe=p("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},null,-1),se=p("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},null,-1);const ie={render:function(e,t){return h(),m("svg",re,[oe,se])}},le=e=>((e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.html$/,"")).endsWith("/")&&(e+="index"),e);var ce=f({components:{OutboundLink:ie},props:{item:{type:Object,required:!0}},setup(e){const t=e.item,n=O(),a=d((()=>({active:r.value,external:o.value}))),r=d((()=>le(te(t.link))===le(n.path))),o=d((()=>ne(t.link))),s=d((()=>o.value?t.link:te(t.link))),i=d((()=>t.target?t.target:o.value?"_blank":"")),l=d((()=>t.rel?t.rel:o.value?"noopener noreferrer":""));return{classes:a,isActiveLink:r,isExternalLink:o,href:s,target:i,rel:l}}});const ue={class:"nav-item"};ce.render=function(e,t,n,a,r,o){const s=k("OutboundLink");return h(),m("div",ue,[p("a",{class:["nav-link",e.classes],href:e.href,target:e.target,rel:e.rel,"aria-label":e.item.ariaLabel},[v(g(e.item.text)+" ",1),e.isExternalLink?(h(),m(s,{key:0})):b("v-if",!0)],10,["href","target","rel","aria-label"])])};var de=f({name:"DropdownLink",components:{NavBarLink:ce},props:{item:{type:Object,required:!0}},setup(e){const t=c(!1),n=O();y((()=>n.path),(()=>{t.value=!1}));return{open:t,setOpen:e=>{t.value=e},isLastItemOfArray:(e,t)=>t.length&&t.indexOf(e)===t.length-1}}});const he={class:"nav-dropdown"},me={key:0},pe={key:1,class:"dropdown-subitem-wrapper"};de.render=function(e,t,n,a,r,o){const s=k("NavBarLink");return h(),m("div",{class:["dropdown-wrapper",{open:e.open}]},[p("button",{class:"dropdown-title",type:"button","aria-label":e.item.ariaLabel,onClick:t[1]||(t[1]=t=>e.setOpen(!e.open))},[p("span",null,g(e.item.text),1),p("span",{class:["arrow",e.open?"down":"right"]},null,2)],8,["aria-label"]),p("ul",he,[(h(!0),m(w,null,L(e.item.items,((t,n)=>(h(),m("li",{key:t.link||n,class:"dropdown-item"},[t.items?(h(),m("h4",me,g(t.text),1)):b("v-if",!0),t.items?(h(),m("ul",pe,[(h(!0),m(w,null,L(t.items,(n=>(h(),m("li",{key:n.link,class:"dropdown-subitem"},[p(s,{item:n,onFocusout:a=>e.isLastItemOfArray(n,t.items)&&e.isLastItemOfArray(t,e.item.items)&&e.setOpen(!1)},null,8,["item","onFocusout"])])))),128))])):(h(),m(s,{key:2,item:t,onFocusout:n=>e.isLastItemOfArray(t,e.item.items)&&e.setOpen(!1)},null,8,["item","onFocusout"]))])))),128))])],2)};const fe=["GitHub","GitLab","Bitbucket"].map((e=>[e,new RegExp(e,"i")]));var ve={components:{NavBarLink:ce,NavDropdownLink:de},setup(){const e=X(),t=V(),n=O(),a=d((()=>{const e=t.value.themeConfig,n=e.docsRepo||e.repo;let a=e.repoLabel;if(n){const e=/^https?:/.test(n)?n:"https://github.com/"+n;if(!a){const t=e.match(/^https?:\/\/[^/]+/);if(t){const e=t[0],n=fe.find((([t,n])=>n.test(e)));a=n&&n[0]}}return{link:e,text:a||"Source"}}return null})),r=d((()=>{const e=t.value.themeConfig.locales;if(!e)return null;const a=Object.keys(e);if(a.length<=1)return null;const r=_?t.value.base:"/",o=r.endsWith("/")?r.slice(0,-1):r,s=n.path.slice(o.length),i=a.find((e=>"/"!==e&&s.startsWith(e))),l=i?s.substring(i.length-1):s,c=a.map((t=>{const n=t.endsWith("/")?t.slice(0,-1):t;return{text:e[t].label||e[t].lang,link:`${n}${l}`}})),u=i||"/";return{text:e[u].selectText?e[u].selectText:"Languages",items:c}}));return{navData:d((()=>e.value.themeConfig.nav)),repoInfo:a,localeCandidates:r}}};const ge={key:0,class:"nav-links"};ve.render=function(e,t,n,a,r,o){const s=k("NavDropdownLink"),i=k("NavBarLink");return e.navData||e.repoInfo?(h(),m("nav",ge,[e.navData?(h(!0),m(w,{key:0},L(e.navData,(e=>(h(),m(w,null,[e.items?(h(),m(s,{key:0,item:e},null,8,["item"])):(h(),m(i,{key:1,item:e},null,8,["item"]))],64)))),256)):b("v-if",!0),e.localeCandidates?(h(),m(s,{key:1,item:e.localeCandidates},null,8,["item"])):b("v-if",!0),e.repoInfo?(h(),m(i,{key:2,item:e.repoInfo},null,8,["item"])):b("v-if",!0)])):b("v-if",!0)};var be={components:{NavBarLinks:ve},setup:()=>({withBase:te})};const ke=p("div",{class:"flex-grow"},null,-1);be.render=function(e,t,n,a,r,o){const s=k("NavBarLinks");return h(),m(w,null,[p("a",{class:"title","aria-label":e.$site.title+", back to home",href:e.$site.base},[e.$theme.logo?(h(),m("img",{key:0,class:"logo",src:e.withBase(e.$theme.logo),alt:"logo"},null,8,["src"])):b("v-if",!0),p("span",null,g(e.$site.title),1)],8,["aria-label","href"]),ke,p(s,{class:"hide-mobile"}),C(e.$slots,"search")],64)};var ye=f({components:{NavBarLink:ce},setup(){const e=j(),t=V(),n=d((()=>e.value.frontmatter)),a=d((()=>({link:n.value.actionLink,text:n.value.actionText}))),r=d((()=>te(n.value.heroImage))),o=d((()=>t.value.title)),s=d((()=>t.value.themeConfig.pages)),i=d((()=>t.value.description));return{data:n,actionLink:a,heroImageSrc:r,siteValue:s,base:"/blog",siteTitle:o,siteDescription:i}}});const we=x("data-v-0475c3d6");T("data-v-0475c3d6");const Le={class:"article-header"},Ce={class:"title"},xe={datetime:"2020-10-25",class:"time"},Se=p("div",{class:"line"},null,-1),$e={class:"describe"};I();const Te=we((function(e,t,n,a,r,o){return h(!0),m(w,null,L(e.siteValue,((t,n)=>S((h(),m("a",{href:e.base+t.regularPath||"",key:n,class:"article"},[p("div",Le,[p("div",Ce,g(t.frontMatter.title||""),1),p("time",xe,g(t.frontMatter.date||""),1)]),Se,p("p",$e,g(t.frontMatter.describe||""),1)],8,["href"])),[[$,!t.frontMatter.home]]))),128)}));ye.render=Te,ye.__scopeId="data-v-0475c3d6";var Ie={emits:["toggle"]};const Be=p("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[p("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1);function Ee(){let e=null,t=null;const n=decodeURIComponent,a=e=>e&&e.classList.remove("active"),r=n=>{if(a(t),a(e),t=document.querySelector(`.sidebar a[href="${n}"]`),t){t.classList.add("active");const n=t.closest(".sidebar > ul > li");n&&n!==t.parentElement?(e=n.querySelector("a"),e&&e.classList.add("active")):e=null}},l=()=>{const e=[].slice.call(document.querySelectorAll(".sidebar a")),t=[].slice.call(document.querySelectorAll(".header-anchor")).filter((t=>e.some((e=>e.hash===t.hash)))),a=document.getElementById("app").offsetTop,o=window.scrollY,s=e=>e.parentElement.offsetTop-a-15;for(let e=0;e<t.length;e++){const a=t[e],i=t[e+1];if(0===e&&0===o||o>=s(a)&&(!i||o<s(i))){const e=n(a.hash);return history.replaceState(null,document.title,e),void r(e)}}},c=function(e,t){let n,a=!1;return()=>{n&&clearTimeout(n),a?n=setTimeout(e,t):(e(),a=!0,setTimeout((()=>{a=!1}),t))}}(l,300);o((()=>{l(),window.addEventListener("scroll",c)})),s((()=>{r(n(location.hash))})),i((()=>{window.removeEventListener("scroll",c)}))}Ie.render=function(e,t,n,a,r,o){return h(),m("div",{class:"sidebar-button",onClick:t[1]||(t[1]=t=>e.$emit("toggle"))},[Be])};const Me=e=>{const{item:{link:t,text:n,children:a}}=e,r=O(),o=j(),s=V(),i=(c=s.value.base,(u=t||"")?u.startsWith("#")?u:function(e,t){const n=e.endsWith("/"),a=t.startsWith("/");return n&&a?e.slice(0,-1)+t:n||a?e+t:`${e}/${t}`}(c,u):void 0);var c,u;const d=function(e,t){return void 0!==t&&ae(e.path)===ae(t)}(r,i),h=o.value.headers;return l("li",{class:"sidebar-item"},[De(d,n,i),je(d,a,h)])};var Oe={components:{NavBarLinks:ve,SideBarItem:Me},setup(){const e=j(),t=X(),n=O();return Ee(),{items:d((()=>{const{headers:a,frontmatter:{sidebar:r,sidebarDepth:o=2}}=e.value;if("auto"===r)return Pe(a,o);if(Array.isArray(r))return Ae(r);if(!1===r)return[];{const{sidebar:e}=t.value.themeConfig;if("auto"===e)return Pe(a,o);if(Array.isArray(e))return Ae(e);if(!1===e)return[];if("object"==typeof e)return function(e,t,n,a){const r=[t,Object.keys(e)[0]].map((t=>e[function(e){const t=e.split("/");return t[t.length-1]&&t.pop(),function(e){return/(\.html|\/)$/.test(e)?e:e+"/"}(t.join("/"))}(t)])).find(Boolean);if(Array.isArray(r))return Ae(r);if("auto"===r)return Pe(n,a);return[]}(e,n.path,a,o)}}))}}};function Pe(e,t){const n=[];if(void 0===e)return[];let a=void 0;return e.forEach((({level:e,title:r,slug:o})=>{if(e-1>t)return;const s={text:r,link:"#"+o};2===e?(a=s,n.push(s)):a&&(a.children||(a.children=[])).push(s)})),n}function Ae(e,t){return e}function De(e,t,n){return l(n?"a":"p",{class:{"sidebar-link":!0,active:e},href:n},t)}function je(e,t,n){return t&&t.length>0?l("ul",{class:"sidebar-items"},t.map((e=>l(Me,{item:e})))):e&&n?je(!1,function(e){return _e(function(e){let t;return(e=e.map((e=>Object.assign({},e)))).forEach((e=>{2===e.level?t=e:t&&(t.children||(t.children=[])).push(e)})),e.filter((e=>2===e.level))}(e))}(n)):null}function _e(e){return e.map((e=>({text:e.title,link:"#"+e.slug,children:e.children?_e(e.children):void 0})))}const Ne={class:"sidebar"};Oe.render=function(e,t,n,a,r,o){const s=k("NavBarLinks"),i=k("SideBarItem");return h(),m(w,null,[p(s,{class:"show-mobile"}),C(e.$slots,"top"),p("ul",Ne,[(h(!0),m(w,null,L(e.items,(e=>(h(),m(i,{item:e},null,8,["item"])))),256))]),C(e.$slots,"bottom")],64)};var qe={setup(){const e=j(),t=V(),n=e=>{let n;return Object.keys(t.value.themeConfig.sidebar).some((a=>t.value.themeConfig.sidebar[a].some((t=>(Array.isArray(t.children)&&(n=t.children.find((t=>t.link===e))),!!n))))),n},a=d((()=>{if(!1!==e.value.frontmatter.next)return"string"==typeof e.value.frontmatter.next?n(e.value.frontmatter.next):e.value.next})),r=d((()=>{if(!1!==e.value.frontmatter.prev)return"string"==typeof e.value.frontmatter.prev?n(e.value.frontmatter.prev):e.value.prev})),o=d((()=>!!a||!!r));return{next:a,prev:r,hasLinks:o}}};const Re={key:0,class:"links-wrapper"},He={class:"prev-link"},We={key:0},ze=v(" ← "),Fe={class:"next-link"},Ue={key:0},Ve=v(" → ");qe.render=function(e,t,n,a,r,o){return e.hasLinks?(h(),m("div",Re,[p("div",He,[e.prev?(h(),m("div",We,[ze,p("a",{href:e.prev.link},g(e.prev.text),9,["href"])])):b("v-if",!0)]),p("div",Fe,[e.next?(h(),m("div",Ue,[p("a",{href:e.next.link},g(e.next.text),9,["href"]),Ve])):b("v-if",!0)])])):b("v-if",!0)};var Ge={components:{OutboundLink:ie},setup(){const e=j(),t=V();return{editLink:d((()=>{const n=null==e.value.frontmatter.editLink?t.value.themeConfig.editLinks:e.value.frontmatter.editLink,{repo:a,docsDir:r="",docsBranch:o="master",docsRepo:s=a}=t.value.themeConfig,{relativePath:i}=e.value;return n&&i&&a?function(e,t,n,a,r){if(/bitbucket.org/.test(e))return(ne(t)?t:e).replace(Z,"")+`/src/${a}/`+(n?n.replace(Z,"")+"/":"")+r+`?mode=edit&spa=0&at=${a}&fileviewer=file-view-default`;return(ne(t)?t:"https://github.com/"+t).replace(Z,"")+`/edit/${a}/`+(n?n.replace(Z,"")+"/":"")+r}(a,s||a,r,o,i):null})),editLinkText:d((()=>t.value.themeConfig.editLinkText||"Edit this page"))}}};const Je={class:"page-edit"};Ge.render=function(e,t,n,a,r,o){const s=k("OutboundLink");return h(),m("footer",Je,[e.editLink?(h(),m("a",{key:0,href:e.editLink,target:"_blank",rel:"noopener noreferrer"},[v(g(e.editLinkText)+" ",1),p(s)],8,["href"])):b("v-if",!0)])};var Ke={components:{NextAndPrevLinks:qe,PageEdit:Ge},setup:()=>({pageData:j()}),mounted(){!function(e){var t,n={},a="jinrishici-token";function r(){return document.getElementById("jinrishici-sentence")||0!=document.getElementsByClassName("jinrishici-sentence").length}function o(){n.load((function(e){var t=document.getElementById("jinrishici-sentence"),n=document.getElementsByClassName("jinrishici-sentence");if(t&&(t.innerText=e.data.content),0!==n.length)for(var a=0;a<n.length;a++)n[a].innerText=e.data.content}))}function s(e,t){var n=new XMLHttpRequest;n.open("get",t),n.withCredentials=!0,n.send(),n.onreadystatechange=function(t){if(4===n.readyState){var a=JSON.parse(n.responseText);"success"===a.status?e(a):console.error("今日诗词API加载失败，错误原因："+a.errMessage)}}}n.load=function(t){return e.localStorage&&e.localStorage.getItem(a)?(n=t,r=e.localStorage.getItem(a),s(n,"https://v2.jinrishici.com/one.json?client=browser-sdk/1.2&X-User-Token="+encodeURIComponent(r))):function(t){return s((function(n){e.localStorage.setItem(a,n.token),t(n)}),"https://v2.jinrishici.com/one.json?client=browser-sdk/1.2")}(t);var n,r},e.jinrishici=n,r()?o():(t=function(){r()&&o()},"loading"!=document.readyState?t():document.addEventListener?document.addEventListener("DOMContentLoaded",t):document.attachEvent("onreadystatechange",(function(){"complete"==document.readyState&&t()})))}(window)}};const Xe={class:"content"},Ye={class:"md-header"},Qe={class:"md-title"},Ze=p("span",{id:"jinrishici-sentence"},"正在加载今日诗词....",-1),et={class:"md-date"},tt={class:"catalog"},nt={class:"catalog-item"};Ke.render=function(e,t,n,a,r,o){const s=k("Content"),i=k("NextAndPrevLinks"),l=k("PageEdit");return h(),m("div",Xe,[C(e.$slots,"top"),p("div",Ye,[p("div",Qe,g(a.pageData.title),1),Ze,p("div",et,g(a.pageData.frontmatter.date),1)]),p("ul",tt,[(h(!0),m(w,null,L(a.pageData.headers,(e=>(h(),m("li",nt,[2==e.level?(h(),m("a",{key:0,class:"level level-2",href:"#"+e.slug},g(e.title),9,["href"])):b("v-if",!0),3==e.level?(h(),m("a",{key:1,class:"level level-3",href:"#"+e.slug},g(e.title),9,["href"])):b("v-if",!0)])))),256))]),p(s),p(i),p(l),C(e.$slots,"bottom")])};var at={components:{Home:ye,NavBar:be,ToggleSideBarButton:Ie,SideBar:Oe,Page:Ke},setup(){const e=O(),t=j(),n=V(),a=X(),r=c(!1),o=d((()=>!!t.value.frontmatter.home)),s=d((()=>{const{themeConfig:e}=a.value,{frontmatter:r}=t.value;return!1!==r.navbar&&!1!==e.navbar&&(n.value.title||e.logo||e.repo||e.nav)})),i=d((()=>{const{frontmatter:e}=t.value,{themeConfig:n}=a.value;return!e.home&&!1!==e.sidebar&&("object"==typeof n.sidebar&&0!=Object.keys(n.sidebar).length||Array.isArray(n.sidebar)&&0!=n.sidebar.length)})),l=d((()=>[{"no-navbar":!s.value,"sidebar-open":r.value,"no-sidebar":!i.value}])),u=e=>{r.value="boolean"==typeof e?e:!r.value},h=u.bind(null,!1);return y(e,h),{showNavbar:s,showSidebar:i,openSideBar:r,pageClasses:l,enableHome:o,toggleSidebar:u}}};const rt={key:0,class:"navbar"},ot={key:1,class:"home","aria-labelledby":"main-title"},st={key:2};at.render=function(e,t,n,a,r,o){const s=k("NavBar"),i=k("ToggleSideBarButton"),l=k("SideBar"),c=k("Home"),u=k("Page"),d=k("Debug");return h(),m(w,null,[p("div",{class:["theme",a.pageClasses]},[a.showNavbar?(h(),m("header",rt,[p(s,null,{search:B((()=>[C(e.$slots,"navbar-search")])),_:1}),p(i,{onToggle:a.toggleSidebar},null,8,["onToggle"])])):b("v-if",!0),p("aside",{class:{open:a.openSideBar}},[p(l,null,{top:B((()=>[C(e.$slots,"sidebar-top")])),bottom:B((()=>[C(e.$slots,"sidebar-bottom")])),_:1})],2),b(" TODO: make this button accessible "),p("div",{class:"sidebar-mask",onClick:t[1]||(t[1]=e=>a.toggleSidebar(!1))}),a.enableHome?(h(),m("main",ot,[p(c,null,{hero:B((()=>[C(e.$slots,"home-hero")])),features:B((()=>[C(e.$slots,"home-features")])),footer:B((()=>[C(e.$slots,"home-footer")])),_:1})])):(h(),m("main",st,[p(u,null,{top:B((()=>[C(e.$slots,"page-top")])),bottom:B((()=>[C(e.$slots,"page-bottom")])),_:1})]))],2),p(d)],64)};const it=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];var lt={setup:()=>({getMsg:()=>it[Math.floor(Math.random()*it.length)]})};const ct={class:"theme"},ut=p("h1",null,"404",-1);lt.render=function(e,t,n,a,r,o){return h(),m("div",ct,[ut,p("blockquote",null,g(e.getMsg()),1),p("a",{href:e.$site.base,"aria-label":"go to home"}," Take me home. ",8,["href"])])};const dt={Layout:at,NotFound:lt};var ht=f({setup(){const e=V();return{data:d((()=>function(e){const t=[];let n=0,a=-1;for(let r=0;r<e.length;r++){const o=e[r],s=o.frontMatter.date.split("-")[0];s==n?t[a].push(o):(a++,t[a]=[],t[a].push(o),n=s)}return t}(e.value.themeConfig.pages))),base:"/blog"}}});const mt=x("data-v-2de68011");T("data-v-2de68011");const pt={class:""},ft={class:"years"},vt={class:"year"},gt={class:"title"},bt=p("div",{class:"title-o"},null,-1),kt={class:"date"};I();const yt=mt((function(e,t,n,a,r,o){return h(),m("div",pt,[(h(!0),m(w,null,L(e.data,((t,n)=>(h(),m("div",ft,[p("div",vt,g(t[0].frontMatter.date.split("-")[0]),1),(h(!0),m(w,null,L(t,((t,n)=>S((h(),m("a",{href:e.base+t.regularPath||"",key:n,class:"article"},[p("div",gt,[bt,v(" "+g(t.frontMatter.title||""),1)]),p("div",kt,g(t.frontMatter.date.slice(5)||""),1)],8,["href"])),[[$,!t.frontMatter.home]]))),128))])))),256))])}));ht.render=yt,ht.__scopeId="data-v-2de68011";var wt=f({setup(){const e=V(),t=O(),n=d((()=>function(e){const t={};for(let n=0;n<e.length;n++){const a=e[n];a.frontMatter.tags.forEach((e=>{t[e]||(t[e]=[]),t[e].push(a)}))}return t}(e.value.themeConfig.pages)));let a=c("");return{data:n,route:t,toggleTag:e=>{a.value=e},selectTag:a,base:"/blog"}}});const Lt=x("data-v-8ee798d2");T("data-v-8ee798d2");const Ct={class:"header"},xt={class:"title"},St=p("div",{class:"title-o"},null,-1),$t={class:"date"},Tt={class:"tags"};I();const It=Lt((function(e,t,n,a,r,o){return h(),m(w,null,[p("div",Ct,g(e.selectTag),1),(h(!0),m(w,null,L(e.data[e.selectTag],((t,n)=>S((h(),m("a",{href:e.base+t.regularPath||"",key:n,class:"article"},[p("div",xt,[St,v(" "+g(t.frontMatter.title||""),1)]),p("div",$t,g(t.frontMatter.date.slice(5)||""),1)],8,["href"])),[[$,!t.frontMatter.home]]))),128)),p("div",Tt,[(h(!0),m(w,null,L(e.data,((t,n,a)=>(h(),m("span",{onClick:t=>e.toggleTag(n),class:"tag"},g(n),9,["onClick"])))),256))])],64)}));wt.render=It,wt.__scopeId="data-v-8ee798d2";var Bt={name:"comment",mounted(){const e={clientID:"a6598e156cf30077f530",clientSecret:"a5e33f61a5071999b191b5f768f837e9187693fd",repo:"blog-comments",owner:"crazymryan",admin_user:["crazymryan"],githubID:"crazymryan",id:decodeURI(window.location.pathname),distractionFreeMode:!0};new Gitalk(e).render("gitalk-container")}};const Et={id:"gitalk-container"};Bt.render=function(e,t,n,a,r,o){return h(),m("div",Et)};var Mt={...dt,enhanceApp({app:e,router:t,siteData:n}){e.component("Comment",Bt),e.component("Tags",wt),e.component("Docs",ht)}};const Ot=Mt.NotFound||(()=>"404 Not Found");function Pt(){const a=c();let r,o=_;const s=function(a,r){const o=e({path:"/",contentComponent:null}),s="undefined"!=typeof window;function i(e){e=e||(s?location.href:"/");const t=new URL(e,"http://a.com");return t.pathname.endsWith("/")||t.pathname.endsWith(".html")||(t.pathname+=".html",e=t.pathname+t.search+t.hash),s&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",e)),l(e)}async function l(e,i=0){const l=new URL(e,"http://a.com"),c=o.path=l.pathname;try{let e=a(o);if("then"in e&&"function"==typeof e.then&&(e=await e),o.path===c){if(!e)throw new Error("Invalid route component: "+e);o.contentComponent=t(e),s&&n((()=>{if(l.hash&&!i){const e=document.querySelector(decodeURIComponent(l.hash));if(e)return void P(e,l.hash)}window.scrollTo(0,i)}))}}catch(e){e.message.match(/fetch/)||console.error(e),o.path===c&&(o.contentComponent=r?t(r):null)}}return s&&(window.addEventListener("click",(e=>{const t=e.target.closest("a");if(t){const{href:n,protocol:a,hostname:r,pathname:o,hash:s,target:l}=t,c=window.location;e.ctrlKey||e.shiftKey||e.altKey||e.metaKey||"_blank"===l||a!==c.protocol||r!==c.hostname||(e.preventDefault(),o===c.pathname?s&&s!==c.hash&&(history.pushState(null,"",s),P(t,s,t.classList.contains("header-anchor"))):i(n))}}),{capture:!0}),window.addEventListener("popstate",(e=>{l(location.href,e.state&&e.state.scrollPosition||0)})),window.addEventListener("hashchange",(e=>{e.preventDefault()}))),{route:o,go:i}}((e=>{let t=N(e.path);if(o&&(r=t),(o||r===t)&&(t=t.replace(/\.js$/,".lean.js")),_)return o=!1,import(t).then((e=>(e.__pageData&&(a.value=u(JSON.parse(e.__pageData))),e.default)));{const e=require(t);return a.value=JSON.parse(e.__pageData),e.default}}),Ot),i=E(Mt.Layout);i.provide(M,s),i.provide(D,a),i.component("Content",z),i.component("Debug",(()=>null));const l=X(s.route);return _&&A(a,l),Object.defineProperties(i.config.globalProperties,{$site:{get:()=>F.value},$siteByRoute:{get:()=>l.value},$page:{get:()=>a.value},$theme:{get:()=>l.value.themeConfig}}),Mt.enhanceApp&&Mt.enhanceApp({app:i,router:s,siteData:l}),{app:i,router:s}}if(_){const{app:e,router:t}=Pt();t.go().then((()=>{e.mount("#app")}))}export{Pt as createApp};