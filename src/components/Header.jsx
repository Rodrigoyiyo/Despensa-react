import { MenuBotonHeader } from "./MenuBotonHeader";
import { MenuOffCanvasHeader } from "./MenuOffCanvasHeader";

const propFijas = {
    idOffCanvas: "offcanvasMenu",
    symbolSVG: {
        botonMenu: "bi-list",
        botonOffCanvas: "bi-x"
    } 
}

export const Header = () => {
    return (
        <>
            <header className="p-3 sticky-top text-white" style={{backgroundColor: "#579BB1"}}>
                <div className="container gb-container">
                    <div className="d-flex flex-wrap align-items-center justify-content-start">
                        <a className="d-flex align-items-center mb-0 me-auto text-reset text-decoration-none icon-link fs-3">
                            <svg className="bi me-2" aria-hidden="true"><use xlinkHref="#bi-person-circle"></use></svg>
                            <span className="fs-4">Petizo Yiyo</span>
                        </a>
                        <div className="d-flex text-end align-items-center">
                            <MenuBotonHeader idOffCanvas={propFijas.idOffCanvas} idSymbolSVG={propFijas.symbolSVG.botonMenu} />
                        </div>
                    </div>
                </div>
            </header>
            <MenuOffCanvasHeader idOffCanvas={propFijas.idOffCanvas} idSymbolSVG={propFijas.symbolSVG.botonOffCanvas}/>
        </>
    );
}

