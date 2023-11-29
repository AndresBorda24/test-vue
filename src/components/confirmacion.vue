<script setup>
import { createUser } from "@/api"
import { onMounted, ref } from "vue"
import { useRouter } from "vue-router"
import { useViewLoad } from "@/stores/ViewLoad"
import { usePlanesStore } from "@/stores/Planes"
import { useInfoPlanStore } from "@/stores/InfoPlan"
import { useInfoUsuarioStore } from "@/stores/InfoUsuario"
import { FwbListGroup, FwbListGroupItem, FwbButton } from 'flowbite-vue'

const plan = ref({})
const router = useRouter()
const { state: infoPlan }= useInfoPlanStore()
const { state: infoUsuario } = useInfoUsuarioStore()

async function confirmado() {
  const { error } = await useViewLoad().wrap(() => createUser({
    usuario: infoUsuario,
    pago: infoPlan
  }))
}

onMounted(() => {
  const { planes } = usePlanesStore()
  plan.value = planes.find(p => p.id == infoPlan.plan )
})
</script>

<template>
  <p class="text-center text-aso-primary text-xl font-bold">Confirmación</p>

  <div class="bg-gray-50 px-8 py-6 border rounded shadow-md max-w-md mx-auto mb-10">
    <p class="text-aso-primary font-bold">Usuario:</p>
    <fwb-list-group class="w-full">
      <fwb-list-group-item class="flex gap-3">
        <span class="font-bold">Nombre:</span>
        <span class="capitalize">{{ infoUsuario.nom1 }} {{ infoUsuario.ape1 }}</span>
      </fwb-list-group-item>
      <fwb-list-group-item class="flex gap-3">
        <span class="font-bold">Documento:</span>
        <span>{{ infoUsuario.num_histo }}</span>
      </fwb-list-group-item>
      <fwb-list-group-item class="flex gap-3">
        <span class="font-bold">Contraseña:</span>
        <span>{{ infoUsuario.clave }}</span>
      </fwb-list-group-item>
    </fwb-list-group>

    <hr class="my-6 border-gray-300">

    <p class="text-aso-primary font-bold">Plan:</p>
    <fwb-list-group class="w-full mb-6">
      <fwb-list-group-item class="flex gap-3">
        <span class="font-bold">Nombre:</span>
        <span class="capitalize">Plan {{ plan.nombre }}</span>
      </fwb-list-group-item>
      <fwb-list-group-item class="flex gap-3">
        <span class="font-bold">Valor:</span>
        <span class="capitalize">${{ plan.valor_formatted }}</span>
      </fwb-list-group-item>
      <fwb-list-group-item class="flex gap-3">
        <span class="font-bold">Medio de Pago:</span>
        <span class="capitalize">{{ infoPlan.medioPago }}</span>
      </fwb-list-group-item>
      <fwb-list-group-item class="flex gap-3">
        <span class="font-bold">Referencia:</span>
        <span>{{ infoPlan.referencia }}</span>
      </fwb-list-group-item>
    </fwb-list-group>

    <div class="grid grid-cols-2 gap-3">
      <fwb-button
        color="dark"
        tag="router-link"
        class="text-center"
        :href="router.resolve({ name: 'select-plan' }).href"
      >Volver</fwb-button>
      <fwb-button
        @click="confirmado"
        color="green"
      >Confirmar!</fwb-button>
    </div>
  </div>
</template>
