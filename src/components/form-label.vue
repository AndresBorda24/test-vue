<script setup>
  const props = defineProps({
    val: {
      required: true,
      type: String
    }
  })
</script>

<template>
  <label class="text-aso-primary text-xs">
    {{ val }}
    <slot />
  </label>
</template>
