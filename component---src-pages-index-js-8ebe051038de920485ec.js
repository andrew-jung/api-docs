(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n.n(a),i=n(0),o=n.n(i),l=n(196),c=(n(79),n(38),n(82),n(80),n(52),n(284)),s=n.n(c),u=(n(81),n(451)),p=function(e){var t=e.content||"Sorry we don't have an example yet! Fork our repo and help us document";return o.a.createElement("div",{className:"sdk-block"},o.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}}))},d=function(e){var t=["bash","js","python","csharp"].map(function(t){var n=e.sdkSubsections.find(function(e){return e.langFileName.indexOf(t)>=0});return{lang:t,html:n.html}}).map(function(e){return{label:"js"===e.lang?"javascript":e.lang,content:o.a.createElement(p,{content:e.html})}});return o.a.createElement(u.a,{tabs:t,onSelect:function(e,t){return console.log("Selected Tab",t+1)}})},m=n(142),h=n.n(m),f=function(e){var t=e.samples,n=t.find(function(e){return"json.md"===e.filename}),a=t.find(function(e){return"yaml.md"===e.filename}),r=function(){h()(this).hide(),h()(this).closest("div").show()};return o.a.createElement("div",null,o.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.html},onClick:r}),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.html},onClick:r}))},g=n(248),y=function(e){var t=e.data.allMarkdownRemark.edges.map(function(e){var t=e.node,n=t.fileAbsolutePath,a=t.html,r=n.split("markdown-pages")[1],i=r.slice(1,r.length).split("/");return{group:i[0],section:i[1],filename:i[2],html:a,langFileName:i[3]}}),a=t.map(function(e){return Object.assign({},e,{sdkSubsections:t.filter(function(t){return t.group===e.group&&t.section===e.section&&Boolean(t.langFileName)})})}).filter(function(e){return!Boolean(e.langFileName)}).filter(function(e){return"index.md"!==e.section}),r=s()(a,"group");return g.map(function(e){var a=e.title,i=e.path,l=r[i],c=s()(l,"section"),u=[];try{u=n(249)("./"+i+"/order")}catch(e){}var p=u.map(function(e){var t=e.path,n=c[t],a=n.find(function(e){return"index.md"===e.filename});if(a){var r=a.html,l=a.sdkSubsections;return o.a.createElement("div",{key:i+"-"+t,id:i+"-"+t,className:"section"},o.a.createElement("div",{dangerouslySetInnerHTML:{__html:r}}),o.a.createElement(d,{sdkSubsections:l}))}return o.a.createElement(f,{samples:n})}),m=t.find(function(e){return e.group===i&&"index.md"===e.section});return o.a.createElement("div",{key:i,className:"group"},o.a.createElement("h1",{id:i},a),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:m.html}}),p)})},v=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).onScroll=function(){},t}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("scroll",this.onScroll)},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.onScroll)},n.render=function(){return o.a.createElement(y,this.props)},t}(o.a.Component),b=n(392),E=n.n(b),k=n(397),S=n.n(k),C=n(449),w=n(429),x=n(445),q=n(270),T=n(452),I=n(446),O=n(396),A=n.n(O),F=n(450),P=n(398),M=n(447),_=n(448),L=n(428),N=n(357),D=n.n(N),H=n(376),z=n.n(H),R=function(){return o.a.createElement("img",{alt:"nucleus",src:z.a})},j={background:{primary:"#31363e",secondary:"#0747A6",tertiary:"#0747A6"},text:"#DEEBFF",subText:"#B3D4FF",keyline:"rgba(9, 30, 66, 0.42)",item:{default:{background:"transparent"},hover:{background:"rgba(9, 30, 66, 0.42)"},active:{background:"#728fcb"},selected:{background:"#728fcb"},focus:{outline:"#4C9AFF"},dragging:{background:"black"}},dropdown:{default:{background:"rgba(9, 30, 66, 0.42)"},hover:{background:"rgba(9, 30, 66, 0.48)"},active:{background:"#2684FF"},selected:{background:"rgba(9, 30, 66, 0.25)"},focus:{outline:"#4C9AFF"}}},U=n(248),V=function(e){function t(t,n){var a;return(a=e.call(this,t,n)||this).close=function(){return a.setState({modals:[]})},a.open=function(){return a.setState({modals:[1]})},a.onUrlChange=function(e){a.setState({url:e})},a.onTokenChange=function(e){a.setState({token:e})},a.onAvatarSrcChange=function(e){},a.onSave=function(){var e=a.state,t=e.url,n=e.token,r=t.split("://"),i=r[0],o=r[1],l=i.indexOf("s")>0,c=l?443:80,s=o.split("/"),u={token:n,host:s[0],instance:s[1],port:c,isHttps:l};D()({url:"http://localhost:3000",method:"post",data:u,headers:{"Content-Type":"application/json"}}).then(function(e){var t="data:image/gif;base64,"+e.data.src;localStorage.setItem("avatarSrc",t),a.setState({avatarSrc:t}),a.close()}).catch(function(e){console.log(e)})},a.state={selected:"",modals:[],url:"https://V1Host/V1Instance",token:"1.11xea1111cT5555IIGIS+LPfJY=",avatarSrc:localStorage.getItem("avatarSrc")||""},a}return r()(t,e),t.prototype.render=function(){var e=this,t=this.props.containerHeaderComponent||function(){return null},a=U.map(function(t,a){var r=t.title,i=t.path,l=[];try{l=n(249)("./"+i+"/order")}catch(e){}var c=l.length>0&&o.a.createElement(C.a,null,l.map(function(t,n){var a=t.title,r=t.path;return o.a.createElement(w.a,{key:n,text:a,href:"#"+i+"-"+r,onClick:function(){e.setState({selected:i+"-"+r})},isSelected:e.state.selected===i+"-"+r})}));return o.a.createElement("div",{className:"",key:i},o.a.createElement(w.a,{text:r,href:"#"+i,onClick:function(){e.setState({selected:""+i})},isSelected:e.state.selected===""+i}),c)});return o.a.createElement(i.Fragment,null,o.a.createElement(x.a,{globalTheme:j,containerHeaderComponent:function(){return o.a.createElement("div",{className:e.props.isOpen?"":"hidden"},o.a.createElement(t,null))},globalPrimaryIcon:!this.props.isOpen&&this.props.globalPrimaryIcon,globalPrimaryItemHref:"//",globalSecondaryActions:[o.a.createElement(q.a,{onClick:this.open},o.a.createElement(F.a,{position:"right",content:"User profile"},o.a.createElement(_.a,{src:this.state.avatarSrc,size:"small",borderColor:"transparent"})))],isOpen:this.props.isOpen,onResize:this.props.resize,globalPrimaryActions:[o.a.createElement(q.a,{size:"medium"},o.a.createElement(F.a,{position:"right",content:"Search"},o.a.createElement(E.a,{label:"Search icon",secondaryColor:"inherit",size:"medium"}))),o.a.createElement(q.a,{size:"medium"},o.a.createElement(F.a,{position:"right",content:"Community Site"},o.a.createElement(A.a,{onClick:function(){return window.location="https://community.versionone.com/VersionOne_Connect/Developer_Library/Sample_Code/Explore_API_Endpoints"},label:"Community icon",secondaryColor:"inherit",size:"medium"}))),this.state.url&&o.a.createElement(q.a,{size:"medium"},o.a.createElement(F.a,{position:"right",content:"Api Console"},o.a.createElement(S.a,{onClick:function(){return window.location=e.state.url+"/apiconsole.mvc"},label:"Api Console",secondaryColor:"inherit",size:"medium"})))]},o.a.createElement("div",{className:this.props.isOpen?"links":"links hidden"},a)),o.a.createElement(P.b,null,this.state.modals.map(function(t){return o.a.createElement(M.a,{key:t,heading:"Settings",onClose:e.close,actions:[{text:"Save",onClick:e.onSave},{text:"Close",onClick:e.close}]},o.a.createElement("div",{style:{width:"100%"}},o.a.createElement(L.a,{label:"VersionOne Url",autoFocus:!0,name:"url",placeholder:"https://V1Host/V1Instance",value:e.state.url,onChange:e.onUrlChange,shouldFitContainerboolean:!1,compact:!0}),o.a.createElement(L.a,{label:"Access Token",name:"token",placeholder:"1.E23ealNBIcT4YVweftGIS+LPfJY=",value:e.state.token,onChange:e.onTokenChange,shouldFitContainerboolean:!0})))})))},t}(o.a.Component);V.defaultProps={globalPrimaryIcon:o.a.createElement(R,{label:"Main icon",size:"large"}),containerHeaderComponent:function(){return o.a.createElement(T.a,{href:"#",icon:o.a.createElement(R,null),text:"VersionOne",subText:"API docs"})}};var G=function(e){function t(t,n){var a;return(a=e.call(this,t,n)||this).state={isLoading:!0},a}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;setTimeout(function(){return e.setState({isLoading:!1})},250)},n.render=function(){return this.state.isLoading?o.a.createElement(I.a,Object.assign({},this.props,{isCollapsed:!1,globalTheme:j})):o.a.createElement(V,this.props)},t}(o.a.Component);n.d(t,"query",function(){return Q});var B=function(e){function t(t){var n;return(n=e.call(this,t)||this).resize=function(e){n.setState({isOpen:e.isOpen})},n.state={isOpen:!0},n}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=this.state.isOpen?"main open":"main";return o.a.createElement(l.a,null,o.a.createElement("div",{className:"layout-container"},o.a.createElement("span",{className:"nav"},o.a.createElement(G,{isOpen:this.state.isOpen,resize:this.resize})),o.a.createElement("main",{className:t},o.a.createElement(v,{data:e}))))},t}(o.a.Component),Q="3152735510";t.default=B},176:function(e,t,n){var a;e.exports=(a=n(198))&&a.default||a},187:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return h});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(157),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(27);n.d(t,"waitForRouteChange",function(){return s.c});var u=n(176),p=n.n(u);n.d(t,"PageRenderer",function(){return p.a});var d=n(40);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),h=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},196:function(e,t,n){"use strict";var a=n(197),r=n(0),i=n.n(r),o=n(4),l=n.n(o),c=n(229),s=n.n(c),u=n(187),p=(n(199),function(e){var t=e.children;return i.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"VersionOne API documentation site. Provides information on REST and Graph APIs."},{name:"keywords",content:"VesrionOne, REST, API, Query.v1, Asset, Attribute,"}]},i.a.createElement("html",{lang:"en"})),t)},data:a})});p.propTypes={children:l.a.node.isRequired},t.a=p},197:function(e){e.exports={data:{site:{siteMetadata:{title:"VersionOne API Docs"}}}}},198:function(e,t,n){"use strict";n.r(t);n(38);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(58),c=n(1),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},199:function(e,t,n){},248:function(e,t){e.exports=[{path:"intro",title:"Introduction"},{path:"baseUrl",title:"Base Url"},{path:"authentication",title:"Authentication"},{path:"headers",title:"HTTP Headers"},{path:"errors",title:"Errors"},{path:"terminology",title:"Terminology"},{path:"attributeDefinitionSyntax",title:"Attribute Definitions"},{path:"metav1",title:"~/meta.v1"},{path:"bulk",title:"~/api/asset"},{path:"webhookSubscription",title:"~/api/webhook"},{path:"tags",title:"~/api/tags"},{path:"activityStream",title:"~/api/activityStream"},{path:"queryv1",title:"~/query.v1"},{path:"restv1Data",title:"~/rest-1.v1"},{path:"loc",title:"~/loc-2.v1"}]},249:function(e,t,n){var a={"./activityStream/order":349,"./bulk/order":350,"./loc/order":351,"./metav1/order":352,"./queryv1/order":353,"./restv1Data/order":354,"./tags/order":355,"./webhookSubscription/order":356};function r(e){var t=i(e);return n(t)}function i(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=249},349:function(e,t){e.exports=[{title:"query",path:"query"}]},350:function(e,t){e.exports=[{title:"alias",path:"alias"},{title:"create",path:"create"},{title:"createMany",path:"createMany"},{title:"filter",path:"filter"},{title:"operation",path:"operation"},{title:"update",path:"update"},{title:"updateMany",path:"updateMany"},{title:"query",path:"query"},{title:"queryMany",path:"queryMany"},{title:"Scope.AssignMemberWithRole list",path:"execute"}]},351:function(e,t){e.exports=[{title:"asset Types",path:"assetTypes"},{title:"attribute Definitions",path:"attributeDefinitions"}]},352:function(e,t){e.exports=[{path:"query",title:"all"},{path:"queryAsset",title:"query"}]},353:function(e,t){e.exports=[{title:"asof",path:"asof"},{title:"filter",path:"filter"},{title:"find",path:"find"},{title:"group",path:"group"},{title:"page",path:"page"},{title:"query",path:"query"},{title:"sort",path:"sort"},{title:"subselect",path:"subselect"},{title:"where",path:"where"},{title:"with",path:"with"}]},354:function(e,t){e.exports=[{title:"create",path:"create"},{title:"update",path:"update"},{title:"query",path:"query"},{title:"operation",path:"operation"}]},355:function(e,t){e.exports=[{title:"query",path:"query"},{title:"all",path:"all"},{title:"remove",path:"remove"},{title:"merge",path:"merge"},{title:"search",path:"search"}]},356:function(e,t){e.exports=[{title:"create",path:"create"},{title:"update",path:"update"},{title:"query",path:"query"},{title:"delete",path:"delete"},{title:"status",path:"status"}]},376:function(e,t,n){e.exports=n.p+"static/logo-15984a3e0fc490c2bdbb7a0ba963f68c.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-8ebe051038de920485ec.js.map