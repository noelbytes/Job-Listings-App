import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()], // Used to enable React and TailwindCSS support in Vite
  server: {
    port: 3000, // Specify the port number for the development server
  }
})
