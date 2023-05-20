const claseActivar = ( pregunta) => {
    return (pregunta)? 'active' : '';
}


export const HeaderFiltro = ({pestanaValor, setPestana}) => {

    return (
        <div className="modal-header d-block position-relative z-1">
            <ul className="nav nav-tabs text-center mb-3">
                <li className="nav-item w-50">
                    <a className={`nav-link ${claseActivar(pestanaValor === 'donde')}`} aria-current="page" href="#" onClick={() => setPestana('donde')}>Filtro</a>
                </li>
                <li className="nav-item w-50">
                    <a className={`nav-link ${claseActivar(pestanaValor === 'orden')}`} href="#" onClick={() => setPestana('orden')}>Orden</a>
                </li>
            </ul>
            <div className="d-blox d-sm-flex align-items-start m-2">
                <MenuModalFiltroSubHeader tipofiltro={pestanaValor} setOrden={agregarEnListaOrden} setDonde={agregarEnListaDonde}/>
            </div>
        </div>
    )
}