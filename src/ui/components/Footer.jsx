import { Link, NavLink } from "react-router-dom";


export const Footer = () => {

    return (
        <footer className="p-3 bg-white border-top border-2 sticky-bottom fixed-bottom mt-auto" >
            <div className="container gb-container">
                <div className="row">
                    <div className="col-3">
                        <NavLink 
                        className={ ({isActive}) => `text-decoration-none icon-link fs-3 d-flex flex-column ${ isActive? 'active': ''}`} 
                        to="/">
                            {({ isActive}) => (
                                <>
                                    <svg className="bi" aria-hidden="true"><use xlinkHref={`#bi-house${isActive? '-fill': ''}`}></use></svg>
                                    <span className="fs-6 d-none d-sm-block">Inicio</span>
                                </>
                            )}
                        </NavLink>
                    </div>
                    <div className="col-3">
                        <NavLink 
                        className={ ({isActive}) => `text-decoration-none icon-link fs-3 d-flex flex-column ${ isActive? 'active': ''}`} 
                        to="/bodegas">
                            {({ isActive}) => (
                                <>
                                    <svg className="bi" aria-hidden="true"><use xlinkHref={`#bi-inboxes${isActive? '-fill': ''}`}></use></svg>
                                    <span className="fs-6 d-none d-sm-block">Bodegas</span>
                                </>
                            )}
                        </NavLink>
                    </div>
                    <div className="col-3">
                        <NavLink 
                        className={ ({isActive}) => `text-decoration-none icon-link fs-3 d-flex flex-column ${ isActive? 'active': ''}`} 
                        to="/adquisiciones">
                            {({ isActive}) => (
                                <>
                                    <svg className="bi" aria-hidden="true"><use xlinkHref={`#bi-cart2${isActive? '-fill': ''}`}></use></svg>
                                    <span className="fs-6 d-none d-sm-block">Adquisiciones</span>
                                </>
                            )}
                        </NavLink>
                    </div>
                    <div className="col-3">
                        <NavLink 
                        className={ ({isActive}) => `text-decoration-none icon-link fs-3 d-flex flex-column ${ isActive? 'active': ''}`} 
                        to="/despachos">
                            {({ isActive}) => (
                                <>
                                    <svg className="bi" aria-hidden="true"><use xlinkHref={`#bi-handbag${isActive? '-fill': ''}`}></use></svg>
                                    <span className="fs-6 d-none d-sm-block">Despachos</span>
                                </>
                            )}
                        </NavLink>
                    </div>
                </div>
            </div>
        </footer>
    )
}

