<script setup lang="ts">
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'

// const schema = object({
//   email: string().email('Invalid email').required('Required'),
//   lastname:string().required('Required'),
//   forename:string().required('Required'),
//   uni:string().required('Required'), 
//   challenge:string().test('is-correct',(d)=>`${d.path} is not correct`,(value) => value == null || value === '6ebe').required('Required') 

// })

// type Schema = InferType<typeof schema>

// const state = reactive({
//   email: undefined
// })

// async function onSubmit (event: FormSubmitEvent<Schema>) {
//   // Do something with event.data
//   console.log(event.data)
  
// }
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
      <div class="flex flex-col-reverse col-span-4 text-white">
        <a href="https://discord.com/invite/PvC8bWH3mv?event=1250008749712740403"> <img src="~/assets/img/qr-code.png" alt="" class="-z-10 h-full w-72 object-cover object-right md:object-center"/></a>
        </div>
        </template>
    </PageCard>
  </template>