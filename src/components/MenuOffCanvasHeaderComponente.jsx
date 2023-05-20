import PropTypes from 'prop-types';

export const MenuOffCanvasHeaderComponente = ({titulo,enlaces}) => {
    return (
        <li className="list-group-item">
            <h6>{titulo}</h6>
            <ul className="navbar-nav nav-iconos-primario">
                {
                    enlaces.map( enlace => {
                        return (
                            <li className="nav-item" key={enlace.texto}>
                                <a className="nav-link icon-link" href="#">
                                    <svg className="bi" aria-hidden="true" ><use xlinkHref={`#${enlace.symbolSVG}`}></use></svg>
                                    {enlace.texto}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </li>
    )
}

MenuOffCanvasHeaderComponente.propTypes = {
    titulo: PropTypes.string.isRequired,
    enlaces: PropTypes.array.isRequired
}