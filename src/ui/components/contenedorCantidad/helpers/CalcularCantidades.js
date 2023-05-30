const enteroCantidad = () => {

}

const restoCantidad = () => {

}

const separacionCantidad = (cantidad) => {
    return {entero : 482, resto : 94}
}

const porcentajeCerrado = () => {

}

const porcentajeAbierto = () => {

}

const porcentajeCantidad = () => {

}

const clasesTipo = (tipo) => {
    let respuesta = '';
    switch (tipo) {
        case 'cerrado':
            respuesta = 'border bg-white';
            break;
         case 'abierto':
            respuesta = 'bg-light';
            break;
        default:
            break;
    }
    return respuesta;
}

export {
    enteroCantidad,
    restoCantidad,
    separacionCantidad,
    porcentajeCerrado,
    porcentajeAbierto,
    porcentajeCantidad,
    clasesTipo
}