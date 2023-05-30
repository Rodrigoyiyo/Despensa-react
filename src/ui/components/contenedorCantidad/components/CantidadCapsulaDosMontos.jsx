import { useMemo } from "react";
import { clasesTipo, separacionCantidad } from "../helpers/CalcularCantidades";

export const CantidadCapsulaDosMontos = ({getData : {cantidadCerrada,cantidadAbierta, unidad, relacionVencimiento, tipo}}) => {

    const { entero: enteroCerrado = 0, resto: restoCerrado = 0 } = useMemo(() => separacionCantidad(cantidadCerrada), []);
    const { entero: enteroAbierto = 0, resto: restoAbierto = 0 } = useMemo(() => separacionCantidad(cantidadAbierta), []);
    const { porcentajeNoVence = 0, porcentajeSiVence = 0 } = useMemo(() => relacionVencimiento, []);
    const claseTipo = useMemo(() => clasesTipo(tipo), [tipo]);

    return (
        <div className={`row w-100 rounded-5 ${claseTipo} px-0 py-1 ms-auto me-0 text-center`} style={{maxWidth: '20rem'}}>
            <div className="col pe-0  border-2">
                <p className="h6 text-truncate d-inline d-sm-block mb-0">
                    {enteroCerrado}
                    {(restoCerrado > 0) ? <span className="samll-2  text-body-tertiary">,{restoCerrado}</span> : ''}
                    {unidad}
                </p>
                <span className="mt-1 bg-secundario float-end rounded-start border-black border-end border-2"
                    style={{width: porcentajeNoVence + '%',minHeight: '0.4em'}} ></span>
            </div>
            <div className="col ps-0">
                <p className="h6 text-truncate d-inline d-sm-block mb-0">
                    {enteroAbierto}
                    {(restoAbierto > 0) ? <span className="samll-2  text-body-tertiary">,{restoAbierto}</span> : ''}
                    {unidad}
                </p>
                <span className="mt-1 bg-secondary-subtle float-start rounded-end"
                    style={{width: porcentajeSiVence + '%',minHeight: '0.4em'}} ></span>
            </div>
        </div>
    )
}