<template>
  <section class="bg-gray-50 px-10 py-7 border rounded shadow-xl flex flex-col gap-5 max-w-md mx-auto">
    <p class="text-6xl text-aso-primary text-center">404</p>
    <p class="text-center font-bold">Página no Encontrada</p>

    <router-link
      class="rounded-lg text-sm px-5 py-2.5 me-2 mb-2 text-center text-white bg-aso-primary hover:bg-teal-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
      :to="{ name: 'info-usuario' }"
    >
      Ir a Inicio
    </router-link>
  </section>
</template>
