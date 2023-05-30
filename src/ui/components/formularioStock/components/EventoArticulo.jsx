import { JsonTipoEvento } from '../data/JsonTipoEvento'

export const EventoArticulo = ({ getData, setData , formato}) => {

    const evento = JsonTipoEvento.find(evento => { return (evento.id === getData.id) });

    const onQuitar = (idEvento) => {
        setData(idEvento);
    }

    if (formato === 'editar' || formato === 'crear')
        return (
            <div className="row mb-3">
                <label className="col-sm-5 col-form-label text-body-tertiary">{evento.texto}</label>
                <div className="col-sm-7 d-flex align-items-center">
                    <div className="input-group" style={{ width: '320px' }}>
                        <input type="date" className="form-control" readOnly value={getData.fecha} />
                        <input type="time" className="form-control" readOnly value={getData.hora} />
                    </div>
                    <a className=" ms-auto icon-link text-primary-emphasis" onClick={() => onQuitar(getData.id)}>
                        <svg className="bi" aria-hidden="true"><use xlinkHref="#bi-x-square"></use></svg>
                    </a>
                </div>
            </div>
        )


    if (formato === 'lectura')
        return (
            <div className="row mb-3">
                <label className="col-sm-5 col-form-label text-body-tertiary">{evento.texto}</label>
                <div className="col-sm-7 d-flex align-items-center">
                    <input type="date" className="form-control-plaintext" readOnly value={getData.fecha} />
                    <input type="time" className="form-control-plaintext" readOnly value={getData.hora} />
                </div>
            </div>
        )
}