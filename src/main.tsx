import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { MemoryGame } from './MemoryGame'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MemoryGame />
  </StrictMode>,
)
