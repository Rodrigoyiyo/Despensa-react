
const agregarEnListaOrden = (listaOrden, pop) => {

    const {tipoOrden, coleccion, idColeccion, campo, idCampo, tipoCampo} = pop;

    const elemento = {
        tipoOrden,
        coleccion,
        idColeccion,
        campo,
        idCampo,
        tipoCampo
    };

    const listaNueva = listaOrden.filter(e => {
        return !(e.idCampo === idCampo)
    });

    return [...listaNueva, elemento];
}


const quitarListaOrden = (listaOrden, listaIds) => {

    const listaNueva = listaOrden.filter(elemento => {
        return !listaIds.includes(elemento.idCampo);
    });

    return listaNueva;
}


export const useFiltroOrdenReducer = ( initialState = [] , action) => {

    switch (action.type) {
        case '[ToDo] agregar elemento':
            return agregarEnListaOrden( initialState, action.payload);
        case '[ToDo] quitar elemento':
            return quitarListaOrden( initialState, action.payload);
        default:
            return initialState;
    }

}