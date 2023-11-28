<script setup>
import Header from "@/components/header.vue"
import Stepper from "@/components/stepper.vue"
</script>

<template>
  <Header />
  <main class="max-w-4xl p-2 mx-auto py-12 flex justify-center gap-5">
    <section>
      <Stepper />
    </section>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <section>
          <component :is="Component" />
        </section>
      </transition>
    </router-view>
  </main>
</template>

<style>
  #app {
    font-family: 'poppins', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #f7f7f7;
    background-image: radial-gradient(#025b7d 0.5px,transparent 0);
    background-size: 29px 29px;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
