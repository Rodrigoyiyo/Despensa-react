import { FiltroDonde } from "./FiltroDonde"
import { FiltroOrden } from "./FiltroOrden"

export const Filtro = ({
    tipofiltro,
    getData,
    actualizarColeccion,
    actualizarCondicion,
    actualizarTexto1,
    actualizarTexto2,
    actualizarOrden }) => {

    if (tipofiltro === 'donde')
        return <FiltroDonde
            getData={getData}
            actualizarColeccion={actualizarColeccion}
            actualizarCondicion={actualizarCondicion}
            actualizarTexto1={actualizarTexto1}
            actualizarTexto2={actualizarTexto2} />

    if (tipofiltro === 'orden')
        return <FiltroOrden
            getData={getData}
            actualizarColeccion={actualizarColeccion}
            actualizarOrden={actualizarOrden} />

    return '';

}