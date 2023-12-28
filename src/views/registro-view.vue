<template>
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

<style scoped>
  main {
    grid-template-columns: auto 1fr;
  }
</style>
