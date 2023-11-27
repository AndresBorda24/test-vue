<script setup>
  import { ref } from "vue"
  import { FwbCard } from 'flowbite-vue'
  import planes from "@/assets/planes"

  const selectedPlan = ref(null);
</script>

<template>
  <section class="flex flex-col gap-2 p-3">
    <span>Selecciona el plan:</span>
    <div
      v-for="plan in planes" :key="plan.id"
      class="flex gap-1 items-center"
    >
      <input
        name="plan"
        type="radio"
        :value="plan.id"
        v-model="selectedPlan"
        :id="`plan-${plan.id}`"
      >
      <label
        class="cursor-pointer flex-1"
        :for="`plan-${plan.id}`"
      >
        <fwb-card>
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-aso-primary dark:text-white">
              Plan: {{ plan.nombre }}
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Precio: ${{ plan.valor_formatted }}
            </p>
          </div>
        </fwb-card>
      </label>
    </div>
  </section>
</template>
