import { Link } from "react-router-dom"

export const EnlaceMenuLateral = ({ getData }) => {
    return (
        <Link to={getData.enlace} className="nav-link icon-link user-select-none" >
            <svg className="bi" aria-hidden="true" ><use xlinkHref={`#${getData.symbolSVG}`}></use></svg>
            {getData.texto}
        </Link>
    )
}