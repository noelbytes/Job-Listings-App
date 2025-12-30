import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// This file contains the configuration for your dev server
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()], // Used to enable React and TailwindCSS support in Vite
  server: {
    port: 3000, // Specify the port number for the development server
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true, 
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove /api prefix when forwarding requests to the target server
      }
    }
  },
  // content: [
  //   "./index.html",
  //   "./src/**/*.{js,jsx,ts,tsx}",
  // ],
  // theme: {
  //   extend: {
  //     fontFamily: {
  //       sans: ['Roboto', 'sans-serif'],
  //     },
  //     gridTemplateColumns: {
  //       '70/30': '70% 28%',
  //     },
  //   },
  // }
})
