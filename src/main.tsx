import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HashRouter } from 'react-router-dom';




const rootEl = document.getElementById('root');
console.log("Root element:", rootEl);
if (!rootEl) alert("Root element not found!");

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter >
      <App />
    </HashRouter>
  </StrictMode>
);
