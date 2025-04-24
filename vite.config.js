// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/rock-paper-scissors-react/', // 👈 match your GitHub repo name exactly!
  plugins: [react()],
})
