import { useState } from "react";

export const AgregarTarea = ({agregarTarea}) => {
    const [inputValue, setinputValue] = useState('')

    const onInputChange = ({ target }) => {
        setinputValue(target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        agregarTarea(inputValue)
       
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text"
                placeholder="Ingrese nuevo trabajo"
                value={inputValue}
                onChange={onInputChange} />
        </form>

    )
}