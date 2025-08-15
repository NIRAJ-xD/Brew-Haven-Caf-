import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Brew-Haven-Caf-/',
  server: {
    port: 3000
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})