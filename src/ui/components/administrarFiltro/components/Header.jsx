import { Formulario } from "./Formulario"
import {esCLaseActivar} from '../helpers/EditarHtml';

export const Header = ({tipofiltro, setTipofiltro, setDonde, setOrden}) => {

    return (
        <div className="modal-header d-block position-relative z-1">
            <ul className="nav nav-tabs text-center mb-3">
                <li className="nav-item w-50">
                    <a className={`nav-link ${esCLaseActivar(tipofiltro === 'donde')}`} href="#" onClick={() => setTipofiltro('donde')}>Filtro</a>
                </li>
                <li className="nav-item w-50">
                    <a className={`nav-link ${esCLaseActivar(tipofiltro === 'orden')}`} href="#" onClick={() => setTipofiltro('orden')}>Orden</a>
                </li>
            </ul>
            <Formulario tipofiltro={tipofiltro} setDonde={setDonde} setOrden={setOrden} />
        </div>
    )
}