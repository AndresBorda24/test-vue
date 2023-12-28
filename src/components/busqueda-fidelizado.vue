<script setup>
import { searchFidelizado } from "@/api"
import { ref, watch, onMounted } from "vue"
import { useViewLoad } from "@/stores/ViewLoad"
import { useToast } from 'vue-toast-notification'
import { FwbButton, FwbInput, FwbRadio } from 'flowbite-vue'

const toast = useToast()
const emit = defineEmits(["fetched"])
const busqueda = ref({
  cc: "",
  tipo: "cc"
})
const tiposBusqueda = {
  cc: 'Documento',
  tarjeta: 'Tarjeta'
}
const clearInput = () => {
  busqueda.value.cc = ""
  setFocus()
}
const setFocus = () => document.querySelector('input[name="cc"]')?.focus()

/**
 * Realiza la busqueda y emite el evento en caso de exito.
*/
const search = async () => {
  const { data, error } = await useViewLoad().wrap(
    () => searchFidelizado(busqueda.value.cc, busqueda.value.tipo)
  )
  if (error) return toast.error("Error al realizar la búsqueda");

  emit("fetched", {
    data: data,
    // Esto es para evitar reactividad ~_~
    busqueda: JSON.parse(JSON.stringify(busqueda.value))
  });
}

// Cuando se selecciona un tipo de busqueda diferente, hace el focus automatico.
watch(() => busqueda.value.tipo, () => setFocus())
onMounted(() => setTimeout(setFocus, 10))
</script>

<template>
  <form @submit.prevent="search">
    <div class="flex gap-2 p-2 max-w-[300px]">
      <fwb-radio
        v-for="(val, key) in tiposBusqueda" :key="key"
        :value="key"
        :label="val"
        role="button"
        v-model="busqueda.tipo"
      />
    </div>

    <div class="flex gap-2 items-center">
      <fwb-input
        name="cc"
        required
        autofocus
        v-model="busqueda.cc"
        minlength="4"
        class="group min-w-[280px]"
        :placeholder="tiposBusqueda[busqueda.tipo]"
      >
        <template #prefix>
          <UserIcon class="w-4 h-4"/>
        </template>

        <template #suffix>
          <button
            type="button"
            @click="clearInput"
            class="hidden group-hover:block"
          >&#10005;</button>
        </template>
      </fwb-input>

      <fwb-button type="submit" color="default" pill square>
        <SearchIcon class="w-4 h-4"/>
      </fwb-button>
    </div>
  </form>
</template>
