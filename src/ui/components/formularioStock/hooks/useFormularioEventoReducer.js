const crearEvento = (eventos, nuevoElemento) => {

    return [...eventos, nuevoElemento];

}

const quitarEvento = (eventos, idElemento) => {
    
    return eventos.filter(e => {
        return (e.id !== idElemento)
    })

}

export const useFormularioEventoReducer = ( initialState = [] , action) => {

    switch (action.type) {
        case '[ToDo] agregar evento':
            return crearEvento(initialState, action.payload);
        case '[ToDo] quitar evento':
            return quitarEvento( initialState, action.payload);
        default:
            return initialState;
    }
}