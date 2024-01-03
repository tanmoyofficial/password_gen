import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://tanmoyofficial.github.io/password_gen",
  plugins: [react()],
})
