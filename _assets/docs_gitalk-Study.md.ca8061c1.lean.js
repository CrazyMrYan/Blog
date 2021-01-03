import{g as n,f as a,j as s,l as t}from"./common-9fe24c8f.js";const e='{"title":"五分钟搭建博客评论组件-gitalk","frontmatter":{"date":"2021-01-03","title":"五分钟搭建博客评论组件-gitalk","tags":["插件","gitalk"],"describe":"因为自己最近在搭建一个自己的博客，需要有个评论功能，又不想自己建数据库，还想用第三方登录，仔细斟酌"},"headers":[{"level":2,"title":"前言","slug":"前言"},{"level":2,"title":"gitalk 特点","slug":"gitalk-特点"},{"level":2,"title":"安装","slug":"安装"},{"level":2,"title":"使用","slug":"使用"},{"level":2,"title":"创建评论仓库","slug":"创建评论仓库"},{"level":2,"title":"创建 gitalk","slug":"创建-gitalk"},{"level":2,"title":"重新配置","slug":"重新配置"},{"level":2,"title":"效果","slug":"效果"},{"level":2,"title":"全部代码","slug":"全部代码"},{"level":2,"title":"注解地址","slug":"注解地址"}],"relativePath":"docs/gitalk-Study.md","lastUpdated":1609660079642.082}';var l={};const o=s("h2",{id:"前言"},[s("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),t(" 前言")],-1),c=s("blockquote",null,[s("p",null,[t("因为自己最近在搭建一个自己的博客，需要有个评论功能，又不想自己建数据库，还想用第三方登录，仔细斟酌一番后，决定使用 "),s("a",{href:"https://github.com/gitalk/gitalk/",target:"_blank",rel:"noopener noreferrer"},"gitalk"),t(" [0] ，用完之后是真香，所以来给大家安利一波~")])],-1),p=s("p",null,"大概长这样👇",-1),u=s("p",null,[s("img",{src:"/blog/_assets/image-20210103152859739.26910ade.png",alt:""})],-1),i=s("h2",{id:"gitalk-特点"},[s("a",{class:"header-anchor",href:"#gitalk-特点","aria-hidden":"true"},"#"),t(" gitalk 特点")],-1),r=s("p",null,"✅ GitHub 登录",-1),k=s("p",null,"✅ 无需数据库",-1),g=s("p",null,"✅ 无干扰模式（设置 distractionFreeMode 为 true 开启）",-1),m=s("p",null,"✅ 支持多语言 [en, zh-CN, zh-TW, es-ES, fr, ru, de, pl, ko]",-1),d=s("p",null,"✅ 快捷键提交评论 （cmd|ctrl + enter）",-1),h=s("p",null,"✅ 支持个人或组织",-1),b=s("h2",{id:"安装"},[s("a",{class:"header-anchor",href:"#安装","aria-hidden":"true"},"#"),t(" 安装")],-1),f=s("p",null,"npm",-1),y=s("div",{class:"language-shell"},[s("pre",null,[s("code",null,[s("span",{class:"token comment"},"# npm"),t("\n"),s("span",{class:"token function"},"npm"),t(" i --save gitalk\n\n"),s("span",{class:"token comment"},"# 引入"),t("\n"),s("span",{class:"token function"},"import"),t(),s("span",{class:"token string"},"'gitalk/dist/gitalk.css'"),t("\n"),s("span",{class:"token function"},"import"),t(" Gitalk from "),s("span",{class:"token string"},"'gitalk'"),t("\n")])])],-1),v=s("p",null,"or",-1),_=s("p",null,"直接引入",-1),w=s("div",{class:"language-html"},[s("pre",null,[s("code",null,[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),t("link")]),t(),s("span",{class:"token attr-name"},"rel"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),t("stylesheet"),s("span",{class:"token punctuation"},'"')]),t(),s("span",{class:"token attr-name"},"href"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),t("https://unpkg.com/gitalk/dist/gitalk.css"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),t("\n"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),t("script")]),t(),s("span",{class:"token attr-name"},"src"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),t("https://unpkg.com/gitalk/dist/gitalk.min.js"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token script"}),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),t("script")]),s("span",{class:"token punctuation"},">")]),t("\n")])])],-1),z=s("h2",{id:"使用"},[s("a",{class:"header-anchor",href:"#使用","aria-hidden":"true"},"#"),t(" 使用")],-1),q=s("p",null,"老严就直接用的 直接引入，先创建一个index.html文件",-1),C=s("p",null,"创建一个容器用于存放 gitalk",-1),G=s("div",{class:"language-html"},[s("pre",null,[s("code",null,[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),t("div")]),t(),s("span",{class:"token attr-name"},"id"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),t("gitalk-container"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),t("div")]),s("span",{class:"token punctuation"},">")]),t("\n")])])],-1),D=s("p",null,"new 一个 gitalk 来进行配置",-1),M=s("p",null,"下面这些参数还没有？等等老严再教大家一步一步填写",-1),S=s("div",{class:"language-js"},[s("pre",null,[s("code",null,[s("span",{class:"token keyword"},"var"),t(" gitalk "),s("span",{class:"token operator"},"="),t(),s("span",{class:"token keyword"},"new"),t(),s("span",{class:"token class-name"},"Gitalk"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),t("\n    clientID"),s("span",{class:"token operator"},":"),t(),s("span",{class:"token string"},"'GitHub Application Client ID'"),s("span",{class:"token punctuation"},","),t("\n    clientSecret"),s("span",{class:"token operator"},":"),t(),s("span",{class:"token string"},"'GitHub Application Client Secret'"),s("span",{class:"token punctuation"},","),t("\n    repo"),s("span",{class:"token operator"},":"),t(),s("span",{class:"token string"},"'GitHub repo'"),s("span",{class:"token punctuation"},","),t("\n    owner"),s("span",{class:"token operator"},":"),t(),s("span",{class:"token string"},"'GitHub repo owner'"),s("span",{class:"token punctuation"},","),t("\n    admin"),s("span",{class:"token operator"},":"),t("  "),s("span",{class:"token punctuation"},"["),s("span",{class:"token string"},"'GitHub repo owner and collaborators, only these guys can initialize github issues'"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),t("\n    id"),s("span",{class:"token operator"},":"),t(" location"),s("span",{class:"token punctuation"},"."),t("pathname"),s("span",{class:"token punctuation"},","),t("      "),s("span",{class:"token comment"},"// Ensure uniqueness and len"),t("\n    distractionFreeMode"),s("span",{class:"token operator"},":"),t(),s("span",{class:"token boolean"},"false"),t("  "),s("span",{class:"token comment"},"// Facebook-like distraction"),t("\n"),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),t("\n")])])],-1),j=s("p",null,"render 一下",-1),H=s("div",{class:"language-js"},[s("pre",null,[s("code",null,[t("gitalk"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"render"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},"'gitalk-container'"),s("span",{class:"token punctuation"},")"),t("\n")])])],-1),I=s("p",null,"看下我们刚刚写完这些之后的效果，大致就长这样了",-1),Y=s("p",null,[s("img",{src:"/blog/_assets/image-20210103142232302.d96e6061.png",alt:""})],-1),x=s("h2",{id:"创建评论仓库"},[s("a",{class:"header-anchor",href:"#创建评论仓库","aria-hidden":"true"},"#"),t(" 创建评论仓库")],-1),F=s("p",null,[t("我们不用数据库是没错，但是我们至少需要一个容器来存放这个评论数据吧！"),s("code",null,"gitalk"),t(" 需要我们创建一个用于存放评论的空仓库，我们就叫 "),s("a",{href:"https://github.com/CrazyMrYan/gitalk-comments",target:"_blank",rel:"noopener noreferrer"},"gitalk-comments"),t(" [2]")],-1),U=s("p",null,[s("img",{src:"/blog/_assets/image-20210103143024105.b15f8bff.png",alt:"image-20210103143024105"})],-1),L=s("p",null,"刚刚我们已经创建完了一个空仓库",-1),R=s("p",null,[s("img",{src:"/blog/_assets/image-20210103143143250.76728557.png",alt:"image-20210103143143250"})],-1),E=s("h2",{id:"创建-gitalk"},[s("a",{class:"header-anchor",href:"#创建-gitalk","aria-hidden":"true"},"#"),t(" 创建 gitalk")],-1),N=s("p",null,[t("我们已经做完了我们的准备工作。那么接下来，我们就需要创建属于我们自己的 "),s("a",{href:"https://github.com/settings/applications/new",target:"_blank",rel:"noopener noreferrer"},"gitalk 应用"),t(" [1]")],-1),T=s("p",null,[s("img",{src:"/blog/_assets/image-20210103144004114.9efdf1bc.png",alt:""})],-1),A=s("p",null,[t("！注意：这里的 "),s("code",null,"Homepage URL"),t(" 与 "),s("code",null,"authorization callback URL"),t(" 可填写自己的域名，因为老严采用的是 "),s("code",null,"gh-pages")],-1),P=s("p",null,"点击注册之后，我们会跳转到 详细配置页面",-1),O=s("p",null,[s("img",{src:"/blog/_assets/image-20210103144325595.29a9c9de.png",alt:""})],-1),W=s("p",null,[t("这里面的 "),s("code",null,"clientID "),t(" 是我们之前配置中需要的 ID")],-1),B=s("p",null,[s("img",{src:"/blog/_assets/image-20210103144533016.0a2771e6.png",alt:""})],-1),J=s("p",null,[t("我们还需要创建这个 "),s("code",null,"clientSecret"),t(" 密钥 点击 "),s("code",null,"Generate a new client secret"),t(" 即可创建")],-1),K=s("h2",{id:"重新配置"},[s("a",{class:"header-anchor",href:"#重新配置","aria-hidden":"true"},"#"),t(" 重新配置")],-1),Q=s("div",{class:"language-js"},[s("pre",null,[s("code",null,[s("span",{class:"token keyword"},"var"),t(" gitalk "),s("span",{class:"token operator"},"="),t(),s("span",{class:"token keyword"},"new"),t(),s("span",{class:"token class-name"},"Gitalk"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),t("\n    clientID"),s("span",{class:"token operator"},":"),t(),s("span",{class:"token string"},"'8e2585b74fb088fa5c1b'"),s("span",{class:"token punctuation"},","),t(),s("span",{class:"token comment"},"// clientID "),t("\n    clientSecret"),s("span",{class:"token operator"},":"),t(),s("span",{class:"token string"},"'34d45f15101fe1c1746b0ce9455760a1f628d989'"),s("span",{class:"token punctuation"},","),t(),s("span",{class:"token comment"},"// clientSecret"),t("\n    repo"),s("span",{class:"token operator"},":"),t(),s("span",{class:"token string"},"'gitalk-comments'"),s("span",{class:"token punctuation"},","),t(),s("span",{class:"token comment"},"// 评论仓库名"),t("\n    owner"),s("span",{class:"token operator"},":"),t(),s("span",{class:"token string"},"'crazymryan'"),s("span",{class:"token punctuation"},","),t("\n    admin"),s("span",{class:"token operator"},":"),t(),s("span",{class:"token punctuation"},"["),s("span",{class:"token string"},"'crazymryan'"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),t(),s("span",{class:"token comment"},"// 管理人"),t("\n    id"),s("span",{class:"token operator"},":"),t(" location"),s("span",{class:"token punctuation"},"."),t("pathname"),s("span",{class:"token punctuation"},","),t(),s("span",{class:"token comment"},"// 返回当前 URL 的路径部分作为id"),t("\n    language"),s("span",{class:"token operator"},":"),s("span",{class:"token string"},"'zh-CN'"),s("span",{class:"token punctuation"},","),t(),s("span",{class:"token comment"},"// 语言"),t("\n    distractionFreeMode"),s("span",{class:"token operator"},":"),t(),s("span",{class:"token boolean"},"false"),t("  "),s("span",{class:"token comment"},"// 无干扰模式"),t("\n"),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),t("\n")])])],-1),V=s("p",null,[t("修改完之后 ，老严直接提交到了 "),s("code",null,"gh-pages"),t(" ，如果你是自己的网站，直接上传这个 index.html 文件")],-1),X=s("p",null,[s("img",{src:"/blog/_assets/image-20210103150610041.b34f1f6f.png",alt:""})],-1),Z=s("h2",{id:"效果"},[s("a",{class:"header-anchor",href:"#效果","aria-hidden":"true"},"#"),t(" 效果")],-1),$=s("p",null,[t("打开 "),s("a",{href:"https://crazymryan.github.io/gitalk-study/",target:"_blank",rel:"noopener noreferrer"},"https://crazymryan.github.io/gitalk-study/"),t(" 这个地址")],-1),nn=s("p",null,[s("img",{src:"/blog/_assets/image-20210103150711370.0a515295.png",alt:""})],-1),an=s("p",null,[t("点击 "),s("code",null,"使用 GitHub 登录"),t(" 进行绑定授权")],-1),sn=s("p",null,[s("img",{src:"/blog/_assets/image-20210103150801359.09c650ee.png",alt:""})],-1),tn=s("p",null,"授权成功之后回到页面上",-1),en=s("p",null,[s("img",{src:"/blog/_assets/image-20210103150914455.e618528a.png",alt:""})],-1),ln=s("p",null,"输入点东西评论一下吧！",-1),on=s("p",null,[s("img",{src:"/blog/_assets/image-20210103150941803.f0cad1f7.png",alt:""})],-1),cn=s("p",null,[t("此时我们可以在之前创建的空仓库中的 "),s("code",null,"issue"),t(" 中看到我们刚刚评论的内容了")],-1),pn=s("p",null,[s("img",{src:"/blog/_assets/image-20210103151034175.fd3c8b9f.png",alt:""})],-1),un=s("h2",{id:"全部代码"},[s("a",{class:"header-anchor",href:"#全部代码","aria-hidden":"true"},"#"),t(" 全部代码")],-1),rn=s("p",null,[t("如果你想看看全部代码可以去 "),s("a",{href:"https://github.com/CrazyMrYan/gitalk-study/tree/gh-pages",target:"_blank",rel:"noopener noreferrer"},"gitalk-study"),t(" [3] 看看，如果你有兴趣想看看老严的博客也可以访问 "),s("a",{href:"https://crazymryan.github.io/blog/",target:"_blank",rel:"noopener noreferrer"},"blog"),t(" [4]")],-1),kn=s("p",null,"这里也贴一下全部代码吧",-1),gn=s("div",{class:"language-html"},[s("pre",null,[s("code",null,[s("span",{class:"token doctype"},[s("span",{class:"token punctuation"},"<!"),s("span",{class:"token doctype-tag"},"DOCTYPE"),t(),s("span",{class:"token name"},"html"),s("span",{class:"token punctuation"},">")]),t("\n"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),t("html")]),t(),s("span",{class:"token attr-name"},"lang"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),t("en"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),t("\n"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),t("head")]),s("span",{class:"token punctuation"},">")]),t("\n    "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),t("meta")]),t(),s("span",{class:"token attr-name"},"charset"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),t("UTF-8"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),t("\n    "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),t("meta")]),t(),s("span",{class:"token attr-name"},"name"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),t("viewport"),s("span",{class:"token punctuation"},'"')]),t(),s("span",{class:"token attr-name"},"content"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),t("width=device-width, initial-scale=1.0"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),t("\n    "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),t("title")]),s("span",{class:"token punctuation"},">")]),t("Document"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),t("title")]),s("span",{class:"token punctuation"},">")]),t("\n    "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),t("link")]),t(),s("span",{class:"token attr-name"},"rel"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),t("stylesheet"),s("span",{class:"token punctuation"},'"')]),t(),s("span",{class:"token attr-name"},"href"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),t("https://unpkg.com/gitalk/dist/gitalk.css"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),t("\n    "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),t("script")]),t(),s("span",{class:"token attr-name"},"src"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),t("https://unpkg.com/gitalk/dist/gitalk.min.js"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token script"}),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),t("script")]),s("span",{class:"token punctuation"},">")]),t("\n    "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),t("style")]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token style"},[s("span",{class:"token language-css"},[t("\n        "),s("span",{class:"token selector"},"#gitalk-container"),t(),s("span",{class:"token punctuation"},"{"),t("\n            "),s("span",{class:"token property"},"max-width"),s("span",{class:"token punctuation"},":"),t(" 600px"),s("span",{class:"token punctuation"},";"),t("\n            "),s("span",{class:"token property"},"margin"),s("span",{class:"token punctuation"},":"),t(" 0 auto"),s("span",{class:"token punctuation"},";"),t("\n        "),s("span",{class:"token punctuation"},"}"),t("\n    ")])]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),t("style")]),s("span",{class:"token punctuation"},">")]),t("\n"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),t("head")]),s("span",{class:"token punctuation"},">")]),t("\n"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),t("body")]),s("span",{class:"token punctuation"},">")]),t("\n    "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),t("div")]),t(),s("span",{class:"token attr-name"},"id"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),t("gitalk-container"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),t("div")]),s("span",{class:"token punctuation"},">")]),t("\n    "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),t("script")]),s("span",{class:"token punctuation"},">")]),s("span",{class:"token script"},[s("span",{class:"token language-javascript"},[t("\n    "),s("span",{class:"token keyword"},"var"),t(" gitalk "),s("span",{class:"token operator"},"="),t(),s("span",{class:"token keyword"},"new"),t(),s("span",{class:"token class-name"},"Gitalk"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),t("\n        clientID"),s("span",{class:"token operator"},":"),t(),s("span",{class:"token string"},"'8e2585b74fb088fa5c1b'"),s("span",{class:"token punctuation"},","),t(),s("span",{class:"token comment"},"//clientID "),t("\n        clientSecret"),s("span",{class:"token operator"},":"),t(),s("span",{class:"token string"},"'34d45f15101fe1c1746b0ce9455760a1f628d989'"),s("span",{class:"token punctuation"},","),t(),s("span",{class:"token comment"},"//clientSecret"),t("\n        repo"),s("span",{class:"token operator"},":"),t(),s("span",{class:"token string"},"'gitalk-comments'"),s("span",{class:"token punctuation"},","),t(),s("span",{class:"token comment"},"// 评论仓库名"),t("\n        owner"),s("span",{class:"token operator"},":"),t(),s("span",{class:"token string"},"'crazymryan'"),s("span",{class:"token punctuation"},","),t("\n        admin"),s("span",{class:"token operator"},":"),t(),s("span",{class:"token punctuation"},"["),s("span",{class:"token string"},"'crazymryan'"),s("span",{class:"token punctuation"},"]"),s("span",{class:"token punctuation"},","),t(),s("span",{class:"token comment"},"//管理人"),t("\n        id"),s("span",{class:"token operator"},":"),t(" location"),s("span",{class:"token punctuation"},"."),t("pathname"),s("span",{class:"token punctuation"},","),t(),s("span",{class:"token comment"},"// 返回当前 URL 的路径部分作为id"),t("\n        language"),s("span",{class:"token operator"},":"),s("span",{class:"token string"},"'zh-CN'"),s("span",{class:"token punctuation"},","),t(),s("span",{class:"token comment"},"//语言"),t("\n        distractionFreeMode"),s("span",{class:"token operator"},":"),t(),s("span",{class:"token boolean"},"false"),t("  "),s("span",{class:"token comment"},"// 无干扰模式"),t("\n    "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),t("\n    gitalk"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"render"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},"'gitalk-container'"),s("span",{class:"token punctuation"},")"),t("\n    ")])]),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),t("script")]),s("span",{class:"token punctuation"},">")]),t("\n"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),t("body")]),s("span",{class:"token punctuation"},">")]),t("\n"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),t("html")]),s("span",{class:"token punctuation"},">")]),t("\n")])])],-1),mn=s("h2",{id:"注解地址"},[s("a",{class:"header-anchor",href:"#注解地址","aria-hidden":"true"},"#"),t(" 注解地址")],-1),dn=s("p",null,[t("[0] "),s("a",{href:"https://github.com/gitalk/gitalk/",target:"_blank",rel:"noopener noreferrer"},"https://github.com/gitalk/gitalk/")],-1),hn=s("p",null,[t("[1] "),s("a",{href:"https://github.com/settings/applications/new",target:"_blank",rel:"noopener noreferrer"},"https://github.com/settings/applications/new")],-1),bn=s("p",null,[t("[2] "),s("a",{href:"https://github.com/CrazyMrYan/gitalk-comments",target:"_blank",rel:"noopener noreferrer"},"https://github.com/CrazyMrYan/gitalk-comments")],-1),fn=s("p",null,[t("[3] "),s("a",{href:"https://github.com/CrazyMrYan/gitalk-study/tree/gh-pages",target:"_blank",rel:"noopener noreferrer"},"https://github.com/CrazyMrYan/gitalk-study/tree/gh-pages")],-1),yn=s("p",null,[t("[4] "),s("a",{href:"https://crazymryan.github.io/blog/",target:"_blank",rel:"noopener noreferrer"},"https://crazymryan.github.io/blog/")],-1);l.render=function(s,t,e,l,vn,_n){return a(),n("div",null,[o,c,p,u,i,r,k,g,m,d,h,b,f,y,v,_,w,z,q,C,G,D,M,S,j,H,I,Y,x,F,U,L,R,E,N,T,A,P,O,W,B,J,K,Q,V,X,Z,$,nn,an,sn,tn,en,ln,on,cn,pn,un,rn,kn,gn,mn,dn,hn,bn,fn,yn])};export default l;export{e as __pageData};
