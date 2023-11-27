import { useInfoUsuarioStore } from "@/stores/InfoUsuario"
// import InfoPlanes from "@/components/info-planes.vue"
// import InfoUsuario from "@/components/info-usuario.vue"

export const routes = [
  {
    path: '/',
    component: () => import("@/components/info-usuario.vue"),
    name: "info-usuario",
  },
  {
    path: '/plan',
    component: () => import("@/components/info-planes.vue"),
    name: "info-planes",
    beforeEnter: (to, from) => {
      if (! useInfoUsuarioStore().isReady ) {
        return { name: "info-usuario" }
      }
    }
  },
]
