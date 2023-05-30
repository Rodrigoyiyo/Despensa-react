import { BotonesOrdenFiltro } from "./BotonesOrdenFiltro"
import { DropDownColeccion } from "./DropDownColeccion"

export const FiltroOrden = ({ getData, actualizarColeccion, actualizarOrden }) => {

    const getDatosColeccion = {
        idColeccion: getData.idColeccion,
        coleccion: getData.coleccion,
        idCampo: getData.idCampo,
        campo: getData.campo
    };

    const getDatosOrden = {
        tipoCampo: getData.tipoCampo,
        tipoOrden: getData.orden.tipoOrden
    };

    return (
        <div className="d-flex w-100 position-relative mb-2 mb-sm-0">
            <div className="dropdown flex-fill me-2">
                <DropDownColeccion addClass="pe-4  w-100" getData={getDatosColeccion} setCambios={actualizarColeccion} />
            </div>
            <BotonesOrdenFiltro seleccion={getDatosOrden.tipoOrden} tipoDato={getDatosOrden.tipoCampo} setData={actualizarOrden} />
        </div>
    )
}