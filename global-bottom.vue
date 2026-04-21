<script setup lang="ts">
import { useNav } from '@slidev/client'
import lightLogo from './public/images/br-light-logo.svg'

const { currentLayout } = useNav()

const hiddenOn = ['cover', 'end']
</script>

<template>
  <img
    v-if="!hiddenOn.includes(currentLayout)"
    :src="lightLogo"
    alt=""
    aria-hidden="true"
    class="br-watermark"
  />
</template>

<style scoped>
.br-watermark {
  position: absolute;
  right: 1.25rem;
  bottom: 1.1rem;
  height: 1.2rem;
  width: auto;
  opacity: 0.22;
  pointer-events: none;
  user-select: none;
  z-index: 1;
}

/* Light mode swaps the logo and bumps contrast. Relative path so Vite resolves at build. */
html:not(.dark) .br-watermark {
  content: url('./public/images/br-dark-logo.svg');
  opacity: 0.35;
}
</style>
