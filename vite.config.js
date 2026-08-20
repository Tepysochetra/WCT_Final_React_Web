import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // This line acts as the engine that activates all your layout styles
  ],
})
