import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import YoutubeCloneProvider from './context/YoutubeCloneContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <YoutubeCloneProvider>
        <App />
    </YoutubeCloneProvider>
  </StrictMode>,
)
