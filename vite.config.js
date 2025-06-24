// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Calender-app/', // <-- MUST match repo name
  plugins: [react()],
})
