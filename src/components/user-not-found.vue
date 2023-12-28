<script setup>
import { useRouter } from 'vue-router';
import { FwbButton } from 'flowbite-vue'
import { useInfoUsuarioStore } from "@/stores/InfoUsuario"

const router = useRouter()
const { state } = useInfoUsuarioStore()

function cancel() {
  useInfoUsuarioStore().$reset()
  router.push({ name: 'search-user' })
}
</script>
<template>
  <p class="text-xl text-aso-primary text-center font-bold">No Encontrado!</p>
  <div class="bg-gray-50 px-10 py-7 border rounded shadow-xl mx-auto flex flex-col gap-5 items-center">
    <UserAlertIcon class="w-28 text-aso-primary" />
    <p class="text-sm text-center">
      El usuario con el documento: <span class="font-bold">{{ state.num_histo }}</span> aún no ha sido creado.
    </p>

    <div class="flex justify-center gap-4">
      <fwb-button
        color="red"
        outline
        @click="cancel"
      >Cancelar</fwb-button>
      <fwb-button
        :href="{ name: 'create-usuario' }"
        color="yellow"
        tag="router-link"
      >Crear</fwb-button>
    </div>
  </div>
</template>
