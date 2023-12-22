<script setup>
import { ref } from "vue"

const data = ref(null)
const onFetched = (d) => data.value = d
</script>

<template>
  <pre-loader />
  <main class="max-w-3xl p-2 mx-auto py-8">
    <h1 class="text-aso-primary text-3xl mb-4">Busqueda Usuario Fidelizado</h1>
    <p class="text-sm">Puedes buscar por el documento de identidad de usuario o digitando el serial de la tarjeta:</p>
    <BusquedaFidelizado @fetched="onFetched"/>
    <hr class="mt-6 mb-3">
    <section class="p-3" v-if="data !== null">
      <beneficiario-found
        :data="data"
        v-if="data.type === 'B'"
      />
      <titular-found
        v-else-if="data.type === 'T'"
        :data="data"
      />
    </section>
  </main>
</template>
