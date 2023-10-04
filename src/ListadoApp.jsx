import { useState } from "react";
import { AgregarTarea } from "./componente/AgregarTarea";






export const ListadoApp = () => {

    const ListadoSecciones = [
    {id: 0, nombre: "Juan", visto: true},
    {id: 1, nombre: "María",visto: false},
    {id: 2, nombre: "Carlos", visto: true},
    {id: 3, nombre: "Ana",visto: false },
    {id: 4, nombre: "Luis", visto: true},
    {id: 5, nombre:'nepe',visto: true}
]
    const [arreglo, setArreglo] = useState(ListadoSecciones)

    const onAgregarTarea = (val) =>{
        let valor = val.trim() //quita los espacios para que no puedan meterte mierda
       
        if (!valor) return //valor esta vacio devuelve un return
        console.log(valor)
        const envio = {
            id: arreglo.length, // puedes generar un id dinamico con el punto length
            nombre : valor,
            visto : false
        }
        setArreglo([...arreglo,envio])

    }


    return (
            <>
            <AgregarTarea agregarTarea= {onAgregarTarea}></AgregarTarea>

            <ol className="loquesea">
            {arreglo.map(item =><li key={item.id}><h1>{item.nombre} {item.visto ? '✅' : '❌'  }</h1></li>)}
            </ol>
         </>
    )
}

