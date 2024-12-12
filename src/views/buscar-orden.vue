<script setup>
import { getOrderInfo } from "@/api"
import { useViewLoad } from "@/stores/ViewLoad"
import { FwbInput, FwbButton } from 'flowbite-vue'
import OrderInfo from "../components/order-info.vue";
import { ref } from "vue";

const referencia = ref('');
const infoReferencia = ref(null);

const onSubmit = async () => {
  const { data } = await useViewLoad().wrap(
    () => getOrderInfo(referencia.value.trim())
  );

  infoReferencia.value = data;
}
</script>

<template>
  <main class="max-w-5xl p-2 mx-auto py-8">
    <pre-loader />
    <h1 class="text-aso-primary text-3xl mb-4">Información de Pagos.</h1>
    <p class="text-sm mb-2">La Información que se mostrará corresponden únicamente a las transacciones realizadas por el <b>Web-Checkout</b>.</p>
    <p class="text-sm mb-2">Ingresa el número de la referencia y da Enter.</p>
    <form @submit.prevent="onSubmit" class="mb-4 flex flex-wrap  gap-3 p-3 items-end">
      <FormLabel val="Referencia">
        <fwb-input
          size="sm"
          type="search"
          placeholder="7362"
          required
          v-model="referencia"
        />
      </FormLabel>
      <fwb-button
        title="Buscar"
        color="default"
        type="submit"
        pill square
        class="mb-1"
      > <ArrowRightIcon class="w-4 h-4"/> </fwb-button>
    </form>

    <order-info v-if="infoReferencia" :order="infoReferencia" />
    <span
      v-else
      class="border-l-4 p-3 rounded-r bg-red-50 text-red-900 border-red-800"
    >Información del pago no encontrada. Por favor revisa la referencia.</span>
  </main>
</template>
