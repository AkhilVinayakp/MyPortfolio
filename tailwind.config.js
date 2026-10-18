/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#08090c', // Deepest background
          900: '#0d1117', // Surface base
          850: '#111622', // Card panel
          800: '#171e2c', // Elevated hover panel
          border: 'rgba(255, 255, 255, 0.08)',
          muted: '#8a9597', // Titanium muted
        },
        cyber: {
          cyan: '#00d2ff',     // Fremen Ibad / Data & Cloud
          cyanHover: '#38bdf8',
          emerald: '#10b981',  // Latverian Plasma / ML & MLOps
          emeraldGlow: '#00ff66',
          sand: '#e6c280',     // Arrakis Gold / Certifications
          ochre: '#d87d2b',
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', '"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'cyan-sm': '0 0 12px -2px rgba(0, 210, 255, 0.35)',
        'cyan-glow': '0 0 25px -4px rgba(0, 210, 255, 0.45)',
        'emerald-sm': '0 0 12px -2px rgba(16, 185, 129, 0.35)',
        'emerald-glow': '0 0 25px -4px rgba(16, 185, 129, 0.45)',
        'dual-glow': '-12px 0 25px -5px rgba(0, 210, 255, 0.3), 12px 0 25px -5px rgba(16, 185, 129, 0.3)',
        'glass': '0 0 0 1px rgba(255, 255, 255, 0.08), 0 8px 24px -4px rgba(0, 0, 0, 0.6)',
      },
      backgroundImage: {
        'hud-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px)',
        'radial-cyber': 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0, 210, 255, 0.12) 0%, transparent 70%)',
        'radial-emerald': 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(16, 185, 129, 0.12) 0%, transparent 70%)',
      },
      backgroundSize: {
        'grid-md': '32px 32px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
      },
    },
  },
  plugins: [],
};