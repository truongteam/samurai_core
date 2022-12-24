import React from 'react'
import { createRoot } from 'react-dom/client'
// import { createRoot } from 'million/react';

import App from './App'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
