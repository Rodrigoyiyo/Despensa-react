import { useReducer } from "react";
import { useFormularioEventoReducer } from "./useFormularioEventoReducer";

const dataMolde = [];

export const useFormularioEventoToDo = (initData = dataMolde) => {

    const [ stateEventos, dispatchEventos] = useReducer( useFormularioEventoReducer, initData);

    const agregarEvento = ( evento) => {
        const action = {
            type: '[ToDo] agregar evento',
            payload: evento
        }
        dispatchEventos(action);
    }

    const quitarEvento = ( idEvento) => {
        const action = {
            type: '[ToDo] quitar evento',
            payload: idEvento
        }
        dispatchEventos(action);
    }

    return {
        stateEventos,
        agregarEvento,
        quitarEvento
    }
}