import { CantidadCapsulaDoble } from "./CantidadCapsulaDoble";
import { CantidadCapsulaDosMontos } from "./CantidadCapsulaDosMontos";
import { CantidadCapsulaUnMonto } from "./CantidadCapsulaUnMonto";
import { CantidadSimple } from "./CantidadSimple";


export const TipoCapsulaCantidad = ({ getData }) => {

    let respuesta = '';

    switch (getData.tipoCapsula) {
        case 'suma-cerrada':
            respuesta = <CantidadSimple getData={{ ...getData, tipo: 'cerrado' }} />
            break;
        case 'suma-abierta':
            respuesta = <CantidadSimple getData={{ ...getData, tipo: 'cerrado' }} />
            break;
        case 'suma-total':
            respuesta = <CantidadSimple getData={{ ...getData, tipo: 'cerrado' }} />
            break;
        case 'capsula-cerrada':
            respuesta = <CantidadCapsulaUnMonto getData={{ ...getData, tipo: 'cerrado' }} />
            break;
        case 'capsula-abierta':
            respuesta = <CantidadCapsulaUnMonto getData={{ ...getData, tipo: 'abierto' }} />
            break;
        case 'capsula-cerrado-abierto':
            respuesta = <CantidadCapsulaDoble getData={getData} />
            break;
        case 'capsula-cerrada-doble':
            respuesta = <CantidadCapsulaDosMontos getData={{ ...getData, tipo: 'cerrado' }} />
            break;
        case 'capsula-abierta-doble':
            respuesta = <CantidadCapsulaDosMontos getData={{ ...getData, tipo: 'abierto' }} />
            break;
        default:
            respuesta = '';
            break;
    }

    return respuesta;
}