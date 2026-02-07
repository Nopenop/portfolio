import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App, MyButton } from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <MyButton />
  </StrictMode>,
)
