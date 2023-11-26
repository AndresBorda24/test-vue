<script setup>
  import { ref } from "vue"
  import { FwbCard } from 'flowbite-vue'
  const planes = [
    {
        "id": 1,
        "nombre": "Amarillo",
        "vigencia": 365,
        "beneficios": "Descuento del 10% en exámenes, imágenes y consultas especializadas; Acceso a todos nuestros servicios habilitados; Atención preferencial en servicio de urgencias; Manilla distintiva; Diferentes opciones de menú durante tu estancia; Habitación unipersonal; Servicios de Streaming; Podrás afiliar a 8 personas independientemente el grado de consanguinidad",
        "valor": 50000,
        "status": 1,
        "entidad": "PARTIC",
        "contrato": "PREF2023",
        "plan": "01",
        "valor_formatted": "50.000"
    },
    {
        "id": 2,
        "nombre": "Celeste",
        "vigencia": 365,
        "beneficios": "Descuento del 15% en exámenes, imágenes y consultas especializadas; Acceso a todos nuestros servicios habilitados; Atención preferencial en servicio de urgencias; Manilla distintiva; Diferentes opciones de menú durante tu estancia; Habitación unipersonal; Servicios de Streaming; Podrás afiliar a 8 personas independientemente el grado de consanguinidad",
        "valor": 80000,
        "status": 1,
        "entidad": "PARTIC",
        "contrato": "PREF2023",
        "plan": "02",
        "valor_formatted": "80.000"
    }
  ]
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
