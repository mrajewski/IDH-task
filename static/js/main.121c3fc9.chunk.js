(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,a,t){e.exports=t.p+"static/media/slide.a9d531ef.png"},12:function(e,a,t){e.exports=t.p+"static/media/Man1.67200325.png"},13:function(e,a,t){e.exports=t.p+"static/media/Man2.4e024da8.png"},14:function(e,a,t){e.exports=t.p+"static/media/Woman1.d9958707.png"},15:function(e,a,t){e.exports=t.p+"static/media/Woman2.d7535b9e.png"},16:function(e,a,t){e.exports=t.p+"static/media/Woman3.02177fa9.png"},21:function(e,a,t){e.exports=t.p+"static/media/Mail closed.d3b41df5.svg"},28:function(e,a,t){e.exports=t(43)},33:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var i=t(7),n=t(3),s=t(9),l=t(8),o=t(10),m=t(0),c=t.n(m),r=t(20),d=t.n(r),p=t(12),u=t.n(p),b=t(13),g=t.n(b),f=t(14),E=t.n(f),h=t(15),v=t.n(h),w=t(16),N=t.n(w),O=t(1),k=t.n(O),S=[{id:1,img:E.a,name:"Basia So\u0142tysi\u0144ska",position:"Founder",location:"Warsaw",mail:"lagerobit@imaild.com",slide:k.a},{id:2,img:u.a,name:"W\u0142as Chorowiec",position:"Founder",location:"Warsaw",mail:"lagerobit@imaild.com",slide:k.a},{id:3,img:v.a,name:"Edyta Le\u015bniewska",position:"Head of Human Resources",location:"Warsaw",mail:"lagerobit@imaild.com",slide:k.a},{id:4,img:N.a,name:"Joanna Pawluk",position:"Chief Growth Officer (CGO)",location:"London",mail:"lagerobit@imaild.com",slide:k.a},{id:5,img:g.a,name:"David Saunders",position:"Business Development",location:"London",mail:"lagerobit@imaild.com",slide:k.a},{id:6,img:u.a,name:"Adam Eldridge",position:"Business Development Director US",location:"Los Angeles",mail:"lagerobit@imaild.com",slide:k.a},{id:7,img:E.a,name:"Maha Mahda",position:"Chief Business Development Officer (CBDO)",location:"Warsaw",mail:"lagerobit@imaild.com",slide:k.a},{id:8,img:v.a,name:"El\u017cbieta Kami\u0144ska",position:"International Client Service Manager",location:"Warsaw",mail:"lagerobit@imaild.com",slide:k.a},{id:9,img:N.a,name:"Karolina Makuch",position:"Creation Manager",location:"Warsaw",mail:"lagerobit@imaild.com",slide:k.a},{id:10,img:g.a,name:"Kamil Bolek",position:"Head of Communication",location:"Warsaw",mail:"lagerobit@imaild.com",slide:k.a}],y=(t(33),t(21)),C=t.n(y);var x=function(e){return c.a.createElement("div",{key:e.id,className:"team-member"},c.a.createElement("div",{className:"member-avatar"},c.a.createElement("span",{onClick:function(){return e.swipe(e.id-1)},className:"member-img-over"}),c.a.createElement("img",{src:e.img,alt:"",className:"member-img"}),c.a.createElement("a",{href:"mailto:".concat(e.mail),className:"member-mail"},c.a.createElement("img",{className:"member-envelope",src:C.a,alt:""}))),c.a.createElement("h3",{className:"member-name"},e.name),c.a.createElement("p",{className:"member-position"},e.position),c.a.createElement("p",{className:"member-location"},e.location))},W=t(22),j=t.n(W),M=t(25),B=t.n(M),D=t(23),L=t.n(D),V=t(26),A=t.n(V),F=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),m=0;m<n;m++)o[m]=arguments[m];return(t=Object(s.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(o)))).state={loaded:!1},t.next=function(){t.reactSwipe.next()},t.prev=function(){t.reactSwipe.prev()},t}return Object(o.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this,a={startSlide:this.props.slide,speed:1e3,disableScroll:!0,continuous:!0};return c.a.createElement("section",{className:"slider-container"},c.a.createElement("div",{className:"slider-center"},c.a.createElement("section",{className:"slider"},c.a.createElement(j.a,{ref:function(a){return e.reactSwipe=a},className:"mySwipe",swipeOptions:a},S.map(function(a){return c.a.createElement("div",{key:a.id,className:"slide"},c.a.createElement("div",{className:"slide-background"},c.a.createElement("span",{className:"slide-over"}),c.a.createElement("img",{onLoad:function(){return e.setState({loaded:!0})},className:"slide-img",src:a.slide,alt:""})),e.state.loaded?c.a.createElement("div",{className:"slide-content-border"}):null,e.state.loaded?c.a.createElement("div",{className:"slide-text"},c.a.createElement("p",{className:"slide-member-position"},a.position),c.a.createElement("p",{className:"slide-member-name"},a.name)):null)})),this.state.loaded?c.a.createElement("button",{className:"prev-btn",type:"button",onClick:this.prev},c.a.createElement(L.a,{className:"prev-arrow"})):null,this.state.loaded?c.a.createElement("button",{className:"next-btn",type:"button",onClick:this.next},c.a.createElement(B.a,{className:"next-arrow"})):null,this.state.loaded?c.a.createElement("button",{className:"close-btn",type:"button",onClick:this.props.close},c.a.createElement(A.a,{className:"close"})):null)))}}]),a}(m.Component),H=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),m=0;m<n;m++)o[m]=arguments[m];return(t=Object(s.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(o)))).state={startSlide:0,isVisible:!1},t.handleOnSwipe=function(e){t.setState({startSlide:e,isVisible:!0})},t.handleOnClose=function(e){e.stopPropagation(),t.setState({isVisible:!1})},t}return Object(o.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"page-title"},"Meet our team"),c.a.createElement("section",{className:"team-members-container"},S.map(function(a){return c.a.createElement(x,{img:a.img,name:a.name,position:a.position,location:a.location,mail:a.mail,id:a.id,key:a.id,swipe:e.handleOnSwipe,visible:e.state.isVisible})})),this.state.isVisible?c.a.createElement("section",{className:"slider-container"},c.a.createElement(F,{close:this.handleOnClose,slide:this.state.startSlide})):null)}}]),a}(m.Component);d.a.render(c.a.createElement(H,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.121c3fc9.chunk.js.map