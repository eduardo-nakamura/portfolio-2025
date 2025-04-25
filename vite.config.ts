import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repositoryName = 'portfolio-2025'; 

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? `/${repositoryName}/` : '/',
})
