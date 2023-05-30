const agregarEnListaMes = (listaMeses, nuevoMes) => {

}

const actualizarEnListaMes = (listaMeses, cambiosMes) => {
    
}



export const useFechaMesesReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[ToDo] agregar mes':
            return agregarEnListaMes(initialState, action.payload);
        case '[ToDo] actualizar mes':
            return actualizarEnListaMes(initialState, action.payload);
        default:
            return initialState;
    }

}