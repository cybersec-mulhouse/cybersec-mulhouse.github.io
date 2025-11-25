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
          <div class="flex flex-col-reverse col-span-4 text-white">
          Server Discord
        <a href="https://discord.com/invite/PvC8bWH3mv?event=1250008749712740403"> <img src="~/assets/img/qr-code.png" alt="" class="-z-10 h-full w-72 object-cover object-right md:object-center"/></a>
        </div>
<!--      <div class="flex md:flex-row  flex-col text-white">
        {{ $t('registration_closed_m') }}
      </div>
        -->
</template>
  </PageCard>
</template>
