<script setup lang="ts">

</script>

<template>
  <PageCard>
    <template #title />
    <template #subtitle>
      {{ $t('subtitle_m') }}
    </template>
    <template #body />
    <template #footer>
      <div class="w-3/4 mx-auto">
        <div v-if="locale === 'en'">
          <CocEn class=" text-white text-2xl font-thin" />
        </div>
        <div v-else>
          <CocFr class=" text-white text-2xl font-thin" />
        </div>
      </div>
    </template>
  </PageCard>
</template>