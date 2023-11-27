import { useInfoUsuarioStore } from "@/stores/InfoUsuario"

export const routes = [
  {
    path: '/',
    name: "info-usuario",
    component: () => import("@/components/info-usuario.vue"),
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
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import("@/components/not-found.vue")
  },
]
