
const seleccionar = (e, ruta) =>{
    e.classList.replace("foo", "bar");
}

export const Footer = () => {

    return (
        <footer className="p-3 bg-white border-top border-2 sticky-bottom fixed-bottom text-secundario" >
            <div className="container gb-container">
                <div className="row">
                    <div className="col-3">
                        <a className="text-decoration-none icon-link text-reset fs-3 d-flex flex-column" onClick={e => seleccionar(e,"ruta")}>
                            <svg className="bi" aria-hidden="true"><use xlinkHref="#bi-house"></use></svg>
                            <span className="fs-6 d-none d-sm-block">Inicio</span>
                        </a>
                    </div>
                    <div className="col-3 text-primario">
                        <a href="#" className="text-decoration-none icon-link text-reset fs-3 d-flex flex-column">
                            <svg className="bi" aria-hidden="true"><use xlinkHref="#bi-inboxes-fill"></use></svg>
                            <span className="fs-6 d-none d-sm-block">Bodegas</span>
                        </a>
                    </div>
                    <div className="col-3">
                        <a href="#" className="text-decoration-none icon-link text-reset fs-3 d-flex flex-column ">
                            <svg className="bi" aria-hidden="true"><use xlinkHref="#bi-cart2"></use></svg>
                            <span className="fs-6 d-none d-sm-block">Adquisiciones</span>
                        </a>
                    </div>
                    <div className="col-3">
                        <a href="#" className="text-decoration-none icon-link text-reset fs-3 d-flex flex-column">
                            <svg className="bi" aria-hidden="true"><use xlinkHref="#bi-handbag"></use></svg>
                            <span className="fs-6 d-none d-sm-block">Despachos</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

