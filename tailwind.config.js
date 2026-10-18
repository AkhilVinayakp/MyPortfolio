/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Argon-inspired refined editorial palette
        argon: {
          bg: '#F8FAFC',         // Crisp alabaster canvas
          surface: '#FFFFFF',    // Pure card surface
          subtle: '#F1F5F9',     // Secondary technical surface
          border: '#E2E8F0',     // 1px hairlines
          dark: '#0F172A',       // Deep slate ink
          muted: '#475569',      // Secondary editorial text
          primary: '#4F46E5',    // Argon Indigo accent
          primaryHover: '#4338CA',
          accent: '#0EA5E9',     // Technical cyan highlight
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'argon-sm': '0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.02)',
        'argon-md': '0 4px 12px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.04)',
        'argon-lg': '0 12px 24px -4px rgba(15, 23, 42, 0.08), 0 4px 8px -2px rgba(15, 23, 42, 0.04)',
      }
    },
  },
  plugins: [],
};