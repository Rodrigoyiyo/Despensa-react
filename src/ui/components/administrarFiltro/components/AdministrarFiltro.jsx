import { useState } from "react";
import { useFiltroDondeToDo } from "../hooks/useFiltroDondeToDo";
import { useFiltroOrdenToDo } from "../hooks/useFiltroOrdenToDo";
import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";

export const AdministrarFiltro = () => {

    const [tipofiltro, setTipofiltro] = useState('donde');

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
                    <Header tipofiltro={tipofiltro} setTipofiltro={setTipofiltro} setDonde={nuevoElementoFiltroDonde} setOrden={nuevoElementoFiltroOrden} />
                    <Body tipofiltro={tipofiltro} dataDonde={stateDonde} dataOrden={stateOrden} quitarDonde={quitarElementoFiltroDonde} quitarOrden={quitarElementoFiltroOrden} />
                    <Footer />
                </div>
            </div>
        </div>
	
    )
}