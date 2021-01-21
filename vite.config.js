import vue from '@vitejs/plugin-vue'

/**
 * @type {import('vite').UserConfig}
 */
export default {
  build: {
    cssCodeSplit: false
  },
  plugins: [vue()]
}
