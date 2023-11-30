<script setup>
import { useRouter } from "vue-router"
import { storeToRefs } from "pinia"
import { FwbButton } from 'flowbite-vue'
import { useInfoUsuarioStore } from "@/stores/InfoUsuario"

import UserIcon from "@/icons/user.vue"

const router = useRouter()
const { state, hasPlan, plan, planExpira } = storeToRefs(useInfoUsuarioStore())
const formatter = new Intl.DateTimeFormat('es-CO', {
  dateStyle: 'long',
  timeZone: "America/Bogota"
})

function cancel() {
  useInfoUsuarioStore().$reset()
  router.push({ name: 'search-user' })
}
</script>

<template>
  <p class="text-xl text-aso-primary text-center font-bold">Usuario Registrado!</p>
  <section class="bg-gray-50 px-10 py-7 border rounded shadow-xl mx-auto">
    <div class="flex flex-col gap-5 items-center mb-8">
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
      <p class="mb-4">
        El usuario <span class="font-bold">ya</span> cuenta con el
        <span class="text-aso-primary font-bold text-lg">Plan {{ plan.nombre }}</span>
        que expira el próximo <span class="font-bold">{{ formatter.format(planExpira) }}</span>.
      </p>

      <fwb-button
        color="red"
        class="block mx-auto"
        @click="cancel"
      >Volver</fwb-button>
    </div>

    <div v-if="! hasPlan" class="flex justify-center gap-3">
      <fwb-button
        outline
        color="red"
        @click="cancel"
      >Cancelar</fwb-button>
      <fwb-button
        color="yellow"
        tag="router-link"
        href="/plan"
      >Siguiente</fwb-button>
    </div>
  </section>
</template>
