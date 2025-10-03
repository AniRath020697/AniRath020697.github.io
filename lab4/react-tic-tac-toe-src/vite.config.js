import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/lab4/react-tic-tac-toe/',   // important for GitHub Pages
})
