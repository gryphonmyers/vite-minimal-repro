import vue from '@vitejs/plugin-vue'

/**
 * @type {import('vite').UserConfig}
 */
export default {
  build: {
    manifest: true,
    rollupOptions: {
      input: "/src/main.js"
    }
  },
  plugins: [vue()]
}
