import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')!).render(
  <ClerkProvider publishableKey={'pk_test_bGlnaHQtdGFycG9uLTM5LmNsZXJrLmFjY291bnRzLmRldiQ'} afterSignOutUrl="/">
     <StrictMode>
      <App />
     </StrictMode>
  </ClerkProvider>
 ,
)
