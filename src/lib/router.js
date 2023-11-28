import { routes } from "@/routes"
import { useViewLoad } from "../stores/ViewLoad"
import { createRouter, createWebHistory } from 'vue-router'

export function getRouter() {
    const viewLoad = useViewLoad()
    const router   = createRouter({
        history: createWebHistory(),
        routes
    })

    router.beforeEach(() => {
        viewLoad.setLoadingTrue()
    })

    router.afterEach(() => {
        viewLoad.setLoadingFalse()
    })

    return router
}
