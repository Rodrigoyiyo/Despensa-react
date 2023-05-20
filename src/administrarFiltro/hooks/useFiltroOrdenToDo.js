import { useReducer } from "react"
import { useFiltroListaOrden } from "./useFiltroListaOrden";
import initOrden from '../JsonListaOrden.json';


export const useFiltroOrdenToDo = () => {

    const [ stateOrden, dispatchOrden] = useReducer( useFiltroListaOrden, [], initOrden);

    const nuevoElementoFiltroOrden = ( nuevoElemento) => {
        const action = {
            type: '[ToDo] agregar elemento',
            payload: nuevoElemento
        }
        dispatchOrden(action);
    }

    const quitarElementoFiltroOrden = ( eliminarElemento) => {
        const action = {
            type: '[ToDo] quitar elemento',
            payload: eliminarElemento
        }
        dispatchOrden(action);
    }

    const actualizarElementoFiltroOrden = ( todo) => {
        const action = {
            type: '[ToDo] actualizar elemento',
            payload: todo
        }
        dispatchOrden(action);
    }

    return {
        stateOrden,
        nuevoElementoFiltroOrden,
        quitarElementoFiltroOrden,
        actualizarElementoFiltroOrden
    }
}