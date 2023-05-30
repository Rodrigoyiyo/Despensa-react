import { useReducer } from "react"
import { useFiltroDondeReducer } from "./useFiltroDondeReducer";
import initDonde from '../JsonListaDonde.json';

export const useFiltroDondeToDo = () => {

    const [ stateDonde, dispatchDonde] = useReducer( useFiltroDondeReducer, initDonde);

    const nuevoElementoFiltroDonde = ( nuevoElemento ) => {
        const action = {
            type: '[ToDo] agregar elemento',
            payload: nuevoElemento
        }
        dispatchDonde(action);
    }

    const quitarElementoFiltroDonde = ( eliminarElemento) => {
        const action = {
            type: '[ToDo] quitar elemento',
            payload: eliminarElemento
        }
        dispatchDonde(action);
    }

    const actualizarElementoFiltroDonde = ( todo) => {
        const action = {
            type: '[ToDo] actualizar elemento',
            payload: todo
        }
        dispatchDonde(action);
    }

    return {
        stateDonde,
        nuevoElementoFiltroDonde,
        quitarElementoFiltroDonde,
        actualizarElementoFiltroDonde
    }
}