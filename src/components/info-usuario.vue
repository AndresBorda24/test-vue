<script setup>
import { storeToRefs } from "pinia"
import { FwbButton } from 'flowbite-vue'
import { useInfoUsuarioStore } from "@/stores/InfoUsuario"

import UserIcon from "@/icons/user.vue"

const { state, hasPlan, plan } = storeToRefs(useInfoUsuarioStore())
</script>

<template>
  <p class="text-xl text-aso-primary text-center font-bold">Usuario Registrado!</p>
  <section class="bg-gray-50 px-10 py-7 border rounded shadow-xl max-w-md mx-auto">
    <div class="flex flex-col gap-5 items-center mb-10">
      <UserIcon class="w-28 text-aso-primary" />
      <div class="flex-1 text-center">
        <p class="text-3xl font-bold capitalize text-aso-tertiary">
          {{`${state.nom1} ${state.ape1}`}}
        </p>
        <p class="font-bold text-lg">{{ state.num_histo }}</p>
        <p class="text-sm">{{ state.email }} <br> {{ state.telefono }}</p>
      </div>
    </div>

    <div v-if="hasPlan">
      <p class="mb-4 text-center">
        El usuario <span class="font-bold">ya</span> cuenta con un plan: <br>
        <span class="text-aso-primary font-bold text-lg">Plan {{ "Amarillo" }}</span>
      </p>

      <fwb-button
        color="red"
        class="block mx-auto"
        @click="useInfoUsuarioStore().$reset()"
      >Volver</fwb-button>
    </div>

    <div v-if="! hasPlan" class="flex justify-center gap-3">
      <fwb-button
        color="red"
        outline
        @click="useInfoUsuarioStore().$reset()"
      >Cancelar</fwb-button>
      <fwb-button
        color="yellow"
        tag="router-link"
        href="/plan"
      >Siguiente</fwb-button>
    </div>
  </section>
</template>
