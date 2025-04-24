import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Base URL for GitHub Pages
export default defineConfig({
  base: '/rock-paper-scissors-react/',  // Match your GitHub repo name exactly
  plugins: [react()],
})
