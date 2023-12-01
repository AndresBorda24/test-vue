import { computed } from "vue";
import { getPlanes } from "@/api"
import { defineStore, storeToRefs } from "pinia"
import { useInfoUsuarioStore } from "@/stores/InfoUsuario"

const { data: __planes } = await getPlanes();

export const usePlanesStore = defineStore("planes", () => {
    /** @type { Array } */
    const _p = __planes
    const { state: infoUsuario } = storeToRefs( useInfoUsuarioStore() )

    // Dando por sentado que el id del plan colaborador es 3
    const planes = computed(() => {
        return (infoUsuario.value.intranet)
            ? _p
            : _p.filter(plan => plan.id != 3)
    })

    return { planes }
})
