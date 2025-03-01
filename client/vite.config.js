import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({ jsxRuntime: 'automatic',jsxImportSource: 'react' }), tailwindcss()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['/__Test__/setupTests.js'],
  }
  
})
