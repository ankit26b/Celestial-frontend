import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@config': path.resolve(__dirname, './src/config'),
    },
  },
  plugins: [ react() ],
  server: {
    headers: {
      "Cross-Origin-Embedder-Policy": "require-corp",
      "Cross-Origin-Opener-Policy": "same-origin"
    },
    proxy: {
      '/users': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      }
    }
  }
})
