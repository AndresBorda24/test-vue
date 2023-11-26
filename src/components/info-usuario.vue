<script setup>
import { ref } from "vue"
import { FwbInput, FwbButton } from 'flowbite-vue'
import FormLabel from "@/components/form-label.vue"

const errors = ref({})
const state  = ref({
  nom1: null,
  nom2: null,
  ape1: null,
  ape2: null,
  cedula: null,
  correo: null,
  fech_nac: null,
  password: null,
  telefono: null,
  direccion: null
})

function onSubmit() {
  errors.value = {}
  console.log(state.value)
}

function onError() {
  // Implementar
}
</script>

<template>
  <p class="text-xl text-aso-primary text-center font-bold">Datos Usuario</p>
  <form
    @submit.prevent="onSubmit"
    id="form-info-usuario"
    autocomplete="off"
    class="bg-gray-50 px-10 py-7 border rounded shadow-xl flex flex-col gap-5 max-w-md mx-auto"
  >
    <form-label val="Cédula">
      <fwb-input
        v-model="state.cedula"
        required
        size="sm"
        minlength="4"
        name="cedula"
        :validation-status="errors.cedula && 'error'"
        placeholder="xxxxxxxx"
      > <template #validationMessage>{{ errors.cedula }}</template> </fwb-input>
    </form-label>

    <div class="grid grid-cols-2 gap-4">
      <form-label val="Primer Nombre">
        <fwb-input
          v-model="state.nom1"
          required
          size="sm"
          name="nom1"
          placeholder="Requerido"
        />
      </form-label>
      <form-label val="Segundo Nombre">
        <fwb-input
          v-model="state.nom2"
          size="sm"
          name="nom2"
          placeholder="Opcional"
        />
      </form-label>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <form-label val="Primer Apellido">
        <fwb-input
          v-model="state.ape1"
          required
          size="sm"
          name="ape1"
          placeholder="Requerido"
        />
      </form-label>
      <form-label val="Segundo Apellido">
        <fwb-input
          v-model="state.ape2"
          size="sm"
          name="ape2"
          placeholder="Opcional"
        />
      </form-label>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <form-label val="Teléfono (3########)">
        <fwb-input
          v-model="state.telefono"
          required
          size="sm"
          name="telefono"
          pattern="3[0-9]{9}"
          placeholder="Requerido"
          :validation-status="errors.telefono && 'error'"
        > <template #validationMessage>{{ errors.telefono }}</template> </fwb-input>
      </form-label>
      <form-label val="Fecha de Nacimiento">
        <fwb-input
          v-model="state.fech_nac"
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
        v-model="state.correo"
        required
        size="sm"
        type="email"
        name="correo"
        placeholder="Requerido"
        :validation-status="errors.correo && 'error'"
      > <template #validationMessage>{{ errors.correo }}</template> </fwb-input>
    </form-label>

    <form-label val="Dirección">
      <fwb-input
        v-model="state.direccion"
        required
        size="sm"
        name="direccion"
        placeholder="Requerido"
      />
    </form-label>

    <form-label val="Contraseña">
      <fwb-input
        v-model="state.password"
        required
        size="sm"
        name="password"
        placeholder="Requerido"
      />
    </form-label>

    <fwb-button
      type="submit"
      color="yellow"
    >Alternative</fwb-button>
  </form>
</template>
