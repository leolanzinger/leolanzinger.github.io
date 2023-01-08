"use strict";(self.webpackChunkleolanzinger_github_io=self.webpackChunkleolanzinger_github_io||[]).push([[678],{4127:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(7294);var a=function(e,n){var t,r,a,i,o,l=this;this.clearRect(0,0,e.width,e.height),t=n.x,r=n.y,a=n.radius,i=n.color,l.save(),l.beginPath(),l.arc(t,r,a,0,2*Math.PI),l.fillStyle=i,l.globalAlpha=o,l.fill(),l.closePath(),l.restore()},i=function(){var e=["#F1C40F","#1ABC9C","#3498DB","#9B59B6","#95A5A6"],n=(0,r.useRef)({x:50,y:50,vx:3.9,vy:3.9,radius:2,color:e[0]}),t=(0,r.useRef)(null),i={width:0,height:0},o=!0,l=function e(){n.current.radius+=4,o||requestAnimationFrame(e)},c=function e(){var t=n.current;t.radius>2?(t.radius-=t.radius/6,requestAnimationFrame(e)):t.radius=2},s=function e(){var r;t.current&&(r=t.current.getContext("2d"),a.call(r,i,n.current),requestAnimationFrame(e))};return(0,r.useEffect)((function(){function e(){t.current.width=i.width,t.current.height=i.height}return i.width=window.innerWidth,i.height=window.innerHeight,t.current.width=i.width,t.current.height=i.height,window.addEventListener("resize",(function(){return e()})),function(){window.removeEventListener("resize",e)}}),[]),r.createElement("canvas",{className:"canvas",width:i.width,height:i.width,ref:t,onMouseMove:function(e){var t=e.clientX,r=e.clientY,a=n.current;a.x=t,a.y=r,s()},onMouseDown:function(){o=!1,requestAnimationFrame(l)},onMouseUp:function(){o=!0;var t=n.current;console.log("current color: ",t.color),t.color=e[Math.floor(5*Math.random())],console.log("new color: ",t.color),c()}})}},1619:function(e,n,t){var r=t(7294);n.Z=function(){return r.createElement("div",{className:"footer"},r.createElement("h4",null,"contacts"),r.createElement("p",null,"Let’s get in touch via ",r.createElement("a",{href:"mailto:leonardo.lanzinger@gmail.com",className:"social-link"},"email"),", ",r.createElement("a",{href:"https://twitter.com/Leo_Lanzinger",className:"social-link"},"Twitter")," or ",r.createElement("a",{href:"https://www.linkedin.com/in/leonardolanzinger/",className:"social-link"},"Linkedin"),"."))}},6558:function(e,n,t){t.r(n),t.d(n,{Head:function(){return l}});var r=t(7294),a=t(1619),i=t(4127),o={color:"#222222",fontFamily:"neue-haas-grotesk-display, helvetica, sans-serif, serif",pointerEvents:"none"};n.default=function(){return r.createElement("div",null,r.createElement(i.Z,null),r.createElement("main",{style:o,className:"homepage"},r.createElement("div",{className:"grid"},r.createElement("div",{className:"box-7 main title"},r.createElement("h1",null,"Leonardo Lanzinger"),r.createElement("h4",{className:"subtitle"},"digital product designer")),r.createElement("div",{className:"box-5 main"},r.createElement("h4",null,"work"),r.createElement("p",null,"I am a product designer with a passion for user research and design strategy. I work as a Principal Product Designer at Zalando Recommerce, designing experiences for people who buy and sell second-hand fashion."),r.createElement("p",null,"Previously, I was part of The Studio at Zalando, a design team with a focus on early stage ideas and strategic design propositions. I also worked for Babbel in Berlin and Belka in Trento, Italy."),r.createElement("p",null,"Read more about my work ",r.createElement("a",{href:"/work"},"here"),"."),r.createElement("h4",null,"education + music"),r.createElement("p",null,"I have a bachelor degree in Computer Science and a master in Human-Computer Interaction Design. When I am not glued to Figma or running user interviews, I produce and record music with ",r.createElement("a",{href:"https://open.spotify.com/artist/6M2Pk85GotQvfbYCmWhEme"},"Bob and the Apple")," and ",r.createElement("a",{href:"https://open.spotify.com/artist/42MCPv6PC71ywUF6cR5uHU"},"Julia Pígali"),", playing the bass guitar and the synthesiser."),r.createElement(a.Z,null)))))};var l=function(){return r.createElement("title",null,"Leonardo Lanzinger")}}}]);
//# sourceMappingURL=component---src-pages-index-js-673145cafcf7781a0b04.js.map