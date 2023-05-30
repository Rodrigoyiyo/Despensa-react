import {esCLaseActivar} from '../helpers/EditarHtml';

export const Pestanas = ({ pestanaValor, setPestana }) => {
    return (
        <ul className="nav nav-tabs text-center mb-3">
            <li className="nav-item w-50">
                <a className={`nav-link ${esCLaseActivar(pestanaValor === 'donde')}`} aria-current="page" href="#" onClick={() => setPestana('donde')}>Filtro</a>
            </li>
            <li className="nav-item w-50">
                <a className={`nav-link ${esCLaseActivar(pestanaValor === 'orden')}`} href="#" onClick={() => setPestana('orden')}>Orden</a>
            </li>
        </ul>
    )
}