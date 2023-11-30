<script setup>
import Header from "@/components/header.vue"
import Stepper from "@/components/stepper.vue"
import PreLoader from "@/components/pre-loader.vue"
</script>

<template>
  <Header />
  <main class="max-w-3xl p-2 mx-auto py-8 md:grid gap-5">
    <section class="py-4">
      <Stepper />
    </section>
    <router-view v-slot="{ Component }">
      <section class="relative py-4 px-2 min-h-[500px]">
        <PreLoader />
        <component :is="Component" />
      </section>
    </router-view>
  </main>
</template>

<style>
  #app {
    font-family: 'poppins', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #f7f7f7;
    background-image: radial-gradient(#025b7d 0.5px,transparent 0);
    background-size: 29px 29px;
  }

  #app main {
    grid-template-columns: auto 1fr;
  }
</style>
