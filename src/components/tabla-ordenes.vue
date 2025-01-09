<script setup>
import { ref } from "vue"
import {
  FwbTable,
  FwbTableBody,
  FwbTableCell,
  FwbTableHead,
  FwbTableHeadCell,
  FwbTableRow,
} from 'flowbite-vue'

defineProps({
  orders: {
    default: []
  }
})

const detailId = ref(0)
const setDetailId = (id) => detailId.value = (detailId.value === id) ? 0 : id
const formatter = Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});
</script>

<template>
  <fwb-table hoverable class="max-h-[500px] overflow-y-scroll">
    <fwb-table-head class="sticky top-0">
      <fwb-table-head-cell></fwb-table-head-cell>
      <fwb-table-head-cell>#</fwb-table-head-cell>
      <fwb-table-head-cell>Estado</fwb-table-head-cell>
      <fwb-table-head-cell>Tipo</fwb-table-head-cell>
      <fwb-table-head-cell>Valor</fwb-table-head-cell>
      <fwb-table-head-cell>Cliente</fwb-table-head-cell>
      <fwb-table-head-cell>Fecha Pago</fwb-table-head-cell>
      <fwb-table-head-cell>Detalle</fwb-table-head-cell>
    </fwb-table-head>

    <fwb-table-body class="text-xs">
      <template v-for="order in orders" :key="order.id">
        <fwb-table-row :class="detailId === order.id && '!border-b-0 !bg-gray-50'">
          <fwb-table-cell class="!p-0">
            <button @click="setDetailId(order.id)" class="px-3 py-2">
              <ChevronDownIcon :class="['w-4 h-4 transition-transform duration-100', {
                'rotate-180': detailId === order.id
              }]" />
            </button>
          </fwb-table-cell>
          <fwb-table-cell>{{ order.id }}</fwb-table-cell>
          <fwb-table-cell>{{ order.status }}</fwb-table-cell>
          <fwb-table-cell>{{ order.data.name }}</fwb-table-cell>
          <fwb-table-cell>{{ formatter.format(order.data.price) }}</fwb-table-cell>
          <fwb-table-cell>{{ order.nombre }}</fwb-table-cell>
          <fwb-table-cell class="whitespace-nowrap">{{ order.created_at }}</fwb-table-cell>
          <fwb-table-cell class="whitespace-nowrap">{{ order.order_id }}</fwb-table-cell>
        </fwb-table-row>

        <Transition name="slide-up">
          <fwb-table-row v-if="detailId === order.id">
            <fwb-table-cell colspan="8" class="bg-gray-50">
              <div class="text-left grid gap-3 grid-cols-2 justify-items-center max-w-[700px] lg:mx-auto">
                <div>
                  <span class="font-bold text-md">Información del Cliente</span>
                  <ul class="list-disc pl-7">
                    <li>{{ order.nombre }}</li>
                    <li>{{ order.documento }}</li>
                    <li>{{ order.telefono }}</li>
                    <li>{{ order.email }}</li>
                  </ul>
                </div>

                <div>
                  <span class="font-bold text-md">Información Extra</span>
                  <ul class="list-disc pl-7">
                    <li>Última modificación: {{ order.updated_at }}</li>
                    <li>Saved: {{ order.saved }}</li>
                  </ul>
                </div>
              </div>
            </fwb-table-cell>
          </fwb-table-row>
        </Transition>
      </template>
    </fwb-table-body>
  </fwb-table>
</template>

<style>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 200ms ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(10px);
  transition: all 100ms ease-out;
}
</style>
