<script setup>
import { storeToRefs } from "pinia"
import { useRoute } from "vue-router"
import { FwbButton } from 'flowbite-vue'
import { useAuthStore } from "@/stores/Auth"
import { useInfoUsuarioStore } from "@/stores/InfoUsuario"
import { SISTEMAS, TESORERIA, ADMISIONES } from "@/areas"

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
      <div
        v-if="isLogged"
        class="flex justify-center items-center gap-3 max-w-lg mx-auto"
      >
        <router-link
          v-if="[SISTEMAS, TESORERIA, ADMISIONES].includes(auth.area)"
          header-link
          :to="{ name: 'search-user' }"
          @click="useInfoUsuarioStore().$reset()"
          :class="['hover:text-yellow-300 text-sm', {
            'text-yellow-300 underline': (
                route.matched[0]
                && route.matched[0].name == 'registro-routes'
              )
          }]"
        >Registro</router-link>


        <router-link
          header-link
          v-if="[SISTEMAS, TESORERIA].includes(auth.area)"
          :to="{ name: 'listado-pagos' }"
          :class="['hover:text-yellow-300 text-sm', {
            'text-yellow-300 underline': route.name == 'listado-pagos'
          }]"
        >Listado de Pagos</router-link>

        <router-link
          header-link
          :to="{ name: 'buscar-fidelizado' }"
          :class="['hover:text-yellow-300 text-sm', {
            'text-yellow-300 underline': route.name == 'buscar-fidelizado'
          }]"
        >Buscar Fidelizado</router-link>
      </div>

      <LockIcon v-else fill="currentColor" class="w-6 h-6 mx-auto" />
    </div>
  </header>
</template>

<style scoped>
  [header-link] {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  [header-link]:not(:first-child)::before {
    content: '';
    border-radius: 100%;
    border: 1px solid #fff;
  }
</style>
