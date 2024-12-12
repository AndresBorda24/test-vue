<script setup>
import { FwbListGroup, FwbListGroupItem } from 'flowbite-vue'

const formatter = new Intl.NumberFormat('es-CO');
const props = defineProps({
  order: {
    required: true
  }
});
</script>

<template>
  <div class="grid lg:grid-cols-2 gap-8 p-3">
    <div>
      <span class="text-aso-secondary font-bold block">Información del Usuario</span>
      <fwb-list-group class="!w-auto">
        <fwb-list-group-item>
          <template #prefix> <user-id-icon class="h-4 w-4" /> </template>
          <div class="px-2">
            <span class="text-xs text-gray-500 block">Documento:</span>
            <span class="block">{{ order.tipo_documento }}: {{ order.documento }}</span>
          </div>
        </fwb-list-group-item>
        <fwb-list-group-item>
          <template #prefix> <user-icon class="h-4 w-4" /> </template>
          <div class="px-2">
            <span class="text-xs text-gray-500 block">Nombre:</span>
            <span class="block">{{ order.nombre }}</span>
          </div>
        </fwb-list-group-item>
        <fwb-list-group-item>
          <template #prefix> <email-icon class="h-4 w-4" /> </template>
          <div class="px-2">
            <span class="text-xs text-gray-500 block">Correo:</span>
            <span class="block">{{ order.email }}</span>
          </div>
        </fwb-list-group-item>
        <fwb-list-group-item>
          <template #prefix> <phone-icon class="h-4 w-4" /> </template>
          <div class="px-2">
            <span class="text-xs text-gray-500 block">Telefono:</span>
            <span class="block">{{ order.telefono }}</span>
          </div>
        </fwb-list-group-item>
        <fwb-list-group-item>
          <template #prefix> <user-id-icon class="h-4 w-4" /> </template>
          <div class="px-2">
            <span class="text-xs text-gray-500 block">Dirección:</span>
            <span class="block">{{ order.direccion }}</span>
          </div>
        </fwb-list-group-item>
      </fwb-list-group>
    </div>

    <div>
      <span class="text-aso-secondary font-bold block">Información de la Compra</span>
      <fwb-list-group class="!w-auto !bg-blue-50">
        <fwb-list-group-item>
          <template #prefix> <gou-icon class="h-4 w-4" /> </template>
          <div class="px-2">
            <span class="text-xs text-gray-500 block">Estado:</span>
            <span class="block">{{ order.status }}</span>
          </div>
        </fwb-list-group-item>
        <fwb-list-group-item>
          <template #prefix> <seal-icon class="h-4 w-4" /> </template>
          <div class="px-2">
            <span class="text-xs text-gray-500 block">Tipo:</span>
            <span class="block">{{ order.type }}</span>
          </div>
        </fwb-list-group-item>
        <fwb-list-group-item>
          <template #prefix> <user-icon class="h-4 w-4" /> </template>
          <div class="px-2">
            <span class="text-xs text-gray-500 block">Nombre:</span>
            <span class="block">{{ order.data?.name || order.data?.nombre }}</span>
          </div>
        </fwb-list-group-item>
        <fwb-list-group-item>
          <template #prefix> <card-icon class="h-4 w-4" /> </template>
          <div class="px-2">
            <span class="text-xs text-gray-500 block">Valor:</span>
            <span class="block">$ {{ formatter.format(order.data?.price || order.data?.valor)}}</span>
          </div>
        </fwb-list-group-item>
        <fwb-list-group-item>
          <template #prefix> <time-icon class="h-4 w-4" /> </template>
          <div class="px-2">
            <span class="text-xs text-gray-500 block">Fecha Creación:</span>
            <span class="block">{{ order.created_at }}</span>
          </div>
        </fwb-list-group-item>
      </fwb-list-group>
    </div>
  </div>
</template>
