import { Fragment } from 'react';
import coleccionData from '../JsonColeccionFiltro.json';


const claseActivar = ( pregunta) => {
    return (pregunta)? 'active' : '';
}

export const DropDownColeccion = ({addClass, getData, setCambios}) => {

    //const [selected, setSelected] = useState(getData);

    const escogerCampo = ({idColeccion, coleccion, idCampo, campo, tipoCampo}) => {
        //setSelected({coleccion, campo: event.currentTarget.textContent, id:idCampo, tipo:tipoCampo});
        setCambios({idColeccion, coleccion, idCampo, campo, tipoCampo});
    };

    return (
        <>
            <button type="button" className={`form-control dropdown-toggle dropdown-toggle-split ${addClass}`} data-bs-toggle="dropdown" aria-expanded="false">
                <span className="w-100 d-inline-block ">{ (getData.coleccion && getData.coleccion)? `${getData.coleccion} > ${getData.campo}` : '... > ...'}</span>
            </button>
            <ul className="dropdown-menu">
                {
                    coleccionData.map( coleccion => {
                        return (
                            <Fragment key={coleccion.coleccion}>
                                <li ><h6 className="dropdown-header">{coleccion.coleccion}</h6></li>
                                {
                                    coleccion.campos.map( campo => {
                                        return (
                                            <li key={`${coleccion.coleccion}_${campo.texto}`}>
                                                <button className={`dropdown-item ${claseActivar(campo.id === getData.idCampo)}`} 
                                                onClick={() => (escogerCampo({
                                                    idColeccion: coleccion.id, 
                                                    coleccion: coleccion.coleccion, 
                                                    idCampo: campo.id, 
                                                    campo: campo.texto, 
                                                    tipoCampo: campo.tipo}))}>
                                                    {campo.texto}
                                                </button>
                                            </li>
                                        )
                                    })
                                }
                                <li><hr className="dropdown-divider"/></li>
                            </Fragment>
                        )
                    })
                }
            </ul>
        </>
        
    )
}