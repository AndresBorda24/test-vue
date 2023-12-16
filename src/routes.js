
import { registroRoutes } from "@/routes/registro-routes"


export const routes = [
  {
    path: '/registro',
    component: () => import("@/views/registro-view.vue"),
    children: registroRoutes
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
