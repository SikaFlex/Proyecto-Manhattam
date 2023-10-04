import { useEffect } from "react"
import { useState } from "react"
import { UserList } from "./componente/userList"

export const UserApp = ()=>{


    const [endPoint, setEndPoint] = useState('users')   
   
    const handleFetch = () =>{
        setEndPoint('comments')
    }
    
    return (
      <>
      <h1>Lista de usuarios:</h1>
      <UserList endpoint = {endPoint} ></UserList>
      <button onClick={handleFetch}></button>
      </>
    )
}