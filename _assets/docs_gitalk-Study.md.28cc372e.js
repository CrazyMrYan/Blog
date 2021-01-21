import{g as n,j as a,l as s,f as t,q as e}from"./common-bec3f312.js";const l='{"title":"五分钟搭建博客评论组件-gitalk","frontmatter":{"date":"2021-01-03","title":"五分钟搭建博客评论组件-gitalk","tags":["插件","gitalk"],"describe":"因为自己最近在搭建一个自己的博客，需要有个评论功能，又不想自己建数据库，还想用第三方登录，仔细斟酌"},"headers":[{"level":2,"title":"前言","slug":"前言"},{"level":2,"title":"gitalk 特点","slug":"gitalk-特点"},{"level":2,"title":"安装","slug":"安装"},{"level":2,"title":"使用","slug":"使用"},{"level":2,"title":"创建评论仓库","slug":"创建评论仓库"},{"level":2,"title":"创建 gitalk","slug":"创建-gitalk"},{"level":2,"title":"重新配置","slug":"重新配置"},{"level":2,"title":"效果","slug":"效果"},{"level":2,"title":"全部代码","slug":"全部代码"},{"level":2,"title":"注解地址","slug":"注解地址"}],"relativePath":"docs/gitalk-Study.md","lastUpdated":1609660354644.7104}';var o={};const c=a("h2",{id:"前言"},[a("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),s(" 前言")],-1),p=a("blockquote",null,[a("p",null,[s("因为自己最近在搭建一个自己的博客，需要有个评论功能，又不想自己建数据库，还想用第三方登录，仔细斟酌一番后，决定使用 "),a("a",{href:"https://github.com/gitalk/gitalk/",target:"_blank",rel:"noopener noreferrer"},"gitalk"),s(" [0] ，用完之后是真香，所以来给大家安利一波~")])],-1),u=a("p",null,"大概长这样👇",-1),i=a("p",null,[a("img",{src:"/blog/_assets/image-20210103152859739.26910ade.png",alt:""})],-1),r=a("h2",{id:"gitalk-特点"},[a("a",{class:"header-anchor",href:"#gitalk-特点","aria-hidden":"true"},"#"),s(" gitalk 特点")],-1),k=a("p",null,"✅ GitHub 登录",-1),g=a("p",null,"✅ 无需数据库",-1),m=a("p",null,"✅ 无干扰模式（设置 distractionFreeMode 为 true 开启）",-1),d=a("p",null,"✅ 支持多语言 [en, zh-CN, zh-TW, es-ES, fr, ru, de, pl, ko]",-1),h=a("p",null,"✅ 快捷键提交评论 （cmd|ctrl + enter）",-1),b=a("p",null,"✅ 支持个人或组织",-1),f=a("h2",{id:"安装"},[a("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),s(" 安装")],-1),y=a("p",null,"npm",-1),v=a("div",{class:"language-shell"},[a("pre",null,[a("code",null,[a("span",{class:"token comment"},"# npm"),s("\n"),a("span",{class:"token function"},"npm"),s(" i --save gitalk\n\n"),a("span",{class:"token comment"},"# 引入"),s("\n"),a("span",{class:"token function"},"import"),s(),a("span",{class:"token string"},"'gitalk/dist/gitalk.css'"),s("\n"),a("span",{class:"token function"},"import"),s(" Gitalk from "),a("span",{class:"token string"},"'gitalk'"),s("\n")])])],-1),_=a("p",null,"or",-1),w=a("p",null,"直接引入",-1),z=a("div",{class:"language-html"},[a("pre",null,[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("link")]),s(),a("span",{class:"token attr-name"},"rel"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("stylesheet"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"href"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("https://unpkg.com/gitalk/dist/gitalk.css"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),s("\n"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("script")]),s(),a("span",{class:"token attr-name"},"src"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("https://unpkg.com/gitalk/dist/gitalk.min.js"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"}),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("script")]),a("span",{class:"token punctuation"},">")]),s("\n")])])],-1),q=a("h2",{id:"使用"},[a("a",{class:"header-anchor",href:"#使用","aria-hidden":"true"},"#"),s(" 使用")],-1),C=a("p",null,"老严就直接用的 直接引入，先创建一个index.html文件",-1),G=a("p",null,"创建一个容器用于存放 gitalk",-1),D=a("div",{class:"language-html"},[a("pre",null,[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("div")]),s(),a("span",{class:"token attr-name"},"id"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("gitalk-container"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("div")]),a("span",{class:"token punctuation"},">")]),s("\n")])])],-1),M=a("p",null,"new 一个 gitalk 来进行配置",-1),S=a("p",null,"下面这些参数还没有？等等老严再教大家一步一步填写",-1),j=a("div",{class:"language-js"},[a("pre",null,[a("code",null,[a("span",{class:"token keyword"},"var"),s(" gitalk "),a("span",{class:"token operator"},"="),s(),a("span",{class:"token keyword"},"new"),s(),a("span",{class:"token class-name"},"Gitalk"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),s("\n    clientID"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token string"},"'GitHub Application Client ID'"),a("span",{class:"token punctuation"},","),s("\n    clientSecret"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token string"},"'GitHub Application Client Secret'"),a("span",{class:"token punctuation"},","),s("\n    repo"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token string"},"'GitHub repo'"),a("span",{class:"token punctuation"},","),s("\n    owner"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token string"},"'GitHub repo owner'"),a("span",{class:"token punctuation"},","),s("\n    admin"),a("span",{class:"token operator"},":"),s("  "),a("span",{class:"token punctuation"},"["),a("span",{class:"token string"},"'GitHub repo owner and collaborators, only these guys can initialize github issues'"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},","),s("\n    id"),a("span",{class:"token operator"},":"),s(" location"),a("span",{class:"token punctuation"},"."),s("pathname"),a("span",{class:"token punctuation"},","),s("      "),a("span",{class:"token comment"},"// Ensure uniqueness and len"),s("\n    distractionFreeMode"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token boolean"},"false"),s("  "),a("span",{class:"token comment"},"// Facebook-like distraction"),s("\n"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),s("\n")])])],-1),H=a("p",null,"render 一下",-1),I=a("div",{class:"language-js"},[a("pre",null,[a("code",null,[s("gitalk"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"render"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'gitalk-container'"),a("span",{class:"token punctuation"},")"),s("\n")])])],-1),Y=a("p",null,"看下我们刚刚写完这些之后的效果，大致就长这样了",-1),x=a("p",null,[a("img",{src:"/blog/_assets/image-20210103142232302.d96e6061.png",alt:""})],-1),F=a("h2",{id:"创建评论仓库"},[a("a",{class:"header-anchor",href:"#创建评论仓库","aria-hidden":"true"},"#"),s(" 创建评论仓库")],-1),U=a("p",null,[s("我们不用数据库是没错，但是我们至少需要一个容器来存放这个评论数据吧！"),a("code",null,"gitalk"),s(" 需要我们创建一个用于存放评论的空仓库，我们就叫 "),a("a",{href:"https://github.com/CrazyMrYan/gitalk-comments",target:"_blank",rel:"noopener noreferrer"},"gitalk-comments"),s(" [2]")],-1),L=a("p",null,[a("img",{src:"/blog/_assets/image-20210103143024105.b15f8bff.png",alt:"image-20210103143024105"})],-1),R=a("p",null,"刚刚我们已经创建完了一个空仓库",-1),E=a("p",null,[a("img",{src:"/blog/_assets/image-20210103143143250.76728557.png",alt:"image-20210103143143250"})],-1),N=a("h2",{id:"创建-gitalk"},[a("a",{class:"header-anchor",href:"#创建-gitalk","aria-hidden":"true"},"#"),s(" 创建 gitalk")],-1),T=a("p",null,[s("我们已经做完了我们的准备工作。那么接下来，我们就需要创建属于我们自己的 "),a("a",{href:"https://github.com/settings/applications/new",target:"_blank",rel:"noopener noreferrer"},"gitalk 应用"),s(" [1]")],-1),A=a("p",null,[a("img",{src:"/blog/_assets/image-20210103144004114.9efdf1bc.png",alt:""})],-1),P=a("p",null,[s("！注意：这里的 "),a("code",null,"Homepage URL"),s(" 与 "),a("code",null,"authorization callback URL"),s(" 可填写自己的域名，因为老严采用的是 "),a("code",null,"gh-pages")],-1),O=a("p",null,"点击注册之后，我们会跳转到 详细配置页面",-1),W=a("p",null,[a("img",{src:"/blog/_assets/image-20210103144325595.29a9c9de.png",alt:""})],-1),B=a("p",null,[s("这里面的 "),a("code",null,"clientID "),s(" 是我们之前配置中需要的 ID")],-1),J=a("p",null,[a("img",{src:"/blog/_assets/image-20210103144533016.0a2771e6.png",alt:""})],-1),K=a("p",null,[s("我们还需要创建这个 "),a("code",null,"clientSecret"),s(" 密钥 点击 "),a("code",null,"Generate a new client secret"),s(" 即可创建")],-1),Q=a("h2",{id:"重新配置"},[a("a",{class:"header-anchor",href:"#重新配置","aria-hidden":"true"},"#"),s(" 重新配置")],-1),V=a("div",{class:"language-js"},[a("pre",null,[a("code",null,[a("span",{class:"token keyword"},"var"),s(" gitalk "),a("span",{class:"token operator"},"="),s(),a("span",{class:"token keyword"},"new"),s(),a("span",{class:"token class-name"},"Gitalk"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),s("\n    clientID"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token string"},"'8e2585b74fb088fa5c1b'"),a("span",{class:"token punctuation"},","),s(),a("span",{class:"token comment"},"// clientID "),s("\n    clientSecret"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token string"},"'34d45f15101fe1c1746b0ce9455760a1f628d989'"),a("span",{class:"token punctuation"},","),s(),a("span",{class:"token comment"},"// clientSecret"),s("\n    repo"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token string"},"'gitalk-comments'"),a("span",{class:"token punctuation"},","),s(),a("span",{class:"token comment"},"// 评论仓库名"),s("\n    owner"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token string"},"'crazymryan'"),a("span",{class:"token punctuation"},","),s("\n    admin"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token punctuation"},"["),a("span",{class:"token string"},"'crazymryan'"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},","),s(),a("span",{class:"token comment"},"// 管理人"),s("\n    id"),a("span",{class:"token operator"},":"),s(" location"),a("span",{class:"token punctuation"},"."),s("pathname"),a("span",{class:"token punctuation"},","),s(),a("span",{class:"token comment"},"// 返回当前 URL 的路径部分作为id"),s("\n    language"),a("span",{class:"token operator"},":"),a("span",{class:"token string"},"'zh-CN'"),a("span",{class:"token punctuation"},","),s(),a("span",{class:"token comment"},"// 语言"),s("\n    distractionFreeMode"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token boolean"},"false"),s("  "),a("span",{class:"token comment"},"// 无干扰模式"),s("\n"),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),s("\n")])])],-1),X=a("p",null,[s("修改完之后 ，老严直接提交到了 "),a("code",null,"gh-pages"),s(" ，如果你是自己的网站，直接上传这个 index.html 文件")],-1),Z=a("p",null,[a("img",{src:"/blog/_assets/image-20210103150610041.b34f1f6f.png",alt:""})],-1),$=a("h2",{id:"效果"},[a("a",{class:"header-anchor",href:"#效果","aria-hidden":"true"},"#"),s(" 效果")],-1),nn=a("p",null,[s("打开 "),a("a",{href:"https://crazymryan.github.io/gitalk-study/",target:"_blank",rel:"noopener noreferrer"},"https://crazymryan.github.io/gitalk-study/"),s(" 这个地址")],-1),an=a("p",null,[a("img",{src:"/blog/_assets/image-20210103150711370.0a515295.png",alt:""})],-1),sn=a("p",null,[s("点击 "),a("code",null,"使用 GitHub 登录"),s(" 进行绑定授权")],-1),tn=a("p",null,[a("img",{src:"/blog/_assets/image-20210103150801359.09c650ee.png",alt:""})],-1),en=a("p",null,"授权成功之后回到页面上",-1),ln=a("p",null,[a("img",{src:"/blog/_assets/image-20210103150914455.e618528a.png",alt:""})],-1),on=a("p",null,"输入点东西评论一下吧！",-1),cn=a("p",null,[a("img",{src:"/blog/_assets/image-20210103150941803.f0cad1f7.png",alt:""})],-1),pn=a("p",null,[s("此时我们可以在之前创建的空仓库中的 "),a("code",null,"issue"),s(" 中看到我们刚刚评论的内容了")],-1),un=a("p",null,[a("img",{src:"/blog/_assets/image-20210103151034175.fd3c8b9f.png",alt:""})],-1),rn=a("h2",{id:"全部代码"},[a("a",{class:"header-anchor",href:"#全部代码","aria-hidden":"true"},"#"),s(" 全部代码")],-1),kn=a("p",null,[s("如果你想看看全部代码可以去 "),a("a",{href:"https://github.com/CrazyMrYan/gitalk-study/tree/gh-pages",target:"_blank",rel:"noopener noreferrer"},"gitalk-study"),s(" [3] 看看，如果你有兴趣想看看老严的博客也可以访问 "),a("a",{href:"https://crazymryan.github.io/blog/",target:"_blank",rel:"noopener noreferrer"},"blog"),s(" [4]")],-1),gn=a("p",null,"这里也贴一下全部代码吧",-1),mn=a("div",{class:"language-html"},[a("pre",null,[a("code",null,[a("span",{class:"token doctype"},[a("span",{class:"token punctuation"},"<!"),a("span",{class:"token doctype-tag"},"DOCTYPE"),s(),a("span",{class:"token name"},"html"),a("span",{class:"token punctuation"},">")]),s("\n"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("html")]),s(),a("span",{class:"token attr-name"},"lang"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("en"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),s("\n"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("head")]),a("span",{class:"token punctuation"},">")]),s("\n    "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("meta")]),s(),a("span",{class:"token attr-name"},"charset"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("UTF-8"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),s("\n    "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("meta")]),s(),a("span",{class:"token attr-name"},"name"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("viewport"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"content"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("width=device-width, initial-scale=1.0"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),s("\n    "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("title")]),a("span",{class:"token punctuation"},">")]),s("Document"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("title")]),a("span",{class:"token punctuation"},">")]),s("\n    "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("link")]),s(),a("span",{class:"token attr-name"},"rel"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("stylesheet"),a("span",{class:"token punctuation"},'"')]),s(),a("span",{class:"token attr-name"},"href"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("https://unpkg.com/gitalk/dist/gitalk.css"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),s("\n    "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("script")]),s(),a("span",{class:"token attr-name"},"src"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("https://unpkg.com/gitalk/dist/gitalk.min.js"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"}),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("script")]),a("span",{class:"token punctuation"},">")]),s("\n    "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("style")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token style"},[a("span",{class:"token language-css"},[s("\n        "),a("span",{class:"token selector"},"#gitalk-container"),s(),a("span",{class:"token punctuation"},"{"),s("\n            "),a("span",{class:"token property"},"max-width"),a("span",{class:"token punctuation"},":"),s(" 600px"),a("span",{class:"token punctuation"},";"),s("\n            "),a("span",{class:"token property"},"margin"),a("span",{class:"token punctuation"},":"),s(" 0 auto"),a("span",{class:"token punctuation"},";"),s("\n        "),a("span",{class:"token punctuation"},"}"),s("\n    ")])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("style")]),a("span",{class:"token punctuation"},">")]),s("\n"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("head")]),a("span",{class:"token punctuation"},">")]),s("\n"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("body")]),a("span",{class:"token punctuation"},">")]),s("\n    "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("div")]),s(),a("span",{class:"token attr-name"},"id"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),s("gitalk-container"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("div")]),a("span",{class:"token punctuation"},">")]),s("\n    "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),s("script")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"},[s("\n    "),a("span",{class:"token keyword"},"var"),s(" gitalk "),a("span",{class:"token operator"},"="),s(),a("span",{class:"token keyword"},"new"),s(),a("span",{class:"token class-name"},"Gitalk"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),s("\n        clientID"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token string"},"'8e2585b74fb088fa5c1b'"),a("span",{class:"token punctuation"},","),s(),a("span",{class:"token comment"},"//clientID "),s("\n        clientSecret"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token string"},"'34d45f15101fe1c1746b0ce9455760a1f628d989'"),a("span",{class:"token punctuation"},","),s(),a("span",{class:"token comment"},"//clientSecret"),s("\n        repo"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token string"},"'gitalk-comments'"),a("span",{class:"token punctuation"},","),s(),a("span",{class:"token comment"},"// 评论仓库名"),s("\n        owner"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token string"},"'crazymryan'"),a("span",{class:"token punctuation"},","),s("\n        admin"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token punctuation"},"["),a("span",{class:"token string"},"'crazymryan'"),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},","),s(),a("span",{class:"token comment"},"//管理人"),s("\n        id"),a("span",{class:"token operator"},":"),s(" location"),a("span",{class:"token punctuation"},"."),s("pathname"),a("span",{class:"token punctuation"},","),s(),a("span",{class:"token comment"},"// 返回当前 URL 的路径部分作为id"),s("\n        language"),a("span",{class:"token operator"},":"),a("span",{class:"token string"},"'zh-CN'"),a("span",{class:"token punctuation"},","),s(),a("span",{class:"token comment"},"//语言"),s("\n        distractionFreeMode"),a("span",{class:"token operator"},":"),s(),a("span",{class:"token boolean"},"false"),s("  "),a("span",{class:"token comment"},"// 无干扰模式"),s("\n    "),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),s("\n    gitalk"),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"render"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},"'gitalk-container'"),a("span",{class:"token punctuation"},")"),s("\n    ")])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("script")]),a("span",{class:"token punctuation"},">")]),s("\n"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("body")]),a("span",{class:"token punctuation"},">")]),s("\n"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),s("html")]),a("span",{class:"token punctuation"},">")]),s("\n")])])],-1),dn=a("h2",{id:"注解地址"},[a("a",{class:"header-anchor",href:"#注解地址","aria-hidden":"true"},"#"),s(" 注解地址")],-1),hn=a("p",null,[s("[0] "),a("a",{href:"https://github.com/gitalk/gitalk/",target:"_blank",rel:"noopener noreferrer"},"https://github.com/gitalk/gitalk/")],-1),bn=a("p",null,[s("[1] "),a("a",{href:"https://github.com/settings/applications/new",target:"_blank",rel:"noopener noreferrer"},"https://github.com/settings/applications/new")],-1),fn=a("p",null,[s("[2] "),a("a",{href:"https://github.com/CrazyMrYan/gitalk-comments",target:"_blank",rel:"noopener noreferrer"},"https://github.com/CrazyMrYan/gitalk-comments")],-1),yn=a("p",null,[s("[3] "),a("a",{href:"https://github.com/CrazyMrYan/gitalk-study/tree/gh-pages",target:"_blank",rel:"noopener noreferrer"},"https://github.com/CrazyMrYan/gitalk-study/tree/gh-pages")],-1),vn=a("p",null,[s("[4] "),a("a",{href:"https://crazymryan.github.io/blog/",target:"_blank",rel:"noopener noreferrer"},"https://crazymryan.github.io/blog/")],-1);o.render=function(s,l,o,_n,wn,zn){const qn=e("Comment");return t(),n("div",null,[c,p,u,i,r,k,g,m,d,h,b,f,y,v,_,w,z,q,C,G,D,M,S,j,H,I,Y,x,F,U,L,R,E,N,T,A,P,O,W,B,J,K,Q,V,X,Z,$,nn,an,sn,tn,en,ln,on,cn,pn,un,rn,kn,gn,mn,dn,hn,bn,fn,yn,vn,a(qn)])};export default o;export{l as __pageData};
