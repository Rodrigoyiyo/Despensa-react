const editarCategoria = (articulo, {idCategoria}) => {
    return articulo;
}

const editarCantidad = (articulo, nuevaCantidad) => {

    const articuloActualizado = {...articulo};
    articuloActualizado.cantidad = {...nuevaCantidad};
    return articuloActualizado;
}

const editarConservacion = (articulo, elemento) => {

    const articuloActualizado = {...articulo};
    const conservacionActualizado = articuloActualizado.conservacion.map(e => {
        return (e.id == elemento.id)? elemento : e;
    });
    articuloActualizado.conservacion = conservacionActualizado;
    return articuloActualizado;
}

const interruptorConservacion = (articulo, elemento) => {

    const articuloActualizado = {...articulo};
    const checks = articulo.conservacion.map(e => e.id);
    if(!checks.includes(elemento.id)){
        articuloActualizado.conservacion = [...articulo.conservacion, elemento];
    }else{
        const listaReducida = articulo.conservacion.filter(e => {
            return (e.id !== elemento.id)
        });
        articuloActualizado.conservacion = listaReducida;
    }
    return articuloActualizado;
}


export const useFormularioGeneralReducer = ( initialState = [] , action) => {

    switch (action.type) {
        /*case '[ToDo] limpiar header':
            return limpiarFiltros( );*/
        case '[ToDo] editar categoria':
            return editarCategoria(initialState, action.payload);
        case '[ToDo] editar cantidad':
            return editarCantidad( initialState, action.payload);
        case '[ToDo] interruptor conservacion':
            return interruptorConservacion( initialState, action.payload);
        case '[ToDo] editar conservacion':
            return editarConservacion( initialState, action.payload);
        default:
            return initialState;
    }
}