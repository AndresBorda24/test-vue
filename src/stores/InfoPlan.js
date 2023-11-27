import { ref } from "vue";
import { defineStore } from "pinia";

export const useInfoPlanStore = defineStore('info-plan', () => {
    const isReady = ref(false)

    const state = ref({
      plan: null,
      soporte: null,
      referencia: null
    })

    function finish() {
        isReady.value = true
    }

    return { state, isReady, finish }
})
