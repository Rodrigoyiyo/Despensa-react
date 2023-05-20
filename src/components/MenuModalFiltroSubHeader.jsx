import { BotonesOrdenFiltro } from "./BotonesOrdenFiltro";
import { DropDownColeccion } from "./DropDownColeccion";
import { DropDownCondicion } from "./DropDownCondicion";
import { InputTexto } from "./InputTexto";
import { useHeaderFiltro } from "../hooks/useHeaderFiltro";

export const MenuModalFiltroSubHeader = ({ tipofiltro, setOrden, setDonde }) => {

    const { 
        filtradoHeader,
        setDatosColeccion,
        setDatosCondicion,
        setDatosTexto1,
        setDatosTexto2,
        setDatosOrden,
        datosDonde,
        datosOrden,
        limpiarFiltros,
        getDatosColeccion,
        getDatosCondicion,
        getDatosTextos
    } = useHeaderFiltro();

    const onAgregar = () => {
        if (tipofiltro === 'donde') {
            setDonde(datosDonde);
            limpiarFiltros();
        } else if (tipofiltro === 'orden') {
            setOrden(datosOrden);
            limpiarFiltros();
        }
        return;
    }

    const menu1 = (
        <div className="row w-100 align-items-start mx-0 mb-2 mb-sm-0">
            <div className="col-12 col-sm-6 mb-2 mb-sm-0 px-0 pe-sm-2">
                <div className="input-group">
                    <DropDownColeccion addClass="pe-4 flex-fill" getData={getDatosColeccion} setCambios={setDatosColeccion} />
                    <DropDownCondicion getData={getDatosCondicion} setCambios={setDatosCondicion} />
                </div>
            </div>
            <div className="col-12 col-sm-6 px-0 ps-sm-2">
                <InputTexto tipo={getDatosTextos.tipoCampo} getData={getDatosTextos.valor1} setCambios={setDatosTexto1} />
                {
                    (Array.isArray(getDatosTextos.condicionExtras) && getDatosTextos.condicionExtras.includes("2 valores")) ?
                        <InputTexto tipo={getDatosTextos.tipoCampo} addClass={'mt-2'} getData={getDatosTextos.valor2} setCambios={setDatosTexto2} />
                        : ''
                }

            </div>
        </div>
    );

    const menu2 = (
        <div className="d-flex w-100 position-relative mb-2 mb-sm-0">
            <div className="dropdown flex-fill me-2">
                <DropDownColeccion addClass="pe-4  w-100" getData={getDatosColeccion} setCambios={setDatosColeccion} />
            </div>
            <BotonesOrdenFiltro seleccion={filtradoHeader.orden.tipoOrden} tipoDato={filtradoHeader.tipoCampo} setData={setDatosOrden} />
        </div>
    );

    const menu = (tipofiltro === "donde") ? menu1 : ((tipofiltro === "orden") ? menu2 : "");


    return (
        <>
            {menu}
            <div className="d-grid gap-2 d-sm-flex float-sm-end ms-sm-2">
                <button className="btn btn-primary" type="button" onClick={e => onAgregar()}>Agregar</button>
            </div>
        </>
    )

}





