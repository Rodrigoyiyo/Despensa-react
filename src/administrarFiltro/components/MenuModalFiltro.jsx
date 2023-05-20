import { useState } from "react";
import { useFiltroDondeToDo } from "../hooks/useFiltroDondeToDo";
import { useFiltroOrdenToDo } from "../hooks/useFiltroOrdenToDo";
import { useFiltroHeaderToDo } from "../hooks/useFiltroHeaderToDo";
import { HeaderFiltro } from "./HeaderFiltro";
import { BodyFiltro } from "./BodyFiltro";
import { FooterFiltro } from "./FooterFiltro";

export const MenuModalFiltro = () => {

    const [pestanaValor, setPestanaValor] = useState('donde');

    const {
        stateHeader,
        limpiarHeader,
        actualizarColeccion,
        actualizarCondicion,
        actualizarTexto1,
        actualizarTexto2,
        actualizarOrden
    } = useFiltroHeaderToDo();

    const {
        stateDonde,
        nuevoElementoFiltroDonde,
        quitarElementoFiltroDonde,
        actualizarElementoFiltroDonde
    } = useFiltroDondeToDo();

    const {
        stateOrden,
        nuevoElementoFiltroOrden,
        quitarElementoFiltroOrden,
        actualizarElementoFiltroOrden
    } = useFiltroOrdenToDo();
    
    return (
        <div className="modal fade" id="ModalFiltro" tabIndex="-1" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
            <div className="modal-dialog modal-lg modal-dialog-scrollable modal-fullscreen-xl-down">
                <div className="modal-content">
                    <HeaderFiltro pestanaValor={pestanaValor} setPestana={setPestanaValor} />
                    <BodyFiltro />
                    <FooterFiltro />
                </div>
            </div>
        </div>
	
    )
}