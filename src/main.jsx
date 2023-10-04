import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {ListadoApp} from './ListadoApp'
import {UserApp} from  './UsersApp'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserApp></UserApp>
    {/* <ListadoApp></ListadoApp> */}
  
  </React.StrictMode>,
)
