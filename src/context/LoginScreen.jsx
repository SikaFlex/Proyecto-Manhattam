import { useContext } from "react";

import { useForm } from "../componente/hooks/useForm"
import { UsuarioProvider } from "./UsuarioProvider";
import { UsuarioContext } from "./UsuarioContext";
// import { UsuarioContext } from "./UsuarioContext";
// import { UsuarioProvider } from "./UsuarioProvider";

export const LoginScreen = () => {

    const initialForm={
        nombre: '',
        tecnologia: '',
        email: '',
        contraseña: ''
    }

    
    const {formState,onInputChange} = useForm(initialForm);

    const {nombre,tecnologia,email,contraseña}= formState;

    const {setUsuario,usuario} = useContext(UsuarioContext) //se lo pasamos a traves de UsuarioContext.Provider en ./UsuarioProvider

    const onSubmit =(event)=>{
       setUsuario(formState)
       event.preventDefault()
       console.log(usuario)
      
    }
    return (
        <>
            <form onSubmit={onSubmit}
            className="container">
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input
                    type="text" 
                    value={nombre}
                    className="form-control" 
                    name="nombre" 
                    onChange={onInputChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tecnologia" className="form-label">Tecnologia</label>
                    <input 
                    type="text"
                    value={tecnologia}
                    className="form-control"
                    name="tecnologia" 
                    onChange={onInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input 
                    type="email"
                    value={email}
                    className="form-control"
                    name="email" 
                    onChange={onInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="contraseña" className="form-label">Contraseña</label>
                    <input 
                    type="password"
                    value={contraseña}
                    className="form-control"
                    name="contraseña" 
                    onChange={onInputChange}
                    />
                </div>
             
                <button type="submit" className="btn btn-primary">Registrar</button>
            </form>
        </>
    )
} 
