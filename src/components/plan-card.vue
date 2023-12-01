<script setup>
const props = defineProps({
  plan: {
    required: true
  },
  selected: Boolean
})
</script>

<template>
  <div
    :class="['flex flex-col justify-center text-center h-full p-6 rounded-lg shadow-lg transition-colors duration-150', {
      'bg-white border-gray-200 hover:bg-gray-100': ! selected,
      'bg-teal-800 border-teal-400 hover:bg-teal-700': selected
    }]"
  >
    <h5
      :class="['mb-2 text-2xl font-bold tracking-tight', {
        'text-gray-900': ! selected,
        'text-white': selected
      }]"
    > Plan: {{ plan.nombre }} </h5>
    <p :class="['font-normal', {
        'text-gray-700': ! selected,
        'text-teal-300': selected
      }]"
    > Precio: ${{ plan.valor_formatted }}. </p>
  </div>
</template>
