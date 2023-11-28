import { getPlanes } from "@/api"
import { defineStore } from "pinia"

const { data: __planes } = await getPlanes();

export const usePlanesStore = defineStore("planes", () => {
    const planes = __planes
    return { planes }
})
