<script setup>
import { storeToRefs } from "pinia"
import { useRoute } from "vue-router"
import { FwbButton } from 'flowbite-vue'
import { useAuthStore } from "@/stores/Auth"
import { useInfoUsuarioStore } from "@/stores/InfoUsuario"

const route = useRoute()
const logo = import.meta.env.VITE_APP_URL + "logo-blanco.png"
const login = encodeURIComponent(import.meta.env.VITE_APP_URL)
const { state: auth, isLogged } = storeToRefs( useAuthStore() )
</script>

<template>
  <header class="bg-aso-secondary">
    <div class="max-w-5xl mx-auto p-3 flex justify-between items-center">
      <span class="flex items-center gap-3">
        <a href="https://intranet.asotrauma.com.co/indexloginadmin.php" >
          <img
            :src="logo"
            class="max-w-[30px] block"
            alt="Logo Asotrauma Blanco"
          >
        </a>
        <div class="border border-white"></div>
        <span class="text-white text-md md:text-lg">Programa de Fidelización</span>
      </span>

      <span
        v-if="isLogged"
        class="text-xs font-bold text-white"
      >{{ auth.name }}</span>
      <fwb-button
        v-else
        size="xs"
        gradient="red-yellow" outline
        :href="`https://intranet.asotrauma.com.co/iniciosesion.php?ruta=${login}`"
      >Hey! Debes Iniciar Sesión!</fwb-button>
    </div>

    <div class="bg-aso-primary p-2 text-center text-white">
      <div class="flex justify-center items-center gap-3 max-w-lg mx-auto">
        <router-link
          :to="{ name: 'search-user' }"
          @click="useInfoUsuarioStore().$reset()"
          :class="['hover:text-yellow-300 text-sm', {
            'text-yellow-300 underline': (
                route.matched[0]
                && route.matched[0].name == 'registro-routes'
              )
          }]"
        >Registro</router-link>

        <div class="border border-white"></div>

        <router-link
          :to="{ name: 'listado-pagos' }"
          :class="['hover:text-yellow-300 text-sm', {
            'text-yellow-300 underline': route.name == 'listado-pagos'
          }]"
        >Listado de Pagos</router-link>

        <div class="border border-white"></div>

        <router-link
          :to="{ name: 'listado-pagos' }"
          :class="['hover:text-yellow-300 text-sm', {
            'text-yellow-300 underline': route.name == 'buscar-fidelizado'
          }]"
        >Buscar Fidelizado</router-link>
      </div>
    </div>
  </header>
</template>
