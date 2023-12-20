<script setup>
import { getPagosList } from "@/api"
import { onMounted, ref } from "vue"
import { useViewLoad } from "@/stores/ViewLoad"
import { FwbInput, FwbButton } from 'flowbite-vue'

const pagos = ref([])
const hasta = ref(null)
const desde = ref(null)

// Busca y carga la info de los pagos
const getPagosData = async () => {
  const { data } = await useViewLoad().wrap(
    () => getPagosList(desde.value, hasta.value)
  )
  pagos.value = data.data
  desde.value = data.rango[0]
  hasta.value = data.rango[1]
}

// Realiza la carga inicial de la data.
onMounted(async () => await getPagosData())
</script>

<template>
  <main class="max-w-5xl p-2 mx-auto py-8">
    <pre-loader />
    <h1 class="text-aso-primary text-3xl mb-4">Listado de pagos</h1>
    <p class="text-sm">Carga los pagos realizados entre este rango de fechas:</p>
    <div class="mb-4 flex flex-wrap gap-3 p-3 items-center">
      <FormLabel val="Desde">
        <fwb-input
          size="sm"
          type="date"
          v-model="desde"
        />
      </FormLabel>
      <FormLabel val="Hasta">
        <fwb-input
          size="sm"
          type="date"
          v-model="hasta"
        />
      </FormLabel>
      <fwb-button
        title="Cargar Pagos"
        color="default" pill square
        @click="getPagosData"
      > <ArrowRightIcon class="w-4 h-4"/> </fwb-button>
    </div>
    <tabla-pagos :pagos="pagos" />
  </main>
</template>
