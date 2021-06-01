var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,i=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,c=(e,t)=>{for(var o in t||(t={}))l.call(t,o)&&i(e,o,t[o]);if(r)for(var o of r(t))n.call(t,o)&&i(e,o,t[o]);return e};import{r as a,c as s,R as p,B as u,n as x,a as d,C as E,b as m}from"./vendor.2f60513d.js";const C={"+":"sum","-":"minus","×":"multiply","÷":"divide"};class b extends Error{constructor(e,t){super(null!=t?t:`Unexpected state: ${e}`)}}const f=e=>{const i=e,{text:a,onClick:s}=i,x=((e,t)=>{var o={};for(var i in e)l.call(e,i)&&t.indexOf(i)<0&&(o[i]=e[i]);if(null!=e&&r)for(var i of r(e))t.indexOf(i)<0&&n.call(e,i)&&(o[i]=e[i]);return o})(i,["text","onClick"]);return p.createElement(u,(d=c({},x),t(d,o({w:"100%",h:"100%",border:"none",rounded:0,_focus:void 0,onClick:()=>null==s?void 0:s(a)}))),a);var d},k=x.div`
  width: 320px;
  height: 280px;
  /*dev */
  background-color: #474747;

  display: grid;
  gap: 1px;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr 4fr;
  grid-template-areas:
    "TOP    RIGHT"
    "BOTTOM RIGHT";
`,g=d`
  width: 100%;
  height: 100%;
`,h=x.div`
  ${g}
  grid-area: TOP;
  gap: 1px;
  display: flex;
`,w=x.div`
  ${g}
  grid-area: RIGHT;
  display: flex;
  gap: 1px;
  flex-direction: column;
`,v=x.div`
  ${g}
  grid-area: BOTTOM;
  gap: 1px;
  display: flex;
  flex-direction: column;
`,O=x.div`
  ${g}
  gap: 1px;
  display: flex;
`,S=e=>p.createElement(k,null,p.createElement(h,null,p.createElement(f,{color:"white",fontSize:"20px",bgColor:"#424446",text:e.isC?"C":"AC",onClick:e.onOtherClick}),p.createElement(f,{color:"white",fontSize:"20px",bgColor:"#424446",text:"+/-",onClick:e.onOtherClick}),p.createElement(f,{color:"white",fontSize:"20px",bgColor:"#424446",text:"%",onClick:e.onOtherClick})),p.createElement(v,null,p.createElement(O,null,p.createElement(f,{color:"white",fontSize:"32px",bgColor:"#7E7E7E",text:"7",onClick:e.onNumberClick}),p.createElement(f,{color:"white",fontSize:"32px",bgColor:"#7E7E7E",text:"8",onClick:e.onNumberClick}),p.createElement(f,{color:"white",fontSize:"32px",bgColor:"#7E7E7E",text:"9",onClick:e.onNumberClick})),p.createElement(O,null,p.createElement(f,{color:"white",fontSize:"32px",bgColor:"#7E7E7E",text:"4",onClick:e.onNumberClick}),p.createElement(f,{color:"white",fontSize:"32px",bgColor:"#7E7E7E",text:"5",onClick:e.onNumberClick}),p.createElement(f,{color:"white",fontSize:"32px",bgColor:"#7E7E7E",text:"6",onClick:e.onNumberClick})),p.createElement(O,null,p.createElement(f,{color:"white",fontSize:"32px",bgColor:"#7E7E7E",text:"1",onClick:e.onNumberClick}),p.createElement(f,{color:"white",fontSize:"32px",bgColor:"#7E7E7E",text:"2",onClick:e.onNumberClick}),p.createElement(f,{color:"white",fontSize:"32px",bgColor:"#7E7E7E",text:"3",onClick:e.onNumberClick})),p.createElement(O,null,p.createElement(f,{color:"white",fontSize:"32px",bgColor:"#7E7E7E",text:"0",onClick:e.onNumberClick}),p.createElement(f,{color:"white",fontSize:"32px",bgColor:"#7E7E7E",text:".",onClick:e.onOtherClick}))),p.createElement(w,null,p.createElement(f,{color:"white",fontSize:"28px",bgColor:"#FE9F10",text:"÷",onClick:e.onOperatorClick}),p.createElement(f,{color:"white",fontSize:"28px",bgColor:"#FE9F10",text:"×",onClick:e.onOperatorClick}),p.createElement(f,{color:"white",fontSize:"28px",bgColor:"#FE9F10",text:"-",onClick:e.onOperatorClick}),p.createElement(f,{color:"white",fontSize:"28px",bgColor:"#FE9F10",text:"+",onClick:e.onOperatorClick}),p.createElement(f,{color:"white",fontSize:"28px",bgColor:"#FE9F10",text:"=",onClick:e.onOperatorClick}))),z=x.div`
  position: relative;
  width: 100%;
  padding: 24px 16px;
  font-size: 32px;
  color: white;
  background-color: #474747;
  text-align: right;
  border-bottom: 1px solid black;
`,y=x.div`
  position: absolute;
  top: 4px;
  left: 8px;
  font-size: 20px;
  color: white;
`,N=({text:e,operatorText:t})=>p.createElement(z,null,t&&p.createElement(y,null,t),e),T=x.div`
  width: 320px;
  border: 1px solid black;
  border-radius: 7px;
  box-shadow: 0 0 7px 7px #7a7a7a;
  overflow: hidden;
  user-select: none;
`,F=e=>e.endsWith(".")?e.replace(".",""):e,P=()=>{const[e,t]=a.exports.useState("0"),[o,r]=a.exports.useState(),[l,n]=a.exports.useState(),{firstNumber:i,setFirstNumber:u,execute:x}=(e=>{const[t,o]=a.exports.useState(0),r=a.exports.useMemo((()=>e&&C[e]),[e]),l=a.exports.useCallback((e=>{if(!r)throw new Error("calcType is undefined");return s.Calc[r](t,e)}),[t,r]);return{firstNumber:t,setFirstNumber:o,calcType:r,execute:l}})(o),d=a.exports.useMemo((()=>o&&"0"===e),[e,o]),E=a.exports.useMemo((()=>l?String(l):d?String(i):e),[l,e,d,i]),m={onOperatorClick:a.exports.useCallback((i=>{if("="!==i){const o=l||Number(F(e));return l&&n(void 0),u(o),r(i),void t("0")}if(!o)return;r(void 0);const c=Number(F(e)),a=x(c);n(a),t("0")}),[e,l]),onOtherClick:a.exports.useCallback((e=>{switch(n(void 0),e){case"AC":case"C":return t("0"),r(void 0),void u(0);case"+/-":return void t((e=>{const t=F(e);return"0"===t?t:(o=t).startsWith("-")?o.substring(1):`-${o}`;var o}));case"%":return void t((e=>(e=>{const t=Number(e),o=s.Calc.divide(t,100);return String(o)})(F(e))));case".":return void t((e=>e.includes(".")?e:`${e}.`));default:!function(e,t){throw new b(e,t)}(e)}}),[]),onNumberClick:a.exports.useCallback((o=>{if(l&&n(void 0),"0"!==e)t((e=>`${e}${o}`));else{if("0"===o)return;t(o)}}),[e,l])};return p.createElement(T,null,p.createElement(N,{operatorText:o,text:E}),p.createElement(S,c({},m)))},$=x.div`
  width: 100vw;
  height: ${({isIPhone:e})=>e?"-webkit-fill-available":"100vh"};

  background-color: #313131;
  display: grid;
  place-items: center;
`,j=()=>{const e=a.exports.useMemo((()=>navigator.userAgent.includes("iPhone")),[]);return p.createElement($,{isIPhone:e},p.createElement(P,null))},I=()=>p.createElement(p.StrictMode,null,p.createElement(E,null,p.createElement(j,null)));m.render(p.createElement(I,null),document.getElementById("root"));
