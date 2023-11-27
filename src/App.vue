<script setup>
import Header from "@/components/header.vue"
import Stepper from "@/components/stepper.vue"
</script>

<template>
  <Header />
  <main class="max-w-4xl p-2 mx-auto py-12 flex items-center">
    <Stepper />
    <section class="flex-1">
      <router-view />
    </section>
  </main>
</template>

<style>
  #app {
    font-family: 'poppins', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #f7f7f7;
    background-image: radial-gradient(#025b7d 0.5px,transparent 0);
    background-size: 29px 29px;
  }
</style>
