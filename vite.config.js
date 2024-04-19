import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    emptyOutDir: true,
    sourcemap: true, // enable production source maps
  },
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
    devSourcemap: true, // enable CSS source maps during development
  },
});