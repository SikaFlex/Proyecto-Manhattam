import { useContext } from "react"
import { UsuarioContext } from "./UsuarioContext"


export const HomeScreen = () => {

   const {usuario} = useContext(UsuarioContext)
   console.log(usuario)
   
  return (
    <>
    <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Tecnologia</th>
      <th scope="col">Email</th>
      <th scope="col">Contraseña</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{usuario.nombre}</th>
      <td>{usuario.tecnologia}</td>
      <td>{usuario.email}</td>
      <td>{usuario.contraseña}</td>
    </tr>
    
  </tbody>
</table>
    </>
  )
}
