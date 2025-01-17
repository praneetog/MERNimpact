import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Example1 from './Example1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Example1 />
  </StrictMode>,
)
