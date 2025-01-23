import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/base.scss'
import App from './App.tsx'
import AppThemeProvider from './theam/AppThemeProvider.tsx'
import StoreProvider from './store/StoreProvider.tsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppThemeProvider>
      <StoreProvider>
        <ToastContainer/>
        <App />
      </StoreProvider>
    </AppThemeProvider>
  </StrictMode>,
)
