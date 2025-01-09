<script setup>
import { getOrderList } from "@/api"
import { onMounted, ref, computed } from "vue"
import { useViewLoad } from "@/stores/ViewLoad"
import { FwbInput, FwbButton } from 'flowbite-vue'
import TablaOrdenes from "../components/tabla-ordenes.vue"
import ExcelIcon from '../icons/excel-icon.vue'

const orders = ref([])
const hasta = ref(null)
const desde = ref(null)

const excelLink = computed(() =>
  `${import.meta.env.VITE_API_EXTERNAL}/2/orders-excel?desde=${desde.value}&hasta=${hasta.value}`
);
// Busca y carga la info de los pagos
const getOrdersData = async () => {
  console.log('Entrando en el evento submit')
  const { data } = await useViewLoad().wrap(
    () => getOrderList(desde.value, hasta.value)
  )
  orders.value = data.data
  desde.value = data.rango[0]
  hasta.value = data.rango[1]
}

// Realiza la carga inicial de la data.
onMounted(async () => await getOrdersData());
</script>

<template>
  <main class="max-w-5xl p-2 mx-auto py-8">
    <pre-loader />
    <h1 class="text-aso-primary text-3xl mb-4">Listado de Ordenes</h1>
    <p class="text-sm">Carga las ordenes <b>(<span class="italic">no fidelización</span>)</b> realizados entre este rango de fechas:
    </p>
    <form @submit.prevent="getOrdersData" class="mb-4 flex flex-wrap gap-3 p-3 items-center">
      <FormLabel val="Desde">
        <fwb-input size="sm" type="date" v-model="desde" />
      </FormLabel>
      <FormLabel val="Hasta">
        <fwb-input size="sm" type="date" v-model="hasta" />
      </FormLabel>
      <fwb-button title="Cargar Pagos" color="default" pill square type="submit">
        <ArrowRightIcon class="w-4 h-4" />
      </fwb-button>

      <fwb-button
        title="Guardar como excel"
        color="green" pill
        :href="excelLink"
      >
        <template #prefix> <ExcelIcon class="w-5 h-5" /> </template>
        Excel
      </fwb-button>
    </form>

    <p class="bg-gray-50 border-l-4 border-gray-500 rounded-r-md pr-7 py-3 text-sm pl-3 shadow mb-4 max-w-md text-gray-600">
      Ordenes encontradas en el rango de fechas: <b>{{ orders.length }}</b>
    </p>
    <tabla-ordenes :orders="orders" />
  </main>
</template>
