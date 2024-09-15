import{g as M,r as k,k as N,l as C,c as $,m as D,o as T,i as I,w as b,b as f,j as u,d as h,t as n,h as L,n as V,a as e,q as m}from"./BevcnYz2.js";import{_ as O}from"./Co3oF4fS.js";const B=Symbol.for("nuxt:client-only"),H=M({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(i,{slots:s,attrs:a}){const l=k(!1);return N(()=>{l.value=!0}),C(B,!0),t=>{var d;if(l.value)return(d=s.default)==null?void 0:d.call(s);const o=s.fallback||s.placeholder;if(o)return o();const c=t.fallback||t.placeholder||"",r=t.fallbackTag||t.placeholderTag||"span";return $(r,a,c)}}});/*! vue-countdown v2.1.2 | (c) 2018-present Chen Fengyuan | MIT */const _=1e3,p=60*_,g=60*p,v=24*g,y="abort",x="end",S="progress",w="start",E="visibilitychange";var A=M({name:"VueCountdown",props:{autoStart:{type:Boolean,default:!0},emitEvents:{type:Boolean,default:!0},interval:{type:Number,default:1e3,validator:i=>i>=0},now:{type:Function,default:()=>Date.now()},tag:{type:String,default:"span"},time:{type:Number,default:0,validator:i=>i>=0},transform:{type:Function,default:i=>i}},emits:[y,x,S,w],data(){return{counting:!1,endTime:0,totalMilliseconds:0,requestId:0}},computed:{days(){return Math.floor(this.totalMilliseconds/v)},hours(){return Math.floor(this.totalMilliseconds%v/g)},minutes(){return Math.floor(this.totalMilliseconds%g/p)},seconds(){return Math.floor(this.totalMilliseconds%p/_)},milliseconds(){return Math.floor(this.totalMilliseconds%_)},totalDays(){return this.days},totalHours(){return Math.floor(this.totalMilliseconds/g)},totalMinutes(){return Math.floor(this.totalMilliseconds/p)},totalSeconds(){return Math.floor(this.totalMilliseconds/_)}},watch:{$props:{deep:!0,immediate:!0,handler(){this.totalMilliseconds=this.time,this.endTime=this.now()+this.time,this.autoStart&&this.start()}}},mounted(){document.addEventListener(E,this.handleVisibilityChange)},beforeUnmount(){document.removeEventListener(E,this.handleVisibilityChange),this.pause()},methods:{start(){this.counting||(this.counting=!0,this.autoStart||(this.totalMilliseconds=this.time,this.endTime=this.now()+this.time),this.emitEvents&&this.$emit(w),document.visibilityState==="visible"&&this.continue())},continue(){if(!this.counting)return;const i=Math.min(this.totalMilliseconds,this.interval);if(i>0){let s,a;const l=t=>{s||(s=t),a||(a=t);const o=t-s;o>=i||o+(t-a)/2>=i?this.progress():this.requestId=requestAnimationFrame(l),a=t};this.requestId=requestAnimationFrame(l)}else this.end()},pause(){cancelAnimationFrame(this.requestId)},progress(){this.counting&&(this.update(),this.emitEvents&&this.totalMilliseconds>0&&this.$emit(S,{days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}),this.continue())},abort(){this.counting&&(this.pause(),this.counting=!1,this.emitEvents&&this.$emit(y))},end(){this.counting&&(this.pause(),this.totalMilliseconds=0,this.counting=!1,this.emitEvents&&this.$emit(x))},update(){this.counting&&(this.totalMilliseconds=Math.max(0,this.endTime-this.now()))},restart(){this.pause(),this.totalMilliseconds=this.time,this.endTime=this.now()+this.time,this.counting=!1,this.start()},handleVisibilityChange(){switch(document.visibilityState){case"visible":this.update(),this.continue();break;case"hidden":this.pause();break}}},render(){return D(this.tag,this.$slots.default?[this.$slots.default(this.transform({days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}))]:void 0)}});const j=M({__name:"CountDown",setup(i){return(s,a)=>{const l=H;return T(),I(l,{class:"font-subwt text-slate-300 lg:text-2xl sm:text-base font-thin",placeholder:"loading..."},{default:b(()=>[f(u(A),{class:"font-subwt text-slate-300 text-xl lg:text-4xl font-thin",time:Date.parse("26 Nov 2024 16:00:00 GMT")-new Date,interval:100},{default:b(({days:t,hours:o,minutes:c,seconds:r,milliseconds:d})=>[h(" -> "+n(t)+" "+n(s.$t("day_m"))+" "+n(o)+" "+n(s.$t("hour_m"))+" "+n(c)+" "+n(s.$t("min_m"))+" "+n(r)+" "+n(s.$t("sec_m")),1)]),_:1},8,["time"])]),_:1})}}}),q=""+new URL("ctf.BKkpt-iH.png",import.meta.url).href,R=""+new URL("Logo_clean.Cxb_HDzr.png",import.meta.url).href,F={class:"bg-black"},U={class:"isolate shadow-md rounded-md overflow-hidden bg-black py-24 sm:py-32 mx-12 my-4"},P=e("img",{src:q,alt:"",class:"absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"},null,-1),G={class:"absolute top-10 right-10 h-16 w-16 text-white ..."},z={class:"w-full text-8xl text-center text-white"},Y=e("img",{src:R,class:"mx-auto object-contain object-center w-1/4 brightness-50 hover:brightness-200 hover:duration-150"},null,-1),K={class:"flex justify-center"},J={class:"max-w-2xl lg:mx-0"},Q={class:"font-bold text-8xl tracking-tight text-white"},W={class:"mt-6 text-lg leading-8 text-gray-300"},X=e("br",null,null,-1),Z={class:"mt-10"},tt={class:"flex flex-row gap-x-8 gap-y-6 text-xl font-normal leading-7 text-slate-400"},et=e("span",{"aria-hidden":"true"},"→",-1),st={href:"#"},it=e("span",{"aria-hidden":"true"},"→",-1),ot=e("span",{"aria-hidden":"true"},"→",-1),nt={href:"#"},at=e("span",{"aria-hidden":"true"},"→",-1),lt={class:"mt-16 flex flex-row gap-8"},ct={__name:"PageCard",setup(i){const{locale:s,setLocale:a}=L(),l=V();return(t,o)=>{const c=j,r=O;return T(),$("div",F,[e("div",U,[P,e("div",G,[e("button",{onClick:o[0]||(o[0]=d=>u(a)("fr"))},"fr"),h(" | "),e("button",{onClick:o[1]||(o[1]=d=>u(a)("en"))},"en")]),e("div",z,[Y,f(c)]),e("div",K,[e("div",J,[e("h2",Q,[m(t.$slots,"title")]),e("p",W,[m(t.$slots,"subtitle"),X])]),e("div",Z,[e("div",tt,[f(r,{class:"hover:text-white",to:u(l)("/register")},{default:b(()=>[h(n(t.$t("register_m")),1),et]),_:1},8,["to"]),e("a",st,[h(n(t.$t("contribute_m"))+" ",1),it]),f(r,{class:"hover:text-white",to:u(l)("/coc")},{default:b(()=>[h(n(t.$t("values_m")),1),ot]),_:1},8,["to"]),e("a",nt,[h(n(t.$t("sponsors_m"))+" ",1),at]),m(t.$slots,"body")]),e("dl",lt,[m(t.$slots,"footer")])])])])])}}};export{ct as _};
