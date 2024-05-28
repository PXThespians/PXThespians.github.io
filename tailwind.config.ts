import type { Config } from 'tailwindcss'

export default {
  content: ['./app/routes/secret.tsx',
    './app/components/dropDown.tsx',
    './app/root.tsx'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

