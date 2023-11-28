import { computed, ref } from "vue"
import { defineStore } from "pinia"

export const useInfoUsuarioStore = defineStore('info-usuario', () => {
  const state   = ref({
    id: null,
    nom1: null,
    nom2: null,
    ape1: null,
    ape2: null,
    clave: null,
    num_histo: null,
    ciudad: "Ibagué",
    email: null,
    fech_nac: null,
    telefono: null,
    direccion: null
  })

  const required = [
    "nom1",
    "ape1",
    "num_histo",
    "email",
    "fech_nac",
    "clave",
    "telefono",
    "direccion"
  ]

  const ready = computed(() => {
    return required.every(key => Boolean(state.value[key]))
  })

  const exists = computed(() => {
    return state.value.id !== null && Boolean(state.value.id)
  })

  return { state, ready, exists }
})
