(this["webpackJsonpsnake-ml-experiment"]=this["webpackJsonpsnake-ml-experiment"]||[]).push([[0],{258:function(e,a,t){e.exports=t(450)},263:function(e,a,t){},450:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(12),c=(t(263),t(15)),i=t(4),o=t(43),m=t(511),s=t(520),u=t(518),p=t(512),d=t(513),E=t(84),h=t(502),g=t(514),f=t(515),b=t(516),x=t(214),v=t.n(x),y=t(216),w=t.n(y),j=t(215),C=t.n(j),k=t(499),O=t(500),B=t(501),N=t(503),P=t(196),S=t.n(P),I=t(197),H=t.n(I),F=t(198),D=t.n(F),W=t(199),L=t.n(W),R=t(200),T=t.n(R),z=t(104),K=t.n(z),M=t(495),V=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,null,r.a.createElement("div",null,r.a.createElement(o.b,{to:"/Dashboard"},r.a.createElement(k.a,{button:!0},r.a.createElement(O.a,null,r.a.createElement(S.a,null)),r.a.createElement(B.a,{primary:"Dashboard"}))),r.a.createElement(o.b,{to:"/"},r.a.createElement(k.a,{button:!0},r.a.createElement(O.a,null,r.a.createElement(H.a,null)),r.a.createElement(B.a,{primary:"Posts"}))),r.a.createElement(k.a,{button:!0},r.a.createElement(O.a,null,r.a.createElement(D.a,null)),r.a.createElement(B.a,{primary:"Customers"})),r.a.createElement(k.a,{button:!0},r.a.createElement(O.a,null,r.a.createElement(L.a,null)),r.a.createElement(B.a,{primary:"Reports"})),r.a.createElement(k.a,{button:!0},r.a.createElement(O.a,null,r.a.createElement(T.a,null)),r.a.createElement(B.a,{primary:"Integrations"})))),r.a.createElement(h.a,null),r.a.createElement(M.a,null,r.a.createElement("div",null,r.a.createElement(N.a,{inset:!0},"Saved reports"),r.a.createElement(k.a,{button:!0},r.a.createElement(O.a,null,r.a.createElement(K.a,null)),r.a.createElement(B.a,{primary:"Current month"})),r.a.createElement(k.a,{button:!0},r.a.createElement(O.a,null,r.a.createElement(K.a,null)),r.a.createElement(B.a,{primary:"Last quarter"})),r.a.createElement(k.a,{button:!0},r.a.createElement(O.a,null,r.a.createElement(K.a,null)),r.a.createElement(B.a,{primary:"Year-end sale"})))))},Y=t(98),A=t(201),G=t(202),J=Object(G.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(A.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(Y.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}})),q=t(504),U=function(){return r.a.createElement(E.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 Template by Material UI team, project made by Vladyslav Kazantsev ",r.a.createElement("br",null),r.a.createElement(q.a,{color:"inherit",href:"https://github.com/specialistvlad/ig-assignment-front"},"Your Website")," ",(new Date).getFullYear(),".")},X=t(47),$=t(510),Q=t(451),Z=t(81),_=t(505),ee=t(509),ae=t(508),te=t(506),ne=t(507);function re(e){return r.a.createElement(E.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},e.children)}var le=function(){var e=Object(X.g)(),a=Object(Z.a)("https://jsonplaceholder.typicode.com/posts",(function(e){return fetch(e).then((function(e){return e.json()}))})).data,t=function(a){e.push("/post/".concat(a))};return a?r.a.createElement(r.a.Fragment,null,r.a.createElement(re,null,"Recent Posts"),r.a.createElement(_.a,{size:"small"},r.a.createElement(te.a,null,r.a.createElement(ne.a,null,r.a.createElement(ae.a,null,"id"),r.a.createElement(ae.a,null,"userId"),r.a.createElement(ae.a,{align:"right"},"title"))),r.a.createElement(ee.a,null,a.map((function(e){return r.a.createElement(ne.a,{key:e.id},r.a.createElement(ae.a,{onClick:function(){return t(e.id)}},e.id),r.a.createElement(ae.a,{onClick:function(){return t(e.id)}},e.userId),r.a.createElement(ae.a,{onClick:function(){return t(e.id)},align:"right"},e.title))}))))):r.a.createElement("div",null,"Loading...")},ce=function(e){e.fixedHeightPaper;var a=J();return r.a.createElement($.a,{container:!0,spacing:3},r.a.createElement($.a,{item:!0,xs:12},r.a.createElement(Q.a,{className:a.paper},r.a.createElement(le,null))))},ie=t(517),oe=function(e){return fetch(e).then((function(e){return e.json()}))},me=function(e){e.fixedHeightPaper;var a=J(),t=Object(X.h)().postId,n=Object(Z.a)("https://jsonplaceholder.typicode.com/posts/".concat(t),oe).data,l=Object(Z.a)((function(){return"https://jsonplaceholder.typicode.com/users/".concat(n.userId)}),oe).data;return r.a.createElement($.a,{container:!0,spacing:3},r.a.createElement($.a,{item:!0,xs:12},r.a.createElement(Q.a,{className:a.paper},n?r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{variant:"h6",gutterBottom:!0},"Title: ",n.title),r.a.createElement($.a,{container:!0,spacing:3},r.a.createElement($.a,{item:!0,xs:12},r.a.createElement(ie.a,{fullWidth:!0,multiline:!0,"aria-label":"maximum height",placeholder:"Maximum 4 rows",defaultValue:n.body})),l?r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,{item:!0,xs:12,sm:6},r.a.createElement(ie.a,{disabled:!0,id:"author",name:"author",label:"Author",fullWidth:!0,autoComplete:"fname",value:l.name})),r.a.createElement($.a,{item:!0,xs:12,sm:6},r.a.createElement(ie.a,{disabled:!0,id:"email",name:"email",label:"email",fullWidth:!0,autoComplete:"lname",value:l.email}))):"Loading author data...")):"Loading post...")))},se=t(24),ue=t(54);function pe(e,a){return{time:e,amount:a}}var de=[pe("00:00",0),pe("03:00",300),pe("06:00",600),pe("09:00",800),pe("12:00",1500),pe("15:00",2e3),pe("18:00",2400),pe("21:00",2400),pe("24:00",void 0)];function Ee(){var e=Object(se.a)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(re,null,"Today"),r.a.createElement(ue.d,null,r.a.createElement(ue.c,{data:de,margin:{top:16,right:16,bottom:0,left:24}},r.a.createElement(ue.e,{dataKey:"time",stroke:e.palette.text.secondary}),r.a.createElement(ue.f,{stroke:e.palette.text.secondary},r.a.createElement(ue.a,{angle:270,position:"left",style:{textAnchor:"middle",fill:e.palette.text.primary}},"Sales")),r.a.createElement(ue.b,{type:"monotone",dataKey:"amount",stroke:e.palette.primary.main,dot:!1}))))}function he(e){e.preventDefault()}var ge=Object(G.a)({depositContext:{flex:1}});function fe(){var e=ge();return r.a.createElement(r.a.Fragment,null,r.a.createElement(re,null,"Recent Deposits"),r.a.createElement(E.a,{component:"p",variant:"h4"},"$3,024.00"),r.a.createElement(E.a,{color:"textSecondary",className:e.depositContext},"on 15 March, 2019"),r.a.createElement("div",null,r.a.createElement(q.a,{color:"primary",href:"#",onClick:he},"View balance")))}var be=function(e){var a=e.fixedHeightPaper;return r.a.createElement($.a,{container:!0,spacing:3},r.a.createElement($.a,{item:!0,xs:12,md:8,lg:9},r.a.createElement(Q.a,{className:a},r.a.createElement(Ee,null))),r.a.createElement($.a,{item:!0,xs:12,md:4,lg:3},r.a.createElement(Q.a,{className:a},r.a.createElement(fe,null))))},xe=function(e){var a=e.fixedHeightPaper;return r.a.createElement(X.d,null,r.a.createElement(X.b,{exact:!0,path:"/"},r.a.createElement(ce,{fixedHeightPaper:a})),r.a.createElement(X.b,{path:"/post/:postId"},r.a.createElement(me,{fixedHeightPaper:a})),r.a.createElement(X.b,{path:"/dashboard"},r.a.createElement(be,{fixedHeightPaper:a})),r.a.createElement(X.a,{from:"*",to:"/"}))};Object(l.render)(r.a.createElement((function(){var e=J(),a=r.a.useState(!0),t=Object(c.a)(a,2),n=t[0],l=t[1],x=Object(i.a)(e.paper,e.fixedHeight);return r.a.createElement("div",{className:e.root},r.a.createElement(o.a,{basename:"/ig-assignment-front"},r.a.createElement(m.a,null),r.a.createElement(p.a,{position:"absolute",className:Object(i.a)(e.appBar,n&&e.appBarShift)},r.a.createElement(d.a,{className:e.toolbar},r.a.createElement(g.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){l(!0)},className:Object(i.a)(e.menuButton,n&&e.menuButtonHidden)},r.a.createElement(v.a,null)),r.a.createElement(E.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title},"Task"),r.a.createElement(g.a,{color:"inherit"},r.a.createElement(f.a,{badgeContent:4,color:"secondary"},r.a.createElement(C.a,null))))),r.a.createElement(s.a,{variant:"permanent",classes:{paper:Object(i.a)(e.drawerPaper,!n&&e.drawerPaperClose)},open:n},r.a.createElement("div",{className:e.toolbarIcon},r.a.createElement(g.a,{onClick:function(){l(!1)}},r.a.createElement(w.a,null))),r.a.createElement(h.a,null),r.a.createElement(V,null)),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpacer}),r.a.createElement(b.a,{maxWidth:"lg",className:e.container},r.a.createElement(xe,{fixedHeightPaper:x}),r.a.createElement(u.a,{pt:4},r.a.createElement(U,null))))))}),null),document.getElementById("root"))}},[[258,1,2]]]);
//# sourceMappingURL=main.da58c835.chunk.js.map