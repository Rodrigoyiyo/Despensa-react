const idSvgSegunTipoOrden = (tipo) => {
    let respuesta = {asc:'',desc:''};
    switch (tipo){
        case 'texto': 
            respuesta.asc = 'bi-sort-alpha-down-alt';
            respuesta.desc = 'bi-sort-alpha-down';
            break;
        case 'numero': 
        default:
            respuesta.asc = 'bi-sort-down-alt';
            respuesta.desc = 'bi-sort-down';
            break;
    }
    return respuesta;
}

const esCLaseActivar = ( pregunta) => {
    return (pregunta)? 'active' : '';
}

const tipoInput = (tipo) =>{
    let respuesta = '';
    switch (tipo){
        case 'numero':  
            respuesta = 'number';
            break;
        case 'fecha': 
            respuesta = 'date';
            break;
        case 'fechahora': 
            respuesta = 'datetime-local';
            break;
        case 'hora': 
            respuesta = 'time';
            break;
        case 'texto':
        default: 
            respuesta = 'text';
            break;
    }
    return respuesta;
}

const claseBtnRadioCheck = (pregunta) => {
    return (pregunta) ? 'btn-secondary' : 'btn-outline-secondary';
}

export {
    idSvgSegunTipoOrden,
    esCLaseActivar,
    tipoInput,
    claseBtnRadioCheck
}