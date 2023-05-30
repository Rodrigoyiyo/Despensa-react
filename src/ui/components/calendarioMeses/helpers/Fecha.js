const fechaActual = new Date();
const fechaYYYY = fechaActual.toLocaleString("default", { year: "numeric" });
const fechaMM = fechaActual.toLocaleString("default", { month: "2-digit" });
const fechaDD = fechaActual.toLocaleString("default", { day: "2-digit" });

const formattedDate = fechaYYYY + "-" + fechaMM + "-" + fechaDD;

const clasePrimerDiaMes = ({ primerDiaMes = false }) => {
    let respuesta = '';
    if (primerDiaMes === false) return respuesta;

    switch (primerDiaMes) {
        case 2:
            respuesta = 'offset-dia-1';
            break;
        case 3:
            respuesta = 'offset-dia-2';
            break;
        case 4:
            respuesta = 'offset-dia-3';
            break;
        case 5:
            respuesta = 'offset-dia-4';
            break;
        case 6:
            respuesta = 'offset-dia-5';
            break;
        case 7:
            respuesta = 'offset-dia-6';
            break;
        case 1:
        default:
            respuesta = '';
            break;
    }
    return respuesta;
}

const claseDiaPasado = (fecha = '') => {
    return ( new Date(fecha) < new Date(formattedDate)) ? 'bg-cuaternario' : '';
}

const claseDiaHoy = (fecha = '') => {
    return (fecha == formattedDate) ? 'hoy rounded-circle' : '';
}

const marcarDia = (pregunta) => {
    return (pregunta) ? 'active' : '';
}

const clasesContenedorDia = ({ diaSemana, primerDiaMes, fecha }) => {
    const primerDia = clasePrimerDiaMes({ diaSemana, primerDiaMes });
    const diaPasado = claseDiaPasado(fecha);
    return [primerDia, diaPasado].join(' ');
}

const clasesEventosDia = ({ fecha }) => {
    const claseHoy = claseDiaHoy(fecha);
    return [claseHoy].join(' ');
}

export {
    clasePrimerDiaMes,
    claseDiaPasado,
    claseDiaHoy,
    clasesContenedorDia,
    clasesEventosDia,
    marcarDia
}