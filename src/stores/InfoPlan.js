import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const useInfoPlanStore = defineStore('info-plan', () => {
  const state = ref({})

  const required = [
    "plan",
    "medioPago",
    "referencia",
  ]

  function $reset() {
    state.value = {}
  }

  const ready = computed(() => {
    return required.every(key => Boolean(state.value[key]))
  })

  return { state, ready, $reset }
})
