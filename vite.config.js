import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import laravel from 'laravel-vite-plugin'
import { defineConfig, loadEnv } from 'vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    base: Boolean(env.VITE_APP_BASE)
      ? `${env.VITE_APP_BASE}/build`
      : undefined,
    plugins: [
      Components({
        dirs: ["./src/components", "./src/views", "./src/icons"]
      }),
      laravel({
        input: 'src/main.js',
      }),
      vue({
        template: {
          transformAssetUrls: {
            base: null,
            includeAbsolute: false,
          },
        },
      })
    ],
    esbuild: {
      supported: {
        'top-level-await': true
      }
    },
    server: {
      origin: 'http://localhost:5173',
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
