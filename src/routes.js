import { registroRoutes } from "@/routes/registro-routes"


export const routes = [
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
    name: 'listado-pagos'
  },
  {
    path: '/no-autorizado',
    name: "unauthorized",
    meta: { requiresAuth: false },
    component: () => import("@/components/unauthorized.vue")
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    meta: { requiresAuth: false },
    component: () => import("@/views/404.vue")
  },
]
