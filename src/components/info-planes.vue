<script setup>
import { watch, ref } from "vue"
import { storeToRefs } from "pinia"
import { useRouter } from "vue-router"
import { usePlanesStore } from "@/stores/Planes"
import { useInfoPlanStore } from "@/stores/InfoPlan"

import { FwbInput, FwbFileInput, FwbButton } from 'flowbite-vue'

// Icons xD
import NequiIcon from "@/icons/nequi-icon.vue"
import CashIcon from "@/icons/cash-icon.vue"
import CardIcon from "@/icons/card-icon.vue"
import GouIcon from "@/icons/gou-icon.vue"

const router = useRouter()
const fileError = ref(false)
const { state }  = storeToRefs( useInfoPlanStore() )
const { planes } = storeToRefs( usePlanesStore() )
const mediosDePago = {
  "Nequi": NequiIcon,
  "Efectivo": CashIcon,
  "Tarjeta": CardIcon,
  "Micrositio Gou": GouIcon
}

const onSubmit = () => router.push({ name: 'confirmacion' })

function volver() {
  useInfoPlanStore().$reset()
  router.push({ name: 'user-found' })
}

watch(() => state.value.soporte, () => {
  fileError.value = false
  if (state.value.soporte === null || ! Boolean(state.value.soporte)) return

  let sizeMb = state.value.soporte.size / 1024 / 1000
  if (sizeMb >= 5) fileError.value = true
})
</script>

<template>
  <p class="text-center text-aso-primary text-xl font-bold">Información sobre el plan</p>

  <form
    autocomplete="off"
    @submit.prevent="onSubmit"
    class="max-w-2xl mx-auto py-7"
  >
    <div class="flex flex-wrap gap-3 justify-center mb-5">
      <label
        v-for="plan in planes" :key="plan.id"
        :for="`plan${plan.id}`"
        class="cursor-pointer relative flex-1"
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
      <div class="flex flex-wrap gap-3 justify-center">
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
          <div :class="['p-3 border text-center rounded shadow-lg text-sm', {
            'bg-white hover:bg-teal-100': state.medioPago !== key,
            'bg-teal-800 text-teal-100 hover:bg-teal-700 [&_img.img-as-icon]:invert': state.medioPago === key,
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

      <div>
        <form-label val="Soporte">
          <fwb-file-input id="file-drop" v-model="state.soporte" dropzone />
          <p class="p-2">
            <span class="font-bold">Nota:</span>
            El archivo seleccionado no debe superar las 5 MB
          </p>

          <p
            v-if="Boolean(state.soporte) && fileError"
            class="text-red-500 text-xs p-2"
          >
            <span class="font-bold">Error:</span>
            El peso del archivo seleccionado es de
            {{
              state.soporte
              ? Math.floor(state.soporte.size /1024/1000)
              : ''
            }}
             MB
          </p>
        </form-label>
        <fwb-button
          outline
          size="xs"
          color="red"
          type="button"
          class="block ml-auto"
          v-if="Boolean(state.soporte)"
          @click="state.soporte = null"
        >Limpiar archivo</fwb-button>
      </div>


      <div class="grid grid-cols-2 gap-3">
        <fwb-button
          color="dark"
          class="text-center"
          type="button"
          @click="volver"
        >Volver</fwb-button>

        <fwb-button
          type="submit"
          color="yellow"
          :disabled="fileError"
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
