/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/actions-example/',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
      thresholds: {
        lines: 40,
        branches: 40,
        functions: 40,
        statements: 40
      },
      reportOnFailure: true,
    }
  },
  
})
