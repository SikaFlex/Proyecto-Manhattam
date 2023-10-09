import { useCounter } from "../hooks/useCounter"

export const ContadorComponent = () => {
        //recibe las props a traves de useCounter()..
    const { contador, incrementar, decrementar, resetear } = useCounter()

    return (
        <>
            <h1>contador:{contador}</h1>
            <button className="btn btn-primary" onClick={() => incrementar(5)}>+1</button>
            <button className="btn btn-danger" onClick={() => resetear()}>Reset</button>
            <button className="btn btn-primary" onClick={() => decrementar(5,false)}>-1</button>
        </>)
}
0