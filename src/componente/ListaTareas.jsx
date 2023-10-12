

const initialState = [{
    id: 1,
    tarea: 'Lo que sea',
    finalizada: false
}]


const nuevaTarea = {
    id: 2,
    tarea: 'Explicar useReducer',
    finalizada: false
}

const agregarTarea = {
    type: '[TAREAS] Agregar tarea',
}

const editTask = {
    type: '[TAREAS] editar  tarea',
    payload: nuevaTarea
}

const removeTask = {
    type: '[TAREAS] eliminar tarea',
    payload: nuevaTarea
}

const changeTask = {
    type: '[TAREAS] cambiar tarea',
}


const tareaReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[TAREAS] Agregar tarea':
            return [...state, action.payload]
        case '[TAREAS] editar  tarea':
            // return [...state, action.payload]
        case '[TAREAS] eliminar tarea':
            // return [...state, action.payload]
        case '[TAREAS] cambiar tarea':
            // return [...state, action.payload]

        default:
            break;
    }
    return state;
}


console.log(tareaReducer(initialState, agregarTarea))




export const ListaTareas = () => {
    return (
        <div>ListaTareas</div>
    )
}
