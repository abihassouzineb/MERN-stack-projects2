import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ForeverAppProvider } from './context/ForeverAppContext.jsx'
import { ClerkProvider } from "@clerk/clerk-react"

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

console.log(clerkPubKey);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <ForeverAppProvider>
        <App />
      </ForeverAppProvider>
    </ClerkProvider>
  </StrictMode>
)
