/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm graphite ramp, one accent (Monokai pink)
        bg: {
          deep: '#121113',
          DEFAULT: '#161517',
          card: '#1c1b1d',
          raised: '#252326',
        },
        fg: {
          DEFAULT: '#efece8',
          2: '#a9a4a6',
          3: '#8a8587',
        },
        line: 'rgb(239 236 232 / 0.08)',
        'line-strong': 'rgb(239 236 232 / 0.14)',
        accent: '#fc618d',
        ok: '#4cc38a',
        // Syntax colors live only inside the hero code window
        syn: {
          bg: '#211f22',
          text: '#fcfcfa',
          comment: '#928d8f',
          pink: '#fc618d',
          green: '#a9dc76',
          yellow: '#ffd866',
          cyan: '#78dce8',
          orange: '#fc9867',
          purple: '#ab9df2',
        },
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'Consolas', 'monospace'],
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        DEFAULT: '150ms',
      },
    },
  },
  plugins: [],
};
