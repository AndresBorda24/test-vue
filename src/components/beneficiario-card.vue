<script setup>
import { FwbListGroup, FwbListGroupItem } from 'flowbite-vue'

const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  tipo: {
    type: String,
    default: "B"
  }
})

function getNombre( data ) {
  return (Boolean(data.nombre))
    ? data.nombre
    : [
      data.nom1,
      data.nom2,
      data.ape1,
      data.ape2
    ].filter(i => i !== null).join(" ");
}
</script>

<template>
  <section>
    <slot name="title"></slot>

    <fwb-list-group class="!w-auto">
      <fwb-list-group-item>
        <template #prefix> <user-id-icon class="h-4 w-4"/> </template>
        <div class="px-2">
          <span class="text-xs text-gray-500 block">Documento:</span>
          <span class="block">{{ data.documento }}</span>
        </div>
      </fwb-list-group-item>
      <fwb-list-group-item>
        <template #prefix> <user-icon class="h-4 w-4"/> </template>
        <div class="px-2">
          <span class="text-xs text-gray-500 block">Nombre:</span>
          <span class="block">{{ getNombre( data ) }}</span>
        </div>
      </fwb-list-group-item>
      <fwb-list-group-item v-if="tipo === 'B'">
        <template #prefix> <user-group-icon class="h-4 w-4"/> </template>
        <div class="px-2">
          <span class="text-xs text-gray-500 block">Parentesco:</span>
          <span class="block">{{ data.parentesco }}</span>
        </div>
      </fwb-list-group-item>

      <template v-if="tipo === 'T'">
        <fwb-list-group-item>
        <template #prefix> <card-icon class="h-4 w-4"/> </template>
          <div class="px-2">
            <span class="text-xs text-gray-500 block">Tarjeta:</span>
            <span class="block">{{ data.tarjeta || 'No Registrada' }}</span>
          </div>
        </fwb-list-group-item>
        <fwb-list-group-item>
        <template #prefix> <seal-icon class="h-4 w-4"/> </template>
          <div class="px-2">
            <span class="text-xs text-gray-500 block">Plan:</span>
            <span class="block">{{ data.plan_nombre }}</span>
          </div>
        </fwb-list-group-item>
      </template>
    </fwb-list-group>
  </section>
</template>
