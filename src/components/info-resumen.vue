<script setup>
import { useInfoPlanStore } from "@/stores/InfoPlan"
import { useInfoUsuarioStore } from "@/stores/InfoUsuario"
import { FwbListGroup, FwbListGroupItem } from 'flowbite-vue'

const { state: infoPlan }= useInfoPlanStore()
const { state: infoUsuario } = useInfoUsuarioStore()
</script>

<template>
  <p class="text-center text-aso-primary text-xl">Confirmación</p>

  <div class="bg-gray-50 px-8 py-6 border rounded shadow-md max-w-md mx-auto mb-10">
    <p class="text-aso-primary font-bold">Usuario:</p>
    <fwb-list-group class="w-full">
      <fwb-list-group-item class="flex gap-3">
        <span class="font-bold">Nombre:</span>
        <span class="capitalize">{{ infoUsuario.nom1 }} {{ infoUsuario.ape1 }}</span>
      </fwb-list-group-item>
      <fwb-list-group-item class="flex gap-3">
        <span class="font-bold">Documento:</span>
        <span>{{ infoUsuario.cedula }}</span>
      </fwb-list-group-item>
      <fwb-list-group-item class="flex gap-3">
        <span class="font-bold">Contraseña:</span>
        <span>{{ infoUsuario.password }}</span>
      </fwb-list-group-item>
    </fwb-list-group>

    <hr class="my-6 border-gray-300">

    <p class="text-aso-primary font-bold">Plan:</p>
    <fwb-list-group class="w-full">
      <fwb-list-group-item class="flex gap-3">
        <span class="font-bold">Medio de Pago:</span>
        <span class="capitalize">{{ infoPlan.medioPago }}</span>
      </fwb-list-group-item>
      <fwb-list-group-item class="flex gap-3">
        <span class="font-bold">Referencia:</span>
        <span>{{ infoPlan.referencia }}</span>
      </fwb-list-group-item>
    </fwb-list-group>
  </div>
</template>
