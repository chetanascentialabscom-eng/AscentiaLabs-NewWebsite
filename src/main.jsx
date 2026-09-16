import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'



// 🚫 Block ALL search engines globally (for testing only)
// const robotsMeta = document.createElement('meta');
// robotsMeta.name = 'robots';
// robotsMeta.content = 'noindex, nofollow, noarchive, nosnippet, noimageindex';
// document.head.appendChild(robotsMeta);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
