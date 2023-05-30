import { ModalSimbolo } from "../../modalSimbolo"

const propFijas = {
    idModal: "ModalSimbolo"
}

export const CampoSimboloArticulo = () => {
    return (
        <>
            <a className="d-flex rounded bg-secondary-subtle me-2"
                data-bs-toggle="modal" data-bs-target={`#${propFijas.idModal}`}
                style={{ width: '32px', height: '32px', minWidth: '32px' }}>

            </a>
            <ModalSimbolo idModal={propFijas.idModal} />
        </>
    )
}