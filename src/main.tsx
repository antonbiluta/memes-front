import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MemePage from "./App.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MemePage />
  </StrictMode>,
)
