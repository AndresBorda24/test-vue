<script setup>
import Header from "@/components/header.vue"
</script>

<template>
  <Header />
  <router-view></router-view>
</template>

<style>
  #app {
    font-family: 'poppins', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #f7f7f7;
    background-image: radial-gradient(#025b7d 0.5px,transparent 0);
    background-size: 29px 29px;
  }
</style>
