<script setup>
import { ref } from "vue"
import { userExists } from "@/api"
import { storeToRefs } from "pinia"
import { useToast } from 'vue-toast-notification'
import { FwbInput, FwbButton } from 'flowbite-vue'
import FormLabel from "@/components/form-label.vue"
import { useInfoUsuarioStore } from "@/stores/InfoUsuario"

import InfoUsuario from "@/components/info-usuario.vue"

const toast = useToast()
const requested = ref(false)
const { state }  = storeToRefs( useInfoUsuarioStore() )
const { exists } = useInfoUsuarioStore()

async function onSubmit() {
  const { data, error } = await userExists( state.value.num_histo )
  if (error !== null) return onError();

  requested.value = true
  const fakeUser = {
    id: 12,
    ape1: "Borda",
    ape2:null,
    clave:null,
    direccion:"Un tiburón que habla ingles en Japón",
    email:"anjart24@gmail.com",
    fech_nac:"2002-12-31",
    nom1:"Andres",
    nom2:"Jair",
    ciudad:"Ibagué",
    num_histo:"1005702274",
    telefono:"3209353216",
  }

  state.value = fakeUser


  // Data debe tener la informacion del usuario (si existe) y tambien la info
  // del plan (Si tiene uno activo)
}

function onError() {
  toast.error("Ha ocurrido un error.", { position: "bottom" })
}
</script>

<template>
  <form
    v-if="! exists && requested"
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

  <InfoUsuario v-if="! exists" />
</template>
