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
        monokai: {
          bg: '#222222',
          panel: '#2d2a2e',
          gutter: '#19181a',
          sidebar: '#19181a',
          border: '#403e43',
          card: '#272428',
          cardHover: '#322f33',
          activeTab: '#222222',
          inactiveTab: '#2d2a2e',
          text: '#fcfcfa',
          muted: '#a8a2a8',
          dim: '#727072',
          pink: '#fc618d',
          green: '#7bd88f',
          yellow: '#fce566',
          cyan: '#5ad4e6',
          orange: '#fd9353',
          purple: '#948ae3',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Consolas', 'Monaco', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'editor': '0 20px 40px -15px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'glow-pink': '0 0 20px -3px rgba(252, 97, 141, 0.3)',
        'glow-green': '0 0 20px -3px rgba(123, 216, 143, 0.3)',
        'glow-cyan': '0 0 20px -3px rgba(90, 212, 230, 0.3)',
      }
    },
  },
  plugins: [],
}
