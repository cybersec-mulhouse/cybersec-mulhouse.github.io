<template>
    <div class="bg-white">
    <div class="relative mt-32 isolate shadow-md rounded-md overflow-hidden bg-gray-900 py-24 sm:py-32 mx-12">
    <img src="~/assets/img/ctf.png" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"/>
   
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            <slot name="title"/>
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-300"> 
            <slot name="subtitle"/>
        
        </p>
      </div>
      <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
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
  