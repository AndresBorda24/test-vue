<script setup>
import { useRouter } from "vue-router"
import planes from "@/assets/planes.json"
import PlanCard from "@/components/plan-card.vue"
import FormLabel from "@/components/form-label.vue"
import { useInfoPlanStore } from "@/stores/InfoPlan"
import { FwbInput, FwbFileInput, FwbButton } from 'flowbite-vue'

// Icons xD
import NequiIcon from "@/icons/nequi.vue"
import CashIcon from "@/icons/cash.vue"
import CardIcon from "@/icons/card.vue"

const router = useRouter()

const mediosDePago = {
  "Nequi": NequiIcon,
  "Efectivo": CashIcon,
  "Tarjeta": CardIcon
}

const { state } = useInfoPlanStore()

function onSubmit() {
  console.log(state)
}
</script>

<template>
  <p class="text-center text-aso-primary text-xl">Información sobre el plan</p>

  <form
    autocomplete="off"
    @submit.prevent="onSubmit"
    class="max-w-2xl mx-auto py-7"
  >
    <div class="flex gap-3 justify-center mb-5">
      <label
        v-for="plan in planes" :key="plan.id"
        :for="`plan${plan.id}`"
        class="cursor-pointer relative"
      >
        <input
          required
          name="plan"
          type="radio"
          class="opacity-0 absolute bottom-0 left-1/2"
          :value="plan.id"
          v-model="state.plan"
          :id="`plan${plan.id}`"
        >
        <PlanCard :plan="plan" :selected="plan.id === state.plan"/>
      </label>
    </div>

    <div class="bg-gray-50 px-10 py-7 border rounded shadow-xl flex flex-col gap-5 max-w-md mx-auto">
      <span class="text-gray-500 text-xs">Medio de Pago</span>
      <div class="flex gap-3 justify-center">
        <label
          v-for="(value, key) in mediosDePago" :key="key"
          :for="`medioPago${key}`"
          class="cursor-pointer relative"
        >
          <input
            required
            type="radio"
            :value="key"
            name="medio-pago"
            class="opacity-0 absolute bottom-0 left-1/2"
            :id="`medioPago${key}`"
            v-model="state.medioPago"
          >
          <div :class="['p-3 border text-center rounded shadow-lg text-sm ', {
            'bg-white hover:bg-teal-100': state.medioPago !== key,
            'bg-teal-800 text-teal-100 hover:bg-teal-700': state.medioPago === key,
          }]">
            <span class="block w-12 mx-auto"><component :is="value"/></span>
            {{ key }}
          </div>
        </label>
      </div>

      <form-label val="Referencia">
        <fwb-input
          v-model.trim="state.referencia"
          required
          size="sm"
          name="pago-referencia"
          minlength="4"
          placeholder="xxxxxxxx"
        />
      </form-label>

      <form-label val="Soporte">
        <fwb-file-input id="file-drop" v-model="state.soporte" dropzone />
      </form-label>


      <div class="grid grid-cols-2 gap-3">
        <fwb-button
          color="dark"
          tag="router-link"
          class="text-center"
          :href="router.resolve({ name: 'info-usuario' }).href"
        >Volver</fwb-button>

        <fwb-button
          type="submit"
          color="yellow"
        >Siguiente</fwb-button>
      </div>
    </div>
  </form>
</template>
<style>
  #file-drop label {
    height: 120px !important;
  }
</style>
