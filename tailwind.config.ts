import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: 'hsl(var(--muted))',
        card: 'hsl(var(--card))',
        accent: 'hsl(var(--accent))'
      },
      boxShadow: {
        glow: '0 0 20px rgba(99, 102, 241, 0.35)'
      }
    }
  },
  plugins: []
};

export default config;
