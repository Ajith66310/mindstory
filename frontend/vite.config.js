import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  // This ensures assets are served from /mindstory/ instead of the root
  base: "/mindstory/", 
  plugins: [react(), tailwindcss()],
})