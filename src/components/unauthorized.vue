<script setup>
import { FwbButton } from 'flowbite-vue'
import { useAuthStore } from "@/stores/Auth"

const Auth = useAuthStore();
const login = encodeURIComponent(import.meta.env.VITE_APP_URL);
</script>

<template>
  <section class="max-w-xl mx-auto p-4">
    <p class="text-xl text-aso-primary text-center font-bold mb-4">No Autorizado</p>
    <section class="bg-gray-50 px-10 py-7 border rounded shadow-xl mx-auto text-center">
      <LockIcon fill="currentColor" class="w-40 text-aso-tertiary mx-auto block mb-4" />

      <template v-if="! Auth.isLogged">
        <p class="mb-8 text-lg">Debes iniciar sesión para continuar.</p>
        <fwb-button
          :href="`https://intranet.asotrauma.com.co/iniciosesion.php?ruta=${login}`"
          color="red"
        >Ir a Inicio de Sesión</fwb-button>
      </template>
      <template v-else>
        <p class="mb-8 text-lg">Parece que no cumples con los <span class="text-red-700 font-bold">Permisos</span> suficiones para acceder a este recurso.</p>
      </template>
    </section>
  </section>
</template>
