(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{171:function(a,t,e){"use strict";e.r(t),e.d(t,"query",function(){return c});var n=e(12),i=(e(0),e(183)),s=e(190),c="1266099046";t.default=function(a){var t=a.data;return Object(n.a)(i.a,null,Object(n.a)("div",{className:{}},t.allAlbumsJson.edges.map(function(a){var t=a.node;return Object(n.a)(s.a,{data:t})})))}},175:function(a,t,e){"use strict";e(12);var n=e(0),i=e.n(n),s=e(5),c=e.n(s),r=e(41),o=e.n(r);e.d(t,"a",function(){return o.a});e(176),i.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func},176:function(a,t,e){var n;a.exports=(n=e(179))&&n.default||n},178:function(a){a.exports={data:{site:{siteMetadata:{description:"Excited to learn, research and make interesting things. 😝",author:{name:"Tony Chan"},nav:[{name:"Home",path:"/"},{name:"Posts",path:"/posts"},{name:"Gallery",path:"/gallery"},{name:"Contact",path:"/posts/contact-me"}]}}}}},179:function(a,t,e){"use strict";e.r(t);e(65);var n=e(0),i=e.n(n),s=e(5),c=e.n(s),r=e(66),o=function(a){var t=a.location,e=a.pageResources;return e?i.a.createElement(r.a,Object.assign({location:t,pageResources:e},e.json)):null};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=o},180:function(a){a.exports={data:{site:{siteMetadata:{author:{avatar:"https://gztchan.oss-ap-southeast-1.aliyuncs.com/img/WechatIMG1851.jpeg"}}}}}},181:function(a,t,e){"use strict";e(177);var n=e(12),i=e(178),s=e(175),c=e(5),r=e.n(c),o=e(0),l=e.n(o),u=e(184),p=e.n(u),d=e(180),m=e(161),b=e.n(m),j=function(a){p()(a);var t=d.data;return Object(n.a)(l.a.Fragment,null,Object(n.a)("div",{className:b.a.wrap},Object(n.a)("img",{src:t.site.siteMetadata.author.avatar,alt:!0})))},O=e(162),f=e.n(O),g=function(a){a.siteTitle;var t=i.data;return Object(n.a)("header",{style:{background:"#f7f7f7"}},Object(n.a)("div",null,Object(n.a)(j,null),Object(n.a)("div",{className:f.a.text},Object(n.a)("p",{style:{fontSize:"1rem",marginBottom:"1rem"}},t.site.siteMetadata.author.name),Object(n.a)("p",null,t.site.siteMetadata.description)),Object(n.a)("nav",{style:{textAlign:"center"}},Object(n.a)("ul",null,t.site.siteMetadata.nav.map(function(a){return Object(n.a)("li",{style:{padding:"20px 10px",margin:"0 10px",display:"inline-block"}},Object(n.a)(s.a,{to:a.path},a.name))})))))};g.propTypes={siteTitle:r.a.string},g.defaultProps={siteTitle:""};t.a=g},182:function(a){a.exports={data:{site:{siteMetadata:{nav:[{name:"Home",path:"/",icon:"faHome"},{name:"Posts",path:"/posts",icon:"faEnvelopeOpenText"},{name:"Gallery",path:"/gallery",icon:"faCamera"},{name:"Contact",path:"/posts/contact-me",icon:"faSms"}],alipay:"https://gztchan.oss-ap-southeast-1.aliyuncs.com/img/20190621205545.png?x-oss-process=image/quality,q_50"}}}}},183:function(a,t,e){"use strict";var n=e(12),i=e(0),s=e.n(i),c=e(5),r=e.n(c),o=e(181),l=(e(177),e(182)),u=e(175),p=e(185),d=e(186),m=e(187),b=e(163),j=e.n(b),O={display:"block",padding:"10px 16px",marginBottom:15,background:"#f7f7f7",boxShadow:"2px 2px 10px rgba(0, 0, 0, 0.15)",cursor:"pointer"},f=function(a){var t=a.url;return Object(n.a)("div",{className:j.a.payCode},Object(n.a)("img",{src:t,alt:!0}))},g=function(a){a.children;var t=Object(i.useState)(!1),e=t[0],c=t[1],r=l.data;return Object(n.a)(s.a.Fragment,null,Object(n.a)("div",{className:j.a.sidebar},Object(n.a)("nav",{style:{marginTop:50}},Object(n.a)("ul",null,r.site.siteMetadata.nav.map(function(a){return Object(n.a)("li",{style:O},Object(n.a)(u.a,{to:a.path},Object(n.a)("span",{style:{marginRight:10}},Object(n.a)(p.a,{icon:d[a.icon]})),Object(n.a)("span",null,a.name)))}),Object(n.a)("li",{className:j.a.payWrap,style:O,onClick:function(){return c(!e)}},Object(n.a)("span",{style:{marginRight:10}},Object(n.a)(p.a,{icon:m.a})),Object(n.a)("span",null,e?"❌":"Support"),e?Object(n.a)(f,{url:r.site.siteMetadata.alipay}):null)))))},h=e(164),v=e.n(h),y=function(a){var t=a.children;return Object(n.a)(s.a.Fragment,null,Object(n.a)("div",{className:v.a.general},Object(n.a)("main",{className:v.a.main},Object(n.a)("div",{className:v.a.header},Object(n.a)(o.a,null)),t),Object(n.a)("div",{className:v.a.rightSide},Object(n.a)(g,null))))};y.propTypes={children:r.a.node.isRequired};t.a=y},190:function(a,t,e){"use strict";var n=e(12),i=(e(0),e(175));t.a=function(a){var t=a.data;return Object(n.a)("p",{style:{position:"relative",margin:10}},Object(n.a)("span",{style:{fontSize:"12px",marginRight:10}},t.date),Object(n.a)(i.a,{style:{position:"absolute",left:80},to:t.path},t.title))}}}]);
//# sourceMappingURL=component---src-pages-gallery-js-879354f353e56eed772e.js.map