<script setup>
import { useRouter } from "vue-router";
import { FwbButton } from "flowbite-vue";
import PaymentIcon from "@/icons/payment.vue"
import { useInfoPlanStore } from "@/stores/InfoPlan"
import { useInfoUsuarioStore } from "@/stores/InfoUsuario"

const router = useRouter()

function volver() {
  useInfoPlanStore().$reset()
  useInfoUsuarioStore().$reset()
  router.push({ name: 'search-user' })
}
</script>
<template>
  <p class="text-xl text-aso-primary text-center font-bold">Hecho!</p>
  <section class="bg-gray-50 px-10 py-7 border rounded shadow-xl max-w-md mx-auto">
    <PaymentIcon class="w-28 text-aso-secondary block mx-auto"/>
    <p class="text-center mb-8">
      Se ha registrado el pago correctamente!
    </p>
    <fwb-button
      class="w-1/2 block mx-auto"
      color="green"
      @click="volver"
    >Volver</fwb-button>
  </section>
</template>
