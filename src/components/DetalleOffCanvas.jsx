

export const DetalleOffCanvas = ({tipoDetalle, getData, setData}) => {

    
    return (
        <div className="offcanvas offcanvas-bottom offcanvas-detalle gb-container border border-0 mx-auto bg-transparent" tabIndex="-1" id="ModalArticulos" aria-labelledby="offcanvasBottomLabel">
            <div className="offcanvas-header bg-primario text-white rounded-4 rounded-bottom-0">
                <span className="icon-link fs-3 me-2">
                    <svg className="bi" aria-hidden="true"><use xlinkHref="#bi-calendar-23"></use> </svg>
                    <h5 className="offcanvas-title text-truncate" id="offcanvasBottomLabel">Lunes</h5>
                </span>
                <a className="icon-link text-white" data-bs-dismiss="offcanvas" aria-label="Close">
                    <svg className="bi fs-1" aria-hidden="true"><use xlinkHref="#bi-x"></use></svg>
                </a>
            </div>
            <div className="offcanvas-body small bg-white">
            
                
                <div className="mb-3 ">
                    <span className="small px-2 bg-body-tertiary d-block">A</span>
                    <ul className="list-group list-group-flush placeholder-glow ">
                        <li className="list-group-item bg-white align-items-center py-3 py-sm-4 px-sm-3 px-2">
                            <svg className="float-start bi fs-4 me-2 img-bi mb-auto text-secundario bg-terciario" aria-hidden="true" ><use xlinkHref="#bi-square"></use></svg>
                            <div className="row mx-0">
                                <div className="col col-12 col-sm-8 px-0">
                                    <p className="fs-5 d-block mb-0 text-primario text-truncate">Paella<span className="small"> / Miraflores</span></p>
                                    <span className="small text-body-tertiary d-block fst-italic text-truncate">{`Abarrote > arroz`}</span>
                                </div>
                                <div className="col col-12 col-sm-4 text-end px-0 align-self-end">
                                    <p className="small d-inline d-sm-block mb-0">
                                        <span className="fst-italic text-body-tertiary">175g</span>
                                        <span className="badge bg-secundario rounded-pill">x2</span>
                                    </p>
                                    <p className="fs-6 text-truncate d-inline d-sm-block mb-0 text-body-secondary fw-semibold">88.888<span className="samll-2  text-body-tertiary">,40</span>kg</p>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item bg-cuaternario align-items-center py-3 py-sm-4 px-sm-3 px-2">
                            <svg className="float-start bi fs-4 me-2 img-bi mb-auto text-secundario bg-terciario" aria-hidden="true" ><use xlinkHref="#bi-square"></use></svg>
                            <div className="row mx-0">
                                <div className="col col-12 col-sm-8 px-0">
                                    <p className="fs-5 d-block mb-0 text-primario text-truncate">Spaghetti<span className="small"> / Lucchetti</span></p>
                                    <span className="small text-body-tertiary d-block fst-italic text-truncate">{`Abarrote > pasta`}</span>
                                </div>
                                <div className="col col-12 col-sm-4 text-end px-0 align-self-end">
                                    <p className="small d-inline d-sm-block mb-0">
                                        <span className="fst-italic text-body-tertiary">400g</span>
                                        <span className="badge bg-secundario rounded-pill">x4</span>
                                    </p>
                                    <p className="fs-6 text-truncate d-inline d-sm-block mb-0 text-body-secondary fw-semibold">88.888<span className="samll-2  text-body-tertiary">,40</span>kg</p>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item bg-white align-items-center py-3 py-sm-4 px-sm-3 px-2">
                            <svg className="float-start bi fs-4 me-2 img-bi mb-auto text-secundario bg-terciario" aria-hidden="true" ><use xlinkHref="#bi-square"></use></svg>
                            <div className="row mx-0">
                                <div className="col col-12 col-sm-8 px-0">
                                    <p className="fs-5 d-block mb-0 text-primario text-truncate">blanca granulada<span className="small"> / Iansa</span></p>
                                    <span className="small text-body-tertiary d-block fst-italic text-truncate">{`Abarrote > azúcar`}</span>
                                </div>
                                <div className="col col-12 col-sm-4 text-end px-0 align-self-end">
                                    <p className="small d-inline d-sm-block mb-0">
                                        <span className="fst-italic text-body-tertiary">1.000g</span>
                                        <span className="badge bg-secundario rounded-pill">x1</span>
                                    </p>
                                    <p className="fs-6 text-truncate d-inline d-sm-block mb-0 text-body-secondary fw-semibold">88.888<span className="samll-2  text-body-tertiary">,40</span>kg</p>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item bg-white align-items-center py-3 py-sm-4 px-sm-3 px-2">
                            <svg className="float-start bi fs-4 me-2 img-bi mb-auto text-secundario bg-terciario" aria-hidden="true" ><use xlinkHref="#bi-square"></use></svg>
                            <div className="row mx-0">
                                <div className="col col-12 col-sm-8 px-0">
                                    <p className="fs-5 d-block mb-0 text-primario text-truncate">h4. Bootstrap heading abcdefghijklmn abcdefghijklmn abcdefghijklmn</p>
                                    <span className="small text-body-tertiary d-block fst-italic text-truncate">h6. Bootstrap heading</span>
                                </div>
                                <div className="col col-12 col-sm-4 text-end px-0 align-self-end">
                                    <p className="small d-inline d-sm-block mb-0">
                                        <span className="fst-italic text-body-tertiary">400g</span>
                                        <span className="badge bg-secundario rounded-pill">x3</span>
                                    </p>
                                    <p className="fs-6 text-truncate d-inline d-sm-block mb-0 text-body-secondary fw-semibold">88.888<span className="samll-2  text-body-tertiary">,40</span>kg</p>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item bg-white align-items-center py-3 py-sm-4 px-sm-3 px-2">
                            <svg className="float-start bi fs-4 me-2 img-bi mb-auto text-secundario bg-terciario" aria-hidden="true" ><use xlinkHref="#bi-square"></use></svg>
                            <div className="row mx-0">
                                <div className="col col-12 col-sm-8 px-0">
                                    <p className="fs-5 d-block mb-0 text-primario text-truncate">h4. Bootstrap heading abcdefghijklmn abcdefghijklmn abcdefghijklmn</p>
                                    <span className="small text-body-tertiary d-block fst-italic text-truncate">h6. Bootstrap heading</span>
                                </div>
                                <div className="col col-12 col-sm-4 text-end px-0 align-self-end">
                                    <p className="small d-inline d-sm-block mb-0">
                                        <span className="fst-italic text-body-tertiary">400g</span>
                                        <span className="badge bg-secundario rounded-pill">x3</span>
                                    </p>
                                    <p className="fs-6 text-truncate d-inline d-sm-block mb-0 text-body-secondary fw-semibold">88.888<span className="samll-2  text-body-tertiary">,40</span>kg</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>	

            
            
            </div>
        </div>
	
    )
}
