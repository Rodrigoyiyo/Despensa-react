import { useState } from "react"
import { IngresarCodigo } from "./IngresarCodigo"
import { FormularioCodigo } from "./FormularioCodigo";
import { FooterCodigo } from "./FooterCodigo";
import { ElementoDeCarga } from "../../ElementoDeCarga";

export const ModalCodigo = ({ idModalBuscador, setData }) => {

    const [pasoBusqueda, setPasoBusqueda] = useState('paso1');
    const [buscadorState, setBuscador] = useState({codigo:'',tipo:''});

    return (
        <div className="modal" id={idModalBuscador} tabIndex="-1" aria-hidden="true" >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Ingresar código</h5>
                        {
                            (pasoBusqueda === 'paso1') ? (
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            ) : ''
                        }

                    </div>
                    <div className="modal-body">
                        {
                            (pasoBusqueda === 'paso1') ? (
                                <IngresarCodigo setPasoBusqueda={setPasoBusqueda} />
                            ) : (
                                (pasoBusqueda === 'paso2') ? (
                                    <FormularioCodigo getData={buscadorState} setData={setBuscador} />
                                ) : ((pasoBusqueda === 'paso3')? <ElementoDeCarga /> : '' ))
                        }

                    </div>
                    {
                        (pasoBusqueda === 'paso2') ? (<FooterCodigo setPasoBusqueda={setPasoBusqueda}/>) : ''
                    }
                </div>
            </div>
        </div>
    )
}