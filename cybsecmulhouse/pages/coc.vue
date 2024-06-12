<script setup lang="ts">
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'

</script>
<i18n lang="yaml">
  en:
    coc_m: |
     

  fr:
    hello: 'こんにちは、世界!'
  </i18n>

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