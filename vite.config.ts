import { defineConfig } from 'vite'
import { join } from 'path'

import vue from '@vitejs/plugin-vue'
//
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': join(__dirname, './src'),
    },
  },
  plugins: [vue()],
  server: {
    port: 3000,
    open: true,
    hmr: {
      overlay: true,
    },
  },
})
