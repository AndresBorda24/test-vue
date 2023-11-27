import { computed, ref } from "vue"
import { defineStore } from "pinia"

export const useInfoUsuarioStore = defineStore('info-usuario', () => {
  const state   = ref({
    nom1: null,
    nom2: null,
    ape1: null,
    ape2: null,
    cedula: null,
    correo: null,
    fech_nac: null,
    password: null,
    telefono: null,
    direccion: null
  })

  const required = [
    "nom1",
    "ape1",
    "cedula",
    "correo",
    "fech_nac",
    "password",
    "telefono",
    "direccion"
  ]

  const ready = computed(() => {
    return required.every(key => Boolean(state.value[key]))
  })

  return { state, ready }
})
