import { useInfoPlanStore } from "@/stores/InfoPlan"
import { useInfoUsuarioStore } from "@/stores/InfoUsuario"

export const registroRoutes = [
    {
        path: '',
        name: "search-user",
        component: () => import("@/components/user-search.vue"),
    },
    {
        path: 'usuario',
        name: "create-usuario",
        component: () => import("@/components/user-create.vue"),
        beforeEnter: () => {
            const { state } = useInfoUsuarioStore()
            if (!state.num_histo) return { name: "search-user" }
        }
    },
    {
        path: 'usuario-no-encontrado',
        name: "user-not-found",
        component: () => import("@/components/user-not-found.vue"),
        beforeEnter: () => {
            const { exists, state } = useInfoUsuarioStore()
            if (exists) return { name: "user-found" }
            if (!state.num_histo) return { name: "search-user" }
        }
    },
    {
        path: 'usuario-encontrado',
        name: "user-found",
        component: () => import("@/components/user-info.vue"),
        beforeEnter: () => {
            const { exists } = useInfoUsuarioStore()
            if (!exists) {
                return { name: "search-user" }
            }
        }
    },
    {
        path: 'plan',
        name: "select-plan",
        component: () => import("@/components/info-planes.vue"),
        beforeEnter: () => {
            if (!useInfoUsuarioStore().ready) return { name: "search-user" }
        }
    },
    {
        path: 'confirmacion',
        name: "confirmacion",
        component: () => import("@/components/confirmacion.vue"),
        beforeEnter: () => {
            if (!useInfoUsuarioStore().ready) return { name: "search-user" }
            if (!useInfoPlanStore().ready) return { name: "select-plan" }
        }
    },
    {
        path: 'finale',
        name: "finale",
        meta: { requiresAuth: false },
        component: () => import("@/components/finale.vue"),
        beforeEnter: () => {
            if (!useInfoUsuarioStore().ready) return { name: "search-user" }
            if (!useInfoPlanStore().ready) return { name: "select-plan" }
        }
    }
]
