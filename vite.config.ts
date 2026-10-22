/// <reference types="vitest" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 80,
        compressionLevel: 9,
      },
      jpg: {
        quality: 82,
      },
      jpeg: {
        quality: 82,
      },
      webp: {
        lossless: false,
        quality: 82,
        alphaQuality: 80,
      },
      svg: {
        multipass: true,
      },
    }),
  ],
  build: {
    // Chunk splitting : sépare les vendors des chunks applicatifs
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react-vendor'
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'icons'
          }
        },
      },
    },
    // Limite de taille de chunk : alerte si dépasse 500 kB
    chunkSizeWarningLimit: 500,
  },
})
