import PropTypes from 'prop-types';

export const ArticuloResumenComponente = ({
    articulo,
    inscribe,
    categoriaArbol,
    idSymbolSVG,
    cantidad,
    unidades,
    suma
}) => {
    return (
        <li className="list-group-item bg-white align-items-center py-3 py-sm-4 px-sm-3 px-2">
            <svg className="float-start rounded  bi fs-2 me-2 img-bi mb-auto text-secundario bg-terciario" aria-hidden="true" ><use xlinkHref={`#${idSymbolSVG}`}></use></svg>
            <div className="row mx-0">
                <div className="col col-12 col-sm-8 px-0">
                    <a className="stretched-link text-decoration-none fs-5 mb-0 text-primario " data-bs-toggle="offcanvas" href="#ModalArticulos">
                        <span className="d-block text-truncate">{articulo}<span className="small"> / {inscribe}</span></span>
                    </a>
                    <span className="small text-body-tertiary d-block fst-italic text-truncate"> 
                        {categoriaArbol.join(' > ')}
                    </span>
                </div>
                <div className="col col-12 col-sm-4 text-end px-0 align-self-end">
                    <p className="small d-inline d-sm-block mb-0">
                        <span className="fst-italic text-body-tertiary">{cantidad}</span>
                        <span className="badge bg-secundario rounded-pill mx-1">{unidades}</span>
                    </p>
                    <p className="fs-6 text-truncate d-inline d-sm-block mb-0 text-body-secondary fw-semibold">{suma.entero}<span className="samll-2  text-body-tertiary">{suma.fraccion}</span>{suma.unidadMedida}</p>
                </div>
            </div>
        </li>
    )
}

ArticuloResumenComponente.propTypes = {
    articulo: PropTypes.string.isRequired,
    inscribe: PropTypes.string.isRequired,
    categoriaArbol: PropTypes.array.isRequired,
    idSymbolSVG: PropTypes.string.isRequired,
    cantidad: PropTypes.string.isRequired,
    unidades: PropTypes.string.isRequired,
    suma: PropTypes.object.isRequired
}