import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
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
  },
})
