<template>

    <div class="bg-blackite ">
      
    <div class="isolate shadow-md rounded-md overflow-hidden bg-black py-24 sm:py-32 mx-12 my-4">
    <img src="~/assets/img/ctf.png" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"/>
    
    <div class="absolute top-10 right-10 h-16 w-16 text-white ...">
      <button @click="setLocale('fr')">fr</button> |
      <button @click="setLocale('en')">en</button>
    </div>
    <div class="w-full text-8xl  text-center text-white">
          <img src="~/assets/img/Logo_clean.png" class="mx-auto object-contain object-center w-1/4 brightness-50 hover:brightness-200 hover:duration-150 "/>
          <CountDown/>  
    </div>

    <div class=" flex justify-center">
     
            <!-- subtitle -->
                <div class=" max-w-2xl lg:mx-0">
                  <h2 class="font-bold text-8xl tracking-tight text-white">
                      <slot name="title"/>
                  </h2>
                  <p class="mt-6 text-lg leading-8 text-gray-300">
                    <slot name="subtitle"/><br>
                  </p>
                </div>

                <!-- footer and links -->
                <div class="mt-10 ">  

                  <div class="flex flex-row gap-x-8  gap-y-6 text-xl font-normal  leading-7 text-slate-400">
                    
                    <NuxtLink class="hover:text-white" :to="localePath('/register')"> {{ $t('register_m') }}<span aria-hidden="true">&rarr;</span></NuxtLink>
                    <a href="#">{{ $t('contribute_m') }} <span aria-hidden="true">&rarr;</span></a>
                    <NuxtLink class="hover:text-white" :to="localePath('/coc')"> {{ $t('values_m') }}<span aria-hidden="true">&rarr;</span></NuxtLink>
                    <a href="#">{{ $t('sponsors_m') }} <span aria-hidden="true">&rarr;</span></a>  
                    
                    <slot name="body"/>    
                  </div>

                  <dl class="mt-16 flex flex-row gap-8 ">
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