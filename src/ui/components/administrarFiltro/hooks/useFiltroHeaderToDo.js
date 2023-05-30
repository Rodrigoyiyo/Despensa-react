import { useReducer } from "react"
import { useFiltroHeaderReducer } from "./useFiltroHeaderReducer";
import initHeader from '../JsonHeaderFiltro.json';

export const useFiltroHeaderToDo = () => {

    const [ stateHeader, dispatchDonde] = useReducer( useFiltroHeaderReducer, initHeader);

    const conversionFiltro = (tipoDato) => {
        if(tipoDato === 'donde')
            return {
                idColeccion: stateHeader.idColeccion,
                coleccion: stateHeader.coleccion,
                idCampo: stateHeader.idCampo,
                campo: stateHeader.campo,
                tipoCampo: stateHeader.tipoCampo,
                idCondicion: stateHeader.condicion.idCondicion,
                symbolSVG: stateHeader.condicion.symbolSVG,
                condicionExtras: stateHeader.condicion.condicionExtras,
                condicion: stateHeader.condicion.condicion
            }
    
        if(tipoDato === 'orden')
            return {
                idColeccion: stateHeader.idColeccion,
                coleccion: stateHeader.coleccion,
                idCampo: stateHeader.idCampo,
                campo: stateHeader.campo,
                tipoCampo: stateHeader.tipoCampo,
                tipoOrden: stateHeader.orden.tipoOrden
            }

        return;
    }

    const limpiarHeader = ( ) => {
        const action = {
            type: '[ToDo] limpiar header',
            payload: {}
        }
        dispatchDonde(action);
    }

    const actualizarColeccion = ( coleccion ) => {
        const action = {
            type: '[ToDo] actualizar coleccion',
            payload: coleccion
        }
        dispatchDonde(action);
    }

    const actualizarCondicion = ( condicion) => {
        const action = {
            type: '[ToDo] actualizar condicion',
            payload: condicion
        }
        dispatchDonde(action);
    }

    const actualizarTexto1 = ( textos) => {
        const action = {
            type: '[ToDo] actualizar texto uno',
            payload: textos
        }
        dispatchDonde(action);
    }

    const actualizarTexto2 = ( textos) => {
        const action = {
            type: '[ToDo] actualizar texto dos',
            payload: textos
        }
        dispatchDonde(action);
    }

    const actualizarOrden = ( orden) => {
        const action = {
            type: '[ToDo] actualizar orden',
            payload: orden
        }
        dispatchDonde(action);
    }

    return {
        stateHeader,
        conversionFiltro,
        limpiarHeader,
        actualizarColeccion,
        actualizarCondicion,
        actualizarTexto1,
        actualizarTexto2,
        actualizarOrden
    }
}