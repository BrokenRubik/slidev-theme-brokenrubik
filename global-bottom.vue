<script setup lang="ts">
import { onMounted } from 'vue'
import { useNav } from '@slidev/client'
import lightLogo from './public/images/br-light-logo.svg'

const { currentLayout } = useNav()

const hiddenOn = ['cover', 'end']

// Slidev inserts the `favicon` frontmatter value verbatim into <link rel="icon">
// without prefixing Vite's BASE_URL, so the default `/theme/favicon.ico` 404s
// whenever the deck is hosted under a sub-path (GitHub Pages, etc). Rewrite it
// on mount so icons under `/` get the current base applied.
onMounted(() => {
  const base = import.meta.env.BASE_URL
  if (!base || base === '/') return
  const links = document.querySelectorAll<HTMLLinkElement>('link[rel~="icon"]')
  for (const link of links) {
    const href = link.getAttribute('href') || ''
    if (!href.startsWith('/') || href.startsWith('//')) continue
    if (href.startsWith(base)) continue
    link.setAttribute('href', base.replace(/\/$/, '') + href)
  }
})
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
