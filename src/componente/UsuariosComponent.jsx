import { useFetch } from "../hooks/useFetch"

export const UsuariosComponent = () => {
    
    const { data, IsLoading, errors } = useFetch('https://jsonplaceholder.typicode.com/users') //desestructuramos para recuperar cada variable


    return (
        <>
            <h1>Lista de usuarios</h1>
            {IsLoading ? <h4>Cargando...</h4> //si esta cargando ->cargando
                : errors ? <p>Ha ocurrido un error: {errors}</p> //sino errores? -> el error y si no ha ocurrido nada que dibuje las tablas
                    : <table className="table table-dark">   
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Website</th>
                            </tr>
                        </thead>
                        <tbody>
                       
                            {data.map(user => { 
                                return( //importante el return si no no lo pinta 
                                <tr key={user.id}> 
                                    <th scope="row">1</th>
                                    <td>{user.id}</td>
                                    <td>{user.email}</td>
                                    <td>{user.website}</td>
                                </tr>
                                )
                            })}


                        </tbody>
                    </table>}

        </>
    )
}
