<script setup lang="ts">
const { locale, locales } = useI18n()
console.log("locale",locale)

</script>

<template>
  <PageCard>
    <template #title>

    </template>
    <template #subtitle>
      {{ $t('subtitle_m') }}
    </template>
    <template #body>
    </template>
    <template #footer>
      <div class="col-span-3 text-2xl font-thin" v-if="locale === 'en'">
        <CocEn />
      </div>
      <div class="col-span-3 text-2xl font-thin" v-else>
        <CocFr />
      </div>
    </template>
  </PageCard>
</template>