import { useReducer } from "react";
import { useFormularioGeneralReducer } from "./useFormularioGeneralReducer";

const dataMolde = {
    tipoCategoria: '',
    cantidad: {
        valor:'',
        unidad:''
    },conservacion: []
}

export const useFormularioGeneralToDo = (initData = dataMolde) => {
    const [ stateArticulo, dispatchArticulo] = useReducer( useFormularioGeneralReducer, initData);

    const editarTipoCategoria = ( categoria) => {
        const action = {
            type: '[ToDo] editar categoria',
            payload: categoria
        }
        dispatchArticulo(action);
    }

    const editarCantidad = ( cantidad) => {
        const action = {
            type: '[ToDo] editar cantidad',
            payload: cantidad
        }
        dispatchArticulo(action);
    }

    const editarConservacion = ( conservacion) => {
        const action = {
            type: '[ToDo] editar conservacion',
            payload: conservacion
        }
        dispatchArticulo(action);
    }

    const interruptorConservacion = ( conservacion) => {
        const action = {
            type: '[ToDo] interruptor conservacion',
            payload: conservacion
        }
        dispatchArticulo(action);
    }

    return {
        stateArticulo,
        editarTipoCategoria,
        editarCantidad,
        editarConservacion,
        interruptorConservacion
    }
}