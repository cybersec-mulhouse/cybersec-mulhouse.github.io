<template>
 
    <div class="bg-black">
      
    <div class="relative mt-4 isolate shadow-md rounded-md overflow-hidden bg-gray-900 py-24 sm:py-32 mx-12 my-4">
    <img src="~/assets/img/ctf.png" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"/>
    
    <div class="absolute top-10 right-10 h-16 w-16 text-white ...">
      <button @click="setLocale('fr')">fr</button> |
      <button @click="setLocale('en')">en</button>
    </div>
    <div class="w-full text-8xl  text-center text-white">
          <img src="~/assets/img/Logo_clean.png" class="mx-auto object-contain object-center w-1/2 brightness-50 hover:brightness-200 hover:duration-150 "/>
          <CountDown/>  
    </div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
     
   
      <div class="mx-auto max-w-2xl lg:mx-0">
        
        
        <h2 class="font-bold text-8xl tracking-tight text-white">
            <slot name="title"/>
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-300"> 
         
         
          <slot name="subtitle"/><br>
          
        </p>
      </div>
      <div class="mx-auto mt-10 max-w-2xl  lg:mx-0 lg:max-w-none">
        
        <div class="grid grid-cols-1 gap-x-8  gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
          <NuxtLink :to="localePath('/register')"> {{ $t('register_m') }}<span aria-hidden="true">&rarr;</span></NuxtLink>
          <a href="#">{{ $t('contribute_m') }} <span aria-hidden="true">&rarr;</span></a>
          <NuxtLink :to="localePath('/coc')"> {{ $t('values_m') }}<span aria-hidden="true">&rarr;</span></NuxtLink>
          <a href="#">{{ $t('sponsors_m') }} <span aria-hidden="true">&rarr;</span></a>  
          <slot name="body"/>
            
        </div>
        <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            <slot name="footer"/>
        </dl>
      </div>
    </div>
  </div>
    </div>
  </template>
 <script setup>
const { locale, setLocale } = useI18n()
const localePath = useLocalePath()

</script>