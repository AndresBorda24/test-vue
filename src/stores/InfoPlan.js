import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const useInfoPlanStore = defineStore('info-plan', () => {
  const state = ref({
    plan: null,
    soporte: null,
    medioPago: null,
    referencia: null
  })

  const required = [
    "plan",
    "medioPago",
    "referencia",
  ]

  const ready = computed(() => {
    return required.every(key => Boolean(state.value[key]))
  })

  return { state, ready }
})
