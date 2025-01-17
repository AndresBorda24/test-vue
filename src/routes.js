import { ADMISIONES, SISTEMAS, TESORERIA } from "@/areas"

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
    meta: {
      requiresAuth: true,
      requiresAreas: [
        SISTEMAS, TESORERIA, ADMISIONES
      ]
    },
    children: registroRoutes
  },
  {
    path: '/listado-pagos',
    component: () => import("@/views/listado-pagos-view.vue"),
    meta: {
      requiresAuth: true,
      requiresAreas: [
        SISTEMAS, TESORERIA
      ]
    },
    name: 'listado-pagos'
  },
  {
    path: '/buscar-orden',
    component: () => import("@/views/listado-ordenes-view.vue"),
    meta: {
      requiresAuth: true,
      requiresAreas: [
        SISTEMAS, TESORERIA
      ]
    },
    name: 'buscar-orden'
  },  {
    path: '/buscar-fidelizado',
    component: () => import("@/views/buscar-fidelizado-view.vue"),
    meta: {
      requiresAuth: true,
      // requiresAreas: [
        // SISTEMAS, TESORERIA, ADMISIONES, RX
      // ]
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
