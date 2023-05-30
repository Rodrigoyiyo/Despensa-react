export const IngresarCodigo = ({setPasoBusqueda}) => {

    const onEscribir = () => {
        setPasoBusqueda('paso2');
    }
    return (
        <div className="d-flex justify-content-evenly">
            <button type="button" className="btn btn-primary btn-lg icon-link fs-1">
                <svg className="bi" aria-hidden="true"><use xlinkHref="#bi-upc-scan"></use></svg>
            </button>
            <button type="button" className="btn btn-secondary btn-lg icon-link fs-1" onClick={ () => onEscribir() }>
                <svg className="bi" aria-hidden="true"><use xlinkHref="#bi-pencil-square"></use></svg>
            </button>
        </div>
    )
}