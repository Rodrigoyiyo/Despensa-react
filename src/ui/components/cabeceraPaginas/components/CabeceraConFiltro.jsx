import { NavegacionHeader } from "./NavegacionHeader"
import { BuscardorFiltro } from "./BuscardorFiltro"
import { ResumenOrdenFiltro } from "./ResumenOrdenFiltro"
import { MenuLateral } from "../../menuLateral/components"
import { AdministrarFiltro } from "../../administrarFiltro"


const propFijas = {
    idOffCanvas: "offcanvasMenu",
    idModal: "ModalFiltro",
    symbolSVG: {
        botonMenu: "bi-list",
        botonOffCanvas: "bi-x"
    } 
}

export const CabeceraConFiltro = ({titulo = '', symbolSVG, enlace}) => {
    return (
        <>
            <header id="menu-cabeza" className=" mb-4">
                <div className=" bg-primario text-white z-3 position-relative">
                    <div className="container gb-container py-2">
                        <NavegacionHeader symbolSVG={symbolSVG} titulo={titulo} idOffCanvas={propFijas.idOffCanvas} enlace={enlace} />
                    </div>
                    <div className="container gb-container px-3">
                        <div className="p-3 bg-white rounded-top">
                            <BuscardorFiltro idModal={propFijas.idModal} textoBuscador={""} />
                        </div>
                    </div>
                </div>
                <div className="container gb-container px-3 z-n1 position-relative">
                    <div className=" px-3 pb-2 bg-white rounded-bottom shadow">
                        <ResumenOrdenFiltro getData={""} />
                    </div>
                </div>
            </header>
            <MenuLateral idOffCanvas={propFijas.idOffCanvas} />
            <AdministrarFiltro />
        </>
        
    )
}