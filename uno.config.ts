import { defineConfig } from 'unocss'

/**
 * BrokenRubik brand tokens exposed as UnoCSS utility classes.
 *
 * Decks should never hard-code hex values — use these semantic classes:
 *   text-primary / text-secondary / text-accent
 *   bg-primary / bg-secondary / bg-accent
 *   border-primary / border-secondary / border-accent
 *   text-primary/40 (opacity modifier)
 *   bg-brand-surface / bg-brand-black / border-brand-border
 */
export default defineConfig({
  theme: {
    colors: {
      primary: 'rgb(149 71 255 / <alpha-value>)',
      secondary: 'rgb(223 249 95 / <alpha-value>)',
      accent: 'rgb(255 112 122 / <alpha-value>)',
      brand: {
        black: '#000000',
        surface: '#0a0a0a',
        'surface-elev': '#141414',
        border: '#222222',
        muted: 'rgba(255, 255, 255, 0.55)',
        faint: 'rgba(255, 255, 255, 0.08)',
      },
    },
  },
  shortcuts: {
    'br-eyebrow': 'text-primary text-sm font-semibold uppercase tracking-widest',
    'br-caption': 'text-brand-muted text-sm',
    'br-ring-primary': 'ring-1 ring-primary/35 bg-primary/10',
    'br-ring-secondary': 'ring-1 ring-secondary/30 bg-secondary/8',
    'br-ring-accent': 'ring-1 ring-accent/30 bg-accent/8',
  },
  rules: [
    ['selection-brand', { '--tw-prose-selection': 'rgb(223 249 95)' }],
  ],
})
