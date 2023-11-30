<script setup>
import { ref, computed } from "vue"
import { storeToRefs } from "pinia"
import { useRoute } from "vue-router"

import CheckOk from "@/icons/check-ok.vue"
import ArrowRight from "@/icons/arrow-right.vue"

import { useInfoPlanStore } from "@/stores/InfoPlan"
import { useInfoUsuarioStore } from "@/stores/InfoUsuario"

const route = useRoute()

const { ready: planReady } = storeToRefs( useInfoPlanStore() )
const { ready: userReady } = storeToRefs( useInfoUsuarioStore() )

const confirmReady = computed(() => route.name === "finale")

const steps = ref([
  {
    name: "Busqueda Usuario",
    route: "search-user",
    isReady: true
  }, {
    name: "Creacion Usuario",
    route: "create-usuario",
    isReady: userReady
  }, {
    name: "Información del Plan",
    route: "select-plan",
    isReady: planReady
  }, {
    name: "Confirmación",
    route: "confirmacion",
    isReady: confirmReady
  }, {
    name: "Finale",
    route: "finale",
    isReady: false
  }
])
</script>

<template>
  <section class="relative md:sticky top-3 flex justify-center gap-3 flex-wrap md:flex-col">
    <div v-for="(step, index) in steps" :key="index">
      <div
        :class="['block w-full p-2 rounded-lg border shadow min-w-[53px] md:p-3', {
          'text-blue-700 border-blue-300 bg-blue-50': route.name == step.route,
          'text-green-700 border-green-300 bg-green-50': step.isReady && (route.name != step.route),
          'text-gray-900 bg-gray-100 border border-gray-300': ! step.isReady && (route.name != step.route)
        }]"
        role="alert"
      >
        <div class="flex items-center justify-between text-sm gap-2">
          <span class="sr-only">{{ step.name }}</span>
          <h3 class="font-medium">
            <span class="inline-block">{{ index + 1 }}.</span>
            <span :class="['text-center mb-2 absolute left-0 right-0 bottom-full md:ml-3 md:mb-0 md:static md:inline-block', {
              'hidden': route.name != step.route
            }]">{{ step.name }}</span>
          </h3>
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
    </div>
  </section>
</template>
