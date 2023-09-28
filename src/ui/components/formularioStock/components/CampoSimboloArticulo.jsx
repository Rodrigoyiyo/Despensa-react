import { ModalSimbolo } from "../../modalSimbolo"

const propFijas = {
    idModal: "ModalSimbolo"
}

export const CampoSimboloArticulo = ({ idSymbolSVG = 'bi-square', formato }) => {

    const fondoLogo = (formato !== 'lectura') ? 'bg-terciario' : 'bg-secondary-subtle';
    
    const logoHabilitado = (formato == 'lectura') ? 'disabled' : '';

    return (
        <>
            <button className="d-flex   me-2 p-0 btn btn-outline-secondary" type="button"  disabled={`${logoHabilitado}`}
            data-bs-toggle="modal" data-bs-target={`#${propFijas.idModal}`}>
                <svg className={`float-start bi fs-6 img-bi mb-auto    ${fondoLogo}`} aria-hidden="true"><use xlinkHref={`#${idSymbolSVG}`}></use></svg>
            </button>
            <ModalSimbolo idModal={propFijas.idModal} />
        </>
    )
}