<script setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/Auth"

const { state: auth, isLogged } = storeToRefs( useAuthStore() )
</script>

<template>
  <header class="bg-aso-secondary">
    <div class="max-w-5xl mx-auto p-3 flex justify-between items-center">
      <span class="text-white text-xl">Programa de Fidelización</span>
      <a
        target="_blank"
        href="https://intranet.asotrauma.com.co/indexloginadmin.php"
      >
        <img
          src="https://asotrauma.com.co/wp-content/uploads/2021/09/Asotrauma-logo-w.svg"
          alt="Logo Asotrauma"
          class="max-w-[110px] block"
        >
      </a>
    </div>
    <div class=" bg-aso-primary p-2 text-center text-white">
      <div class="flex justify-between items-center gap-3 max-w-lg mx-auto">
        <span>Registro de Usuarios</span>
        <span
          v-if="isLogged"
          class="text-xs font-bold"
        >{{ auth.name }}</span>
      </div>
    </div>
  </header>
</template>
