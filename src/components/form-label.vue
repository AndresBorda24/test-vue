<script setup>
  const props = defineProps({
    val: {
      required: true,
      type: String
    }
  })
</script>

<template>
  <label class="text-gray-500 text-xs">
    {{ val }}
    <slot />
  </label>
</template>
