export const CamposConservacionTemperatura = ({ getData, idConservacion, setData, esSeleccionado }) => {

    //console.log('getData', getData);
    const temperatura1 = (getData !== undefined && getData.valores !== undefined && getData.valores.temperatura1 !== undefined) ? getData.valores.temperatura1 : '';
    const temperatura2 = (getData !== undefined && getData.valores !== undefined && getData.valores.temperatura2 !== undefined) ? getData.valores.temperatura2 : '';
    //console.log('t1 t2', temperatura1, temperatura2);

    return (
        <>
            <div className="input-group input-group-sm ms-2" style={{ maxWidth: '80px' }}>
                <input type="text" disabled={!esSeleccionado} className="form-control" value={temperatura1}
                    onChange={e => setData({ id: idConservacion, valores: { temperatura1: e.target.value, temperatura2: temperatura2 } })} />
                <span className="input-group-text">C°</span>
            </div>
            <div className="input-group input-group-sm ms-2" style={{ maxWidth: '80px' }}>
                <input type="text" disabled={!esSeleccionado} className="form-control" value={temperatura2}
                    onChange={e => setData({ id: idConservacion, valores: { temperatura1: temperatura1, temperatura2: e.target.value } })} />
                <span className="input-group-text">C°</span>
            </div>
        </>
    )
}