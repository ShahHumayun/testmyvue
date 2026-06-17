import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  return {
    plugins: [vue(), tailwindcss()],
    // If we are in 'development' mode, use root '/'
    // If we are in 'production' mode (for GitHub), use '/testmyvue/'
    base: mode === 'production' ? '/testmyvue/' : '/',
    resolve: {
      alias: {
        'vue': 'vue/dist/vue.esm-bundler.js'
      }
    }
  }
})