export const FormularioArticuloExterno = ({getData}) => {
    return (
        <div className="card mb-2 bg-light">
            <div className="card-body">
                <div className="row mb-3">
                    <label className="col-sm-3 col-form-label col-form-label-lg text-body-tertiary">Código</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control-plaintext form-control-lg" readOnly value={getData.codigo} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-3 col-form-label col-form-label-sm text-body-tertiary">Tipo</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control-plaintext form-control-sm" readOnly value={getData.tipo} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-3 col-form-label text-body-tertiary">Inscribe</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control-plaintext" readOnly value={getData.inscribe} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-3 col-form-label text-body-tertiary">Artículo</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control-plaintext" readOnly value={getData.articulo} />
                    </div>
                </div>
            </div>
        </div>
    )
}