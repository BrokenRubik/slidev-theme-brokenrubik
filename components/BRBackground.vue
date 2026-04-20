<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    /** Path or URL to an image or video. */
    src: string
    /** Force the media type. Defaults to auto-detect from extension. */
    type?: 'auto' | 'image' | 'video'
    /**
     * Darkening overlay for text readability.
     * - `true` (default) → 55% black
     * - `false` → no overlay
     * - number (0–1) → custom opacity
     */
    overlay?: boolean | number
    /** Overlay color. Defaults to pure black. */
    overlayColor?: string
    /** Poster image shown while a video loads. */
    poster?: string
    /** Fit mode for the media. */
    fit?: 'cover' | 'contain'
    /** Z-index inside the slide. Default 0 (behind slide content). */
    z?: number
  }>(),
  {
    type: 'auto',
    overlay: true,
    overlayColor: '#000',
    fit: 'cover',
    z: 0,
  },
)

const kind = computed<'image' | 'video'>(() => {
  if (props.type !== 'auto') return props.type
  return /\.(mp4|webm|mov|ogv|m4v)(\?|#|$)/i.test(props.src) ? 'video' : 'image'
})

const overlayAlpha = computed(() => {
  if (props.overlay === false) return 0
  if (props.overlay === true) return 0.55
  const n = Number(props.overlay)
  return Number.isFinite(n) ? Math.max(0, Math.min(1, n)) : 0.55
})
</script>

<template>
  <div class="br-bg" :style="{ zIndex: z }">
    <video
      v-if="kind === 'video'"
      :src="src"
      :poster="poster"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      class="br-bg-media"
      :style="{ objectFit: fit }"
    />
    <img
      v-else
      :src="src"
      alt=""
      aria-hidden="true"
      class="br-bg-media"
      :style="{ objectFit: fit }"
    />
    <div
      v-if="overlayAlpha > 0"
      class="br-bg-overlay"
      :style="{ background: overlayColor, opacity: overlayAlpha }"
    />
  </div>
</template>

<style scoped>
.br-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}
.br-bg-media {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
}
.br-bg-overlay {
  position: absolute;
  inset: 0;
}
</style>
