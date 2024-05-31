<template>
  <PageCard>
    <template #title>
      CTF Mulhouse
    </template>
    <template #subtitle>
      Come and capture the flag in a relaxed event !
    </template>
    <template #body>
      <NuxtLink to="/register">Register here<span aria-hidden="true">&rarr;</span></NuxtLink>
      <a href="#">Contribute <span aria-hidden="true">&rarr;</span></a>
      <a href="#">Our values <span aria-hidden="true">&rarr;</span></a>
      <a href="#">Sponsors <span aria-hidden="true">&rarr;</span></a>
    </template>
    <template #footer>
      <div class="flex flex-col-reverse">
        <dt class="text-base leading-7 text-gray-300">Participants</dt>
        <dd class="text-2xl font-bold leading-9 tracking-tight text-white">80+</dd>
      </div>
      <div class="flex flex-col-reverse">
        <dt class="text-base leading-7 text-gray-300">Surface</dt>
        <dd class="text-2xl font-bold leading-9 tracking-tight text-white">2000m<sup>2</sup></dd>
      </div>
      <div class="flex flex-col-reverse">
        <dt class="text-base leading-7 text-gray-300">Price money</dt>
        <dd class="text-2xl font-bold leading-9 tracking-tight text-white">10000&euro;</dd>
      </div>
      <div class="flex flex-col-reverse">
        <dt class="text-base leading-7 text-gray-300">From</dt>
        <dd class="text-2xl font-bold leading-9 tracking-tight text-white">16h-09h</dd>
      </div>
    </template>
  </PageCard>
</template>