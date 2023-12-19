<script setup>
import { ref } from "vue"
import { useToast } from 'vue-toast-notification'
import { setRegistrado } from "@/api"
import {
  FwbTable,
  FwbCheckbox,
  FwbTableBody,
  FwbTableCell,
  FwbTableHead,
  FwbTableHeadCell,
  FwbTableRow,
} from 'flowbite-vue'

defineProps({
  pagos: {
    default: []
  }
})

const toast = useToast()
const detailId = ref(0)
// Nos ayuda a identificar el item que esta "expandido"
const setDetailId = (id) => detailId.value = (detailId.value === id) ? 0 : id

// Realiza la solicitud y establece el pago como registrado
const setRegistradoVal = async (id, val) => {
  const { error } = await setRegistrado(id, val);
  if (error) toast.error("No se ha guardado el registro.")
}
</script>

<template>
  <fwb-table hoverable class="max-h-[500px] overflow-y-scroll">
    <fwb-table-head class="sticky top-0">
      <fwb-table-head-cell>#</fwb-table-head-cell>
      <fwb-table-head-cell class="max-w-[70px] !px-2">Registrado</fwb-table-head-cell>
      <fwb-table-head-cell>Tipo</fwb-table-head-cell>
      <fwb-table-head-cell>Valor</fwb-table-head-cell>
      <fwb-table-head-cell>Fecha Pago</fwb-table-head-cell>
      <fwb-table-head-cell>Detalle</fwb-table-head-cell>
      <fwb-table-head-cell></fwb-table-head-cell>
    </fwb-table-head>

    <fwb-table-body class="text-xs">
      <template v-for="pago in pagos" :key="pago.id">
        <fwb-table-row :class="detailId === pago.id && '!border-b-0 !bg-gray-50'">
          <fwb-table-cell>{{ pago.id }}</fwb-table-cell>
          <fwb-table-cell>
            <fwb-checkbox
              v-model="pago.registrado"
              @change="setRegistradoVal(pago.id, pago.registrado)"
            />
          </fwb-table-cell>
          <fwb-table-cell>{{ pago.type }}</fwb-table-cell>
          <fwb-table-cell>{{ pago.valor_pagado }}</fwb-table-cell>
          <fwb-table-cell class="whitespace-nowrap">{{ pago.created_at }}</fwb-table-cell>
          <fwb-table-cell>{{ pago.detail }}</fwb-table-cell>
          <fwb-table-cell> <button @click="setDetailId(pago.id)">#</button> </fwb-table-cell>
        </fwb-table-row>

        <Transition name="slide-up">
          <fwb-table-row v-if="detailId === pago.id">
            <fwb-table-cell colspan="7" class="bg-gray-50">
              <div class="text-left grid grid-cols-3 justify-items-center">
                <div>
                  <span class="font-bold text-md">Información del Cliente</span>
                  <ul class="list-disc">
                    <li>{{ pago.cliente_nombre }}</li>
                    <li>{{ pago.cliente_documento }}</li>
                    <li>{{ pago.cliente_telefono }}</li>
                    <li>{{ pago.cliente_email }}</li>
                  </ul>
                </div>

                <div>
                  <span class="font-bold text-md">Información de Quíen Registra</span>
                  <ul class="list-disc">
                    <li>{{ pago.quien_nombre }}</li>
                    <li>{{ pago.quien_documento }}</li>
                    <li>{{ pago.quien_area }}</li>
                  </ul>
                </div>

                <div>
                  <span class="font-bold text-md">Soporte del Detalle</span>
                  <FileIcon
                    v-if="pago.soporte"
                    class="w-12 h-12 text-aso-secondary block mx-auto"
                  />
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
  transform: translateY(20px);
  transition: all 0ms ease-out;
}
</style>
