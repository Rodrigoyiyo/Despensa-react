import { MenuBotonHeader } from "./MenuBotonHeader";
import { MenuModalFiltro } from "./MenuModalFiltro";
import { MenuOffCanvasHeader } from "./MenuOffCanvasHeader";

const propFijas = {
    idOffCanvas: "offcanvasMenu",
    idModal: "ModalFiltro",
    symbolSVG: {
        botonMenu: "bi-list",
        botonOffCanvas: "bi-x"
    } 
}

export const HeaderBuscar = () => {
    return (
        <>
            <header id="menu-cabeza" className=" mb-4">
                <div className=" bg-primario text-white z-3 position-relative">
                    <div className="container gb-container py-3">
                        <div className="d-flex flex-wrap align-items-center justify-content-start">
                            <a className="d-flex align-items-center mb-0 me-auto text-reset text-decoration-none icon-link fs-3">
                                <svg className="bi me-2" aria-hidden="true"><use xlinkHref="#bi-arrow-left"></use></svg>
                                <span className="fs-4">Stock</span>
                            </a>
                            <div className="d-flex text-end align-items-center">
                                <MenuBotonHeader idOffCanvas={propFijas.idOffCanvas} idSymbolSVG={propFijas.symbolSVG.botonMenu} />
                            </div>
                        </div>
                    </div>
                    <div className="container gb-container px-3">
                        <div className="p-3 bg-white rounded-top">
                            <div className="d-flex align-items-center">
                                <div className="input-group flex-fill">
                                    <input type="text" className="form-control" placeholder="Artículo o categoría"/>
                                    <button className="btn bg-body-secondary icon-link text-primario">
                                        <svg className="bi" aria-hidden="true"><use xlinkHref="#bi-search"></use></svg>
                                    </button>
                                </div>
                                <button className="icon-link fs-3 flex-fill navbar-toggler ms-2 text-primario" type="button" data-bs-toggle="modal" data-bs-target={`#${propFijas.idModal}`}>
                                    <svg className="bi" aria-hidden="true"><use xlinkHref="#bi-funnel"></use></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container gb-container px-3 z-n1 position-relative">
                    <div className=" px-3 pb-2 bg-white rounded-bottom shadow">
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
                    </div>
                </div>
            </header>
            <MenuModalFiltro />
            <MenuOffCanvasHeader idOffCanvas={propFijas.idOffCanvas} idSymbolSVG={propFijas.symbolSVG.botonOffCanvas}/>
        </>
        
    )
}