import{d as m,P as f,F as d,c as a,v as I,x,K as v,_}from"./oAzMon2h.js";import{r as S}from"./BQkc-AXV.js";const y=m({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(u){f(e=>({efdb04fa:p.value}));const t=d(),s=u,l=a(()=>{var e,n;return(n=(e=t.nuxtIcon)==null?void 0:e.aliases)!=null&&n[s.name]?t.nuxtIcon.aliases[s.name]:s.name}),c=a(()=>S(l.value)),p=a(()=>{var o,r;const e=(r=(o=t.nuxtIcon)==null?void 0:o.iconifyApiOptions)==null?void 0:r.url;if(e)try{new URL(e)}catch{console.warn("Nuxt IconCSS: Invalid custom Iconify API URL");return}return`url('${e||"https://api.iconify.design"}/${c.value.prefix}/${c.value.name}.svg')`}),i=a(()=>{var n,o,r;if(!s.size&&typeof((n=t.nuxtIcon)==null?void 0:n.size)=="boolean"&&!((o=t.nuxtIcon)!=null&&o.size))return;const e=s.size||((r=t.nuxtIcon)==null?void 0:r.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,n)=>(I(),x("span",{style:v({width:i.value,height:i.value})},null,4))}}),h=_(y,[["__scopeId","data-v-41e8d397"]]);export{h as default};
