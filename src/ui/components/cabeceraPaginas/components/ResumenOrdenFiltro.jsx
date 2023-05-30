export const ResumenOrdenFiltro = ({getData}) => {
    return (
        <div className="mx-1 overflow-x-scroll db-barra-desplazamiento">
            <div className="d-inline-flex filtro-icons-primario">
                <a className="btn bg-body-tertiary icon-link m-1 rounded-pill d-inline-flex text-nowrap" href="#">
                <svg className="bi fs-4" aria-hidden="true" ><use xlinkHref="#bi-sort-alpha-down"></use></svg>
                Categoría
                </a>
                <a className="btn bg-body-tertiary icon-link m-1 rounded-pill d-inline-flex text-nowrap" href="#">
                <svg className="bi fs-4" aria-hidden="true" ><use xlinkHref="#bi-sort-alpha-down-alt"></use></svg>
                Artículo
                </a>
                <a className="btn bg-body-tertiary icon-link m-1 rounded-pill d-inline-flex text-nowrap" href="#">
                <svg className="bi fs-4" aria-hidden="true" ><use xlinkHref="#bi-sort-down-alt"></use></svg>
                Cantidad
                </a>
                <a className="btn bg-body-tertiary icon-link m-1 rounded-pill d-inline-flex text-nowrap" href="#">
                <svg className="bi fs-4" aria-hidden="true" ><use xlinkHref="#bi-sort-down"></use></svg>
                Cantidad
                </a>
                <a className="btn bg-body-tertiary icon-link m-1 rounded-pill d-inline-flex text-nowrap" href="#">
                <svg className="bi fs-4" aria-hidden="true" ><use xlinkHref="#bi-sort-numeric-down"></use></svg>
                Elaboración
                </a>
                <a className="btn bg-body-tertiary icon-link m-1 rounded-pill d-inline-flex text-nowrap" href="#">
                <svg className="bi fs-4" aria-hidden="true" ><use xlinkHref="#bi-sort-numeric-down-alt"></use></svg>
                Vencimiento
                </a>
                <a className="btn bg-body-tertiary icon-link m-1 rounded-pill d-inline-flex text-nowrap" href="#">
                <svg className="bi fs-4" aria-hidden="true" ><use xlinkHref="#bi-check-square"></use></svg>
                Abarrote
                </a>
                <a className="btn bg-body-tertiary icon-link m-1 rounded-pill d-inline-flex text-nowrap" href="#">
                <svg className="bi fs-4" aria-hidden="true" ><use xlinkHref="#bi-circle-slash-lg"></use></svg>
                Cafeteria
                </a>
                <a className="btn bg-body-tertiary icon-link m-1 rounded-pill d-inline-flex text-nowrap" href="#">
                    <span className="d-block">Pasta ~</span>
                    <span className="d-block">Spagh</span>
                </a>
            </div>
        </div>
    )
}

