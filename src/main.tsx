import React from 'react'
import ReactDOM from 'react-dom/client'
import { CountriesApp } from './CountriesApp'
import "./styles/global.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CountriesApp />
  </React.StrictMode>
)
