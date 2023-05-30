import { AdministrarFiltro } from "../../administrarFiltro/components/AdministrarFiltro"
import { MenuLateral } from "../../menuLateral/components"
import { NavegacionHeader } from "./NavegacionHeader"

const propFijas = {
    idOffCanvas: "offcanvasMenu",
    idModal: "ModalFiltro",
    symbolSVG: {
        botonMenu: "bi-list",
        botonOffCanvas: "bi-x"
    } 
}

export const CabeceraSinFiltro = ({titulo = '', symbolSVG, enlace}) => {
    return (
        <>
            <header className="py-2 text-white bg-primario">
                <div className="container gb-container ">
                    <NavegacionHeader symbolSVG={symbolSVG} titulo={titulo} idOffCanvas={propFijas.idOffCanvas} enlace={enlace} />
                </div>
            </header>
            <MenuLateral idOffCanvas={propFijas.idOffCanvas} />
            <AdministrarFiltro />
        </>
        
    )
}