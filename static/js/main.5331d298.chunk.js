(this["webpackJsonpfinal-project"]=this["webpackJsonpfinal-project"]||[]).push([[0],{47:function(e,t,n){},48:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var c,a,r,i,s,o,l,d,j,b,u,p,h,g,m,x,O,f,v,C,k,y,w,P,S,A,z,I,N,F=n(4),H=n.n(F),U=n(35),L=n.n(U),M=(n(47),n(13)),T=(n(48),n(24)),$=n(25),B=n(27),X=n(26),E=n(3),R=function(e){Object(B.a)(n,e);var t=Object(X.a)(n);function n(e){var c;Object(T.a)(this,n),c=t.call(this,e);e.email,e.setEmail,e.password,e.setPassword,e.loginHandler,e.hasAccount,e.setHasAccount,e.signUpHandler;return c}return Object($.a)(n,[{key:"render",value:function(){var e=this;return Object(E.jsxs)("div",{class:"loginBg",children:[Object(E.jsx)("div",{children:Object(E.jsx)("h1",{})}),Object(E.jsxs)("div",{class:"login",children:[Object(E.jsx)("h2",{children:"Sign-in Page"}),Object(E.jsxs)("div",{children:[Object(E.jsx)("label",{children:"Email Address "}),Object(E.jsx)("input",{type:"text",value:this.props.email,onChange:function(t){return e.props.setEmail(t.target.value)},placeholder:"Email Address"})]}),Object(E.jsxs)("div",{children:[Object(E.jsx)("label",{children:"Password "}),Object(E.jsx)("input",{type:"password",value:this.props.password,onChange:function(t){return e.props.setPassword(t.target.value)},placeholder:"Password"})]}),Object(E.jsx)("br",{}),this.props.hasAccount?Object(E.jsxs)("div",{children:[Object(E.jsx)("button",{class:"loginButton",onClick:this.props.loginHandler,children:"Login"}),Object(E.jsxs)("p",{children:["Don't have an account? ",Object(E.jsx)("span",{class:"linkBox",children:Object(E.jsx)("a",{onClick:function(){return e.props.setHasAccount(!e.props.hasAccount)},children:"Create one."})})]})]}):Object(E.jsxs)("div",{children:[Object(E.jsx)("button",{class:"loginButton",onClick:this.props.signUpHandler,children:"Sign up"}),Object(E.jsxs)("p",{children:["Have an account? ",Object(E.jsx)("span",{class:"linkBox",children:Object(E.jsx)("a",{onClick:function(){return e.props.setHasAccount(!e.props.hasAccount)},children:"Login."})})]})]})]})]})}}]),n}(F.Component),V=n(42).a.initializeApp({apiKey:"AIzaSyDQ9fBNst3TX337YQI0hV4CSfaUex9NHAM",authDomain:"authapp-2e34c.firebaseapp.com",databaseURL:"https://authapp-2e34c-default-rtdb.firebaseio.com/",projectId:"authapp-2e34c",storageBucket:"authapp-2e34c.appspot.com",messagingSenderId:"31535714740",appId:"1:31535714740:web:a1cb29a2c2dfb73bd9e2e1",measurementId:"G-N9LQWT848S"}),D=n(17),W=n(7),G=n(8),Y=Object(G.a)(c||(c=Object(W.a)(["\n  * {\n    box-sizing: border-box;\n    margin:0;\n    padding: 0;\n    font-family: 'Kanit', sans-serif;\n    \n  }\n"]))),_=n(40),K=G.b.nav(a||(a=Object(W.a)(["\n  background: transparent;\n  height: 80px;\n  display: flex;\n  justify-content: center;\n  font-weight: 700;\n"]))),Q=Object(G.b)(D.c)(r||(r=Object(W.a)(["\n  color: #fff;\n  font-size: 2rem;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  cursor: pointer;\n\n  @media screen and (max-width: 400px) {\n    position: absolute;\n    top: 10px;\n    left: 25px;\n  }\n"]))),J=G.b.div(i||(i=Object(W.a)(["\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer;\n  color: #fff;\n\n  p {\n    transform: translate(-175%, 100%);\n    font-weight: bold;\n  }\n"]))),q=Object(G.b)(_.a)(s||(s=Object(W.a)(["\n  font-size: 2rem;\n  transform: translate(-50%, -15%);\n"]))),Z=function(e){var t=e.toggle;return Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)(K,{children:[Object(E.jsx)(Q,{to:"/",id:"top",children:"Rent Supreme"}),Object(E.jsxs)(J,{onClick:t,children:[Object(E.jsx)("p",{children:"Menu"}),Object(E.jsx)(q,{})]})]})})},ee=n(16),te=n(19),ne=G.b.aside(o||(o=Object(W.a)(["\n  position: fixed;\n  z-index: 999;\n  width: 350px;\n  height: 100%;\n  background: #ffc500;\n  display: grid;\n  align-items: center;\n  top: 0;\n  transition: 0.3s ease-in-out;\n  right: ",";\n\n  @media screen and (max-width: 400px) {\n    width: 100%;\n  }\n"])),(function(e){return e.isOpen?"0":"-1000px"})),ce=Object(G.b)(te.d)(l||(l=Object(W.a)(["\n  color: #000;\n"]))),ae=G.b.div(d||(d=Object(W.a)(["\n  position: absolute;\n  top: 1.2rem;\n  right: 1.5rem;\n  background: transparent;\n  border: transparent;\n  font-size: 2rem;\n  cursor: pointer;\n  outline: none;\n"]))),re=G.b.div(j||(j=Object(W.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(3, 80px);\n  text-align: center;\n\n  @media screen and (max-width: 480px) {\n    grid-template-rows: repeat(3, 60px);\n  }\n"]))),ie=Object(G.b)(ee.a)(b||(b=Object(W.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  text-decoration: none;\n  list-style: none;\n  transition: 0.2s ease-in-out;\n  color: #000;\n  cursor: pointer;\n\n  &:hover {\n    color: #e31837;\n    transition: 0.2s ease-in-out;\n  }\n"]))),se=G.b.div(u||(u=Object(W.a)(["\n  display: flex;\n  justify-content: center;\n"]))),oe=Object(G.b)(ee.a)(p||(p=Object(W.a)(["\n  background: #e31837;\n  white-space: nowrap;\n  padding: 16px 64px;\n  color: #fff;\n  font-size: 16px;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n  text-decoration: none;\n\n  &:hover {\n    transition: 0.2s ease-in-out;\n    background: #fff;\n    color: #010606;\n  }\n"]))),le=function(e){var t=e.isOpen,n=e.toggle,c=e.check,a=e.setCheck;return Object(E.jsxs)(ne,{isOpen:t,onClick:n,children:[Object(E.jsx)(ae,{onClick:n,children:Object(E.jsx)(ce,{})}),Object(E.jsxs)(re,{children:[Object(E.jsx)(ie,{smooth:!0,to:"#SUV",children:"SUVS"}),Object(E.jsx)(ie,{smooth:!0,to:"#Compact",children:"Compact"}),Object(E.jsx)(ie,{smooth:!0,to:"#Midsize",children:"Midsize"}),Object(E.jsx)(ie,{smooth:!0,to:"#Luxury",children:"Luxury"}),Object(E.jsx)(ie,{smooth:!0,to:"#Parking",children:"Parking"})]}),Object(E.jsx)(se,{children:Object(E.jsx)(oe,{to:"/",onClick:function(){return a(!c)},children:"View Cart and Checkout"})})]})},de=n.p+"static/media/feat1.ab5b3167.jpg",je=G.b.div(h||(h=Object(W.a)(["\n  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),\n    url(",");\n  height: 100vh;\n  background-position: center;\n  background-size: cover;\n"])),de),be=G.b.div(g||(g=Object(W.a)(["\n  height: calc(100vh - 80px);\n  max-height: 100%;\n  padding: 0rem calc((100vw - 1300px) / 2);\n"]))),ue=G.b.div(m||(m=Object(W.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  height: 100vh;\n  max-height: 100%;\n  padding: 0 2rem;\n  width: 650px;\n  color: #fff;\n  text-transform: uppercase;\n  line-height: 1;\n  font-weight: bold;\n\n  @media screen and (max-width: 650px) {\n    width: 100%;\n  }\n"]))),pe=G.b.h1(x||(x=Object(W.a)(["\n  font-size: clamp(2.5rem, 10vw, 5rem);\n  margin-bottom: 1rem;\n  box-shadow: 3px 5px #e9ba23;\n  letter-spacing: 3px;\n"]))),he=G.b.p(O||(O=Object(W.a)(["\n  font-size: clamp(2rem, 2.5vw, 3rem);\n  margin-bottom: 2rem;\n"]))),ge=Object(G.b)(ee.a)(f||(f=Object(W.a)(["\n  font-size: 1.4rem;\n  padding: 1rem 4rem;\n  border: none;\n  background: #e31837;\n  color: #fff;\n  transition: 0.2s ease-out;\n  text-decoration: none;\n\n  &:hover {\n    background: #ffc500;\n    transition: 0.2s ease-out;\n    cursor: pointer;\n    color: #000;\n  }\n"]))),me=function(e){var t=e.check,n=e.setCheck,c=Object(F.useState)(!1),a=Object(M.a)(c,2),r=a[0],i=a[1],s=function(){i(!r)};return"4O2b4p4UNbXisjCdOXX7k0l0uKk1"===V.auth().currentUser.uid?Object(E.jsxs)(je,{children:[Object(E.jsx)(Z,{toggle:s}),Object(E.jsx)(le,{isOpen:r,toggle:s,check:t,setCheck:n}),Object(E.jsx)(be,{children:Object(E.jsxs)(ue,{children:[Object(E.jsx)(he,{children:"Welcome Admin!"}),Object(E.jsx)(pe,{children:"Best Car Rental Service in the World"}),Object(E.jsx)(he,{children:"Sign and Drive in 5 minutes"}),Object(E.jsx)(ge,{smooth:!0,to:"#SUV",children:"Rent a Car Today"})]})})]}):Object(E.jsxs)(je,{children:[Object(E.jsx)(Z,{toggle:s}),Object(E.jsx)(le,{isOpen:r,toggle:s,check:t,setCheck:n}),Object(E.jsx)(be,{children:Object(E.jsxs)(ue,{children:[Object(E.jsx)(pe,{children:"Best Car Rental Service in the World"}),Object(E.jsx)(he,{children:"Sign and Drive in 5 minutes"}),Object(E.jsx)(ge,{smooth:!0,to:"#SUV",children:"Rent a Car Today"})]})})]})},xe=G.b.div(v||(v=Object(W.a)(["\n  /* width: 100vw; */\n  min-height: 100vh;\n  padding: 5rem calc((100vw - 1300px) / 2);\n  background: #150f0f;\n  color: #fff;\n"]))),Oe=G.b.div(C||(C=Object(W.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 0 auto;\n"]))),fe=G.b.div(k||(k=Object(W.a)(["\n  margin: 0 2rem;\n  line-height: 2;\n  width: 360px;\n"]))),ve=G.b.img(y||(y=Object(W.a)(["\n  height: 300px;\n  min-width: 300px;\n  max-width: 100%;\n  box-shadow: 8px 8px #fdc500;\n"]))),Ce=G.b.h1(w||(w=Object(W.a)(["\n  font-size: clamp(2rem, 2.5vw, 3rem);\n  text-align: center;\n  margin-bottom: 5rem;\n"]))),ke=G.b.h2(P||(P=Object(W.a)(["\n  font-weight: 400;\n  font-size: 1.5rem;\n"]))),ye=G.b.h2(S||(S=Object(W.a)(["\n  font-weight: 400;\n  font-size: 1.5rem;\n"]))),we=G.b.div(A||(A=Object(W.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem;\n  text-align: center;\n"]))),Pe=G.b.p(z||(z=Object(W.a)(["\n  margin-bottom: 1rem;\n"]))),Se=G.b.p(I||(I=Object(W.a)(["\n  margin-bottom: 1rem;\n  font-size: 2rem;\n"]))),Ae=G.b.button(N||(N=Object(W.a)(["\n  font-size: 1rem;\n  padding: 1rem 4rem;\n  border: none;\n  background: #e31837;\n  color: #fff;\n  transition: 0.2 ease-out;\n\n  &:hover {\n    background: #ffc500;\n    transition: 0.2s ease-out;\n    cursor: pointer;\n    color: #000;\n  }\n"]))),ze=function(e){var t=e.heading,n=e.data,c=e.cart,a=e.setCart,r=(e.check,e.setCheck,e.carType,e.setCartype),i=(e.parkingPrice,e.setParkingprice);return Object(E.jsxs)(xe,{children:[Object(E.jsx)(Ce,{children:t}),Object(E.jsx)(Oe,{children:n.map((function(e,n){return Object(E.jsxs)(fe,{children:[Object(E.jsx)(ve,{src:e.img,alt:e.alt,id:e.category}),Object(E.jsxs)(we,{children:[Object(E.jsx)(ke,{children:e.category}),Object(E.jsx)(ye,{children:e.name}),Object(E.jsx)(Pe,{children:e.desc}),Object(E.jsx)(Se,{children:e.price}),Object(E.jsx)(Ae,{onClick:function(){"Pick Your Sweet Ride"==t?(a(e.cost),r(e.name)):(a(c+e.cost),i(e.cost))},children:e.button})]})]},n)}))})]})},Ie=n.p+"static/media/suv3.ff0c520b.png",Ne=n.p+"static/media/suv1.98be029b.png",Fe=n.p+"static/media/suv2.717aafd7.png",He=n.p+"static/media/compact1.fbe3a4bd.png",Ue=n.p+"static/media/compact2.1b634437.png",Le=n.p+"static/media/compact3.2e524814.png",Me=n.p+"static/media/mid1.775d7811.png",Te=n.p+"static/media/mid2.77df7477.png",$e=n.p+"static/media/mid3.f9977eb6.png",Be=n.p+"static/media/lux2.8c47b832.png",Xe=n.p+"static/media/lux3.6aaa5857.png",Ee=n.p+"static/media/feat2.8c71c44c.jpg",Re=n.p+"static/media/vippark.87a344ba.jpg",Ve=n.p+"static/media/p1.8434f1c2.jpeg",De=[{img:Ie,alt:"Car",name:"Cheverolet Equinox",category:"SUV",price:"$16.99",cost:16.99,button:"Add to Cart"},{img:Ne,alt:"Car",name:"Nissan Rogue",category:"SUV",price:"$16.99",cost:16.99,button:"Add to Cart"},{img:Fe,alt:"Car",name:"Toyota RAV4",category:"SUV",price:"$16.99",cost:16.99,button:"Add to Cart"},{img:He,alt:"Car",name:"Toyota Prius",category:"Compact",price:"$11.99",cost:11.99,button:"Add to Cart"},{img:Ue,alt:"Car",name:"Chevrolet Cruze",category:"Compact",price:"$11.99",cost:11.99,button:"Add to Cart"},{img:Le,alt:"Car",name:"Kia Soul",category:"Compact",price:"$11.99",cost:11.99,button:"Add to Cart"},{img:Me,alt:"Car",name:"Honda Accord",category:"Midsize",price:"$14.99",cost:14.99,button:"Add to Cart"},{img:Te,alt:"Car",name:"Toyota Camry",category:"Midsize",price:"$14.99",cost:14.99,button:"Add to Cart"},{img:$e,alt:"Car",name:"Ford Fusion",category:"Midsize",price:"$14.99",cost:14.99,button:"Add to Cart"},{img:Ee,alt:"Car",name:"Mercedes-Benz GLE",category:"Luxury",price:"$29.99",cost:29.99,button:"Add to Cart"},{img:Xe,alt:"Car",name:"Audi A8",category:"Luxury",price:"$29.99",cost:29.99,button:"Add to Cart"},{img:Be,alt:"Car",name:"BMW 5 Series",category:"Luxury",price:"$29.99",cost:29.99,button:"Add to Cart"}],We=Math.floor(10*Math.random())+1,Ge=Math.floor(10*Math.random())+1;function Ye(e,t){var n=(new Date).getHours();return console.log(n),e+=n+(10-t)}var _e=Ye(3,Ge),Ke=Ye(30,We);console.log(_e);var Qe,Je,qe,Ze,et,tt,nt,ct,at,rt=[{img:Ve,alt:"Parking",name:Ge+"/10 spots remaining",category:"Parking",desc:"Get access to one of the best parking garages. Floors 1-4 are available.",price:"$"+_e+" per hour",cost:_e,button:"Add to Cart"},{img:Re,alt:"Parking",name:We+"/10 spots remaining",category:"VIP Parking",desc:"Our valet team will take care of your parking with best in class service. Park in the Luxury Heights exclusive parking garage.",price:"$"+Ke+" per hour",cost:Ke,button:"Add to Cart"}],it=G.b.div(Qe||(Qe=Object(W.a)(["\n  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),\n    url(",");\n  height: 100vh;\n  max-height: 500px;\n  background-position: center;\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  text-align: center;\n  padding: 0 1rem;\n\n  h1 {\n    font-size: clamp(3rem, 5vw, 5rem);\n  }\n\n  p {\n    margin-bottom: 1rem;\n    font-size: clamp(1rem, 3vw, 2rem);\n  }\n"])),Ee),st=Object(G.b)(ee.a)(Je||(Je=Object(W.a)(["\n  font-size: 1.4rem;\n  padding: 0.6rem 3rem;\n  border: none;\n  background: #ffc500;\n  color: #000;\n  transition: 0.2s ease-out;\n  text-decoration: none;\n\n  &:hover {\n    color: #fff;\n    background: #e31837;\n    transition: 0.2s ease-out;\n    cursor: pointer;\n  }\n"]))),ot=function(){return Object(E.jsxs)(it,{children:[Object(E.jsx)("h1",{children:"Luxury Car of the Day"}),Object(E.jsx)("p",{children:"Mercedes-Benz GLE"}),Object(E.jsx)(st,{smooth:!0,to:"#Luxury",children:"Rent this"})]})},lt=G.b.footer(qe||(qe=Object(W.a)(["\n  background-color: #0d0909;\n"]))),dt=G.b.div(Ze||(Ze=Object(W.a)(["\n  padding: 16px 24px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  max-width: 1300px;\n  margin: 0 auto;\n"]))),jt=G.b.section(et||(et=Object(W.a)(["\n  max-width: 1300px;\n  width: 100%;\n"]))),bt=G.b.div(tt||(tt=Object(W.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 1100px;\n  margin: 16px auto 0 auto;\n\n  @media screen and (max-width: 820px) {\n    flex-direction: column;\n  }\n"]))),ut=Object(G.b)(ee.a)(nt||(nt=Object(W.a)(["\n  color: #fff;\n  justify-self: start;\n  cursor: pointer;\n  text-decoration: none;\n  font-size: 1.5rem;\n  display: flex;\n  align-items: center;\n  margin-bottom: 16px;\n  font-weight: bold;\n"]))),pt=G.b.div(ct||(ct=Object(W.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 240px;\n"]))),ht=G.b.a(at||(at=Object(W.a)(["\n  color: #fff;\n  font-size: 24px;\n"]))),gt=function(){return Object(E.jsx)(lt,{children:Object(E.jsx)(dt,{children:Object(E.jsx)(jt,{children:Object(E.jsxs)(bt,{children:[Object(E.jsx)(ut,{smooth:!0,to:"#top",children:"Rent Supreme"}),Object(E.jsxs)(pt,{children:[Object(E.jsx)(ht,{href:"/",target:"_blank","aria-label":"Facebook",children:Object(E.jsx)(te.a,{})}),Object(E.jsx)(ht,{href:"/",target:"_blank","aria-label":"Instagram",children:Object(E.jsx)(te.b,{})}),Object(E.jsx)(ht,{href:"/",target:"_blank","aria-label":"Youtube",children:Object(E.jsx)(te.f,{})}),Object(E.jsx)(ht,{href:"//www.twitter.com/GeorgiaStateU",target:"_blank","aria-label":"Twitter",rel:"noopener noreferrer",children:Object(E.jsx)(te.e,{})}),Object(E.jsx)(ht,{href:"/",target:"_blank","aria-label":"Linkedin",children:Object(E.jsx)(te.c,{})})]})]})})})})};function mt(e){return Object(E.jsxs)("header",{className:"block row center",children:[Object(E.jsx)("div",{children:Object(E.jsx)("h1",{children:"Shopping Cart"})}),Object(E.jsx)("div",{class:"rightAlign",children:Object(E.jsx)("a",{href:"https://ganga2812.github.io/SASFinalProj/",children:"Back"})})]})}var xt=n(41);n(34);function Ot(e){var t=e.carType,n=e.cart,c=e.parkingPrice,a=e.logoutHandler,r=(e.user,e.prevItems),i=(e.setPrevItems,e.setCart),s=(e.setParkingPrice,Object(F.useState)("")),o=Object(M.a)(s,2),l=o[0],d=o[1],j=Object(F.useState)(""),b=Object(M.a)(j,2),u=b[0],p=b[1],h=Object(F.useState)(""),g=Object(M.a)(h,2),m=g[0],x=g[1],O=Object(F.useState)(""),f=Object(M.a)(O,2),v=f[0],C=f[1],k=Object(F.useState)(""),y=Object(M.a)(k,2),w=y[0],P=y[1],S=Object(F.useState)(""),A=Object(M.a)(S,2),z=A[0],I=A[1],N=Object(F.useState)(""),H=Object(M.a)(N,2),U=(H[0],H[1],Object(F.useState)("")),L=Object(M.a)(U,2),T=L[0],$=L[1],B=Object(F.useState)(""),X=Object(M.a)(B,2),R=X[0],D=X[1];return Object(E.jsxs)("aside",{className:"block col-1",children:[Object(E.jsx)("h2",{children:"Cart Items"}),Object(E.jsxs)("div",{children:[0===n&&Object(E.jsx)("div",{children:"Cart is empty"}),0!==n&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("hr",{}),Object(E.jsxs)("div",{className:"row",children:[Object(E.jsxs)("div",{className:"col-2",children:[t,": "]}),Object(E.jsxs)("div",{className:"col-1 text-right",children:["$",(n-c).toFixed(2)]})]}),Object(E.jsxs)("div",{className:"row",children:[Object(E.jsx)("div",{className:"col-2",children:"Parking Price"}),Object(E.jsxs)("div",{className:"col-1 text-right",children:["$",c.toFixed(2)]})]}),Object(E.jsxs)("div",{className:"row",children:[Object(E.jsx)("div",{className:"col-2",children:Object(E.jsx)("strong",{children:"Total Price"})}),Object(E.jsx)("div",{className:"col-1 text-right",children:Object(E.jsxs)("strong",{children:["$",n.toFixed(2)]})})]}),Object(E.jsx)("hr",{}),Object(E.jsxs)("div",{id:"PaymentForm",children:[Object(E.jsx)("input",{type:"text",placeholder:"Coupon",value:R,onChange:function(e){return D(e.target.value)},onFocus:function(e){return P(e.target.name)}}),Object(E.jsx)(xt.a,{number:l,name:u,expiry:m,cvc:v,focused:w}),Object(E.jsxs)("form",{children:[Object(E.jsx)("input",{type:"tel",name:"number",placeholder:"Card Number",value:l,onChange:function(e){return d(e.target.value)},onFocus:function(e){return P(e.target.name)}}),Object(E.jsx)("input",{type:"text",name:"name",placeholder:"Name",value:u,onChange:function(e){return p(e.target.value)},onFocus:function(e){return P(e.target.name)}}),Object(E.jsx)("input",{type:"text",name:"expirt",placeholder:"MM/YY",value:m,onChange:function(e){return x(e.target.value)},onFocus:function(e){return P(e.target.name)}}),Object(E.jsx)("input",{type:"tel",name:"cvc",placeholder:"CVC",value:v,onChange:function(e){return C(e.target.value)},onFocus:function(e){return P(e.target.name)}}),Object(E.jsx)("input",{type:"text",name:"address",placeholder:"Address",value:z,onChange:function(e){return I(e.target.value)},onFocus:function(e){return P(e.target.name)}}),Object(E.jsx)("input",{type:"text",name:"phoneNumber",placeholder:"XXX-XXX-XXXX",value:T,onChange:function(e){return $(e.target.value)},onFocus:function(e){return P(e.target.name)}})]})]}),Object(E.jsxs)("div",{className:"row",children:[Object(E.jsx)("button",{onClick:function(){!function(){var e=r+t+",";console.log("str: "+e),V.firestore().collection("Users").doc(V.auth().currentUser.uid).set({Address:z,Name:u,PastPurchases:e,PhoneNumber:T})}(),"GSU!"==R?(alert("Coupon has been applied!"),i(10)):alert("Coupon has been rejected!"),alert("Your order has been confirmed")},children:"Checkout"}),Object(E.jsx)("button",{onClick:a,children:"Logout"})]})]})]})]})}var ft=function(e){Object(B.a)(n,e);var t=Object(X.a)(n);function n(e){var c;Object(T.a)(this,n),(c=t.call(this,e)).state={pastCops:""};e.prevItems,e.setPrevItems;return c}return Object($.a)(n,[{key:"componentDidMount",value:function(){var e=this;try{V.firestore().collection("Users").doc(V.auth().currentUser.uid).get().then((function(t){if(t.exists){var n=t.data();n=n.PastPurchases,e.setState({pastCops:n})}else console.log("Smh what an L")}))}catch(t){}}},{key:"render",value:function(){return Object(E.jsxs)("div",{children:[this.props.setPrevItems(this.state.pastCops),console.log("set prevItems "+this.state.pastCops),Object(E.jsx)("h1",{children:"Past Purchases"}),Object(E.jsx)("p",{children:this.state.pastCops})]})}}]),n}(H.a.Component);var vt=function(e){var t=e.cart,n=e.setCart,c=e.carType,a=(e.setCarType,e.check,e.setCheck,e.parkingPrice),r=e.setParkingPrice,i=e.logoutHandler,s=e.user,o=e.prevItems,l=e.setPrevItems;return console.log(o),Object(E.jsxs)("div",{className:"App",children:[Object(E.jsx)(mt,{}),Object(E.jsxs)("div",{className:"row",children:[Object(E.jsx)(Ot,{carType:c,cart:t,parkingPrice:a,logoutHandler:i,user:s,prevItems:o,setPrevItems:l,setCart:n,setParkingPrice:r}),Object(E.jsx)("br",{}),Object(E.jsx)("br",{}),Object(E.jsx)(ft,{prevItems:o,setPrevItems:l})]})]})},Ct=function(e){var t=e.logoutHandler,n=e.user,c=e.prevItems,a=e.setPrevItems,r=Object(F.useState)(0),i=Object(M.a)(r,2),s=i[0],o=i[1],l=Object(F.useState)(!1),d=Object(M.a)(l,2),j=d[0],b=d[1],u=Object(F.useState)("none"),p=Object(M.a)(u,2),h=p[0],g=p[1],m=Object(F.useState)(0),x=Object(M.a)(m,2),O=x[0],f=x[1];return console.log(s),console.log(h),console.log(O),Object(E.jsx)("div",{children:j?Object(E.jsx)(vt,{cart:s,setCart:o,carType:h,setCartype:g,check:j,setCheck:b,parkingPrice:O,setParkingprice:f,logoutHandler:t,user:n,prevItems:c,setPrevItems:a}):Object(E.jsxs)("div",{children:[Object(E.jsxs)(D.a,{children:[Object(E.jsx)(Y,{}),Object(E.jsx)(me,{check:j,setCheck:b}),Object(E.jsx)(ze,{heading:"Pick Your Sweet Ride",data:De,cart:s,setCart:o,carType:h,setCartype:g}),Object(E.jsx)(ot,{}),Object(E.jsx)(ze,{heading:"Grab a Parking Spot",data:rt,cart:s,setCart:o,parkingPrice:O,setParkingprice:f}),Object(E.jsx)(gt,{})]}),Object(E.jsx)("button",{onClick:t,children:"Log Out"})]})})};var kt=function(){var e=Object(F.useState)(""),t=Object(M.a)(e,2),n=t[0],c=t[1],a=Object(F.useState)(""),r=Object(M.a)(a,2),i=r[0],s=r[1],o=Object(F.useState)(""),l=Object(M.a)(o,2),d=l[0],j=l[1],b=Object(F.useState)(!0),u=Object(M.a)(b,2),p=u[0],h=u[1],g=Object(F.useState)(""),m=Object(M.a)(g,2),x=m[0],O=m[1];Object(F.useEffect)((function(){V.auth().onAuthStateChanged((function(e){e?(f(),c(e)):c("")}))}),[]);var f=function(){s(""),j("")};return Object(E.jsx)("div",{children:n?Object(E.jsx)(Ct,{logoutHandler:function(){V.auth().signOut()},user:n,prevItems:x,setPrevItems:O}):Object(E.jsx)(R,{email:i,setEmail:s,password:d,setPassword:j,loginHandler:function(){V.auth().signInWithEmailAndPassword(i,d).catch((function(e){alert(e.message)}))},hasAccount:p,setHasAccount:h,signUpHandler:function(){V.auth().createUserWithEmailAndPassword(i,d).catch((function(e){alert(e.message)})),V.auth().signInWithEmailAndPassword(i,d)}})})},yt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};L.a.render(Object(E.jsx)(H.a.StrictMode,{children:Object(E.jsx)(kt,{})}),document.getElementById("root")),yt()}},[[60,1,2]]]);
//# sourceMappingURL=main.5331d298.chunk.js.map