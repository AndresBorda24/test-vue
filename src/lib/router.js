import { routes } from "@/routes"
import { storeToRefs } from "pinia"
import { useAuthStore } from "@/stores/Auth"
import { useViewLoad } from "@/stores/ViewLoad"
import { createRouter, createWebHistory } from 'vue-router'

export function getRouter() {
    const viewLoad = useViewLoad()
    const router   = createRouter({
        history: createWebHistory(import.meta.env.VITE_APP_BASE),
        routes,
    })

    router.beforeEach(async (to) => {
        viewLoad.setLoadingTrue()
        await useAuthStore().session()
        const { state: auth, isLogged } = storeToRefs( useAuthStore() )

        if (to.matched.some(record => record.meta.requiresAuth)) {
            if (! isLogged.value) return { name: "unauthorized" }
        }

        const requiredArea = to.matched.some(record => {
            const areas = record.meta.requiresAreas

            if (! areas || ! Array.isArray(areas)) return false
            if (! areas.includes(auth.value.area)) return true

            return false
        })

        if (requiredArea) return { name: "unauthorized" }
    })

    router.afterEach(() => viewLoad.setLoadingFalse())

    return router
}
