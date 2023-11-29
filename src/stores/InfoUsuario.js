import { userExists } from "@/api"
import { computed, ref } from "vue"
import { defineStore } from "pinia"

export const useInfoUsuarioStore = defineStore('info-usuario', () => {
  const plan = ref(null)
  const state = ref(null)
  const fetched = ref(false)

  const required = [
    "nom1",
    "ape1",
    "num_histo",
    "email",
    "fech_nac",
    "telefono",
    "direccion"
  ]

  const ready = computed(() => required.every(key => Boolean(state.value[key])))
  const exists = computed(() => state.value.id !== null && Boolean(state.value.id))
  const hasPlan = computed(() => plan.value !== null)

  async function fetch( documento ) {
     // const { data, error } = await userExists( documento )
     // if (error !== null) return error
    state.value = {
      id:12,
      ape1:"Borda",
      ape2:null,
      clave:null,
      direccion:"Un tiburón que habla ingles en Japón",
      email:"anjart24@gmail.com",
      fech_nac:"2002-12-31",
      nom1:"Andres",
      nom2:"Jair",
      ciudad:"Ibagué",
      num_histo:"1005702274",
      telefono:"3209353216",
    }
    plan.value = {
      nombre: "Amarillo"
    }
    fetched.value = true
  }

  function $reset() {
    fetched.value = false
    plan.value  = null
    state.value = {
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
    }
  }

  $reset()
  return { state, ready, exists, hasPlan, fetch, fetched, $reset }
})
