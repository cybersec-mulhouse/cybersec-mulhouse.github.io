import{u,k as x,_ as h,o as s,c as o,a as e,g as m,h as g,l as p,i as v,w as i,t as b,j as T,b as _,d as k}from"./DLIIv__B.js";import{_ as $}from"./_BQHzw9C.js";import"./BVapDCr0.js";function y(l,t){const{title:r,titleTemplate:a,...d}=l;return u({title:r,titleTemplate:a,_flatMeta:d},{...t,transform(n){const c=x({...n._flatMeta});return delete n._flatMeta,{...n,meta:c}}})}const w={},C={class:"text-white text-2xl font-light justify-center mt-10 flex flex-row",'"':""},F=e("ul",{class:"list-disc pl-10"},[e("li",null,"Presentation of the event at 16h00 "),e("li",null,"Reception & welcoming of the teams at 19h00 "),e("li",null,"Starting of the CTF at 20h00"),e("li",null,"Locking of the scores the next morning at 8h00 "),e("li",null,"Podium and prices at 9h00 ")],-1),P=e("h3",null,null,-1),R=[F,P];function M(l,t){return s(),o("div",C,R)}const N=h(w,[["render",M]]),B={},S={class:"text-white text-2xl font-light justify-center mt-10 flex flex-col"},j=e("ul",{class:"list-disc pl-10"},[e("li",null,"Présentation de l'événement à 16h00 "),e("li",null,"Réception & accueil des équipes à 19h00 "),e("li",null,"Début du CTF à 20h00"),e("li",null,"Clôture des scores le lendemain matin à 8h00 "),e("li",null,"Podium et prix à 9h00 ")],-1),D=[j];function I(l,t){return s(),o("div",S,D)}const V=h(B,[["render",I]]),E={key:0},L={key:1},q=e("div",{class:"flex flex-col-reverse"},[e("dt",{class:"text-base leading-7 text-gray-300"},"Participants"),e("dd",{class:"text-4xl font-bold leading-9 tracking-tight text-white"},"80+")],-1),H=e("div",{class:"flex flex-col-reverse"},[e("dt",{class:"text-base leading-7 text-gray-300"},"Surface"),e("dd",{class:"text-4xl font-bold leading-9 tracking-tight text-white"},[k("2000m"),e("sup",null,"2")])],-1),z=e("div",{class:"flex flex-col-reverse"},[e("dt",{class:"text-base leading-7 text-gray-300"},"Price money"),e("dd",{class:"text-4xl font-bold leading-9 tracking-tight text-white"},"1500€")],-1),A=e("div",{class:"flex flex-col-reverse"},[e("dt",{class:"text-base leading-7 text-gray-300"},"From"),e("dd",{class:"text-4xl font-bold leading-9 tracking-tight text-white"},"16h-09h")],-1),O=m({__name:"index",setup(l){const{locale:t,locales:r}=g();return p(),y({title:"The official RhineTech CTF site",ogTitle:"The official RhineTech CTF site",description:"This is the official Rhinetech CTF site for the event planned on November 26th 2024 ",ogDescription:"This is the official Rhinetech CTF site for the event planned on November 26th 2024 "}),(a,d)=>{const n=N,c=V,f=$;return s(),v(f,null,{title:i(()=>[]),subtitle:i(()=>[e("div",null,b(a.$t("subtitle_m")),1)]),body:i(()=>[T(t)==="en"?(s(),o("div",E,[_(n)])):(s(),o("div",L,[_(c)]))]),footer:i(()=>[q,H,z,A]),_:1})}}});export{O as default};