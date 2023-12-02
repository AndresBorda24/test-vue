<script setup>
import { storeToRefs } from "pinia";
import { useViewLoad } from "@/stores/ViewLoad"

const { isLoading } = storeToRefs( useViewLoad() )
const loaderSrc = `${import.meta.env.VITE_APP_BASE}/loader.png`
</script>

<template>
  <Transition name="loader">
    <div
      v-if="isLoading"
      class="absolute w-full h-full bg-gray-200/80 z-10 flex items-center top-0 start-0"
    >
      <img :src="loaderSrc" alt="loader-chikito" class="w-10 mx-auto">
    </div>
  </Transition>
</template>

<style scoped>
  .loader-enter-active,
  .loader-leave-active {
    transition: opacity 300ms ease;
  }

  .loader-enter-from,
  .loader-leave-to {
    opacity: 0;
  }
</style>

