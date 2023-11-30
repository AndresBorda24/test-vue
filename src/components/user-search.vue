<script setup>
import { fetchUser } from "@/api"
import { storeToRefs } from "pinia"
import { useRouter } from "vue-router"
import { useViewLoad } from "@/stores/ViewLoad"
import { useToast } from 'vue-toast-notification'
import { FwbInput, FwbButton } from 'flowbite-vue'
import FormLabel from "@/components/form-label.vue"
import { useInfoUsuarioStore } from "@/stores/InfoUsuario"

const toast = useToast()
const router = useRouter()
const { state, exists }  = storeToRefs( useInfoUsuarioStore() )

async function onSubmit() {
  const { data, error } = await useViewLoad()
    .wrap(() => fetchUser(state.value.num_histo))

  if (error) return onError()

  if (data !== null) useInfoUsuarioStore().setInfo( data );

  (exists.value)
    ? router.push({ name: 'user-found' })
    : router.push({ name: 'user-not-found' })
}

function onError() {
  toast.error("Ha ocurrido un error.", { position: "bottom" })
  return false
}
</script>

<template>
  <form
    autocomplete="off"
    id="form-info-usuario"
    @submit.prevent="onSubmit"
    class="bg-gray-50 px-10 py-7 border rounded shadow-xl flex flex-col gap-5 mx-auto"
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
</template>
