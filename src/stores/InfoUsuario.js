import { fetchUser } from "@/api"
import { computed, ref } from "vue"
import { defineStore } from "pinia"

export const useInfoUsuarioStore = defineStore('info-usuario', () => {
  const plan = ref(null)
  const state = ref(null)
  const fetched = ref(false)

  const ready = computed(() => Boolean(state.value.id))
  const exists = computed(() => state.value.id !== null && Boolean(state.value.id))
  const hasPlan = computed(() => plan.value !== null && plan.value.valid)
  const planExpira = computed(() => {
    if (! hasPlan.value) return null
    const created = new Date(plan.value.created_at)
    created.setDate( created.getDate() + plan.value.vigencia )
    return created
  })

  async function fetchInfo( documento ) {
    const { data, error } = await fetchUser( documento )
    if (error !== null) return error

    if (data !== null) {
      data.info.num_histo = data.info.documento
      delete data.info.documento

      state.value = data.info
      plan.value  = data.pago
    }

    fetched.value = true
  }

  function $reset() {
    fetched.value = false
    plan.value  = null
    state.value = {}
  }

  $reset()
  return { state, ready, exists, hasPlan, plan, planExpira, fetchInfo, fetched, $reset }
})
