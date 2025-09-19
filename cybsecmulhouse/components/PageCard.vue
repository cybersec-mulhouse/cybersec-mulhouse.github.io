<template>

    <div class="bg-black ">
      
    <div class="isolate shadow-md rounded-md overflow-hidden bg-black py-24 sm:py-32 mx-12 my-4">
    <img src="~/assets/img/ctf.png" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"/>
    
    <div class="absolute top-10 right-10 h-16 w-16 text-white ...">
      <button @click="setLocale('fr')">fr</button> |
      <button @click="setLocale('en')">en</button>
    </div>
    <div class="w-full text-8xl  text-center text-white">
      <NuxtLink class="hover:text-white" :to="localePath('/')">
        <img src="~/assets/img/Logo_clean.png" class="mx-auto object-contain object-center w-1/4 brightness-50 hover:brightness-200 hover:duration-150" />
      </NuxtLink>
          <h3 class="text-slate-500 text-xl mt-5"> {{ $t('start_m') }}</h3>
          <CountDown/>  
          <div class="flex justify-center mt-10 md:flex-row  flex-col gap-x-8  gap-y-6 text-xl font-normal  leading-7 text-slate-400">
                    
                    <NuxtLink class="hover:text-white" :to="localePath('/register')"> {{ $t('register_m') }}<span aria-hidden="true">&rarr;</span></NuxtLink>
                    <NuxtLink class="hover:text-white" :to="localePath('/coc')"> {{ $t('values_m') }}<span aria-hidden="true">&rarr;</span></NuxtLink>
          </div>
    </div>

    <div class=" flex flex-col place-items-center	 justify-center">
            
            <!-- subtitle -->
                  <div class=" max-w-2xl lg:mx-0">
                    <h2 class="font-bold text-8xl tracking-tight text-white">
                        <slot name="title"/>
                    </h2>
                    <p class="mt-10 text-lg leading-8 text-gray-300">
                      <slot name="subtitle"/><br>
                    </p>
                  </div>

                <!-- footer and links -->
                  <div class=" ">  
                    <slot name="body"  /> 
                    <dl class="mt-20 flex md:flex-row flex-col place-items-center gap-8 ">
                      <slot name="footer"/>
                    </dl>
                    
                  </div>
                  
                </div>
                <div class="mx-20 mt-16 flex md:flex-row flex-col gap-x-20 justify-center place-items-center text-white text-4xl">
                  <a href="https://www.m2a.fr/" target="_blank" rel="noopener"><img src='~/assets/img/m2a.png' class="flex mt-5 max-w-36 aspect-auto" /></a>
                  <a href="https://www.hacksecureims.eu/" target="_blank" rel="noopener"><img src='~/assets/img/Fond_noir_logo.png' class="flex max-w-36 aspect-auto"/></a>
                  <a href="https://www.systancia.com/" target="_blank" rel="noopener"><img src='~/assets/img/logo-systancia-white.png' class="flex mt-10 max-w-36 aspect-auto" /></a>
                  <a href="https://www.univ-reims.fr/" target="_blank" rel="noopener"><img src='~/assets/img/Logo_URCA_blanc.png' class="flex mt-10 max-w-36 aspect-auto" /></a>
                  <a href="https://www.uha.fr/" target="_blank" rel="noopener"><img src='~/assets/img/UHA_sans_fond.png' class="flex mt-10 max-w-36 aspect-auto" /></a>
                
                
                </div>
     </div>
     
  </div>
  </template>
 <script setup>
const { locale, setLocale } = useI18n()
const localePath = useLocalePath()

</script>
