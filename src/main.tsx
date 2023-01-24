import React from 'react'
import ReactDOM from 'react-dom/client'
import { CountriesApp } from './CountriesApp'
import { BrowserRouter } from 'react-router-dom'
import "./styles/global.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <CountriesApp />
    </BrowserRouter>
  </React.StrictMode>
)
