import { useState } from "react"

const nuevoObjetoFiltro = {
    idColeccion: "",
    coleccion: "",
    idCampo: "",
    campo: "",
    tipoCampo: "",
    condicion: {
        idCondicion: "",
        symbolSVG: "",
        condicionExtras: [],
        condicion: [],
        valor1: "",
        valor2: ""
    },
    orden: {
        tipoOrden: ""
    }
}

export const useHeaderFiltro = () => {

    const [filtradoHeader, setFiltradoHeader] = useState({ ...nuevoObjetoFiltro });

    const limpiarFiltros = () => {
        setFiltradoHeader({ ...nuevoObjetoFiltro });
    }

    const setDatosColeccion = ({ idColeccion, coleccion, idCampo, campo, tipoCampo }) => {

        const elementos = {
            ...filtradoHeader,
            idColeccion,
            coleccion,
            idCampo,
            campo,
            tipoCampo
        };

        elementos.condicion = {
            idCondicion: "",
            symbolSVG: "",
            condicionExtras: [],
            condicion: [],
            valor1: "",
            valor2: ""
        };

        elementos.orden = {
            tipoOrden: ""
        }

        setFiltradoHeader({ ...elementos });

        return;
    }

    const setDatosCondicion = ({ idCondicion, symbolSVG, condicionExtras = [] }) => {

        const elementos = { ...filtradoHeader };

        elementos.condicion = {
            idCondicion,
            symbolSVG,
            condicionExtras,
            condicion: [],
            valor1: "",
            valor2: ""
        }

        elementos.orden = {
            tipoOrden: ""
        }

        setFiltradoHeader({ ...elementos });

        return;
    }

    const getDatosCondicionTextos = ({ valor1 = filtradoHeader.condicion.valor1, valor2 = filtradoHeader.condicion.valor2 }) => {

        const { condicionExtras } = filtradoHeader.condicion;
        const campos2 = condicionExtras.includes("2 valores");
        return (campos2 && valor2 !== undefined && valor2 !== "") ? [valor1, valor2] : [valor1];
    }

    const setDatosTexto1 = ({ valor: valor1 }) => {

        const condicion = getDatosCondicionTextos({ valor1 });

        const elementos = { ...filtradoHeader };

        elementos.condicion = { ...elementos.condicion, condicion, valor1 }

        elementos.orden = {
            tipoOrden: ""
        }

        setFiltradoHeader({ ...elementos });

        return;
    }

    const setDatosTexto2 = ({ valor: valor2 }) => {

        const condicion = getDatosCondicionTextos({ valor2 });

        const elementos = { ...filtradoHeader };

        elementos.condicion = { ...elementos.condicion, condicion, valor2 }

        elementos.orden = {
            tipoOrden: ""
        }

        setFiltradoHeader({ ...elementos });

        return;
    }

    const setDatosOrden = ({ tipoOrden }) => {

        const elementos = { ...filtradoHeader };

        elementos.condicion = {
            idCondicion: "",
            symbolSVG: "",
            condicionExtras: [],
            condicion: [],
            valor1: "",
            valor2: ""
        }

        elementos.orden = {
            tipoOrden
        }

        setFiltradoHeader({ ...elementos });

        return;
    }

    const datosDonde = {
        idColeccion: filtradoHeader.idColeccion,
        coleccion: filtradoHeader.coleccion,
        idCampo: filtradoHeader.idCampo,
        campo: filtradoHeader.campo,
        tipoCampo: filtradoHeader.tipoCampo,
        idCondicion: filtradoHeader.condicion.idCondicion,
        symbolSVG: filtradoHeader.condicion.symbolSVG,
        condicionExtras: filtradoHeader.condicion.condicionExtras,
        condicion: filtradoHeader.condicion.condicion
    }

    const datosOrden = {
        idColeccion: filtradoHeader.idColeccion,
        coleccion: filtradoHeader.coleccion,
        idCampo: filtradoHeader.idCampo,
        campo: filtradoHeader.campo,
        tipoCampo: filtradoHeader.tipoCampo,
        tipoOrden: filtradoHeader.orden.tipoOrden
    }

    const getDatosColeccion = { 
        idColeccion: filtradoHeader.idColeccion, 
        coleccion: filtradoHeader.coleccion, 
        idCampo: filtradoHeader.idCampo, 
        campo: filtradoHeader.campo, 
        tipoCampo: filtradoHeader.tipoCampo 
    }

    const getDatosCondicion = { 
        tipoCampo: filtradoHeader.tipoCampo,
        idCondicion: filtradoHeader.condicion.idCondicion,
        symbolSVG: filtradoHeader.condicion.symbolSVG
    }

    const getDatosTextos = { 
        tipoCampo: filtradoHeader.tipoCampo,
        condicionExtras: filtradoHeader.condicion.condicionExtras,
        valor1: filtradoHeader.condicion.valor1,
        valor2: filtradoHeader.condicion.valor2
    }

    return {
        filtradoHeader,
        setDatosColeccion,
        setDatosCondicion,
        setDatosTexto1,
        setDatosTexto2,
        setDatosOrden,
        datosDonde,
        datosOrden,
        limpiarFiltros,
        getDatosColeccion,
        getDatosCondicion,
        getDatosTextos
    }
}