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

export const InputTexto = ({tipo, addClass, getData = "", setCambios}) => {

    const onTexto = (event) => {
        const valor = event.currentTarget.value;
        setCambios({ valor });
    }

    return (
        <input type={tipoInput(tipo)} className={`form-control ${addClass}`} value={getData} onChange={onTexto} />
    )
}