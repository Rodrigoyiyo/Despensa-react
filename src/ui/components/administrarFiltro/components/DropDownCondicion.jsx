import condicionData from '../JsonCondicionFiltro.json';
import {esCLaseActivar} from '../helpers/EditarHtml';

export const DropDownCondicion = ({getData,setCambios}) => {

    //const [selected, setSelected] = useState({idSymbolSVG:"...", id:""});

    const escogerCondicion = ({idCondicion, condicionExtras, symbolSVG}) => {
        //setSelected({idSymbolSVG: event.currentTarget.querySelector('svg').querySelector('use')['href'].baseVal, id:idCondicion});
        setCambios({idCondicion, condicionExtras, symbolSVG});
    };

    return (
        <>
            <button type="button" className="btn btn-outline-secondary dropdown-toggle icon-link" data-bs-toggle="dropdown" aria-expanded="false">
                { (getData.symbolSVG !== "")? (<svg className="bi" aria-hidden="true" ><use xlinkHref={`#${getData.symbolSVG}`}></use></svg>): "..."}
            </button>
            <ul className="dropdown-menu nav-iconos-primario">
                {
                    condicionData.filter( condicion => {
                        return ((getData.tipoCampo !== "") && (condicion.tipo === getData.tipoCampo || condicion.tipo === "cualquier"))
                    }).map( condicion => {
                        return (
                            <li key={`${condicion.id}`}>
                                <button className={`dropdown-item icon-link ${esCLaseActivar(condicion.id === getData.idCondicion)}`} 
                                onClick={() => (escogerCondicion({
                                    idCondicion: condicion.id, 
                                    condicionExtras: condicion.extras, 
                                    symbolSVG: condicion.idSimboloSVG}))}>
                                    <svg className="bi" aria-hidden="true" ><use xlinkHref={`#${condicion.idSimboloSVG}`}></use></svg>
                                    <span className="d-block">{condicion.texto}</span>
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}