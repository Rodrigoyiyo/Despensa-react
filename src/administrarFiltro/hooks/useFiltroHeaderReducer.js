import esqueletojSON from '../JsonHeaderFiltro.json';

const limpiarFiltros = () => {
    return { ...esqueletojSON };
}

const actuaizarColeccion = ({ idColeccion, coleccion, idCampo, campo, tipoCampo }) => {
    const elementos = {
        ...esqueletojSON,
        idColeccion,
        coleccion,
        idCampo,
        campo,
        tipoCampo
    };
    return elementos;
}

const actuaizarCondicion = (filtradoHeader, { idCondicion, symbolSVG, condicionExtras = [] }) => {
    const elementos = { ...filtradoHeader };
    elementos.condicion = {
        ...esqueletojSON.condicion,
        idCondicion,
        symbolSVG,
        condicionExtras
    }
    elementos.orden = {...esqueletojSON.orden}
    return elementos;
}

const getDatosCondicionTextos = (filtradoHeader, { valor1 , valor2}) => {
    if(valor1 === undefined) valor1 = filtradoHeader.condicion.valor1;
    if(valor2 === undefined) valor2 = filtradoHeader.condicion.valor2;
    const { condicionExtras } = filtradoHeader.condicion;
    const campos2 = condicionExtras.includes("2 valores");
    return (campos2 && valor2 !== undefined && valor2 !== "") ? [valor1, valor2] : [valor1];
}

const actuaizarTexto1 = (filtradoHeader, { valor: valor1 }) => {
    const condicion = getDatosCondicionTextos(filtradoHeader, { valor1 });
    const elementos = { ...filtradoHeader };
    elementos.condicion = { ...elementos.condicion, condicion, valor1 }
    elementos.orden = {...esqueletojSON.orden}
    return elementos;
}

const actuaizarTexto2 = (filtradoHeader, { valor: valor2 }) => {
    const condicion = getDatosCondicionTextos(filtradoHeader, { valor2 });
    const elementos = { ...filtradoHeader };
    elementos.condicion = { ...elementos.condicion, condicion, valor2 }
    elementos.orden = {...esqueletojSON.orden}
    return elementos;
}

const actualizarOrden = (filtradoHeader, { tipoOrden }) => {
    const elementos = { ...filtradoHeader };
    elementos.condicion = {...esqueletojSON.condicion}
    elementos.orden = {tipoOrden}
    return elementos;
}

export const useFiltroHeaderReducer = ( initialState = [] , action) => {

    switch (action.type) {
        case '[ToDo] limpiar header':
            return limpiarFiltros( );
        case '[ToDo] actualizar coleccion':
            return actuaizarColeccion(action.payload);
        case '[ToDo] actualizar condicion':
            return actuaizarCondicion( initialState, action.payload);
        case '[ToDo] actualizar texto uno':
            return actuaizarTexto1( initialState, action.payload);
        case '[ToDo] actualizar texto dos':
            return actuaizarTexto2( initialState, action.payload);
        case '[ToDo] actualizar orden':
            return actualizarOrden( initialState, action.payload);
        default:
            return initialState;
    }

}