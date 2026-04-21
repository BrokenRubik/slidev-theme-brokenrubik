<script setup lang="ts">
import lightLogo from '../public/images/br-light-logo.svg'
import darkLogo from '../public/images/br-dark-logo.svg'

const props = withDefaults(
  defineProps<{
    /** 'auto' swaps based on color scheme. 'light' = white fill, 'dark' = black fill. */
    variant?: 'light' | 'dark' | 'auto'
  }>(),
  { variant: 'auto' },
)
</script>

<template>
  <img
    :src="variant === 'dark' ? darkLogo : lightLogo"
    :class="['br-logo', `br-logo-${variant}`]"
    alt="BrokenRubik"
  />
</template>

<style scoped>
.br-logo {
  display: inline-block;
  width: auto;
}
/* Auto mode — CSS swaps based on theme. Relative paths so Vite processes them at build time. */
.br-logo-auto { content: url('../public/images/br-light-logo.svg'); }
html:not(.dark) .br-logo-auto { content: url('../public/images/br-dark-logo.svg'); }
</style>
