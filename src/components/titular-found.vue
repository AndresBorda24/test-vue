<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section>
    <beneficiario-card :data="data.data" tipo="T" class="mb-5">
      <template #title>
        <span class="text-2xl text-aso-primary">Titular:</span>
      </template>
    </beneficiario-card>

    <template v-if="data.beneficiarios.length > 0">
      <span class="text-2xl text-yellow-500">Listado de Beneficiarios:</span>
      <div class="grid gap-3 beneficiarios-grid">
        <beneficiario-card
          v-for="(beneficiario, index) in data.beneficiarios" :key="beneficiario.id"
          :data="beneficiario"
          tipo="B"
        >
          <template #title>
            <span class="h-6 w-6 block p-1 rounded-full leading-tight text-center text-xs bg-yellow-500 text-white mb-1">
              {{ index + 1 }}
            </span>
          </template>
        </beneficiario-card>
      </div>
    </template>
  </section>
</template>

<style>
  .beneficiarios-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
</style>
