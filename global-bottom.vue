<script setup lang="ts">
import { useNav } from '@slidev/client'

const { currentLayout } = useNav()

const hiddenOn = ['cover', 'end']
</script>

<template>
  <img
    v-if="!hiddenOn.includes(currentLayout)"
    src="/images/br-light-logo.svg"
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

html:not(.dark) .br-watermark {
  content: url('/images/br-dark-logo.svg');
  opacity: 0.35;
}

@media print {
  .br-watermark {
    opacity: 0.15;
  }
}
</style>
