import { useMemo, useState } from "react"




export const CalculosPesados = () => {

    const [listaNumeros, setListaNumeros] = useState([2, 3, 4, 5, 6, 7, 8, 9, 5, 6, 8, 9, 6, 78])
    const [show, setShow] = useState(true)

    const agregarNumero = () => {
        setListaNumeros([...listaNumeros, 5])
    }
    const getCalculo =(listaNumeros) => useMemo(() => { //usMemo memoriza la funcion para que no este variando cada vez que se recicla el componente
        console.log('Calculando')
        return listaNumeros.reduce((a, b) => a * b)
    },[listaNumeros])//<--solo cambiaria si nota un cambio aqui


    return (
        <>
            <h2>Calculo</h2>
            <p>{getCalculo(listaNumeros)}</p>
            <button onClick={() => setShow(!show)}>{show ? 'Show' : 'Hide'}</button>
            <button onClick={() => agregarNumero()}>Agregar numero</button>
        </>
    )
}
