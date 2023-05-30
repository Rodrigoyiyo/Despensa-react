export const ValorListaDonde = ({getData}) => {
    return (
        <label className="icon-link bg-cuaternario d-flex mb-1" >
            <span className="icon-link pe-2">
                <svg className="bi" aria-hidden="true"><use xlinkHref={`#${getData.symbolSVG}`}></use></svg>
            </span>
            <span className="d-inline-block text-truncate">{getData.texto[0]}</span>
            {
                (getData.texto[1])?
                    <>
                        <span className="d-inline-block text-truncate small fst-italic text-body-tertiary"> y </span>
                        <span className="d-inline-block text-truncate">{getData.texto[1]}</span>
                    </>
                : ''
            }
        </label>
    )
}