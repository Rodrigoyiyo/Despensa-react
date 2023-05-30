import { useMemo } from "react";
import { separacionCantidad } from "../helpers/CalcularCantidades";

export const CantidadSimple = ({getData : {cantidad, unidad, neto, unidades, tipo}}) => {

    const { entero = 0, resto = 0 } = useMemo(() => separacionCantidad(cantidad), []);

    return (
        <div className="col col-12 col-sm-4 text-end px-0 align-self-end">
            <p className="small d-inline d-sm-block mb-0">
                <span className="fst-italic text-body-tertiary">{neto}</span>
                <span className="badge bg-secundario rounded-pill ms-1">{unidades}</span>
            </p>
            <p className="fs-6 text-truncate d-inline d-sm-block mb-0 text-body-secondary fw-semibold">
                {entero}
                {(resto > 0) ? <span className="samll-2  text-body-tertiary">,{resto}</span> : ''}
                {unidad}
            </p>
        </div>
    )
}