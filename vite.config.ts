/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'docs'
  },
  test: {
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'html', 'clover', 'json', 'json-summary'],
      include: ['src/**/*.*'],
      exclude: ['coverage/**', 'src/main.tsx', 'src/store.ts', 'src/vite-env.d.ts'],
      provider: 'v8',
      thresholds: {
        lines: 90,
        branches: 90,
        functions: 90,
        statements: 90
      },
      reportOnFailure: true,
    }
  },
  
})
