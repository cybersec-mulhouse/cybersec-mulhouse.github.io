<template>
     <client-only class="font-subwt text-slate-300 lg:text-2xl sm:text-base font-thin" placeholder="loading...">
       <vue-countdown class="font-subwt text-slate-300 text-xl lg:text-4xl font-thin" :time="Date.parse('25 Nov 2025 8:00:00 GMT')-(new Date())" :interval="100" v-slot="{ days, hours, minutes, seconds, milliseconds }">
        {{ days }} {{$t('day_m')}} 
        {{ hours }} {{$t('hour_m')}}
      {{ minutes }} {{$t('min_m')}}
    {{ seconds }} {{$t('sec_m')}}
        
      </vue-countdown>
    </client-only>
  </template>
  
  <script setup lang="ts">
    import VueCountdown from '@chenfengyuan/vue-countdown';
    
 </script>
