import { useState } from 'react';
import { JsonTipoUnidad } from '../data/JsonTipoUnidad'

export const CampoCantidadArticulo = ({ getData, formato, setData }) => {

    const [pasosRango, setPasosRango] = useState(0);

    const esCompleto = (Number(getData.desgaste) === Number(getData.valor));

    let textoUnidad = '...';
    JsonTipoUnidad.find(grupo => {
        grupo.grupo.map(unidad => {
            if (unidad.id == getData.unidad) {
                textoUnidad = unidad.texto;
                return true;
            }
        })
    });

    const onValor = (texto) => {
        setData({ ...getData, valor: texto });
    }

    const onValorDesgaste = (texto) => {
        setData({ ...getData, desgaste: texto });
    }

    const onValorRango = ({ value, max, step, min }, total) => {
        const unaPorcion = (max - min) / step;
        const rango = ((total / unaPorcion) * value).toFixed(2);
        console.log('texto', rango);
        setData({ ...getData, desgaste: rango });
        setPasosRango(value);
    }

    /*const valorRango = ({ max, step, min }, total, desgate) => {
        const unaPorcion = (max - min) / step;
        const rango = (total / desgate)(total / unaPorcion);
        console.log('rango', rango);
        //setData({ ...getData, desgaste: rango });u
    }*/

    const onSeleccion = (id) => {
        setData({ ...getData, unidad: id });
    }

    if (formato === 'crear')
        return (
            <div className="input-group mb-3" style={{ maxWidth: '320px' }}>
                <input type="text" className="form-control" value={getData.valor}
                    onChange={e => onValor(e.target.value)} />
                <span className="input-group-text">{textoUnidad}</span>
                <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end text-end list-barra-hijos">
                    {
                        JsonTipoUnidad.map(grupo => {
                            return (
                                <li key={grupo.nombre}>
                                    {
                                        grupo.grupo.map(unidad => {
                                            return <a key={unidad.id} className={`dropdown-item user-select-none ${(getData.unidad == unidad.id) ? 'active' : ''}`}
                                                onClick={() => onSeleccion(unidad.id)} >{unidad.texto}</a>
                                        })
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )

    if (formato === 'editar')
        return (
            <>
                <div className="input-group input-group-sm" style={{ width: '320px' }}>
                    <span className="input-group-text">{(esCompleto) ? '=' : '~'}</span>
                    <input type="text" className="form-control" value={getData.desgaste} onChange={e => onValorDesgaste(e.target.value)} />
                    <span className="input-group-text">{getData.valor}</span>
                    <span className="input-group-text">{textoUnidad}</span>
                </div>
                <input type="range" style={{ width: '320px' }} min="0" max="12" step="1" value={pasosRango} list="dl_porcion12"
                    onChange={e => onValorRango(e.target, getData.valor)} />
            </>
        )

    if (formato === 'lectura-editado')
        return (
            <>
                <div className="d-flex d-flex justify-content-center" style={{ width: '320px' }}>
                    <input type="text" className="form-control-plaintext form-control-sm text-end pe-4 pb-0" readOnly value={`${(esCompleto) ? '' : '~'}${getData.desgaste}${getData.unidad}`} />
                    <div className="col-form-label pb-0">/</div>
                    <input type="text" className="form-control-plaintext form-control-sm text-start ps-4 pb-0" readOnly value={`${getData.valor}${getData.unidad}`} />
                </div>
                <div className="progress" style={{ width: '320px', height: '0.5rem' }} role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar bg-dark-subtle" style={{ width: '70%' }}></div>
                </div>
            </>
        )

    if (formato === 'lectura')
        return (
            <div className="col-form-label">
                {`${getData.valor} ${textoUnidad}`}
            </div>
        )
}