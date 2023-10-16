import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { App } from './context/App'
import { BrowserRouter } from 'react-router-dom'
import { ClimaApp } from './componente/ClimaApp'


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
    <React.StrictMode>
      <ClimaApp></ClimaApp>
    </React.StrictMode>,
  </BrowserRouter>
)
