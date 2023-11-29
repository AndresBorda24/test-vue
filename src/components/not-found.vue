<script setup>
import { FwbButton } from 'flowbite-vue'
import { useRouter } from "vue-router"

const router = useRouter()
const inicio = router.resolve({ name: 'search-user' })
</script>

<template>
  <section class="bg-gray-50 px-10 py-7 border rounded shadow-xl flex flex-col gap-5 max-w-md mx-auto">
    <p class="text-6xl text-aso-primary text-center">404</p>
    <p class="text-center font-bold">Página no Encontrada</p>

    <fwb-button
      :href="inicio.href"
      color="yellow"
      tag="router-link"
      class="text-center"
    >Ir a Inicio</fwb-button>
  </section>
</template>
