<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { FwbInput, FwbButton } from 'flowbite-vue'
import FormLabel from "@/components/form-label.vue"
import { useInfoUsuarioStore } from "@/stores/InfoUsuario"

const errors = ref({})
const router = useRouter()
const { state } = useInfoUsuarioStore()

function onSubmit() {
  errors.value = {}
  router.push({ name: 'info-planes' })
}

function onError() {
  // Implementar
}
</script>

<template>
  <p class="text-xl text-aso-primary text-center font-bold">Datos Usuario</p>
  <form
    autocomplete="off"
    id="form-info-usuario"
    @submit.prevent="onSubmit"
    class="bg-gray-50 px-10 py-7 border rounded shadow-xl flex flex-col gap-5 max-w-md mx-auto"
  >
    <form-label val="Cédula">
      <fwb-input
        v-model.trim="state.cedula"
        required
        size="sm"
        minlength="4"
        name="cedula"
        :validation-status="errors.cedula && 'error'"
        placeholder="xxxxxxxx"
      >
        <template #validationMessage v-if="errors.cedula">{{ errors.cedula }}</template>
      </fwb-input>
    </form-label>

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
      <form-label val="Teléfono (3########)">
        <fwb-input
          v-model.trim="state.telefono"
          required
          size="sm"
          name="telefono"
          pattern="3[0-9]{9}"
          placeholder="Requerido"
          :validation-status="errors.telefono && 'error'"
        >
          <template #validationMessage v-if="errors.telefono">{{ errors.telefono }}</template>
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
        v-model.trim="state.correo"
        required
        size="sm"
        type="email"
        name="correo"
        placeholder="Requerido"
        :validation-status="errors.correo && 'error'"
      >
        <template #validationMessage v-if="errors.correo">{{ errors.correo }}</template>
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
        v-model.trim="state.password"
        required
        size="sm"
        name="password"
        placeholder="Requerido"
      />
    </form-label>

    <fwb-button
      type="submit"
      color="yellow"
    >Siguiente</fwb-button>
  </form>
</template>
