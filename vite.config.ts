import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repositoryName = 'seu-repositorio'; 

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? `/${repositoryName}/` : '/',
})
