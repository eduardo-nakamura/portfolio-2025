import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset.css'
import './var.css'
import App from './App.tsx'

import './i18n'; // Importe o i18n aqui

createRoot(document.getElementById('root')!).render(
  <StrictMode>    
      <App />    
  </StrictMode>,
)
