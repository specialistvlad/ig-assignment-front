(this["webpackJsonpsnake-ml-experiment"]=this["webpackJsonpsnake-ml-experiment"]||[]).push([[0],{228:function(e,a,t){e.exports=t(420)},229:function(e,a,t){},420:function(e,a,t){"use strict";t.r(a);t(229);var n=t(0),r=t.n(n),l=t(12),c=t(19),i=t(4),o=t(189),m=t(472),s=t(482),u=t(481),p=t(473),E=t(474),d=t(478),g=t(67),h=t(477),f=t(475),b=t(476),y=t(479),v=t(480),x=t(422),w=t(191),S=t.n(w),M=t(193),N=t.n(M),B=t(192),C=t.n(B),j=t(483),k=t(463),O=t(464),I=t(465),T=t(173),D=t.n(T),A=t(174),P=t.n(A),z=t(175),R=t.n(z),V=t(176),F=t.n(V),H=t(177),J=t.n(H),K=t(87),L=t.n(K),G=r.a.createElement("div",null,r.a.createElement(j.a,{button:!0},r.a.createElement(k.a,null,r.a.createElement(D.a,null)),r.a.createElement(O.a,{primary:"Dashboard"})),r.a.createElement(j.a,{button:!0},r.a.createElement(k.a,null,r.a.createElement(P.a,null)),r.a.createElement(O.a,{primary:"Orders"})),r.a.createElement(j.a,{button:!0},r.a.createElement(k.a,null,r.a.createElement(R.a,null)),r.a.createElement(O.a,{primary:"Customers"})),r.a.createElement(j.a,{button:!0},r.a.createElement(k.a,null,r.a.createElement(F.a,null)),r.a.createElement(O.a,{primary:"Reports"})),r.a.createElement(j.a,{button:!0},r.a.createElement(k.a,null,r.a.createElement(J.a,null)),r.a.createElement(O.a,{primary:"Integrations"}))),W=r.a.createElement("div",null,r.a.createElement(I.a,{inset:!0},"Saved reports"),r.a.createElement(j.a,{button:!0},r.a.createElement(k.a,null,r.a.createElement(L.a,null)),r.a.createElement(O.a,{primary:"Current month"})),r.a.createElement(j.a,{button:!0},r.a.createElement(k.a,null,r.a.createElement(L.a,null)),r.a.createElement(O.a,{primary:"Last quarter"})),r.a.createElement(j.a,{button:!0},r.a.createElement(k.a,null,r.a.createElement(L.a,null)),r.a.createElement(O.a,{primary:"Year-end sale"}))),Y=t(51),U=t(43);function X(e){return r.a.createElement(g.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},e.children)}function $(e,a){return{time:e,amount:a}}var q=[$("00:00",0),$("03:00",300),$("06:00",600),$("09:00",800),$("12:00",1500),$("15:00",2e3),$("18:00",2400),$("21:00",2400),$("24:00",void 0)];function Q(){var e=Object(Y.a)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(X,null,"Today"),r.a.createElement(U.d,null,r.a.createElement(U.c,{data:q,margin:{top:16,right:16,bottom:0,left:24}},r.a.createElement(U.e,{dataKey:"time",stroke:e.palette.text.secondary}),r.a.createElement(U.f,{stroke:e.palette.text.secondary},r.a.createElement(U.a,{angle:270,position:"left",style:{textAnchor:"middle",fill:e.palette.text.primary}},"Sales ($)")),r.a.createElement(U.b,{type:"monotone",dataKey:"amount",stroke:e.palette.primary.main,dot:!1}))))}var Z=t(466);function _(e){e.preventDefault()}var ee=Object(o.a)({depositContext:{flex:1}});function ae(){var e=ee();return r.a.createElement(r.a.Fragment,null,r.a.createElement(X,null,"Recent Deposits"),r.a.createElement(g.a,{component:"p",variant:"h4"},"$3,024.00"),r.a.createElement(g.a,{color:"textSecondary",className:e.depositContext},"on 15 March, 2019"),r.a.createElement("div",null,r.a.createElement(Z.a,{color:"primary",href:"#",onClick:_},"View balance")))}var te=t(467),ne=t(471),re=t(470),le=t(468),ce=t(469);function ie(e,a,t,n,r,l){return{id:e,date:a,name:t,shipTo:n,paymentMethod:r,amount:l}}var oe=[ie(0,"16 Mar, 2019","Elvis Presley","Tupelo, MS","VISA \u2800\u2022\u2022\u2022\u2022 3719",312.44),ie(1,"16 Mar, 2019","Paul McCartney","London, UK","VISA \u2800\u2022\u2022\u2022\u2022 2574",866.99),ie(2,"16 Mar, 2019","Tom Scholz","Boston, MA","MC \u2800\u2022\u2022\u2022\u2022 1253",100.81),ie(3,"16 Mar, 2019","Michael Jackson","Gary, IN","AMEX \u2800\u2022\u2022\u2022\u2022 2000",654.39),ie(4,"15 Mar, 2019","Bruce Springsteen","Long Branch, NJ","VISA \u2800\u2022\u2022\u2022\u2022 5919",212.79)];function me(e){e.preventDefault()}var se=Object(o.a)((function(e){return{seeMore:{marginTop:e.spacing(3)}}})),ue=function(){var e=se();return r.a.createElement(r.a.Fragment,null,r.a.createElement(X,null,"Recent Orders"),r.a.createElement(te.a,{size:"small"},r.a.createElement(le.a,null,r.a.createElement(ce.a,null,r.a.createElement(re.a,null,"Date"),r.a.createElement(re.a,null,"Name"),r.a.createElement(re.a,null,"Ship To"),r.a.createElement(re.a,null,"Payment Method"),r.a.createElement(re.a,{align:"right"},"Sale Amount"))),r.a.createElement(ne.a,null,oe.map((function(e){return r.a.createElement(ce.a,{key:e.id},r.a.createElement(re.a,null,e.date),r.a.createElement(re.a,null,e.name),r.a.createElement(re.a,null,e.shipTo),r.a.createElement(re.a,null,e.paymentMethod),r.a.createElement(re.a,{align:"right"},e.amount))})))),r.a.createElement("div",{className:e.seeMore},r.a.createElement(Z.a,{color:"primary",href:"#",onClick:me},"See more orders")))},pe=t(86),Ee=t(190),de=function(){return r.a.createElement(g.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 Template by Material UI team, project made by Vladyslav Kazantsev ",r.a.createElement("br",null),r.a.createElement(Z.a,{color:"inherit",href:"https://github.com/specialistvlad/ig-assignment-front"},"Your Website")," ",(new Date).getFullYear(),".")},ge=Object(o.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(Ee.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(pe.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));Object(l.render)(r.a.createElement((function(){var e=ge(),a=r.a.useState(!0),t=Object(c.a)(a,2),n=t[0],l=t[1],o=Object(i.a)(e.paper,e.fixedHeight);return r.a.createElement("div",{className:e.root},r.a.createElement(m.a,null),r.a.createElement(p.a,{position:"absolute",className:Object(i.a)(e.appBar,n&&e.appBarShift)},r.a.createElement(E.a,{className:e.toolbar},r.a.createElement(f.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){l(!0)},className:Object(i.a)(e.menuButton,n&&e.menuButtonHidden)},r.a.createElement(S.a,null)),r.a.createElement(g.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title},"Dashboard"),r.a.createElement(f.a,{color:"inherit"},r.a.createElement(b.a,{badgeContent:4,color:"secondary"},r.a.createElement(C.a,null))))),r.a.createElement(s.a,{variant:"permanent",classes:{paper:Object(i.a)(e.drawerPaper,!n&&e.drawerPaperClose)},open:n},r.a.createElement("div",{className:e.toolbarIcon},r.a.createElement(f.a,{onClick:function(){l(!1)}},r.a.createElement(N.a,null))),r.a.createElement(h.a,null),r.a.createElement(d.a,null,G),r.a.createElement(h.a,null),r.a.createElement(d.a,null,W)),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpacer}),r.a.createElement(y.a,{maxWidth:"lg",className:e.container},r.a.createElement(v.a,{container:!0,spacing:3},r.a.createElement(v.a,{item:!0,xs:12,md:8,lg:9},r.a.createElement(x.a,{className:o},r.a.createElement(Q,null))),r.a.createElement(v.a,{item:!0,xs:12,md:4,lg:3},r.a.createElement(x.a,{className:o},r.a.createElement(ae,null))),r.a.createElement(v.a,{item:!0,xs:12},r.a.createElement(x.a,{className:e.paper},r.a.createElement(ue,null)))),r.a.createElement(u.a,{pt:4},r.a.createElement(de,null)))))}),null),document.getElementById("root"))}},[[228,1,2]]]);
//# sourceMappingURL=main.2579cc8f.chunk.js.map