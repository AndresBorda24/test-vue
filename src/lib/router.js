import { routes } from "@/routes"
import { useAuthStore } from "@/stores/Auth"
import { useViewLoad } from "@/stores/ViewLoad"
import { createRouter, createWebHistory } from 'vue-router'

export function getRouter() {
    const viewLoad = useViewLoad()
    const router   = createRouter({
        history: createWebHistory(),
        routes
    })

    router.beforeEach(async (to) => {
        viewLoad.setLoadingTrue()
        if (to.matched.some(record => record.meta.requiresAuth)) {
            if (! useAuthStore().session()) return { name: "unauthorized" }
        }
    })

    router.afterEach(() => {
        viewLoad.setLoadingFalse()
    })

    return router
}
