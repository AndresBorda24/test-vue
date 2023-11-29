import { useInfoPlanStore } from "@/stores/InfoPlan"
import { useInfoUsuarioStore } from "@/stores/InfoUsuario"

export const routes = [
  {
    path: '/',
    name: "info-usuario",
    component: () => import("@/components/buscar-usuario.vue"),
  },
  {
    path: '/usuario',
    name: "create-usuario",
    component: () => import("@/components/create-usuario.vue"),
    beforeEnter: () => {
      const { state } = useInfoUsuarioStore()
      if (! state.num_histo ) {
        return { name: "info-usuario" }
      }
    }
  },
  {
    path: '/plan',
    name: "info-planes",
    component: () => import("@/components/info-planes.vue"),
    beforeEnter: () => {
      if (! useInfoUsuarioStore().ready ) {
        return { name: "info-usuario" }
      }
    }
  },
  {
    path: '/confirmacion',
    name: "info-confirmacion",
    component: () => import("@/components/info-resumen.vue"),
    beforeEnter: () => {
      if (! useInfoUsuarioStore().ready ) {
        return { name: "info-usuario" }
      }
      if (! useInfoPlanStore().ready ) {
        return { name: "info-planes" }
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import("@/components/not-found.vue")
  },
]
