export const FormularioCodigo = ({ getData, setData }) => {

    const onEditarCodigo = (valor) => {
        setData({codigo: valor, tipo: getData.tipo})
    }

    const onEditarTipo = (valor) => {
        setData({codigo: getData.codigo, tipo: valor})
    }

    return (
        <>
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label col-form-label-lg">Cód</label>
                <div className="col-sm-10">
                    <input type="number" className="form-control form-control-lg" value={getData.codigo} onChange={e => onEditarCodigo(e.target.value) }/>
                </div>
            </div>
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label col-form-label-sm">Tipo</label>
                <div className="col-sm-10">
                    <select className="form-select form-select-sm" value={getData.tipo} onChange={e => onEditarTipo(e.target.value)} >
                        <option value="1">GTIN</option>
                        <option value="2">One</option>
                        <option value="3">Two</option>
                        <option value="4">Three</option>
                    </select>
                </div>
            </div>
        </>
    )
}