import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
      webp: {
        lossless: true,
      },
    }),
  ],
  server: {
    // Prevent CORS issues in development
    cors: true,
    // Security: Only allow localhost connections in development
    host: 'localhost',
  },
  build: {
    // Security: Disable source maps in production
    sourcemap: false,
    // Minify for production
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
          icons: ['react-icons'],
        },
      },
    },
  },
})
