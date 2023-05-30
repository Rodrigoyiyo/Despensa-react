import { useState } from "react"
import { ModalEvento } from "../../modalEvento";
import { JsonTipoEvento } from "../data/JsonTipoEvento";

const moldeEvento = {
    id: "",
    fecha: "",
    hora: ""
}

const propFijas = {
    idModal: "ModalEventos"
}

export const CrearEventoArticulo = ({ getData, setData }) => {

    const [eventoNuevo, setEventoNuevo] = useState(moldeEvento);

    let textoEvento = '...';
    JsonTipoEvento.find(ev => {
        if (ev.id == eventoNuevo.id) {
            textoEvento = ev.texto;
            return true;
        }
    });

    const onIdEvento = (id) => {
        setEventoNuevo({...eventoNuevo, id});
    }

    const onAgregar = () => {
        setData(eventoNuevo);
        setEventoNuevo(moldeEvento);
    }

    const onFecha = (fecha) => {
        setEventoNuevo({ ...eventoNuevo, fecha })
    }

    const onHora = (hora) => {
        setEventoNuevo({ ...eventoNuevo, hora })
    }

    return (
        <>
            <div className="row mb-3">
                <div className="col-sm-5">
                    <div className="input-group">
                        <input type="text" className="form-control" readOnly value={textoEvento} />
                        <button className="btn btn-outline-secondary icon-link" type="button"
                            data-bs-toggle="modal" data-bs-target={`#${propFijas.idModal}`}  >
                            <svg className="bi" aria-hidden="true"><use xlinkHref="#bi-search"></use></svg>
                        </button>
                    </div>
                </div>
                <div className="col-sm-7 d-flex align-items-center">
                    <div className="input-group" style={{ width: '320px' }}>
                        <input type="date" className="form-control" value={eventoNuevo.fecha} onChange={e => onFecha(e.target.value)} />
                        <input type="time" className="form-control" value={eventoNuevo.hora} onChange={e => onHora(e.target.value)} />
                    </div>
                    <a className=" ms-auto icon-link" onClick={() => onAgregar()}>
                        <svg className="bi" aria-hidden="true"><use xlinkHref="#bi-check-square"></use></svg>
                    </a>
                </div>

            </div>
            <ModalEvento idModal={propFijas.idModal} setData={onIdEvento} />
        </>
    )
}