import { useState } from "react"
import { useEffect } from "react"
import { useFetchData } from "./hooks/useFetchData"

export const UserList = ({ endpoint }) => {

  /*recuepera data y is log de useFetchData  que esta es la que tiene el 
  el use effect que hay se ejecuta getData() donde se settean los useState? nose estoy fumado*/
  const { data, isLoading } = useFetchData(endpoint)

  return (
    <>
      <ul>
        {isLoading ? <p>Cargando...</p>
          : endpoint === 'users'
            ? data.map(user => <li key={user.id}> {user.name} </li>)
            : data.map(user => <li key={user.id}> {user.body} </li>)}
      </ul>
    </>
  )

}
