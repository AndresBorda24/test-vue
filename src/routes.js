import { useAuthStore } from "@/stores/Auth"
import { registroRoutes } from "@/routes/registro-routes"


export const routes = [
  {
    path: '/',
    redirect: '/registro'
  },
  {
    path: '/registro',
    component: () => import("@/views/registro-view.vue"),
    name: "registro-routes",
    children: registroRoutes
  },
  {
    path: '/listado-pagos',
    component: () => import("@/views/listado-pagos-view.vue"),
    meta: { requiresAuth: true },
    beforeEnter: () => {
      const { state } = useAuthStore();

      // Aqui estan los id de las areas permitidas para ver la tabla
      if (! [20, 24, 16].includes(state.area)) {
        return { name: "unauthorized" }
      }
    },
    name: 'listado-pagos'
  },
  {
    path: '/buscar-fidelizado',
    component: () => import("@/views/buscar-fidelizado-view.vue"),
    meta: { requiresAuth: true },
    beforeEnter: () => {
      const { state } = useAuthStore();

      // Aqui estan los id de las areas permitidas para ver la tabla
      if (! [20, 24, 16].includes(state.area)) {
        return { name: "unauthorized" }
      }
    },
    name: 'buscar-fidelizado'
  },
  {
    path: '/no-autorizado',
    name: "unauthorized",
    component: () => import("@/components/unauthorized.vue")
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    meta: { requiresAuth: false },
    component: () => import("@/views/404.vue")
  },
]
