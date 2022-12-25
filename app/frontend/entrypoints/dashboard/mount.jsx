import React from 'react'
import { createRoot } from 'react-dom/client'
// import { createRoot } from 'million/react';
import global from '~/global'
import App from './App'
import consumer from '~/consumer'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App global={global} consumer={consumer} />
  </React.StrictMode>,
)
