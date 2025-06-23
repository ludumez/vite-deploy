import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HashRouter } from 'react-router-dom';

const base = import.meta.env.BASE_URL;
console.log('Router basename:', base);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter >
      <App />
    </HashRouter>
  </StrictMode>
);
