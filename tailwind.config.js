/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        solar: {
          amber: '#f59e0b',
          blue: '#0ea5e9',
          dark: '#0f172a',
        }
      },
      backgroundImage: {
        'solar-mesh': "radial-gradient(at 0% 0%, rgba(245, 158, 11, 0.05) 0, transparent 50%), radial-gradient(at 50% 0%, rgba(14, 165, 233, 0.05) 0, transparent 50%)",
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
}
