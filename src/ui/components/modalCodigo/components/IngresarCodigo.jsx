export const IngresarCodigo = ({setPasoBusqueda}) => {

    const onEscribir = () => {
        setPasoBusqueda('paso2');
    }
    return (
        <div className="d-flex justify-content-evenly">

            <label className="btn btn-primary btn-lg icon-link fs-1">
                <input type="file" className="btn-check" autoComplete="off" accept="image/png, image/jpeg" />
                <svg className="bi" aria-hidden="true"><use xlinkHref="#bi-upc-scan"></use></svg>
            </label>
            <button type="button" className="btn btn-secondary btn-lg icon-link fs-1" onClick={ () => onEscribir() }>
                <svg className="bi" aria-hidden="true"><use xlinkHref="#bi-pencil-square"></use></svg>
            </button>
        </div>
    )
}