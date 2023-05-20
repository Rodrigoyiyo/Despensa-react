import { useEffect, useState } from "react";

const simbolosTipo = (tipo) => {
    let respuesta = {asc:'',desc:''};
    switch (tipo){
        case 'texto': 
            respuesta.asc = 'bi-sort-alpha-down-alt';
            respuesta.desc = 'bi-sort-alpha-down';
            break;
        case 'numero': 
            respuesta.asc = 'bi-sort-down-alt';
            respuesta.desc = 'bi-sort-down';
            break;
        default: 
            respuesta.asc = 'bi-sort-alpha-down-alt';
            respuesta.desc = 'bi-sort-alpha-down';
            break;
    }
    return respuesta;
}

const claseBtnSeleccion = ( pregunta) => {
    return (pregunta)? 'btn-secondary' : 'btn-outline-secondary';
}

export const BotonesOrdenFiltro = ({seleccion, tipoDato, setData}) => {

    const [selected, setSelected] = useState(seleccion);
    if(selected !== seleccion){
        setSelected(seleccion)
    }

    const escogerOrden = (tipoOrden) => {
        if(setData !== undefined){
            setSelected(tipoOrden);
            setData({tipoOrden});
        }
    };

    const {asc: simboloASC, desc: simboloDESC} = simbolosTipo(tipoDato);

    return (
        <>
            <button  className={`btn icon-link ${claseBtnSeleccion(selected==='desc')}`} type="button" onClick={() => escogerOrden('desc')} >
                <svg className="bi" aria-hidden="true"><use xlinkHref={`#${simboloDESC}`}></use></svg>
            </button>
            <button  className={`btn icon-link ms-2 ${claseBtnSeleccion(selected==='asc')}`} type="button" onClick={() => escogerOrden('asc')} >
                <svg className="bi" aria-hidden="true"><use xlinkHref={`#${simboloASC}`}></use></svg>
            </button>

        </>
    )
}