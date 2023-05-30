import { useMemo } from "react";
import { clasesTipo, separacionCantidad } from "../helpers/CalcularCantidades"

export const CantidadCapsulaUnMonto = ({getData : {cantidad, unidad, relacionVencimiento, tipo}}) => {
    
    const { entero = 0, resto = 0 } = useMemo(() => separacionCantidad(cantidad), []);
    const { porcentajeNoVence, porcentajeSiVence} = relacionVencimiento;
    const claseTipo = useMemo(() => clasesTipo(tipo), [tipo]);

    return (
        <div className={`rounded-5 ${claseTipo} py-1 text-center ms-auto`} style={{maxWidth: '12rem'}}>
            <p className="fs-6 text-truncate d-inline d-sm-block mb-0 text-body-secondary fw-semibold">
                {entero}
                {(resto > 0) ? <span className="samll-2  text-body-tertiary">,{resto}</span> : ''}
                {unidad}
            </p>
            <div className="row mt-1 mx-0">
                <div className="col pe-0 border-black border-end border-2">
                    <span className="bg-secundario float-end rounded-start" style={{width: porcentajeNoVence + '%',minHeight: '0.4em'}}></span>
                </div>
                <div className="col ps-0">
                    <span className="bg-secondary-subtle float-start rounded-end" style={{width: porcentajeSiVence + '%',minHeight: '0.4em'}}></span>
                </div>
            </div>
        </div>
    )
}