import{r as e,m as t,n,i as a,w as o,o as r,a as s,b as l,h as i,c,d as u,e as d,f,g as h,j as m,k as A,l as g,t as p,p as v,q as b,s as w,F as y,u as k,v as B,x as P,y as M,z as C,A as O,B as L,C as I,D as E}from"./common-9fe24c8f.js";const F=Symbol();function T(){return function(){const e=a(F);if(!e)throw new Error("useRouter() is called without provider.");return e}().route}function S(e,t,n=!1){const a=document.getElementById("app").offsetTop,o=e.classList.contains(".header-anchor")?e:document.querySelector(decodeURIComponent(t));if(o){const e=o.offsetTop-a-15;!n||Math.abs(e-window.scrollY)>window.innerHeight?window.scrollTo(0,e):window.scrollTo({left:0,top:e,behavior:"smooth"})}}function R(e,t){const n=Array.from(document.querySelectorAll("meta"));let a=!0;const r=e=>{a?a=!1:(n.forEach((e=>document.head.removeChild(e))),n.length=0,e&&e.length&&e.forEach((e=>{const t=function([e,t,n]){const a=document.createElement(e);for(const e in t)a.setAttribute(e,t[e]);n&&(a.innerHTML=n);return a}(e);document.head.appendChild(t),n.push(t)})))};o((()=>{const n=e.value,a=t.value,o=n&&n.title;document.title=(o?o+" | ":"")+a.title,r([["meta",{charset:"utf-8"}],["meta",{name:"viewport",content:"width=device-width,initial-scale=1"}],["meta",{name:"description",content:a.description}],...a.head,...n&&n.frontmatter.head||[]])}))}const U=Symbol();function D(){const e=a(U);if(!e)throw new Error("usePageData() is called without provider.");return e}const j="undefined"!=typeof window;function N(e){let t=e.replace(/\.html$/,"");if(t.endsWith("/")&&(t+="index"),j){const e="/blog/";t=t.slice(e.length).replace(/\//g,"_")+".md";t=`${e}_assets/${t}.${__VP_HASH_MAP__[t]}.js`}else t=`./${t.slice(1).replace(/\//g,"_")}.md.js`;return t}const V=new Set,W=()=>document.createElement("link");let x;const H=j&&(x=W())&&x.relList&&x.relList.supports&&x.relList.supports("prefetch")?e=>{const t=W();t.rel="prefetch",t.href=e,document.head.appendChild(t)}:e=>{const t=new XMLHttpRequest;t.open("GET",e,t.withCredentials=!0),t.send()};const Y={setup(){const e=T();return function(){if(!j)return;if(!window.IntersectionObserver)return;let e;if((e=navigator.connection)&&(e.saveData||/2g/.test(e.effectiveType)))return;const t=window.requestIdleCallback||setTimeout;let n=null;const a=()=>{n&&n.disconnect(),n=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting){const t=e.target;n.unobserve(t);const{pathname:a}=t;if(!V.has(a)){V.add(a);const e=N(a);H(e)}}}))})),t((()=>{document.querySelectorAll(".vitepress-content a").forEach((e=>{const{target:t,hostname:a,pathname:o}=e;"_blank"!==t&&a===location.hostname&&(o!==location.pathname?n.observe(e):V.add(o))}))}))};r(a),s(a),l((()=>{n&&n.disconnect()}))}(),()=>e.contentComponent?i(e.contentComponent):null}};const q=c((K='{"lang":"en-US","title":"悲伤日记","description":"A VitePress site","base":"/blog/","head":[["meta",{"name":"viewport","content":"width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}],["meta",{"name":"keywords","content":"悲伤日记"}],["link",{"rel":"icon","href":"/favicon.ico"}],["link",{"rel":"stylesheet","href":"https://unpkg.com/gitalk/dist/gitalk.css"}],["script",{"src":"https://unpkg.com/gitalk/dist/gitalk.min.js"}]],"themeConfig":{"pages":[{"frontMatter":{"date":"2021-01-03","title":"五分钟搭建博客评论组件-gitalk","tags":["插件","gitalk"],"describe":"因为自己最近在搭建一个自己的博客，需要有个评论功能，又不想自己建数据库，还想用第三方登录，仔细斟酌"},"regularPath":"/docs/gitalk-Study.html","relativePath":"docs/gitalk-Study.md"},{"frontMatter":{"date":"2021-01-01","title":"悲伤日记祝您新年快乐","tags":[2021,"新年快乐"],"describe":"在这过去的一年里，悲伤日记 一共发布了 32 篇原创文章，收获了 331 位粉丝。"},"regularPath":"/docs/2021-HappyNewYear.html","relativePath":"docs/2021-HappyNewYear.md"},{"frontMatter":{"date":"2020-12-29","title":"如何优化 祖传代码","tags":["Vue","性能优化"],"describe":"“这页面加载也太慢了！”，一个宁静的下午就此打破，在老板和 PM 的 \\"威逼利诱之下\\" ，我开始了对这个祖传(shi)山项目进行了优化"},"regularPath":"/docs/vue-Optimize.html","relativePath":"docs/vue-Optimize.md"},{"frontMatter":{"date":"2020-12-22","title":"推荐一些奇奇怪怪的好东西","tags":["Vue","插件"],"describe":"总结一部分，特别实用的轮子，瞬间提高你的工作效率！"},"regularPath":"/docs/vue-PlugIn.html","relativePath":"docs/vue-PlugIn.md"},{"frontMatter":{"date":"2020-12-05","title":"初探 svelte","tags":["svelte","学习"],"describe":"svelte 不知道大家有没有了解过，最近一次偶然刷文章，发现了它"},"regularPath":"/docs/svelte-Study.html","relativePath":"docs/svelte-Study.md"},{"frontMatter":{"date":"2020-11-02","title":"vue 奇淫技巧","tags":["Vue","学习"],"describe":"很多小玩意小技巧都是自己慢慢实践出来的,所以做个小笔记"},"regularPath":"/docs/vue-technique.html","relativePath":"docs/vue-technique.md"},{"frontMatter":{"date":"2020-09-28","title":"自己动手写一个render函数","tags":["Vue","Render"],"describe":"简单实现一下 vue 的 render 函数"},"regularPath":"/docs/vue-Render.html","relativePath":"docs/vue-Render.md"},{"frontMatter":{"date":"2020-03-26","title":"详解 vue-tree-color","tags":["Vue","插件"],"describe":"vue-tree-color 的详细说明书 , 你值得入手"},"regularPath":"/docs/vue-TreeColor.html","relativePath":"docs/vue-TreeColor.md"}],"author":"悲伤日记","search":true,"nav":[{"text":"首页","link":"/"},{"text":"归档","link":"/docs"},{"text":"分类","link":"/tags"},{"text":"README","link":"/README"}]},"locales":{}}',u(JSON.parse(K))));var K;function Q(){return q}const z="undefined"!=typeof window;function G(e,t){const n=function(e,t){t.sort(((e,t)=>{const n=t.split("/").length-e.split("/").length;return 0!==n?n:t.length-e.length}));for(const n of t)if(e.startsWith(n))return n}(t,Object.keys(e));return n?e[n]:void 0}function Z(e,t){t=function(e,t){if(!z)return t;const n=e.base,a=n.endsWith("/")?n.slice(0,-1):n;return t.slice(a.length)}(e,t);const n=G(e.locales||{},t)||{},a=G(e.themeConfig&&e.themeConfig.locales||{},t)||{};return{...e,...n,themeConfig:{...e.themeConfig,...a,locales:{}},locales:{}}}function J(e=T()){return d((()=>Z(q.value,e.path)))}const X=/#.*$/,$=/\.(md|html)$/,_=/^[a-z]+:/i;function ee(e){return(Q().value.base+e).replace(/\/+/g,"/")}function te(e){return decodeURI(e).replace(X,"").replace($,"")}const ne={class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},ae=m("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},null,-1),oe=m("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},null,-1);const re={render:function(e,t){return f(),h("svg",ne,[ae,oe])}},se=e=>((e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.html$/,"")).endsWith("/")&&(e+="index"),e);var le=A({components:{OutboundLink:re},props:{item:{type:Object,required:!0}},setup(e){const t=e.item,n=T(),a=d((()=>({active:o.value,external:r.value}))),o=d((()=>se(ee(t.link))===se(n.path))),r=d((()=>{return e=t.link,_.test(e);var e})),s=d((()=>r.value?t.link:ee(t.link))),l=d((()=>t.target?t.target:r.value?"_blank":"")),i=d((()=>t.rel?t.rel:r.value?"noopener noreferrer":""));return{classes:a,isActiveLink:o,isExternalLink:r,href:s,target:l,rel:i}}});const ie={class:"nav-item"};le.render=function(e,t,n,a,o,r){const s=b("OutboundLink");return f(),h("div",ie,[m("a",{class:["nav-link",e.classes],href:e.href,target:e.target,rel:e.rel,"aria-label":e.item.ariaLabel},[g(p(e.item.text)+" ",1),e.isExternalLink?(f(),h(s,{key:0})):v("v-if",!0)],10,["href","target","rel","aria-label"])])};var ce=A({name:"DropdownLink",components:{NavBarLink:le},props:{item:{type:Object,required:!0}},setup(e){const t=c(!1),n=T();w((()=>n.path),(()=>{t.value=!1}));return{open:t,setOpen:e=>{t.value=e},isLastItemOfArray:(e,t)=>t.length&&t.indexOf(e)===t.length-1}}});const ue={class:"nav-dropdown"},de={key:0},fe={key:1,class:"dropdown-subitem-wrapper"};ce.render=function(e,t,n,a,o,r){const s=b("NavBarLink");return f(),h("div",{class:["dropdown-wrapper",{open:e.open}]},[m("button",{class:"dropdown-title",type:"button","aria-label":e.item.ariaLabel,onClick:t[1]||(t[1]=t=>e.setOpen(!e.open))},[m("span",null,p(e.item.text),1),m("span",{class:["arrow",e.open?"down":"right"]},null,2)],8,["aria-label"]),m("ul",ue,[(f(!0),h(y,null,k(e.item.items,((t,n)=>(f(),h("li",{key:t.link||n,class:"dropdown-item"},[t.items?(f(),h("h4",de,p(t.text),1)):v("v-if",!0),t.items?(f(),h("ul",fe,[(f(!0),h(y,null,k(t.items,(n=>(f(),h("li",{key:n.link,class:"dropdown-subitem"},[m(s,{item:n,onFocusout:a=>e.isLastItemOfArray(n,t.items)&&e.isLastItemOfArray(t,e.item.items)&&e.setOpen(!1)},null,8,["item","onFocusout"])])))),128))])):(f(),h(s,{key:2,item:t,onFocusout:n=>e.isLastItemOfArray(t,e.item.items)&&e.setOpen(!1)},null,8,["item","onFocusout"]))])))),128))])],2)};const he=["GitHub","GitLab","Bitbucket"].map((e=>[e,new RegExp(e,"i")]));var me={components:{NavBarLink:le,NavDropdownLink:ce},setup(){const e=J(),t=Q(),n=T(),a=d((()=>{const e=t.value.themeConfig,n=e.docsRepo||e.repo;let a=e.repoLabel;if(n){const e=/^https?:/.test(n)?n:"https://github.com/"+n;if(!a){const t=e.match(/^https?:\/\/[^/]+/);if(t){const e=t[0],n=he.find((([t,n])=>n.test(e)));a=n&&n[0]}}return{link:e,text:a||"Source"}}return null})),o=d((()=>{const e=t.value.themeConfig.locales;if(!e)return null;const a=Object.keys(e);if(a.length<=1)return null;const o=j?t.value.base:"/",r=o.endsWith("/")?o.slice(0,-1):o,s=n.path.slice(r.length),l=a.find((e=>"/"!==e&&s.startsWith(e))),i=l?s.substring(l.length-1):s,c=a.map((t=>{const n=t.endsWith("/")?t.slice(0,-1):t;return{text:e[t].label||e[t].lang,link:`${n}${i}`}})),u=l||"/";return{text:e[u].selectText?e[u].selectText:"Languages",items:c}}));return{navData:d((()=>e.value.themeConfig.nav)),repoInfo:a,localeCandidates:o}}};const Ae={key:0,class:"nav-links"};me.render=function(e,t,n,a,o,r){const s=b("NavDropdownLink"),l=b("NavBarLink");return e.navData||e.repoInfo?(f(),h("nav",Ae,[e.navData?(f(!0),h(y,{key:0},k(e.navData,(e=>(f(),h(y,null,[e.items?(f(),h(s,{key:0,item:e},null,8,["item"])):(f(),h(l,{key:1,item:e},null,8,["item"]))],64)))),256)):v("v-if",!0),e.localeCandidates?(f(),h(s,{key:1,item:e.localeCandidates},null,8,["item"])):v("v-if",!0),e.repoInfo?(f(),h(l,{key:2,item:e.repoInfo},null,8,["item"])):v("v-if",!0)])):v("v-if",!0)};var ge={components:{NavBarLinks:me},setup:()=>({withBase:ee})};const pe=m("div",{class:"flex-grow"},null,-1);ge.render=function(e,t,n,a,o,r){const s=b("NavBarLinks");return f(),h(y,null,[m("a",{class:"title","aria-label":e.$site.title+", back to home",href:e.$site.base},[e.$theme.logo?(f(),h("img",{key:0,class:"logo",src:e.withBase(e.$theme.logo),alt:"logo"},null,8,["src"])):v("v-if",!0),m("span",null,p(e.$site.title),1)],8,["aria-label","href"]),pe,m(s,{class:"hide-mobile"}),v(' <slot name="search" /> ')],64)};var ve=A({components:{NavBarLink:le},setup(){const e=D(),t=Q(),n=d((()=>e.value.frontmatter)),a=d((()=>({link:n.value.actionLink,text:n.value.actionText}))),o=d((()=>ee(n.value.heroImage))),r=d((()=>t.value.title)),s=d((()=>t.value.themeConfig.pages)),l=d((()=>t.value.description));return{data:n,actionLink:a,heroImageSrc:o,siteValue:s,base:"/blog",siteTitle:r,siteDescription:l}}});const be=B("data-v-8daa84f6");C("data-v-8daa84f6");const we={class:"article-header"},ye={class:"title"},ke=m("div",{class:"line"},null,-1),Be={class:"describe"};O();const Pe=be((function(e,t,n,a,o,r){return f(!0),h(y,null,k(e.siteValue,((t,n)=>P((f(),h("a",{href:e.base+t.regularPath||"",key:n,class:"article"},[m("div",we,[m("div",ye,p(t.frontMatter.title||""),1),m("time",{datetime:t.frontMatter.date,class:"time"},p(t.frontMatter.date||""),9,["datetime"])]),ke,m("p",Be,p(t.frontMatter.describe||""),1)],8,["href"])),[[M,!t.frontMatter.home]]))),128)}));ve.render=Pe,ve.__scopeId="data-v-8daa84f6";var Me={emits:["toggle"]};const Ce=m("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[m("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1);function Oe(){let e=null,t=null;const n=decodeURIComponent,a=e=>e&&e.classList.remove("active"),o=n=>{if(a(t),a(e),t=document.querySelector(`.sidebar a[href="${n}"]`),t){t.classList.add("active");const n=t.closest(".sidebar > ul > li");n&&n!==t.parentElement?(e=n.querySelector("a"),e&&e.classList.add("active")):e=null}},i=()=>{const e=[].slice.call(document.querySelectorAll(".sidebar a")),t=[].slice.call(document.querySelectorAll(".header-anchor")).filter((t=>e.some((e=>e.hash===t.hash)))),a=document.getElementById("app").offsetTop,r=window.scrollY,s=e=>e.parentElement.offsetTop-a-15;for(let e=0;e<t.length;e++){const a=t[e],l=t[e+1];if(0===e&&0===r||r>=s(a)&&(!l||r<s(l))){const e=n(a.hash);return history.replaceState(null,document.title,e),void o(e)}}},c=function(e,t){let n,a=!1;return()=>{n&&clearTimeout(n),a?n=setTimeout(e,t):(e(),a=!0,setTimeout((()=>{a=!1}),t))}}(i,300);r((()=>{i(),window.addEventListener("scroll",c)})),s((()=>{o(n(location.hash))})),l((()=>{window.removeEventListener("scroll",c)}))}Me.render=function(e,t,n,a,o,r){return f(),h("div",{class:"sidebar-button",onClick:t[1]||(t[1]=t=>e.$emit("toggle"))},[Ce])};const Le=e=>{const{item:{link:t,text:n,children:a}}=e,o=T(),r=D(),s=Q(),l=(c=s.value.base,(u=t||"")?u.startsWith("#")?u:function(e,t){const n=e.endsWith("/"),a=t.startsWith("/");return n&&a?e.slice(0,-1)+t:n||a?e+t:`${e}/${t}`}(c,u):void 0);var c,u;const d=function(e,t){return void 0!==t&&te(e.path)===te(t)}(o,l),f=r.value.headers;return i("li",{class:"sidebar-item"},[Te(d,n,l),Se(d,a,f)])};var Ie={components:{NavBarLinks:me,SideBarItem:Le},setup(){const e=D(),t=J(),n=T();return Oe(),{items:d((()=>{const{headers:a,frontmatter:{sidebar:o,sidebarDepth:r=2}}=e.value;if("auto"===o)return Ee(a,r);if(Array.isArray(o))return Fe(o);if(!1===o)return[];{const{sidebar:e}=t.value.themeConfig;if("auto"===e)return Ee(a,r);if(Array.isArray(e))return Fe(e);if(!1===e)return[];if("object"==typeof e)return function(e,t,n,a){const o=[t,Object.keys(e)[0]].map((t=>e[function(e){const t=e.split("/");return t[t.length-1]&&t.pop(),function(e){return/(\.html|\/)$/.test(e)?e:e+"/"}(t.join("/"))}(t)])).find(Boolean);if(Array.isArray(o))return Fe(o);if("auto"===o)return Ee(n,a);return[]}(e,n.path,a,r)}}))}}};function Ee(e,t){const n=[];if(void 0===e)return[];let a=void 0;return e.forEach((({level:e,title:o,slug:r})=>{if(e-1>t)return;const s={text:o,link:"#"+r};2===e?(a=s,n.push(s)):a&&(a.children||(a.children=[])).push(s)})),n}function Fe(e,t){return e}function Te(e,t,n){return i(n?"a":"p",{class:{"sidebar-link":!0,active:e},href:n},t)}function Se(e,t,n){return t&&t.length>0?i("ul",{class:"sidebar-items"},t.map((e=>i(Le,{item:e})))):e&&n?Se(!1,function(e){return Re(function(e){let t;return(e=e.map((e=>Object.assign({},e)))).forEach((e=>{2===e.level?t=e:t&&(t.children||(t.children=[])).push(e)})),e.filter((e=>2===e.level))}(e))}(n)):null}function Re(e){return e.map((e=>({text:e.title,link:"#"+e.slug,children:e.children?Re(e.children):void 0})))}const Ue={class:"sidebar"};Ie.render=function(e,t,n,a,o,r){const s=b("NavBarLinks"),l=b("SideBarItem");return f(),h(y,null,[m(s,{class:"show-mobile"}),L(e.$slots,"top"),m("ul",Ue,[(f(!0),h(y,null,k(e.items,(e=>(f(),h(l,{item:e},null,8,["item"])))),256))]),L(e.$slots,"bottom")],64)};var De={setup(){const e=D(),t=Q(),n=e=>{let n;return Object.keys(t.value.themeConfig.sidebar).some((a=>t.value.themeConfig.sidebar[a].some((t=>(Array.isArray(t.children)&&(n=t.children.find((t=>t.link===e))),!!n))))),n},a=d((()=>{if(!1!==e.value.frontmatter.next)return"string"==typeof e.value.frontmatter.next?n(e.value.frontmatter.next):e.value.next})),o=d((()=>{if(!1!==e.value.frontmatter.prev)return"string"==typeof e.value.frontmatter.prev?n(e.value.frontmatter.prev):e.value.prev})),r=d((()=>!!a||!!o));return{next:a,prev:o,hasLinks:r}}};const je={key:0,class:"links-wrapper"},Ne={class:"prev-link"},Ve={key:0},We=g(" ← "),xe={class:"next-link"},He={key:0},Ye=g(" → ");De.render=function(e,t,n,a,o,r){return e.hasLinks?(f(),h("div",je,[m("div",Ne,[e.prev?(f(),h("div",Ve,[We,m("a",{href:e.prev.link},p(e.prev.text),9,["href"])])):v("v-if",!0)]),m("div",xe,[e.next?(f(),h("div",He,[m("a",{href:e.next.link},p(e.next.text),9,["href"]),Ye])):v("v-if",!0)])])):v("v-if",!0)};var qe={setup:()=>({data:{platform:[{href:"https://www.zhihu.com/people/feng-kuang-de-yan-xian-sen",icon:"data:image/png;base64,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"},{href:"https://segmentfault.com/u/beishangriji",icon:"data:image/png;base64,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"},{href:"https://juejin.cn/user/3034307824991006/posts",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABfVBMVEX///8Ad/8AgP8AgP8AgP8Aff8AgP8Af/8AgP8AVf8Af/8Af/8AgP8AgP8Af/8Afv8AAP8Afv8Afv8Aef8AgP8AdP8Afv8AgP8AgP8Acf8Ae/8AgP8Af/8AgP8Af/8Af/8AfP8Afv8AgP8Af/8Af/8Afv8Afv8AgP8Afv8AgP8Af/8Af/8AgP8AgP8Afv8AgP8Af/8AgP8AgP8AgP8Ae/8Afv8Af/8AgP8Af/8AgP8Af/8Af/8Aff8Af/8Abf8AgP8Af/8AgP8Af/8Af/8Afv8AgP8AgP8Afv8Afv8AgP8Af/8Aff8AgP8Afv8AgP8Aff8AgP8AfP8AgP8Ae/8AgP8Af/8AgP8AgP8AgP8Afv8AgP8AgP8AgP8Afv8AgP8AgP8AgP8AgP8AgP8Af/8AgP8Af/8Af/8Aev8Af/8AgP8Aff8Afv8AgP8AgP8AgP8Af/8AgP8Af/8Af/8AgP8Afv8AgP8AgP8AgP8AgP8Af/8AeP8Af/8Af/8Af//////rzEHnAAAAfXRSTlMAD7CCAivatxIDx5EMrP19AXdLEwgLR+6iCR/M0yLRzyFF7JupSXn8cw6v60Q0QeqzKtgeG237HMne850/6Qeq7QaZ+WdydHtj+OM3qENCMRYl1B3K2U7wnlWE/mhlirjkODa9FN/BF7/iNV/2kASNZpX1Wlf03C4stRGxgUPclqoAAAABYktHRACIBR1IAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gEaBzgZ4yeM3AAAAT9JREFUOMvNUldbwkAQvCAqsSBoABE7asSOBRUVVBQNNuy9996789+9cMFAMHnVebmdm+/bmdtbQv4dOFOW2UjPzgFyLfo6nweKfIMOBYWwFtmMPGz2Yj2pJI0JDq3udJW6VVbmKa9I192VQFV1ktXUAl5NB0cd4KpnORqsEO2ZIRpF9gJfE9Dckqq0KuZt7UAH5+8EPF3spjsRpCeQNO/tA/qDwIDA+OCQbBoKA8NOdjMySgcZGVM6jwcgRuUiSs0nlPFNSrEpJfU0jTLD6llqbvKxei7OzvkFNQohi0vAsj81+MoqsCaoPOQFgus/1LyxichW+hS2JWCHZ7VlF9jb187pIAYcHiViHAMnp5mTjJ8B5xeEXF4B1ze/fTh/C0h398DDI9HB07O8ci+vRBdvdGnfP4gBuM8vw7X/G3wDmFhFZEdxzjMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDEtMjZUMDc6NTY6MjUrMDE6MDA67pVWAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTAxLTI2VDA3OjU2OjI1KzAxOjAwS7Mt6gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAWdEVYdFRpdGxlAGp1ZWppbl9sb2dvIGNvcHlxapmKAAAAV3pUWHRSYXcgcHJvZmlsZSB0eXBlIGlwdGMAAHic4/IMCHFWKCjKT8vMSeVSAAMjCy5jCxMjE0uTFAMTIESANMNkAyOzVCDL2NTIxMzEHMQHy4BIoEouAOoXEXTyQjWVAAAAAElFTkSuQmCC"},{href:"https://www.cnblogs.com/10ve/",icon:"/blog/_assets/cnblogs.6f86b068.png"},{href:"https://www.jianshu.com/u/cdd6feed8104",icon:"/blog/_assets/jianshu.a48316fd.png"},{href:"https://blog.csdn.net/Crazymryan",icon:"/blog/_assets/csdn.0a93870f.ico"}]}})};const Ke={class:"page-edit"},Qe=m("p",{class:"platform"},[g("以上皆为 "),m("a",{href:"javascript:;"},"悲伤日记"),g(" 文章发布平台")],-1),ze=m("p",{class:"platform"},[g(" Copyright © 2020-2021 "),m("a",{href:"https://github.com/CrazyMrYan"},"@CrazyMrYan")],-1);qe.render=function(e,t,n,a,o,r){return f(),h("div",null,[m("footer",Ke,[(f(!0),h(y,null,k(a.data.platform,((e,t)=>(f(),h("a",{key:t,href:e.href},[m("img",{class:"imgIcon",src:e.icon},null,8,["src"])],8,["href"])))),128))]),Qe,ze])};var Ge={components:{NextAndPrevLinks:De,PageEdit:qe},setup:()=>({pageData:D()}),mounted(){!function(e){var t,n={},a="jinrishici-token";function o(){return document.getElementById("jinrishici-sentence")||0!=document.getElementsByClassName("jinrishici-sentence").length}function r(){n.load((function(e){var t=document.getElementById("jinrishici-sentence"),n=document.getElementsByClassName("jinrishici-sentence");if(t&&(t.innerText=e.data.content),0!==n.length)for(var a=0;a<n.length;a++)n[a].innerText=e.data.content}))}function s(e,t){var n=new XMLHttpRequest;n.open("get",t),n.withCredentials=!0,n.send(),n.onreadystatechange=function(t){if(4===n.readyState){var a=JSON.parse(n.responseText);"success"===a.status?e(a):console.error("今日诗词API加载失败，错误原因："+a.errMessage)}}}n.load=function(t){return e.localStorage&&e.localStorage.getItem(a)?(n=t,o=e.localStorage.getItem(a),s(n,"https://v2.jinrishici.com/one.json?client=browser-sdk/1.2&X-User-Token="+encodeURIComponent(o))):function(t){return s((function(n){e.localStorage.setItem(a,n.token),t(n)}),"https://v2.jinrishici.com/one.json?client=browser-sdk/1.2")}(t);var n,o},e.jinrishici=n,o()?r():(t=function(){o()&&r()},"loading"!=document.readyState?t():document.addEventListener?document.addEventListener("DOMContentLoaded",t):document.attachEvent("onreadystatechange",(function(){"complete"==document.readyState&&t()})))}(window)}};const Ze={class:"content"},Je={class:"md-header"},Xe={class:"md-title"},$e=m("span",{id:"jinrishici-sentence"},"正在加载今日诗词....",-1),_e={class:"md-date"},et={class:"catalog"},tt={class:"catalog-item"};Ge.render=function(e,t,n,a,o,r){const s=b("Content"),l=b("NextAndPrevLinks"),i=b("PageEdit");return f(),h("div",Ze,[L(e.$slots,"top"),m("div",Je,[m("div",Xe,p(a.pageData.title),1),$e,m("div",_e,p(a.pageData.frontmatter.date),1)]),m("ul",et,[(f(!0),h(y,null,k(a.pageData.headers,(e=>(f(),h("li",tt,[2==e.level?(f(),h("a",{key:0,class:"level level-2",href:"#"+e.slug},p(e.title),9,["href"])):v("v-if",!0),3==e.level?(f(),h("a",{key:1,class:"level level-3",href:"#"+e.slug},p(e.title),9,["href"])):v("v-if",!0)])))),256))]),m(s),m(l),m(i),L(e.$slots,"bottom")])};var nt={components:{Home:ve,NavBar:ge,ToggleSideBarButton:Me,SideBar:Ie,Page:Ge},setup(){const e=T(),t=D(),n=Q(),a=J(),o=c(!1),r=d((()=>!!t.value.frontmatter.home)),s=d((()=>{const{themeConfig:e}=a.value,{frontmatter:o}=t.value;return!1!==o.navbar&&!1!==e.navbar&&(n.value.title||e.logo||e.repo||e.nav)})),l=d((()=>{const{frontmatter:e}=t.value,{themeConfig:n}=a.value;return!e.home&&!1!==e.sidebar&&("object"==typeof n.sidebar&&0!=Object.keys(n.sidebar).length||Array.isArray(n.sidebar)&&0!=n.sidebar.length)})),i=d((()=>[{"no-navbar":!s.value,"sidebar-open":o.value,"no-sidebar":!l.value}])),u=e=>{o.value="boolean"==typeof e?e:!o.value},f=u.bind(null,!1);return w(e,f),{showNavbar:s,showSidebar:l,openSideBar:o,pageClasses:i,enableHome:r,toggleSidebar:u}}};const at={key:0,class:"navbar"},ot={key:1,class:"home","aria-labelledby":"main-title"},rt={key:2};nt.render=function(e,t,n,a,o,r){const s=b("NavBar"),l=b("ToggleSideBarButton"),i=b("SideBar"),c=b("Home"),u=b("Page"),d=b("Debug");return f(),h(y,null,[m("div",{class:["theme",a.pageClasses]},[a.showNavbar?(f(),h("header",at,[m(s,null,{search:I((()=>[L(e.$slots,"navbar-search")])),_:1}),m(l,{onToggle:a.toggleSidebar},null,8,["onToggle"])])):v("v-if",!0),m("aside",{class:{open:a.openSideBar}},[m(i,null,{top:I((()=>[L(e.$slots,"sidebar-top")])),bottom:I((()=>[L(e.$slots,"sidebar-bottom")])),_:1})],2),v(" TODO: make this button accessible "),m("div",{class:"sidebar-mask",onClick:t[1]||(t[1]=e=>a.toggleSidebar(!1))}),a.enableHome?(f(),h("main",ot,[m(c,null,{hero:I((()=>[L(e.$slots,"home-hero")])),features:I((()=>[L(e.$slots,"home-features")])),footer:I((()=>[L(e.$slots,"home-footer")])),_:1})])):(f(),h("main",rt,[m(u,null,{top:I((()=>[L(e.$slots,"page-top")])),bottom:I((()=>[L(e.$slots,"page-bottom")])),_:1})]))],2),m(d)],64)};const st=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];var lt={setup:()=>({getMsg:()=>st[Math.floor(Math.random()*st.length)]})};const it={class:"theme"},ct=m("h1",null,"404",-1);lt.render=function(e,t,n,a,o,r){return f(),h("div",it,[ct,m("blockquote",null,p(e.getMsg()),1),m("a",{href:e.$site.base,"aria-label":"go to home"}," Take me home. ",8,["href"])])};const ut={Layout:nt,NotFound:lt};var dt=A({setup(){const e=Q();return{data:d((()=>function(e){const t=[];let n=0,a=-1;for(let o=0;o<e.length;o++){const r=e[o],s=r.frontMatter.date.split("-")[0];s==n?t[a].push(r):(a++,t[a]=[],t[a].push(r),n=s)}return t}(e.value.themeConfig.pages))),base:"/blog"}}});const ft=B("data-v-24690d48");C("data-v-24690d48");const ht={class:""},mt={class:"years"},At={class:"year"},gt={class:"title"},pt={class:"date"};O();const vt=ft((function(e,t,n,a,o,r){return f(),h("div",ht,[(f(!0),h(y,null,k(e.data,((t,n)=>(f(),h("div",mt,[m("div",At,p(t[0].frontMatter.date.split("-")[0]),1),(f(!0),h(y,null,k(t,((t,n)=>P((f(),h("a",{href:e.base+t.regularPath||"",key:n,class:"article"},[m("div",gt,p(t.frontMatter.title||""),1),m("div",pt,p(t.frontMatter.date.slice(5)||""),1)],8,["href"])),[[M,!t.frontMatter.home]]))),128))])))),256))])}));dt.render=vt,dt.__scopeId="data-v-24690d48";var bt=A({setup(){const e=Q(),t=T(),n=d((()=>function(e){const t={};for(let n=0;n<e.length;n++){const a=e[n];a.frontMatter.tags.forEach((e=>{t[e]||(t[e]=[]),t[e].push(a)}))}return t}(e.value.themeConfig.pages)));let a=c("");return{data:n,route:t,toggleTag:e=>{a.value=e},selectTag:a,base:"/blog"}}});const wt=B("data-v-384bbf30");C("data-v-384bbf30");const yt={class:"header"},kt={class:"title"},Bt={class:"date"},Pt={class:"tags"};O();const Mt=wt((function(e,t,n,a,o,r){return f(),h(y,null,[m("div",yt,p(e.selectTag),1),(f(!0),h(y,null,k(e.data[e.selectTag],((t,n)=>P((f(),h("a",{href:e.base+t.regularPath||"",key:n,class:"article"},[m("div",kt,p(t.frontMatter.title||""),1),m("div",Bt,p(t.frontMatter.date.slice(5)||""),1)],8,["href"])),[[M,!t.frontMatter.home]]))),128)),m("div",Pt,[(f(!0),h(y,null,k(e.data,((t,n,a)=>(f(),h("span",{onClick:t=>e.toggleTag(n),class:"tag"},p(n),9,["onClick"])))),256))])],64)}));bt.render=Mt,bt.__scopeId="data-v-384bbf30";var Ct={name:"blog-comments",mounted(){const e={enable:!0,clientID:"a6598e156cf30077f530",clientSecret:"a5e33f61a5071999b191b5f768f837e9187693fd",repo:"blog-comments",owner:"crazymryan",admin:["crazymryan"],githubID:"crazymryan",id:decodeURI(window.location.pathname),language:"zh-CN",distractionFreeMode:!0};new Gitalk(e).render("gitalk-container")}};const Ot={id:"gitalk-container"};Ct.render=function(e,t,n,a,o,r){return f(),h("div",Ot)};var Lt={...ut,enhanceApp({app:e,router:t,siteData:n}){e.component("Comment",Ct),e.component("Tags",bt),e.component("Docs",dt)}};const It=Lt.NotFound||(()=>"404 Not Found");function Et(){const a=c();let o,r=j;const s=function(a,o){const r=e({path:"/",contentComponent:null}),s="undefined"!=typeof window;function l(e){e=e||(s?location.href:"/");const t=new URL(e,"http://a.com");return t.pathname.endsWith("/")||t.pathname.endsWith(".html")||(t.pathname+=".html",e=t.pathname+t.search+t.hash),s&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",e)),i(e)}async function i(e,l=0){const i=new URL(e,"http://a.com"),c=r.path=i.pathname;try{let e=a(r);if("then"in e&&"function"==typeof e.then&&(e=await e),r.path===c){if(!e)throw new Error("Invalid route component: "+e);r.contentComponent=t(e),s&&n((()=>{if(i.hash&&!l){const e=document.querySelector(decodeURIComponent(i.hash));if(e)return void S(e,i.hash)}window.scrollTo(0,l)}))}}catch(e){e.message.match(/fetch/)||console.error(e),r.path===c&&(r.contentComponent=o?t(o):null)}}return s&&(window.addEventListener("click",(e=>{const t=e.target.closest("a");if(t){const{href:n,protocol:a,hostname:o,pathname:r,hash:s,target:i}=t,c=window.location;e.ctrlKey||e.shiftKey||e.altKey||e.metaKey||"_blank"===i||a!==c.protocol||o!==c.hostname||(e.preventDefault(),r===c.pathname?s&&s!==c.hash&&(history.pushState(null,"",s),S(t,s,t.classList.contains("header-anchor"))):l(n))}}),{capture:!0}),window.addEventListener("popstate",(e=>{i(location.href,e.state&&e.state.scrollPosition||0)})),window.addEventListener("hashchange",(e=>{e.preventDefault()}))),{route:r,go:l}}((e=>{let t=N(e.path);if(r&&(o=t),(r||o===t)&&(t=t.replace(/\.js$/,".lean.js")),j)return r=!1,import(t).then((e=>(e.__pageData&&(a.value=u(JSON.parse(e.__pageData))),e.default)));{const e=require(t);return a.value=JSON.parse(e.__pageData),e.default}}),It),l=E(Lt.Layout);l.provide(F,s),l.provide(U,a),l.component("Content",Y),l.component("Debug",(()=>null));const i=J(s.route);return j&&R(a,i),Object.defineProperties(l.config.globalProperties,{$site:{get:()=>q.value},$siteByRoute:{get:()=>i.value},$page:{get:()=>a.value},$theme:{get:()=>i.value.themeConfig}}),Lt.enhanceApp&&Lt.enhanceApp({app:l,router:s,siteData:i}),{app:l,router:s}}if(j){const{app:e,router:t}=Et();t.go().then((()=>{e.mount("#app")}))}export{Et as createApp};
