import { useReducer } from "react"
import initFechas from "../JsonFechas.json"

export const useFechaMesesToDo = () => {

    const [stateFechas, dispatchFechas] = useReducer(useFechaMesesReducer, initFechas);

    const nuevoMes = ( mes ) => {
        const action = {
            type: '[ToDo] agregar mes',
            payload: mes
        }
        dispatchFechas(action);
    }

    const actualizarMes = ( mes ) => {
        const action = {
            type: '[ToDo] actualizar mes',
            payload: mes
        }
        dispatchFechas(action);
    }

    return {
        stateFechas,
        nuevoMes,
        actualizarMes
    }
}