(this.webpackJsonpMeme_world=this.webpackJsonpMeme_world||[]).push([[0],{63:function(e,t,n){},64:function(e,t,n){},68:function(e,t){},70:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),i=n.n(r),o=n(15),c=n.n(o),s=(n(56),n(18)),l=n.n(s),d=n(23),u=n(37),h=n(38),p=n(46),b=n(45),g=n(97),m=n(98),j=function(e){var t,n=e.onCatClick,r=e.categoryprop;return Object(a.jsx)(g.a,{bg:"dark",variant:"dark",className:"navbar navbar-expand-sm bg-dark navbar-dark sticky-top",style:{zIndex:"1",height:"30px",width:"100%"},role:"navigation",children:Object(a.jsx)(m.a,{className:"nav_container",style:{padding:0,margin:0},children:Object(a.jsx)(m.a.Link,{onClick:function(){return n("home")},style:{color:(t="technology",t==r?" rgb(245, 110, 110)":"white"),paddingLeft:"0px"},children:"Home"})})})},f=n(21),x=(n(63),n(99)),y=function(e){var t=e.target,n=e.onIntersect,a=e.threshold,r=void 0===a?.01:a,o=e.rootMargin,c=void 0===o?"0px":o;i.a.useEffect((function(){var e=new IntersectionObserver(n,{rootMargin:c,threshold:r}),a=t.current;return e.observe(a),function(){e.unobserve(a)}}))},v=(n(64),function(e){var t=i.a.useState(!1),n=Object(f.a)(t,2),r=n[0],o=n[1];return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)("img",{className:"image_blur thumb",src:"/Memes_world/images/blur_placeholder.jpg",style:{display:r?"none":"visible"}}),Object(a.jsx)("img",{onLoad:function(){o(!0)},className:"image full",style:{opacity:r?1:0},src:e.src})]})}),O=n(95),w=(n(9),n(100)),k=n(101),C=n(30),_=n(42),N=n.n(_),R=n(43),L=n.n(R),W=n(44),T=n.n(W),I=Object(O.a)((function(e){return{root:{maxWidth:445},media:{height:0},avatar:{backgroundColor:C.a[500]},paddingless:{padding:0,marginLeft:"5px"},icon:{color:"white",marginLeft:"10px"}}})),M=function(e){var t=I(),n=e.item,r=i.a.useRef(),o=i.a.useState(!1),c=Object(f.a)(o,2),s=c[0],u=c[1];function h(){return(h=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),(n=document.createElement("a")).href=t,n.download,n.click();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return y({target:r,onIntersect:function(e,t){Object(f.a)(e,1)[0].isIntersecting&&(u(!0),t.unobserve(r.current))}}),Object(a.jsx)(i.a.Fragment,{children:Object(a.jsxs)(x.a,{className:t.root,bg:"danger",style:{backgroundColor:"rgba(2,4,43,0.4)",width:"100%",borderWidth:"2px",top:"10px",color:"white",marginTop:"30px",overflow:"hidden",borderBottomLeftRadius:"5px",borderBottomRightRadius:"5px",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",alignContent:"center"},children:[Object(a.jsx)(w.a,{className:"p-2",avatar:Object(a.jsx)(k.a,{"aria-label":"name_logo",className:t.avatar,children:n.user_name[0]}),title:n.user_name,subheader:n.upload_date}),Object(a.jsx)(x.a.Body,{style:{padding:0,paddingTop:"0px",backgroundColor:"rgba(255,255,255,1)"},children:Object(a.jsx)("div",{ref:r,children:s&&Object(a.jsx)(v,{src:"https://chaitanya360.pythonanywhere.com/"+n.img,style:{borderRadius:"0px",borderTopLeftRadius:"10px",borderTopRightRadius:"10px",borderBottom:"1px solid grey",maxHeight:"800px",minHeight:"0px",position:"relative",display:"inline",overflow:"hidden"}})})}),Object(a.jsxs)(x.a.Footer,{className:"p-2",children:[Object(a.jsx)(N.a,{className:t.icon+" icon"}),Object(a.jsx)(L.a,{className:t.icon+" icon"}),Object(a.jsx)(T.a,{className:t.icon+" icon",style:{float:"right",fontSize:25},onClick:function(){return function(e){return h.apply(this,arguments)}("https://chaitanya360.pythonanywhere.com/"+n.img)}})]})]})})},S=function(){return Object(a.jsx)("div",{style:{backgroundColor:"#3B2F63",backgroundImage:"radial-gradient(circle at 50% top, rgba(84,90,182,0.6) 0%, rgba(84,90,182,0) 75%),radial-gradient(circle at right top, #794aa2 0%, rgba(121,74,162,0) 57%)",color:"white"},children:Object(a.jsxs)("h1",{style:{margin:0,padding:"10px"},children:[Object(a.jsx)("i",{style:{textShadow:"1px 1px purple",fontFamily:"fantasy",color:"white"},children:"Memes"}),Object(a.jsx)("i",{style:{fontFamily:"cursive",textShadow:"1px 1px 2px black"},children:"_World"})]})})},B=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).state={items:[],category:"technology"},e.handleonCatClick=function(t){e.handleCatChange(t)},e.fetchData=function(){fetch("https://chaitanya360.pythonanywhere.com/api/images/").then((function(e){return e.json()})).then((function(t){console.log(t),t.map((function(e){e.user_name||(e.user_name="mayur jagtap"),e.upload_date||(e.upload_date="11 jan 2020")})),e.setState({items:t})})).catch((function(e){return console.log(e+" may be net connection proble!")}))},e}return Object(h.a)(n,[{key:"getLogoDisplay",value:function(){return window.innerWidth<450?"":"none"}},{key:"handleCatChange",value:function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.scrollTo({top:0,behavior:"auto"}),e.next=3,this.sleep(120);case 3:return this.fetchData(),e.next=6,this.sleep(20);case 6:this.render();case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"sleep",value:function(e){return new Promise((function(t){return setTimeout(t,e)}))}},{key:"componentDidMount",value:function(){this.fetchData(),this.setState({windowWidth:window.innerWidth})}},{key:"getCardWidth",value:function(){return this.state.windowWidth>450?"400px":"100%"}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{style:{display:"grid"},children:[Object(a.jsx)(S,{}),Object(a.jsx)(j,{onCatClick:this.handleonCatClick,categoryprop:this.state.category}),Object(a.jsx)("div",{style:{width:this.getCardWidth(),margin:"auto"},children:this.state.items.map((function(t){return Object(a.jsx)(M,{item:t},e.state.items.indexOf(t))}))})]})}}]),n}(r.Component),F=(n(36),n(68),function(){return Object(a.jsx)(B,{children:"s"})}),D=document.getElementById("root");c.a.render(Object(a.jsx)(F,{}),D)}},[[70,1,2]]]);
//# sourceMappingURL=main.bf1fde50.chunk.js.map