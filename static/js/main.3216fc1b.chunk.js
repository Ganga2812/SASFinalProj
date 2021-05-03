(this["webpackJsonpfinal-project"]=this["webpackJsonpfinal-project"]||[]).push([[0],{44:function(n,e,t){},45:function(n,e,t){},54:function(n,e,t){"use strict";t.r(e);var a,i,r,c,o,s,d,b,l,j,p,u,h,g,m,x,f,O,v,w,y,C,k,A,z,S,P,L,H,U,$,E,I,M,F,R,T,V,B=t(4),D=t.n(B),W=t(29),G=t.n(W),_=(t(44),t(18)),N=(t(45),t(30)),K=t(31),Q=t(39),Y=t(38),J=t(3),q=function(n){Object(Q.a)(t,n);var e=Object(Y.a)(t);function t(n){var a;Object(N.a)(this,t),a=e.call(this,n);n.email,n.setEmail,n.password,n.setPassword,n.loginHandler,n.hasAccount,n.setHasAccount,n.signUpHandler;return a}return Object(K.a)(t,[{key:"render",value:function(){var n=this;return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("h2",{children:"Sign-in Page"}),Object(J.jsxs)("div",{children:[Object(J.jsx)("label",{children:"Email Address"}),Object(J.jsx)("input",{type:"text",value:this.props.email,onChange:function(e){return n.props.setEmail(e.target.value)}})]}),Object(J.jsxs)("div",{children:[Object(J.jsx)("label",{children:"Password"}),Object(J.jsx)("input",{type:"password",value:this.props.password,onChange:function(e){return n.props.setPassword(e.target.value)}})]}),Object(J.jsx)("br",{}),this.props.hasAccount?Object(J.jsxs)("div",{children:[Object(J.jsx)("button",{onClick:this.props.loginHandler,children:"Login"}),Object(J.jsxs)("p",{children:["Don't have an account? ",Object(J.jsx)("span",{children:Object(J.jsx)("a",{onClick:function(){return n.props.setHasAccount(!n.props.hasAccount)},children:"Create one."})})]})]}):Object(J.jsxs)("div",{children:[Object(J.jsx)("button",{onClick:this.props.signUpHandler,children:"Sign up"}),Object(J.jsxs)("p",{children:["Have an account? ",Object(J.jsx)("span",{children:Object(J.jsx)("a",{onClick:function(){return n.props.setHasAccount(!n.props.hasAccount)},children:"Login."})})]})]})]})}}]),t}(B.Component),X=t(37).a.initializeApp({apiKey:"AIzaSyDQ9fBNst3TX337YQI0hV4CSfaUex9NHAM",authDomain:"authapp-2e34c.firebaseapp.com",databaseURL:"https://authapp-2e34c-default-rtdb.firebaseio.com/",projectId:"authapp-2e34c",storageBucket:"authapp-2e34c.appspot.com",messagingSenderId:"31535714740",appId:"1:31535714740:web:a1cb29a2c2dfb73bd9e2e1",measurementId:"G-N9LQWT848S"}),Z=t(15),nn=t(7),en=t(8),tn=Object(en.a)(a||(a=Object(nn.a)(["\n  * {\n    box-sizing: border-box;\n    margin:0;\n    padding: 0;\n    font-family: 'Kanit', sans-serif;\n    \n  }\n"]))),an=t(36),rn=en.b.nav(i||(i=Object(nn.a)(["\n  background: transparent;\n  height: 80px;\n  display: flex;\n  justify-content: center;\n  font-weight: 700;\n"]))),cn=Object(en.b)(Z.c)(r||(r=Object(nn.a)(["\n  color: #fff;\n  font-size: 2rem;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  cursor: pointer;\n\n  @media screen and (max-width: 400px) {\n    position: absolute;\n    top: 10px;\n    left: 25px;\n  }\n"]))),on=en.b.div(c||(c=Object(nn.a)(["\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  cursor: pointer;\n  color: #fff;\n\n  p {\n    transform: translate(-175%, 100%);\n    font-weight: bold;\n  }\n"]))),sn=Object(en.b)(an.a)(o||(o=Object(nn.a)(["\n  font-size: 2rem;\n  transform: translate(-50%, -15%);\n"]))),dn=function(n){var e=n.toggle;return Object(J.jsx)(J.Fragment,{children:Object(J.jsxs)(rn,{children:[Object(J.jsx)(cn,{to:"/",id:"top",children:"Rent Supreme"}),Object(J.jsxs)(on,{onClick:e,children:[Object(J.jsx)("p",{children:"Menu"}),Object(J.jsx)(sn,{})]})]})})},bn=t(14),ln=t(17),jn=en.b.aside(s||(s=Object(nn.a)(["\n  position: fixed;\n  z-index: 999;\n  width: 350px;\n  height: 100%;\n  background: #ffc500;\n  display: grid;\n  align-items: center;\n  top: 0;\n  transition: 0.3s ease-in-out;\n  right: ",";\n\n  @media screen and (max-width: 400px) {\n    width: 100%;\n  }\n"])),(function(n){return n.isOpen?"0":"-1000px"})),pn=Object(en.b)(ln.d)(d||(d=Object(nn.a)(["\n  color: #000;\n"]))),un=en.b.div(b||(b=Object(nn.a)(["\n  position: absolute;\n  top: 1.2rem;\n  right: 1.5rem;\n  background: transparent;\n  border: transparent;\n  font-size: 2rem;\n  cursor: pointer;\n  outline: none;\n"]))),hn=en.b.div(l||(l=Object(nn.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(3, 80px);\n  text-align: center;\n\n  @media screen and (max-width: 480px) {\n    grid-template-rows: repeat(3, 60px);\n  }\n"]))),gn=Object(en.b)(bn.a)(j||(j=Object(nn.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  text-decoration: none;\n  list-style: none;\n  transition: 0.2s ease-in-out;\n  color: #000;\n  cursor: pointer;\n\n  &:hover {\n    color: #e31837;\n    transition: 0.2s ease-in-out;\n  }\n"]))),mn=en.b.div(p||(p=Object(nn.a)(["\n  display: flex;\n  justify-content: center;\n"]))),xn=Object(en.b)(bn.a)(u||(u=Object(nn.a)(["\n  background: #e31837;\n  white-space: nowrap;\n  padding: 16px 64px;\n  color: #fff;\n  font-size: 16px;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n  text-decoration: none;\n\n  &:hover {\n    transition: 0.2s ease-in-out;\n    background: #fff;\n    color: #010606;\n  }\n"]))),fn=function(n){var e=n.isOpen,t=n.toggle;return Object(J.jsxs)(jn,{isOpen:e,onClick:t,children:[Object(J.jsx)(un,{onClick:t,children:Object(J.jsx)(pn,{})}),Object(J.jsxs)(hn,{children:[Object(J.jsx)(gn,{smooth:!0,to:"#SUV",children:"SUVS"}),Object(J.jsx)(gn,{smooth:!0,to:"#Compact",children:"Compact"}),Object(J.jsx)(gn,{smooth:!0,to:"#Midsize",children:"Midsize"}),Object(J.jsx)(gn,{smooth:!0,to:"#Luxury",children:"Luxury"}),Object(J.jsx)(gn,{smooth:!0,to:"#Parking",children:"Parking"})]}),Object(J.jsx)(mn,{children:Object(J.jsx)(xn,{to:"/",children:"View Cart and Checkout"})})]})},On=t.p+"static/media/feat1.ab5b3167.jpg",vn=en.b.div(h||(h=Object(nn.a)(["\n  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),\n    url(",");\n  height: 100vh;\n  background-position: center;\n  background-size: cover;\n"])),On),wn=en.b.div(g||(g=Object(nn.a)(["\n  height: calc(100vh - 80px);\n  max-height: 100%;\n  padding: 0rem calc((100vw - 1300px) / 2);\n"]))),yn=en.b.div(m||(m=Object(nn.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  height: 100vh;\n  max-height: 100%;\n  padding: 0 2rem;\n  width: 650px;\n  color: #fff;\n  text-transform: uppercase;\n  line-height: 1;\n  font-weight: bold;\n\n  @media screen and (max-width: 650px) {\n    width: 100%;\n  }\n"]))),Cn=en.b.h1(x||(x=Object(nn.a)(["\n  font-size: clamp(2.5rem, 10vw, 5rem);\n  margin-bottom: 1rem;\n  box-shadow: 3px 5px #e9ba23;\n  letter-spacing: 3px;\n"]))),kn=en.b.p(f||(f=Object(nn.a)(["\n  font-size: clamp(2rem, 2.5vw, 3rem);\n  margin-bottom: 2rem;\n"]))),An=Object(en.b)(bn.a)(O||(O=Object(nn.a)(["\n  font-size: 1.4rem;\n  padding: 1rem 4rem;\n  border: none;\n  background: #e31837;\n  color: #fff;\n  transition: 0.2s ease-out;\n  text-decoration: none;\n\n  &:hover {\n    background: #ffc500;\n    transition: 0.2s ease-out;\n    cursor: pointer;\n    color: #000;\n  }\n"]))),zn=function(){var n=Object(B.useState)(!1),e=Object(_.a)(n,2),t=e[0],a=e[1],i=function(){a(!t)};return Object(J.jsxs)(vn,{children:[Object(J.jsx)(dn,{toggle:i}),Object(J.jsx)(fn,{isOpen:t,toggle:i}),Object(J.jsx)(wn,{children:Object(J.jsxs)(yn,{children:[Object(J.jsx)(Cn,{children:"Best Car Rental Service in the World"}),Object(J.jsx)(kn,{children:"Sign and Drive in 5 minutes"}),Object(J.jsx)(An,{smooth:!0,to:"#SUV",children:"Rent a Car Today"})]})})]})},Sn=en.b.div(v||(v=Object(nn.a)(["\n  /* width: 100vw; */\n  min-height: 100vh;\n  padding: 5rem calc((100vw - 1300px) / 2);\n  background: #150f0f;\n  color: #fff;\n"]))),Pn=en.b.div(w||(w=Object(nn.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 0 auto;\n"]))),Ln=en.b.div(y||(y=Object(nn.a)(["\n  margin: 0 2rem;\n  line-height: 2;\n  width: 360px;\n"]))),Hn=en.b.img(C||(C=Object(nn.a)(["\n  height: 300px;\n  min-width: 300px;\n  max-width: 100%;\n  box-shadow: 8px 8px #fdc500;\n"]))),Un=en.b.h1(k||(k=Object(nn.a)(["\n  font-size: clamp(2rem, 2.5vw, 3rem);\n  text-align: center;\n  margin-bottom: 5rem;\n"]))),$n=en.b.h2(A||(A=Object(nn.a)(["\n  font-weight: 400;\n  font-size: 1.5rem;\n"]))),En=en.b.h2(z||(z=Object(nn.a)(["\n  font-weight: 400;\n  font-size: 1.5rem;\n"]))),In=en.b.div(S||(S=Object(nn.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem;\n  text-align: center;\n"]))),Mn=en.b.p(P||(P=Object(nn.a)(["\n  margin-bottom: 1rem;\n"]))),Fn=en.b.p(L||(L=Object(nn.a)(["\n  margin-bottom: 1rem;\n  font-size: 2rem;\n"]))),Rn=en.b.button(H||(H=Object(nn.a)(["\n  font-size: 1rem;\n  padding: 1rem 4rem;\n  border: none;\n  background: #e31837;\n  color: #fff;\n  transition: 0.2 ease-out;\n\n  &:hover {\n    background: #ffc500;\n    transition: 0.2s ease-out;\n    cursor: pointer;\n    color: #000;\n  }\n"]))),Tn=function(n){var e=n.heading,t=n.data;return Object(J.jsxs)(Sn,{children:[Object(J.jsx)(Un,{children:e}),Object(J.jsx)(Pn,{children:t.map((function(n,e){return Object(J.jsxs)(Ln,{children:[Object(J.jsx)(Hn,{src:n.img,alt:n.alt,id:n.category}),Object(J.jsxs)(In,{children:[Object(J.jsx)($n,{children:n.category}),Object(J.jsx)(En,{children:n.name}),Object(J.jsx)(Mn,{children:n.desc}),Object(J.jsx)(Fn,{children:n.price}),Object(J.jsx)(Rn,{children:n.button})]})]},e)}))})]})},Vn=t.p+"static/media/suv3.ff0c520b.png",Bn=t.p+"static/media/suv1.98be029b.png",Dn=t.p+"static/media/suv2.717aafd7.png",Wn=t.p+"static/media/compact1.fbe3a4bd.png",Gn=t.p+"static/media/compact2.1b634437.png",_n=t.p+"static/media/compact3.2e524814.png",Nn=t.p+"static/media/mid1.775d7811.png",Kn=t.p+"static/media/mid2.77df7477.png",Qn=t.p+"static/media/mid3.f9977eb6.png",Yn=t.p+"static/media/lux2.8c47b832.png",Jn=t.p+"static/media/lux3.6aaa5857.png",qn=t.p+"static/media/feat2.8c71c44c.jpg",Xn=t.p+"static/media/p1.8434f1c2.jpeg",Zn=[{img:Vn,alt:"Car",name:"Cheverolet Equinox",category:"SUV",price:"$19.99",button:"Add to Cart"},{img:Bn,alt:"Car",name:"Nissan Rogue",category:"SUV",price:"$16.99",button:"Add to Cart"},{img:Dn,alt:"Car",name:"Toyota RAV4",category:"SUV",price:"$14.99",button:"Add to Cart"},{img:Wn,alt:"Car",name:"Toyota Prius",category:"Compact",price:"$14.99",button:"Add to Cart"},{img:Gn,alt:"Car",name:"Chevrolet Cruze",category:"Compact",price:"$19.99",button:"Add to Cart"},{img:_n,alt:"Car",name:"Kia Soul",category:"Compact",price:"$16.99",button:"Add to Cart"},{img:Nn,alt:"Car",name:"Honda Accord",category:"Midsize",price:"$14.99",button:"Add to Cart"},{img:Kn,alt:"Car",name:"Toyota Camry",category:"Midsize",price:"$14.99",button:"Add to Cart"},{img:Qn,alt:"Car",name:"Ford Fusion",category:"Midsize",price:"$19.99",button:"Add to Cart"},{img:qn,alt:"Car",name:"Mercedes-Benz GLE",category:"Luxury",price:"$16.99",button:"Add to Cart"},{img:Jn,alt:"Car",name:"Audi A8",category:"Luxury",price:"$14.99",button:"Add to Cart"},{img:Yn,alt:"Car",name:"BMW 5 Series",category:"Luxury",price:"$14.99",button:"Add to Cart"}],ne=[{img:Xn,alt:"Parking",name:"1st Class Parking",category:"Parking",desc:"Our valet services will take care of your parking. Park in the Luxury Heights exclusive parking garage.",price:"$12.99",button:"Add to Cart and Checkout"}],ee=en.b.div(U||(U=Object(nn.a)(["\n  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),\n    url(",");\n  height: 100vh;\n  max-height: 500px;\n  background-position: center;\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  text-align: center;\n  padding: 0 1rem;\n\n  h1 {\n    font-size: clamp(3rem, 5vw, 5rem);\n  }\n\n  p {\n    margin-bottom: 1rem;\n    font-size: clamp(1rem, 3vw, 2rem);\n  }\n"])),qn),te=Object(en.b)(bn.a)($||($=Object(nn.a)(["\n  font-size: 1.4rem;\n  padding: 0.6rem 3rem;\n  border: none;\n  background: #ffc500;\n  color: #000;\n  transition: 0.2s ease-out;\n  text-decoration: none;\n\n  &:hover {\n    color: #fff;\n    background: #e31837;\n    transition: 0.2s ease-out;\n    cursor: pointer;\n  }\n"]))),ae=function(){return Object(J.jsxs)(ee,{children:[Object(J.jsx)("h1",{children:"Luxury Car of the Day"}),Object(J.jsx)("p",{children:"Mercedes-Benz GLE"}),Object(J.jsx)(te,{smooth:!0,to:"#Luxury",children:"Rent this"})]})},ie=en.b.footer(E||(E=Object(nn.a)(["\n  background-color: #0d0909;\n"]))),re=en.b.div(I||(I=Object(nn.a)(["\n  padding: 16px 24px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  max-width: 1300px;\n  margin: 0 auto;\n"]))),ce=en.b.section(M||(M=Object(nn.a)(["\n  max-width: 1300px;\n  width: 100%;\n"]))),oe=en.b.div(F||(F=Object(nn.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 1100px;\n  margin: 16px auto 0 auto;\n\n  @media screen and (max-width: 820px) {\n    flex-direction: column;\n  }\n"]))),se=Object(en.b)(bn.a)(R||(R=Object(nn.a)(["\n  color: #fff;\n  justify-self: start;\n  cursor: pointer;\n  text-decoration: none;\n  font-size: 1.5rem;\n  display: flex;\n  align-items: center;\n  margin-bottom: 16px;\n  font-weight: bold;\n"]))),de=en.b.div(T||(T=Object(nn.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 240px;\n"]))),be=en.b.a(V||(V=Object(nn.a)(["\n  color: #fff;\n  font-size: 24px;\n"]))),le=function(){return Object(J.jsx)(ie,{children:Object(J.jsx)(re,{children:Object(J.jsx)(ce,{children:Object(J.jsxs)(oe,{children:[Object(J.jsx)(se,{smooth:!0,to:"#top",children:"Rent Supreme"}),Object(J.jsxs)(de,{children:[Object(J.jsx)(be,{href:"/",target:"_blank","aria-label":"Facebook",children:Object(J.jsx)(ln.a,{})}),Object(J.jsx)(be,{href:"/",target:"_blank","aria-label":"Instagram",children:Object(J.jsx)(ln.b,{})}),Object(J.jsx)(be,{href:"/",target:"_blank","aria-label":"Youtube",children:Object(J.jsx)(ln.f,{})}),Object(J.jsx)(be,{href:"//www.twitter.com/GeorgiaStateU",target:"_blank","aria-label":"Twitter",rel:"noopener noreferrer",children:Object(J.jsx)(ln.e,{})}),Object(J.jsx)(be,{href:"/",target:"_blank","aria-label":"Linkedin",children:Object(J.jsx)(ln.c,{})})]})]})})})})},je=function(n){var e=n.logoutHandler;return Object(J.jsxs)("div",{children:[Object(J.jsx)("button",{onClick:e,children:"Log Out"}),Object(J.jsxs)(Z.a,{children:[Object(J.jsx)(tn,{}),Object(J.jsx)(zn,{}),Object(J.jsx)(Tn,{heading:"Pick Your Sweet Ride",data:Zn}),Object(J.jsx)(ae,{}),Object(J.jsx)(Tn,{heading:"Grab a Parking Spot",data:ne}),Object(J.jsx)(le,{})]})]})};var pe=function(){var n=Object(B.useState)(""),e=Object(_.a)(n,2),t=e[0],a=e[1],i=Object(B.useState)(""),r=Object(_.a)(i,2),c=r[0],o=r[1],s=Object(B.useState)(""),d=Object(_.a)(s,2),b=d[0],l=d[1],j=Object(B.useState)(!0),p=Object(_.a)(j,2),u=p[0],h=p[1];Object(B.useEffect)((function(){X.auth().onAuthStateChanged((function(n){n?(g(),a(n)):a("")}))}),[]);var g=function(){o(""),l("")};return Object(J.jsx)("div",{children:t?Object(J.jsx)(je,{logoutHandler:function(){X.auth().signOut()}}):Object(J.jsx)(q,{email:c,setEmail:o,password:b,setPassword:l,loginHandler:function(){X.auth().signInWithEmailAndPassword(c,b).catch((function(n){alert(n.message)}))},hasAccount:u,setHasAccount:h,signUpHandler:function(){X.auth().createUserWithEmailAndPassword(c,b).catch((function(n){alert(n.message)})),X.auth().signInWithEmailAndPassword(c,b)}})})},ue=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,55)).then((function(e){var t=e.getCLS,a=e.getFID,i=e.getFCP,r=e.getLCP,c=e.getTTFB;t(n),a(n),i(n),r(n),c(n)}))};G.a.render(Object(J.jsx)(D.a.StrictMode,{children:Object(J.jsx)(pe,{})}),document.getElementById("root")),ue()}},[[54,1,2]]]);
//# sourceMappingURL=main.3216fc1b.chunk.js.map