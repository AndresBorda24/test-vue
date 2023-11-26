<script setup>
import { ref } from "vue";
import { FwbInput, FwbButton  } from 'flowbite-vue';
import FormLabel from "@/components/form-label.vue"
import FormPlanes from "@/components/form-planes.vue"

const nom1 = ref(null);
const nom2 = ref(null);
const ape1 = ref(null);
const ape2 = ref(null);
const cedula = ref(null);
const correo = ref(null);
const fech_nac = ref(null);
const password = ref(null);
const telefono = ref(null);
const direccion = ref(null);
</script>

<template>
  <form @submit.prevent id="form-datos" autocomplete="off">
    <div
      id="form-fields"
      class="bg-gray-50 p-10 border rounded shadow-xl flex flex-col gap-6"
    >
      <form-label val="Cédula">
        <fwb-input v-model="cedula" required name="cedula" placeholder="xxxxxxxx" size="sm" />
      </form-label>

      <div class="grid grid-cols-2 gap-4">
        <form-label val="Primer Nombre">
          <fwb-input v-model="nom1" required placeholder="Requerido" size="sm" name="nom1" />
        </form-label>
        <form-label val="Segundo Nombre">
          <fwb-input v-model="nom2" placeholder="Opcional" size="sm" name="nom2"/>
        </form-label>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <form-label val="Primer Apellido">
          <fwb-input v-model="ape1" required placeholder="Requerido" size="sm" name="ape1"/>
        </form-label>
        <form-label val="Segundo Apellido">
          <fwb-input v-model="ape2" placeholder="Opcional" size="sm" name="ape2" />
        </form-label>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <form-label val="Teléfono">
          <fwb-input v-model="telefono" placeholder="Requerido" required size="sm" name="telefono" />
        </form-label>
        <form-label val="Correo">
          <fwb-input v-model="correo" placeholder="Requerido" required type="email" size="sm" name="correo" />
        </form-label>
      </div>

      <div>
        <form-label val="Dirección">
          <fwb-input v-model="direccion" required placeholder="Requerido" size="sm" name="direccion" />
        </form-label>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <form-label val="Fecha de Nacimiento">
          <fwb-input v-model="fech_nac" required placeholder="Requerido" type="date" size="sm" name="fech_nac" />
        </form-label>
        <form-label val="Contraseña">
          <fwb-input v-model="password" required placeholder="Requerido" size="sm" name="password" />
        </form-label>
      </div>
    </div>

    <div class="flex flex-col gap-2">
      <form-planes />

      <div class="p-2">
        <fwb-button
          type="submit"
          class="bg-aso-primary w-full"
        >Guardar</fwb-button>
      </div>
    </div>
    <button>ajksdhkjas</button>
  </form>
</template>

<style scoped>
  #form-datos {
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
</style>
