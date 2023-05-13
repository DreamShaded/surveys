import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/src': path.resolve(__dirname, './src'),
      '@/pages': path.resolve(__dirname, './src/pages'),
      '@/shared/': path.resolve(__dirname, './src/shared'),
      '@/icons': path.resolve(__dirname, './src/assets/icons/index.ts'),
    },
  },
})
