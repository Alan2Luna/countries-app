import React from 'react'
import ReactDOM from 'react-dom/client'
import { CountriesApp } from './CountriesApp'
import { HashRouter } from 'react-router-dom'
import "./styles/global.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <CountriesApp />
    </HashRouter>
  </React.StrictMode>
)
