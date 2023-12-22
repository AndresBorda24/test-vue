<script setup>
import { ref } from "vue"

const data = ref(false)
const busquedaParametros = ref({})
const onFetched = (d) =>{
  console.log(d.busqueda)

  data.value = d.data
  busquedaParametros.value = d.busqueda
}
</script>

<template>
  <pre-loader />
  <main class="max-w-3xl p-2 mx-auto py-8">
    <h1 class="text-aso-primary text-3xl mb-4">Busqueda Usuario Fidelizado</h1>
    <p class="text-sm">Puedes buscar por el documento de identidad de usuario o digitando el serial de la tarjeta:</p>
    <BusquedaFidelizado @fetched="onFetched"/>
    <hr class="mt-6 mb-3">

    <section
      v-if="data === null"
      class="flex flex-wrap justify-center gap-2 max-w-md mx-auto text-sm"
    >
      <no-id-icon class="h-16 w-16 text-yellow-600" />

      <p v-if="busquedaParametros.tipo == 'tarjeta'">
        No se ha encontrado ningún pago relacionado con la <span class="text-aso-primary font-bold">tarjeta</span> {{ busquedaParametros?.cc }}.
      </p>
      <p v-else>
        El documento {{ busquedaParametros?.cc  }} no se encuentra registrado ni como <span class="text-aso-primary font-bold">titular</span> ni como <span class="text-yellow-500 font-bold">beneficiario</span>.
      </p>
    </section>

    <section
      class="p-3"
      v-else-if="data !== null && data !== false"
    >
      <beneficiario-found
        :data="data"
        v-if="data.type === 'B'"
      />
      <titular-found
        v-else-if="data.type === 'T'"
        :data="data"
      />
    </section>
  </main>
</template>
