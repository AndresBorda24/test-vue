<script setup>
import { storeToRefs } from "pinia"
import { useToast } from 'vue-toast-notification'
import { FwbInput, FwbButton } from 'flowbite-vue'
import { useViewLoad } from "@/stores/ViewLoad"
import FormLabel from "@/components/form-label.vue"
import { useInfoUsuarioStore } from "@/stores/InfoUsuario"

import UserAlert from "@/icons/user-alert.vue"
import InfoUsuario from "@/components/info-usuario.vue"

const toast = useToast()
const { state, exists, fetched }  = storeToRefs( useInfoUsuarioStore() )

async function onSubmit() {
  const error = await useViewLoad().wrap(() =>
    useInfoUsuarioStore().fetchInfo(state.value.num_histo))

  if (error) onError()
}

function onError() {
  toast.error("Ha ocurrido un error.", { position: "bottom" })
}
</script>

<template>
  <form
    v-if="! exists && ! fetched"
    autocomplete="off"
    id="form-info-usuario"
    @submit.prevent="onSubmit"
    class="bg-gray-50 px-10 py-7 border rounded shadow-xl flex flex-col gap-5 max-w-md mx-auto"
  >
    <form-label val="Cédula">
      <fwb-input
        required
        size="sm"
        autofocus
        minlength="4"
        name="num_histo"
        placeholder="xxxxxxxx"
        v-model.trim="state.num_histo"
      >
        <template #helper>
          <span class="text-xs">
            Primero debemos verificar si el <span class="font-bold">Usuario</span>
            ya está registrado!
          </span>
        </template>
      </fwb-input>
    </form-label>

    <fwb-button type="submit" color="yellow">Buscar</fwb-button>
  </form>

  <InfoUsuario v-if="fetched && exists" />

  <div v-if="fetched && !exists" >
    <p class="text-xl text-aso-primary text-center font-bold">No Encontrado!</p>
    <div class="bg-gray-50 px-10 py-7 border rounded shadow-xl max-w-md mx-auto flex flex-col gap-5 items-center">
      <UserAlert class="w-28 text-aso-primary" />
      <p class="text-sm text-center">
        El usuario con el documento: <span class="font-bold">{{ state.num_histo }}</span> aún no ha sido creado.
      </p>

      <div class="flex justify-center gap-4">
        <fwb-button
          color="red"
          outline
          @click="useInfoUsuarioStore().$reset()"
        >Cancelar</fwb-button>
        <fwb-button
          href="/usuario"
          color="yellow"
          tag="router-link"
        >Crear</fwb-button>
      </div>
    </div>
  </div>
</template>
