import { DropDownCondicion } from "./DropDownCondicion"
import { DropDownColeccion } from "./DropDownColeccion"
import { InputTexto } from "./InputTexto"

export const FiltroDonde = ({ getData, actualizarColeccion, actualizarCondicion, actualizarTexto1, actualizarTexto2 }) => {

    const getDatosColeccion = {
        idColeccion: getData.idColeccion,
        coleccion: getData.coleccion,
        idCampo: getData.idCampo,
        campo: getData.campo
    };

    const getDatosCondicion = {
        tipoCampo: getData.tipoCampo,
        idCondicion: getData.condicion.idCondicion,
        symbolSVG: getData.condicion.symbolSVG
    };

    const getDatosTextos = { 
        tipoCampo: getData.tipoCampo,
        valor1: getData.condicion.valor1,
        valor2: getData.condicion.valor2,
        condicionExtras: getData.condicion.condicionExtras
    };

    return (
        <div className="row w-100 align-items-start mx-0 mb-2 mb-sm-0">
            <div className="col-12 col-sm-6 mb-2 mb-sm-0 px-0 pe-sm-2">
                <div className="input-group">
                    <DropDownColeccion addClass="pe-4 flex-fill" getData={getDatosColeccion} setCambios={actualizarColeccion} />
                    <DropDownCondicion getData={getDatosCondicion} setCambios={actualizarCondicion} />
                </div>
            </div>
            <div className="col-12 col-sm-6 px-0 ps-sm-2">
                <InputTexto tipo={getData.tipoCampo} getData={getDatosTextos.valor1} setCambios={actualizarTexto1} />
                {
                    (Array.isArray(getDatosTextos.condicionExtras) && getDatosTextos.condicionExtras.includes("2 valores")) ?
                        <InputTexto tipo={getData.tipoCampo} addClass={'mt-2'} getData={getDatosTextos.valor2} setCambios={actualizarTexto2} />
                        : ''
                }
            </div>
        </div>
    )
}