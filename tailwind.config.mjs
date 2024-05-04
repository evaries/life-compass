import { fontFamily } from 'tailwindcss/defaultTheme'
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bgColor: 'var(--theme-bg)',
        textColor: 'var(--theme-text)',
        link: 'var(--theme-link)',
        accent: 'var(--theme-accent)',
        'accent-2': 'var(--theme-accent-2)'
      },
      fontFamily: {
        // Add any custom fonts here
        sans: ['Inknut Antiqua', ...fontFamily.sans],
        serif: [...fontFamily.serif]
      },
      transitionProperty: {
        height: 'height'
      }
    }
  },
  plugins: []
}
