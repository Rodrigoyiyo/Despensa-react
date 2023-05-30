import { Link } from "react-router-dom"

export const NavegacionHeader = ({symbolSVG = '', titulo, idModalBuscador, idOffCanvas, enlace}) => {
    return (
        <div className="d-flex flex-wrap align-items-center justify-content-start">
			<Link to={(enlace!== undefined)? "/Bodegas": ''} className="d-flex align-items-center mb-0 me-auto text-reset text-decoration-none icon-link fs-3">
				{(
					(symbolSVG.length >= 3)? (
						<svg className="bi me-2" aria-hidden="true"><use xlinkHref={`#${symbolSVG}`} ></use></svg>
					): ''
				)}
				<span className="fs-4">{titulo}</span>
			</Link>
			<div className="d-flex text-end align-items-center">
				{
					(idModalBuscador)? (
						<button className="navbar-toggler icon-link fs-4 me-2 " type="button" data-bs-toggle="modal" data-bs-target={`#${idModalBuscador}`}>
							<svg className="bi" aria-hidden="true"><use xlinkHref="#bi-search"></use></svg>
						</button>
					): ''
				}
				<button className="navbar-toggler icon-link fs-3" type="button" data-bs-toggle="offcanvas" data-bs-target={`#${idOffCanvas}`} aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
				    <svg className="bi" aria-hidden="true"><use xlinkHref="#bi-three-dots-vertical"></use></svg>
				</button>
			</div>
		</div>
    )
}

