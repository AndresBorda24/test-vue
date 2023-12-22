<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section class="flex flex-col gap-3 md:flex-row">
    <beneficiario-card :data="data.data" tipo="B">
      <template #title>
        <span class="text-2xl text-yellow-500">
          Beneficiario:
        </span>
      </template>
    </beneficiario-card>

    <div class="flex flex-1">
      <right-icon class="text-aso-primary w-10 h-10 m-auto rotate-90 md:rotate-0"/>
    </div>

    <beneficiario-card :data="data.titular" tipo="T">
      <template #title>
        <span class="text-2xl text-aso-primary">Titular:</span>
      </template>
    </beneficiario-card>
  </section>
</template>
