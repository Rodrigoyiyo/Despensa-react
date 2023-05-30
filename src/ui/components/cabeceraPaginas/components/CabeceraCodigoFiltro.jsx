import { MenuLateral } from "../../menuLateral"
import { ModalCodigo } from "../../modalCodigo/components/ModalCodigo"
import { NavegacionHeader } from "./NavegacionHeader"

const propFijas = {
    idOffCanvas: "offcanvasMenu",
    idModal: "ModalFiltro",
    symbolSVG: {
        botonMenu: "bi-list",
        botonOffCanvas: "bi-x"
    } 
}

export const CabeceraCodigoFiltro = ({titulo = '', symbolSVG, enlace}) => {
    return (
        <>
            <header className="py-2 text-white bg-primario">
                <div className="container gb-container ">
                    <NavegacionHeader symbolSVG={symbolSVG} titulo={titulo} idModalBuscador={'ModalFiltro'} idOffCanvas={propFijas.idOffCanvas} enlace={enlace} />
                </div>
            </header>
            <MenuLateral idOffCanvas={propFijas.idOffCanvas} />
            <ModalCodigo idModalBuscador={'ModalFiltro'}/>
        </>
        
    )
}