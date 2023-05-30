import { FooterSimbolo } from "./FooterSimbolo"
import { MenuColores } from "./MenuColores"
import { MenuSimbolos } from "./MenuSimbolos"

export const ModalSimbolo = ({idModal}) => {
    return (
        <div className="modal" id={idModal} tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg modal-fullscreen-lg-down">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Símbolo del artículo</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" ></button>
                    </div>
                    <div className="modal-body">
                        <div className="row text-center my-2">
                            <div className="col-12 col-md-4 mt-2">
                                <div className="placeholder rounded bg-secondary-subtle d-block mx-auto" style={{width: '128px', height: '128px', minWidth: '128px'}}></div>
                                
                                <div className="btn-group btn-group my-2" role="group" aria-label="Small button group">
                                    <button type="button" className="btn btn-outline-secondary">1</button>
                                    <button type="button" className="btn btn-outline-secondary active">2</button>
                                    <button type="button" className="btn btn-outline-secondary">3</button>
                                    <button type="button" className="btn btn-outline-secondary">4</button>
                                    <button type="button" className="btn btn-outline-secondary">5</button>
                                    <button type="button" className="btn btn-outline-secondary">6</button>
                                </div>
                            </div>
                            <MenuSimbolos />
                            <MenuColores />
                        </div>
                    </div>
                    <FooterSimbolo />
                </div>
            </div>
        </div>
    )
}