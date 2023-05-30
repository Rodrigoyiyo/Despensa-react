import { useFiltroHeaderToDo } from "../hooks/useFiltroHeaderToDo";
import { Filtro } from "./Filtro";

export const Formulario = ({ tipofiltro, setDonde, setOrden }) => {

    const {
        stateHeader,
        conversionFiltro,
        limpiarHeader,
        actualizarColeccion,
        actualizarCondicion,
        actualizarTexto1,
        actualizarTexto2,
        actualizarOrden
    } = useFiltroHeaderToDo();

    const onAgregar = () => {
        if (tipofiltro === 'donde') {
            setDonde(conversionFiltro('donde'));
            limpiarHeader();
        } else if (tipofiltro === 'orden') {
            setOrden(conversionFiltro('orden'));
            limpiarHeader();
        }
        return;
    }

    return (
        <div className="d-blox d-sm-flex align-items-start m-2">
            <Filtro tipofiltro={tipofiltro}
                getData={stateHeader}
                actualizarColeccion={actualizarColeccion}
                actualizarCondicion={actualizarCondicion}
                actualizarTexto1={actualizarTexto1}
                actualizarTexto2={actualizarTexto2}
                actualizarOrden={actualizarOrden} />
            <div className="d-grid gap-2 d-sm-flex float-sm-end ms-sm-2">
                <button className="btn btn-primario" type="button" onClick={() => onAgregar()}>Agregar</button>
            </div>
        </div>
    )
}