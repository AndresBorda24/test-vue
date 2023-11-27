import { ref } from "vue"
import { defineStore } from "pinia"

export const useInfoUsuarioStore = defineStore('info-usuario', () => {
    const isReady = ref(false)
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

    function finish() {
      isReady.value = true;
    }

    return { state, isReady, finish }
})
