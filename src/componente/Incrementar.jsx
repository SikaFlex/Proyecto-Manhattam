import React from "react"

export const Incrementar = React.memo(({ incrementar }) => {
    /*con el React memo y habiendo declarado la funcion como un useCallBack 
    podemos evitar que cada vez que se ejecute la funcion se recague el componente
    entero*/
    console.log("Ahora me pinto?") //solo se pinta una vez

    return (
        <button onClick={() => incrementar(50)}></button>
    )
}
)