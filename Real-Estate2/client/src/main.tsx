import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { EstateAppContextProvider } from './context/EstateAppContext.tsx' 
import {ClerkProvider} from "@clerk/clerk-react"

const Key = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={Key}>
      <EstateAppContextProvider>
        <App />
      </EstateAppContextProvider>
    </ClerkProvider>
  </StrictMode>,
)
