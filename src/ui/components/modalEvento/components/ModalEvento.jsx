import {JsonTipoEvento} from '../data/JsonTipoEvento'

export const ModalEvento = ({idModal, setData}) => {
    return (
        <div className="modal" id={idModal} tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Evento</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <div className="list-group rounded-0">
                            {
                                JsonTipoEvento.map( evento => {
                                    return (
                                        <a key={evento.id} onClick={() => {setData(evento.id)}} data-bs-dismiss="modal"
                                        className="list-group-item list-group-item-action user-select-none">
                                            {evento.texto}
                                        </a>
                                    )
                                    
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}