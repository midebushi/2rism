import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './components/App/App.tsx'

import styles from './main.module.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <div className={styles.s}></div>
  </StrictMode>,
)
