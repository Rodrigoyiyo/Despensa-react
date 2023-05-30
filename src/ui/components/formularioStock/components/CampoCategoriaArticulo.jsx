export const CampoCategoriaArticulo = ({ getData, formato, setData, idModal }) => {

    if (formato === 'crear')
        return (
            <div className="input-group">
                <input type="text" className="form-control" readOnly value={getData.nombre} />
                <button className="btn btn-outline-secondary icon-link" type="button" data-bs-toggle="modal" data-bs-target={`#${idModal}`}>
                    <svg className="bi" aria-hidden="true"><use xlinkHref="#bi-search"></use></svg>
                </button>
            </div>
        )

    if (formato === 'editar' || formato === 'lectura')
        return (
            <div className="col-form-label">
                {getData.nombre}
            </div>
        )

}