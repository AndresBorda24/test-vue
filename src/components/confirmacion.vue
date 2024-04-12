<script setup>
import { createPago } from "@/api"
import { storeToRefs } from "pinia"
import { onMounted, ref } from "vue"
import { useRouter } from "vue-router"
import { useToast } from 'vue-toast-notification'
import { FwbButton } from 'flowbite-vue'

import { useAuthStore } from "@/stores/Auth"
import { useViewLoad } from "@/stores/ViewLoad"
import { usePlanesStore } from "@/stores/Planes"
import { useInfoPlanStore } from "@/stores/InfoPlan"
import { useInfoUsuarioStore } from "@/stores/InfoUsuario"

const plan   = ref({})
const toast  = useToast()
const router = useRouter()
const { state: auth } = storeToRefs( useAuthStore() )
const { state: infoPlan }= useInfoPlanStore()
const { state: infoUsuario, plan: infoUsuarioPlan } = useInfoUsuarioStore()

async function confirmado() {
  const { error, data } = await useViewLoad()
    .wrap(() => createPago(infoUsuario.id, {
      ... infoPlan,
      id: infoUsuarioPlan?.id
    }, auth.value.id))

  if (error || data != true) {
    toast.error("Ha ocurrido un error!", { duration: 6000, position: 'bottom-right' })
    return
  }

  toast.success("Pago Registrado!")
  router.push({ name: 'finale' })
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
    <div class="md:flex items-center gap-3">
      <UserIcon class="w-14 block mx-auto text-aso-tertiary"/>
      <div class="flex flex-1 text-sm flex-col">
        <div class="flex gap-2 p-1">
          <span class="font-bold">Nombre:</span>
          <span class="capitalize">{{ infoUsuario.nom1 }} {{ infoUsuario.ape1 }}</span>
        </div>
        <div class="flex gap-2 p-1">
          <span class="font-bold">Documento:</span>
          <span>{{ infoUsuario.num_histo }}</span>
        </div>
      </div>
    </div>

    <hr class="my-6 border-gray-300">

    <p class="text-aso-primary font-bold">Plan:</p>
    <div class="md:flex gap-3 mb-6">
      <PaymentIcon class="w-14 block mx-auto text-aso-tertiary"/>
      <div class="flex flex-1 text-sm flex-col">
        <div class="flex gap-2 p-1">
          <span class="font-bold">Valor:</span>
          <span class="capitalize">${{ plan.valor_formatted }}</span>
        </div>
        <div class="flex gap-2 p-1">
          <span class="font-bold">Nombre:</span>
          <span class="capitalize">Plan {{ plan.nombre }}</span>
        </div>
        <div class="flex gap-2 p-1">
          <span class="font-bold">Medio de Pago:</span>
          <span class="capitalize">{{ infoPlan.medioPago }}</span>
        </div>
        <div class="flex gap-2 p-1">
          <span class="font-bold">Referencia:</span>
          <span>{{ infoPlan.referencia }}</span>
        </div>
        <div
          v-if="Boolean(infoPlan.soporte)"
          class="flex gap-2 p-1"
        >
          <span class="font-bold">Soporte:</span>
          <span>{{ infoPlan.soporte.name }}</span>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-3">
      <fwb-button
        color="dark"
        class="text-center"
        @click="router.push({ name: 'select-plan' })"
      >Volver</fwb-button>
      <fwb-button
        color="green"
        @click="confirmado"
      >Confirmar!</fwb-button>
    </div>
  </div>
</template>
