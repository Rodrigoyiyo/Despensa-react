export const GrupoMenu = ({titulo,getData}) => {
    return (
        <li className="list-group-item">
            <ul className="navbar-nav nav-iconos-primario">
                <h6>{titulo}</h6>
                {
                    getData.map( enlace => {
                        return (
                            <li className="nav-item" key={enlace.texto}>
                                <a className="nav-link icon-link" href={enlace.enlace}>
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