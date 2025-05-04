import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/nicholas-dwenger-portfolio/',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // This helps Vite resolve imports without extensions
  },
  build: {
    rollupOptions: {
      output: {
        // Ensures the correct file extensions and MIME types for production
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  }
})
