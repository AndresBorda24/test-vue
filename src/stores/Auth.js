import { authPull } from "@/api"
import { defineStore } from "pinia"
import { ref, computed } from "vue"

const { data: auth } = await authPull();

export const useAuthStore = defineStore("auth", () => {
    const segs = 180
    const state = ref(auth)
    const isLogged = computed(() => state.value !== null)

    setTimeout(async () => {
        const { data } = await authPull()
        state.value = data
    }, 1000 * segs)

    return { state, isLogged }
})
