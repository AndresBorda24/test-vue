<script setup>
import { storeToRefs } from "pinia"
import { useRouter } from "vue-router"
import { FwbButton } from 'flowbite-vue'
import { useInfoUsuarioStore } from "@/stores/InfoUsuario"

import UserIcon from "@/icons/user.vue"

const router = useRouter()
const { state } = storeToRefs(useInfoUsuarioStore())
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

    <div class="flex justify-center gap-3">
      <!-- <fwb-button color="red">Volver</fwb-button> -->
      <fwb-button color="red" outline>Cancelar</fwb-button>
      <fwb-button color="yellow" >Siguiente</fwb-button>
    </div>
  </section>
</template>
