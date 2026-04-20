<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'light' | 'dark'
  }>(),
  { variant: 'light' },
)
</script>

<template>
  <img
    :src="variant === 'dark' ? '/images/br-dark-logo.svg' : '/images/br-light-logo.svg'"
    alt="BrokenRubik"
    class="br-logo"
  />
</template>

<style scoped>
.br-logo {
  display: inline-block;
  width: auto;
}
</style>
