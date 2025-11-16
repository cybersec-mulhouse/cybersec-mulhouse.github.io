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
      <div class="flex md:flex-row  flex-col text-white">
        {{ $t('registration_closed_m') }}
      </div>
    </template>
  </PageCard>
</template>
