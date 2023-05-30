export const BuscardorFiltro = ({textoBuscador = '', idModal}) => {

    const onTexto = (event) => {
        const valor = event.currentTarget.value;
    }

    return (
        <div className="d-flex align-items-center">
            <div className="input-group flex-fill">
                <input type="text" className="form-control" placeholder="Artículo o categoría" value={textoBuscador} onChange={onTexto}/>
                <button className="btn bg-body-secondary icon-link text-primario">
                    <svg className="bi" aria-hidden="true"><use xlinkHref="#bi-search"></use></svg>
                </button>
            </div>
            <button className="icon-link fs-3 flex-fill navbar-toggler ms-2 text-primario" type="button" data-bs-toggle="modal" data-bs-target={`#${idModal}`}>
                <svg className="bi" aria-hidden="true"><use xlinkHref="#bi-funnel"></use></svg>
            </button>
        </div>
    )
}

