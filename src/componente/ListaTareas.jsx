import { useReducer } from "react"
import { useForm } from "./hooks/useForm"

//array de objetos donde queremos añadir algo tipo un post o lo que sea
const ListaDeTareasTotales = [{
    id: new Date().getTime(),
    tarea: 'Lo que sea',
    finalizada: false
},

]


const tareaReducer = (state = ListaDeTareasTotales, action = {}) => { //y aqui es donde le damos el valor dependiendo lo que le mandemos con el dispatch()
    switch (action.type) { //dependiendo el tipo de tarea que nos devuelvan haremos una cosa u otra
        case '[TAREAS] Agregar tarea':
            return [...state, action.payload]

        case '[TAREAS] Finalizar  tarea':
            return state.map(tarea => {
                if (tarea.id === action.payload) { // id se lo pasamos por payload directamente
                    return {
                        ...tarea, //recuperame la tarea
                        finalizada: !tarea.finalizada //cambiale la propiedad finalizada a lo contrario
                    }

                } return tarea
            })
        // return [...state, action.payload]
        case '[TAREAS] eliminar tarea':
            return (state.filter(tarea => tarea.id !== action.payload)) //devuelme todos los que no sean el id que has marcado con el checkbox
        //el state es el array de objetos que tiene todas la tareas
        case '[TAREAS] borrar tareas':
            return [] //vacia el array
        default:
            return state
    }
}






export const ListaTareas = () => {
    const { tarea, formState, onInputChange } = useForm({ tarea: '' })

    const [tareasState, dispatch] = useReducer(tareaReducer, ListaDeTareasTotales) //lo que le devuelve tareaReducer lo aplica en Lista de tareas totales a traves de tareasState
                                               //⬆donde va a mandar los parametros
           //⬆copia ListaDeTareas y la que vamos a leer abajo       ⬆donde coge la base
                         //⬆ con lo que va a mandar los parametros


    const agregarTarea = (event) => {
        event.preventDefault();

        if (formState.tarea == '' || !formState.tarea) return
        const tarea = {
            id: new Date().getTime(),
            tarea: formState.tarea,
            finalizada: false
        }
        const action = {
            type: '[TAREAS] Agregar tarea',
            payload: tarea, //en el payload le mandamos lo que va a necesitar tareas reducer para ejecturase
        }
        dispatch(action)//dispactch le mandamos el action a tareaReaducer
    }

    const finalizarTarea = (componente) => {
        const action = {
            type: '[TAREAS] Finalizar  tarea',
            payload: componente.id
        }
        dispatch(action)
    }
    const borrarTarea = (componente) => {
        const action = {
            type: '[TAREAS] eliminar tarea',
            payload: componente.id //si necesita el id de la tarea para saber cual es se lo mandamos
        }
        dispatch(action)
    }
    const reset = () => {
        const action = {
            type: '[TAREAS] borrar tareas',
            payload: '' //si no necesita nada se lo mandamos vacio 
        }
        dispatch(action)
    }

    return (
        <>
            <form onSubmit={agregarTarea}>
                <div className="form-group">
                    <input
                        type="taxt"
                        className="form-control"
                        name="tarea"
                        placeholder="Ingresar tarea"
                        value={tarea} //prop de useState stateForm--> tarea
                        onChange={onInputChange}

                    />
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
                <button type="button" className="btn btn-danger" onClick={reset}>Resetear</button>

            </form>
            <hr />
            <ul className="list-group">
                {tareasState.map(item => {
                    return (
                        <li key={item.id} className="list-group-item d-flex justify-content-between">
                            <span>{item.tarea}</span>
                            <div> {item.finalizada ? ' ✅' : <input type="checkbox"
                                value={item.finalizada}
                                onChange={() => finalizarTarea(item)} />}
                                <button className="btn btn-danger" onClick={() => borrarTarea(item)}>Borrar</button>
                               
                            </div>
                        </li>
                       
                            
                    )
                
                })}
                 
            </ul>
        </>
    )
}
