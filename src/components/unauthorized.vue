<script setup>
import LockIcon from "@/icons/lock.vue"
import { FwbButton } from 'flowbite-vue'

const login = encodeURIComponent(import.meta.env.VITE_APP_URL);
</script>

<template>
<p class="text-xl text-aso-primary text-center font-bold">No Autorizado</p>
  <section class="bg-gray-50 px-10 py-7 border rounded shadow-xl mx-auto text-center">
    <LockIcon fill="currentColor" class="w-40 text-aso-tertiary mx-auto block mb-4" />
    <p class="mb-8 text-lg">Debes iniciar sesión para continuar.</p>
    <fwb-button
      :href="`https://intranet.asotrauma.com.co/iniciosesion.php?ruta=${login}`"
      color="red"
    >Ir a Inicio de Sesión</fwb-button>
  </section>
</template>
