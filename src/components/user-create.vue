<script setup>
import { createUser } from "@/api"
import { ref, onMounted } from "vue"
import { useRouter } from "vue-router"
import { useViewLoad } from "@/stores/ViewLoad"
import { useToast } from 'vue-toast-notification'
import { FwbInput, FwbButton } from 'flowbite-vue'
import FormLabel from "@/components/form-label.vue"
import { useInfoUsuarioStore } from "@/stores/InfoUsuario"

const errors = ref({})
const toast = useToast()
const router = useRouter()
const { state } = useInfoUsuarioStore()

async function onSubmit() {
  errors.value = {}
  const { error, data } = await useViewLoad().wrap(() => createUser( state ))
  if (error) return onError( error );

  toast.success("Usuario Creado!", { duration: 10000, position: 'top-right' })
  useInfoUsuarioStore().setInfo(data)
  router.push({ name: 'select-plan' })
}

function onError( error ) {
  toast.error("Ha ocurrido un error", { duration: 6000, position: 'bottom-right' })
  let e = error.response?.data?.fields || {}

  errors.value = Object.keys(e).reduce((a, field) => {
    a[field] = e[field][0]
    return a
  }, {})

  return false
}

function cancel() {
  useInfoUsuarioStore().$reset()
  router.push({ name: "search-user" })
}

onMounted(() => setTimeout(() => {
  state.tipo_documento = "CC";
  document.querySelector('input[name="nom1"]')?.focus();
}, 10))
</script>

<template>
  <p class="text-xl text-aso-primary text-center font-bold">Datos Usuario</p>
  <form
    autocomplete="off"
    id="form-info-usuario"
    @submit.prevent="onSubmit"
    class="bg-gray-50 px-5 py-7 border rounded shadow-xl flex flex-col gap-5 max-w-lg mx-auto md:px-10"
  >
    <div class="grid grid-cols-2 gap-4">
      <form-label val="Tipo Documento">
        <select
          required
          name="tipo_documento"
          v-model="state.tipo_documento"
          class="w-full text-gray-900 bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 p-2.5 text-sm border border-gray-300 rounded-lg"
        >
          <option hidden selected>Selecciona</option>
          <option value="CC">Cédula</option>
          <option value="TI">Tarjeta de identidad</option>
          <option value="CE">Cédula de extranjería</option>
        </select>
      </form-label>

      <form-label val="Cédula">
        <fwb-input
          required
          size="sm"
          minlength="4"
          name="num_histo"
          disabled
          v-model.trim="state.num_histo"
          :validation-status="errors.num_histo && 'error'"
          placeholder="xxxxxxxx"
        >
          <template #validationMessage v-if="errors.num_histo">
            <span class="text-xs mt-15">{{ errors.num_histo }}</span>
          </template>
        </fwb-input>
      </form-label>
    </div>


    <div class="grid grid-cols-2 gap-4">
      <form-label val="Primer Nombre">
        <fwb-input
          v-model.trim="state.nom1"
          required
          size="sm"
          name="nom1"
          placeholder="Requerido"
        />
      </form-label>
      <form-label val="Segundo Nombre">
        <fwb-input
          v-model.trim="state.nom2"
          size="sm"
          name="nom2"
          placeholder="Opcional"
        />
      </form-label>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <form-label val="Primer Apellido">
        <fwb-input
          v-model.trim="state.ape1"
          required
          size="sm"
          name="ape1"
          placeholder="Requerido"
        />
      </form-label>
      <form-label val="Segundo Apellido">
        <fwb-input
          v-model.trim="state.ape2"
          size="sm"
          name="ape2"
          placeholder="Opcional"
        />
      </form-label>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <form-label val="Teléfono">
        <fwb-input
          v-model.trim="state.telefono"
          required
          size="sm"
          name="telefono"
          pattern="3[0-9]{9}"
          placeholder="Requerido"
          :validation-status="errors.telefono && 'error'"
        >
          <template #validationMessage v-if="errors.telefono">
            <span class="text-xs mt-15">{{ errors.telefono }}</span>
          </template>

          <template #helper>
            <span class="text-xs">Formato: (3----------)</span>
          </template>
        </fwb-input>
      </form-label>
      <form-label val="Fecha de Nacimiento">
        <fwb-input
          v-model.trim="state.fech_nac"
          required
          size="sm"
          type="date"
          name="fech_nac"
          placeholder="Requerido"
        />
      </form-label>
    </div>

    <form-label val="Correo">
      <fwb-input
        v-model.trim="state.email"
        required
        size="sm"
        type="email"
        name="email"
        autocomplete="email"
        placeholder="Requerido"
        :validation-status="errors.email && 'error'"
      >
        <template #validationMessage v-if="errors.email">
          <span class="text-xs mt-15">{{ errors.email }}</span>
        </template>
      </fwb-input>
    </form-label>

    <form-label val="Dirección">
      <fwb-input
        v-model.trim="state.direccion"
        required
        size="sm"
        name="direccion"
        placeholder="Requerido"
      />
    </form-label>

    <form-label val="Contraseña">
      <fwb-input
        v-model.trim="state.clave"
        required
        size="sm"
        name="clave"
        disabled
        placeholder="Requerido"
      />
    </form-label>

    <div class="flex justify-center gap-4">
      <fwb-button
        outline
        color="red"
        type="button"
        @click="cancel"
      >Cancelar</fwb-button>
      <fwb-button
        type="submit"
        color="yellow"
      >Registrar</fwb-button>
    </div>
  </form>
</template>
