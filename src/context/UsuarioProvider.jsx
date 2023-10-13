import React, { useState } from 'react'
import { UsuarioContext } from './UsuarioContext'



export const UsuarioProvider = ({children}) => {
  const [usuario, setUsuario] = useState([{}])
  //UsuarioContext es el contexto por aqui le pasamos lo parametros y le decimos que meta el resto de componentes como hijos
  return (
    <>
    <UsuarioContext.Provider value={{usuario,setUsuario}}> 
        {children}
    </UsuarioContext.Provider>
    </>
  )
}
