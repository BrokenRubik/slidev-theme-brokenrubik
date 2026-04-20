<script setup lang="ts">
withDefaults(
  defineProps<{
    /** 'auto' swaps based on color scheme. 'light' = white fill, 'dark' = black fill. */
    variant?: 'light' | 'dark' | 'auto'
  }>(),
  { variant: 'auto' },
)
</script>

<template>
  <img
    :src="variant === 'dark' ? '/images/br-dark-logo.svg' : '/images/br-light-logo.svg'"
    :class="['br-logo', `br-logo-${variant}`]"
    alt="BrokenRubik"
  />
</template>

<style scoped>
.br-logo {
  display: inline-block;
  width: auto;
}
/* Auto mode — CSS replaces the image based on theme. */
.br-logo-auto { content: url('/images/br-light-logo.svg'); }
html:not(.dark) .br-logo-auto { content: url('/images/br-dark-logo.svg'); }
</style>
