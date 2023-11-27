import { ref } from "vue"
import { defineStore } from "pinia";
import _planes from "@/assets/planes.json"

export const usePlanesStore = defineStore("planes", () => {
    let planes = ref(null)

    async function getPlanes() {
        if (planes.value === null) {
            // Hacer solicitud
            planes.value = _planes
        }

        return planes.value
    }

    return { getPlanes }
})
