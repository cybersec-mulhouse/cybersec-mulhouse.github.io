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
      <div class="col-span-3" v-if="this.$i18n.locale === 'en'">
        <CocEn />
      </div>
      <div class="col-span-3" v-else>
        <CocFr />
      </div>
    </template>
  </PageCard>
</template>