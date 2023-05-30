import { EnlaceMenuLateral } from "./EnlaceMenuLateral"

export const GrupoMenu = ({ titulo, getData }) => {
    return (
        <li className="list-group-item">
            <ul className="navbar-nav nav-iconos-primario">
                <h6>{titulo}</h6>
                {
                    getData.map(enlace => {
                        return (
                            <li className="nav-item" key={enlace.texto} >
                                <EnlaceMenuLateral getData={enlace} />
                            </li>
                        )
                    })
                }
            </ul>
        </li>
    )
}