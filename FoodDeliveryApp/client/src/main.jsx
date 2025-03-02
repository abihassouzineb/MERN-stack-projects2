import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {FoodAppContextProvider} from "./context/FoodAppContext.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FoodAppContextProvider>
      <App />
    </FoodAppContextProvider>
  </StrictMode>,
)
