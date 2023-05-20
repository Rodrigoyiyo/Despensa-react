import { Fragment, useState } from "react"

const claseBtnSeleccion = ( pregunta) => {
    return (pregunta)? 'btn-primary ' : 'btn-outline-primary ';
}

export const MenuModalFiltroDondeCategoria = ({data}) => {

    const [selected, setSelected] = useState([]);

    const escogerDonde = (id) => {
        const lista = (selected.includes(id))? selected.filter( s => (s !== id)) : [...selected, id];
        setSelected(lista);
    }

    return (
        <div className="">
            <span className="small p-2 bg-body-tertiary d-block sticky-top">{data.coleccion}</span>
            <ul className="list-group list-group-flush">
                {
                    data.campos.map( campo => {
                        return (
                            <li key={campo.texto} className="list-group-item px-0 px-sm-3">
                                <div className="row mx-0 text-start">
                                    <div className="col-menos-icono px-0">
                                        <label className="btn border border-0 rounded-0 text-body-tertiary d-flex">
                                            <span className="d-inline-block text-truncate">{campo.texto}</span>
                                        </label>
                                    </div>
                                    <div className="col-mas-icono px-0">
                                        {
                                            campo.condiciones.map( condicion => {
                                                return (
                                                    <label key={condicion.id} className={`btn icon-link border border-0 rounded-0 d-flex mb-1 ${claseBtnSeleccion(selected.includes(condicion.id))}`} type="button" onClick={() => escogerDonde(condicion.id)} >
                                                        <span className="icon-link pe-2">
                                                            <svg className="bi" aria-hidden="true"><use xlinkHref={`#${condicion.symbolSVG}`}></use></svg>
                                                        </span>
                                                        <span className="d-inline-block text-truncate">{condicion.texto[0]}</span>
                                                        {
                                                            (condicion.texto[1])?
                                                                <>
                                                                    <span className="d-inline-block text-truncate small fst-italic text-body-tertiary"> y </span>
                                                                    <span className="d-inline-block text-truncate">{condicion.texto[1]}</span>
                                                                </>
                                                            : ''
                                                        }
                                                        
                                                    </label>
                                                )  
                                            })
                                        }
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}