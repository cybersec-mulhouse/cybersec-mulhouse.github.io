<script setup lang="ts">
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'

const schema = object({
  email: string().email('Invalid email').required('Required'),
  lastname:string().required('Required'),
  forename:string().required('Required'),
  uni:string().required('Required'), 
  challenge:string().test('is-correct',(d)=>`${d.path} is not correct`,(value) => value == null || value === '6ebe').required('Required') 

})

type Schema = InferType<typeof schema>

const state = reactive({
  email: undefined
})

async function onSubmit (event: FormSubmitEvent<Schema>) {
  // Do something with event.data
    
  console.log("Blaa") 
  console.log(event.data)
}
</script>
<template>
    <PageCard>
      <template #title>
        CTF Mulhouse
      </template>
      <template #subtitle>
        Come and capture the flag in a relaxed event !
      </template>
      <template #body>
        &rarr;Register here<span aria-hidden="true"></span>
        <a href="#">Contribute <span aria-hidden="true">&rarr;</span></a>
        <a href="#">Our values <span aria-hidden="true">&rarr;</span></a>
        <a href="#">Sponsors <span aria-hidden="true">&rarr;</span></a>
      </template>
      <template #footer>
      <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit"  >
           
        
            <UFormGroup label="Email" name="email" :ui="{ label: { base: 'text-white' } }">
                <UInput v-model="state.email" :ui="{ variant: { outline: 'bg-white'}}" />
            </UFormGroup>

            <UFormGroup label="Name" name="lastname" :ui="{ label: { base: 'text-white' } }">
                <UInput v-model="state.lastname" />
            </UFormGroup>

            <UFormGroup label="Forename" name="forename" :ui="{ label: { base: 'text-white' } }">
                <UInput v-model="state.forename" />
            </UFormGroup>
            
            <UFormGroup label="University or school you represent" name="uni" :ui="{ label: { base: 'text-white' } }">
                <UInput v-model="state.uni" />
            </UFormGroup>
           
            <UFormGroup label="Challenge" name="how much is 10!>>7 in hexadecimal representation ?" :ui="{ label: { base: 'text-white' } }">
                <UInput v-model="state.challenge" />
            </UFormGroup>


            <UButton type="submit">
                Submit
            </UButton>
        </UForm>
        </template>
    </PageCard>
  </template>