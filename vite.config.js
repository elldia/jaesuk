import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/jaesuk/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
