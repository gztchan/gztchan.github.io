(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{201:function(a,t,e){"use strict";e.r(t),e.d(t,"default",function(){return r}),e.d(t,"query",function(){return l});var n=e(9),c=(e(0),e(218)),i=e(202),s=e.n(i);function r(a){var t=a.data.albumsJson;return Object(n.a)(c.a,null,Object(n.a)("div",{className:s.a.container},Object(n.a)("div",{className:s.a.album},Object(n.a)("h1",null,t.title),Object(n.a)("div",null,t.collection.map(function(a){return Object(n.a)("figure",{className:s.a.figureWrap},Object(n.a)("img",{src:(t=a.url,t+"?x-oss-process=image/quality,q_80/resize,h_1024"),alt:!0}),a.caption?Object(n.a)("figcaption",null,a.caption):null);var t})))))}var l="2614394439"},211:function(a,t,e){"use strict";e(9);var n=e(0),c=e.n(n),i=e(72),s=e.n(i);e.d(t,"a",function(){return s.a});e(212),e(11).default.enqueue,c.a.createContext({})},212:function(a,t,e){var n;a.exports=(n=e(214))&&n.default||n},213:function(a){a.exports={data:{site:{siteMetadata:{description:"Excited to learn, research and make interesting things. 😝",author:{name:"Tony Chan"},nav:[{name:"Home",path:"/"},{name:"Posts",path:"/posts"},{name:"Gallery",path:"/gallery"},{name:"Contact",path:"/posts/contact-me"}]}}}}},214:function(a,t,e){"use strict";e.r(t);e(28);var n=e(0),c=e.n(n),i=e(98);t.default=function(a){var t=a.location,e=a.pageResources;return e?c.a.createElement(i.a,Object.assign({location:t,pageResources:e},e.json)):null}},215:function(a){a.exports={data:{site:{siteMetadata:{author:{avatar:"https://gztchan.oss-ap-southeast-1.aliyuncs.com/img/WechatIMG1851.jpeg"}}}}}},216:function(a,t,e){"use strict";e(16);var n=e(9),c=e(213),i=e(211),s=e(0),r=e.n(s),l=e(215),o=e(197),u=e.n(o);var p=function(a){!function(a){if(null==a)throw new TypeError("Cannot destructure undefined")}(a);var t=l.data;return Object(n.a)(r.a.Fragment,null,Object(n.a)("div",{className:u.a.wrap},Object(n.a)("img",{src:t.site.siteMetadata.author.avatar,alt:!0})))},m=e(198),d=e.n(m),b=function(a){a.siteTitle;var t=c.data;return Object(n.a)("header",{style:{background:"#f7f7f7"}},Object(n.a)("div",null,Object(n.a)(p,null),Object(n.a)("div",{className:d.a.text},Object(n.a)("p",{style:{fontSize:"1rem",marginBottom:"1rem"}},t.site.siteMetadata.author.name),Object(n.a)("p",null,t.site.siteMetadata.description)),Object(n.a)("nav",{style:{textAlign:"center"}},Object(n.a)("ul",null,t.site.siteMetadata.nav.map(function(a){return Object(n.a)("li",{style:{padding:"20px 10px",margin:"0 10px",display:"inline-block"}},Object(n.a)(i.a,{to:a.path},a.name))})))))};b.defaultProps={siteTitle:""};t.a=b},217:function(a){a.exports={data:{site:{siteMetadata:{nav:[{name:"Home",path:"/",icon:"faHome"},{name:"Posts",path:"/posts",icon:"faEnvelopeOpenText"},{name:"Gallery",path:"/gallery",icon:"faCamera"},{name:"Contact",path:"/posts/contact-me",icon:"faSms"}],alipay:"https://gztchan.oss-ap-southeast-1.aliyuncs.com/img/20190621205545.png?x-oss-process=image/quality,q_50"}}}}},218:function(a,t,e){"use strict";var n=e(9),c=e(0),i=e.n(c),s=e(216),r=(e(16),e(217)),l=e(211),o=e(219),u=e(220),p=e(221),m=e(199),d=e.n(m),b={display:"block",padding:"10px 16px",marginBottom:15,background:"#f7f7f7",boxShadow:"2px 2px 10px rgba(0, 0, 0, 0.15)",cursor:"pointer"},j=function(a){var t=a.url;return Object(n.a)("div",{className:d.a.payCode},Object(n.a)("img",{src:t,alt:!0}))},O=function(a){a.children;var t=Object(c.useState)(!1),e=t[0],s=t[1],m=r.data;return Object(n.a)(i.a.Fragment,null,Object(n.a)("div",{className:d.a.sidebar},Object(n.a)("nav",{style:{marginTop:50}},Object(n.a)("ul",null,m.site.siteMetadata.nav.map(function(a){return Object(n.a)("li",{style:b},Object(n.a)(l.a,{to:a.path},Object(n.a)("span",{style:{marginRight:10}},Object(n.a)(o.a,{icon:u[a.icon]})),Object(n.a)("span",null,a.name)))}),Object(n.a)("li",{className:d.a.payWrap,style:b,onClick:function(){return s(!e)}},Object(n.a)("span",{style:{marginRight:10}},Object(n.a)(o.a,{icon:p.a})),Object(n.a)("span",null,e?"❌":"Support"),e?Object(n.a)(j,{url:m.site.siteMetadata.alipay}):null)))))},f=e(200),g=e.n(f);t.a=function(a){var t=a.children;return Object(n.a)(i.a.Fragment,null,Object(n.a)("div",{className:g.a.general},Object(n.a)("main",{className:g.a.main},Object(n.a)("div",{className:g.a.header},Object(n.a)(s.a,null)),t),Object(n.a)("div",{className:g.a.rightSide},Object(n.a)(O,null))))}}}]);
//# sourceMappingURL=component---src-templates-album-js-628bc810c115763e3bdd.js.map