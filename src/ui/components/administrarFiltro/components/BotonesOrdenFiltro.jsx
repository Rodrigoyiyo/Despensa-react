import { useState } from "react";
import { claseBtnRadioCheck, idSvgSegunTipoOrden } from '../helpers/EditarHtml';

export const BotonesOrdenFiltro = ({ seleccion, habilitados = false, tipoDato, setData }) => {

    const [selected, setSelected] = useState(seleccion);

    if (selected !== seleccion) {
        setSelected(seleccion)
    }

    const { asc: simboloASC, desc: simboloDESC } = idSvgSegunTipoOrden(tipoDato);

    if (habilitados)
        return (
            <>
                <button className={`btn icon-link ${claseBtnRadioCheck(selected === 'desc')}`} type="button" disabled >
                    <svg className="bi" aria-hidden="true"><use xlinkHref={`#${simboloDESC}`}></use></svg>
                </button>
                <button className={`btn icon-link ms-2 ${claseBtnRadioCheck(selected === 'asc')}`} type="button" disabled >
                    <svg className="bi" aria-hidden="true"><use xlinkHref={`#${simboloASC}`}></use></svg>
                </button>

            </>
        )

    const escogerOrden = (tipoOrden) => {
        if (setData !== undefined) {
            setSelected(tipoOrden);
            setData({ tipoOrden });
        }
    };

    return (
        <>
            <button className={`btn icon-link ${claseBtnRadioCheck(selected === 'desc')}`} type="button" onClick={() => escogerOrden('desc')} >
                <svg className="bi" aria-hidden="true"><use xlinkHref={`#${simboloDESC}`}></use></svg>
            </button>
            <button className={`btn icon-link ms-2 ${claseBtnRadioCheck(selected === 'asc')}`} type="button" onClick={() => escogerOrden('asc')} >
                <svg className="bi" aria-hidden="true"><use xlinkHref={`#${simboloASC}`}></use></svg>
            </button>

        </>
    )
}