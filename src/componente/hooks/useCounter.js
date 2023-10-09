import React from 'react'
import { useState } from 'react'
export const useCounter = (valorInicial = 0) => {

    //delcaras el use state que tendra el valor del contador
    const [contador, setContador] = useState(valorInicial)

    //haces sus metodos
    const incrementar = (valor = 1) => {
        setContador(contador + valor)
    }
    const decrementar = (valor = 1, negativo) => {
        if (!negativo && contador < 1) {
            return
        }
        setContador(contador - valor)

    }
    const resetear = () => {
        setContador(0)

    }
    //se lo devuelves en forma de objeto -->{}
    return {
        contador,
        incrementar,
        decrementar,
        resetear
    }
}
