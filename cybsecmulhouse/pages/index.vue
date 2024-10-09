<template>
  <PageCard>
    <template #title>
    </template>
    <template #subtitle>
      <!-- {{ $t('subtitle_m') }} -->
      
    </template>
    <template #body>
      <div  v-if="locale === 'en'">
        <InfoEn />
      </div>
      <div  v-else>
        <InfoFr  />
      </div>
    </template>
    <template #footer>
      <div class="flex flex-col-reverse">
        <dt class="text-base leading-7 text-gray-300">Participants</dt>
        <dd class="text-4xl font-bold leading-9 tracking-tight text-white">80+</dd>
      </div>
      <div class="flex flex-col-reverse">
        <dt class="text-base leading-7 text-gray-300">Surface</dt>
        <dd class="text-4xl font-bold leading-9 tracking-tight text-white">2000m<sup>2</sup></dd>
      </div>
      <div class="flex flex-col-reverse">
        <dt class="text-base leading-7 text-gray-300">Price money</dt>
        <dd class="text-4xl font-bold leading-9 tracking-tight text-white">10000&euro;</dd>
      </div>
      <div class="flex flex-col-reverse">
        <dt class="text-base leading-7 text-gray-300">From</dt>
        <dd class="text-4xl font-bold leading-9 tracking-tight text-white">16h-09h</dd>
      </div>
    </template>
  </PageCard>

</template>
<script setup lang="ts">
const { locale, locales } = useI18n()
const localePath = useLocalePath()

useSeoMeta({
  title: 'The official RhineTech CTF site',
  ogTitle: 'The official RhineTech CTF site',
  description: 'This is the official Rhinetech CTF site for the event planned on November 26th 2024 ',
  ogDescription: 'This is the official Rhinetech CTF site for the event planned on November 26th 2024 ',
})

</script>
