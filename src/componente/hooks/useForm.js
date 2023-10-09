import { useState } from "react"

//recibe el initialform || si no genera un objeto vacio
export const useForm = (initialForm = {}) => {


    //se inicializa el formState con el inicialform que se pasa por parametros
    const [formState, setFormState] = useState({ initialForm })

    //ser recupera el nombre y el vaalor de event.target .name etc
    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,//recuperamos lo que tiebe
            [name]: value //[name] cogemos name como referncia de clave y le asignamos el valor
        })
    }
    //manda para afuera
    return {
        formState, //lo devolvemos como objeto entero
        ...formState,//... desestructura y lo devuelve en vez de un objeto las varianbles que contiene sueltas
        onInputChange
    }
}
