<script setup>
import { ref } from "vue"
import { storeToRefs } from "pinia"
import { useRoute } from "vue-router"

import CheckOk from "@/icons/check-ok.vue"
import ArrowRight from "@/icons/arrow-right.vue"

import { useInfoPlanStore } from "@/stores/InfoPlan"
import { useInfoUsuarioStore } from "@/stores/InfoUsuario"

const route = useRoute()

const { ready: planReady } = storeToRefs( useInfoPlanStore() )
const { ready: userReady } = storeToRefs( useInfoUsuarioStore() )

const steps = ref([
  {
    name: "Busqueda Usuario",
    route: "search-user",
    isReady: () => route.name !== "search-user"
  }, {
    name: "Creacion Usuario",
    route: "create-usuario",
    isReady: userReady
  }, {
    name: "Información del Plan",
    route: "info-planes",
    isReady: planReady
  }, {
    name: "Confirmación",
    route: "info-confirmacion",
    isReady: false
  }
])
</script>

<template>
  <ol class="space-y-4 w-72 sticky top-3">
    <li v-for="(step, index) in steps" :key="index">
      <div
        :class="['block w-full p-4 rounded-lg border shadow', {
          'text-blue-700 border-blue-300 bg-blue-50': route.name == step.route,
          'text-green-700 border-green-300 bg-green-50': step.isReady && (route.name != step.route),
          'text-gray-900 bg-gray-100 border border-gray-300': ! step.isReady && (route.name != step.route)
        }]"
        role="alert"
      >
        <div class="flex items-center justify-between text-sm">
          <span class="sr-only">{{ step.name }}</span>
          <h3 class="font-medium">{{ `${index + 1}. ${step.name}` }}</h3>
          <CheckOk
            class="w-4 h-4"
            v-if="step.isReady && route.name !== step.route"
          />
          <ArrowRight
            class="w-4 h-4"
            v-else-if="route.name === step.route"
          />
        </div>
      </div>
    </li>
  </ol>
</template>
