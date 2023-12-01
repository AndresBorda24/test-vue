import { authPull } from "@/api"
import { defineStore } from "pinia"
import { ref, computed } from "vue"

export const useAuthStore = defineStore("auth", () => {
    const state = ref(null)
    const isLogged = computed(() => state.value !== null)

    async function session() {
        const { data } = await authPull()
        state.value = data

        return isLogged.value
    }

    return { state, session, isLogged }
})
