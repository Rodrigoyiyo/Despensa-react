import { FooterCategoria } from "./FooterCategoria"
import { MenuCategoriaEspecifica } from "./MenuCategoriaEspecifica"
import { MenuCategoriaGeneral } from "./MenuCategoriaGeneral"

export const ModalCategoria = ({idModal}) => {
    return (
        <div className="modal" id={idModal} tabIndex="-1"  aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl modal-fullscreen-xl-down">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Tipo de artículos</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" ></button>
                    </div>
                    <div className="modal-body">
                        <div className="d-flex h-100 align-items-stretch">
                            <MenuCategoriaGeneral />
                            <MenuCategoriaEspecifica />
                        </div>
                    </div>
                    <FooterCategoria />
                </div>
            </div>
        </div>
    )
}