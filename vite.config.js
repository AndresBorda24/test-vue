import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  // root: 'src',
  build: {
    manifest: true,
    rollupOptions: {
      input: './src/main.js'
    }
  },
  server: {
    origin: 'http://localhost:5173',
  },
  // envDir: './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
