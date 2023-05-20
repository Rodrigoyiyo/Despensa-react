import { useState } from "react";
import { MenuModalFiltroDondeCategoria } from "./MenuModalFiltroDondeCategoria";
import { MenuModalFiltroOrdenarComponente } from "./MenuModalFiltroOrdenarComponente";
import { MenuModalFiltroSubHeader } from "./MenuModalFiltroSubHeader";

import filtroDondeLista from '../JsonListaDonde.json';
import filtroOrdenLista from '../JsonListaOrden.json';
import { useFiltroListaOrden } from "../hooks/useFiltroListaOrden";
import { useFiltroListaDonde } from "../hooks/useFiltroListaDonde";


const claseActivar = ( pregunta) => {
    return (pregunta)? 'active' : '';
}

export const MenuModalFiltro = () => {

    const [pestanaValor, setPestanaValor] = useState('donde');
    //const [dondeValor, setDondeValor] = useState(filtroDondeLista);
    const {listaDonde, agregarEnListaDonde, quitarListaDonde} = useFiltroListaDonde(filtroDondeLista);
    const {listaOrden, agregarEnListaOrden, quitarListaOrden} = useFiltroListaOrden(filtroOrdenLista);
    

    const escogerCampo = (pestana) => {
        setPestanaValor(pestana);
    };

    return (
        <div className="modal fade" id="ModalFiltro" tabIndex="-1" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
            <div className="modal-dialog modal-lg modal-dialog-scrollable modal-fullscreen-xl-down">
                <div className="modal-content">
                    <div className="modal-header d-block position-relative z-1">
                        <ul className="nav nav-tabs text-center mb-3">
                            <li className="nav-item w-50">
                                <a className={`nav-link ${claseActivar(pestanaValor === 'donde')}`} aria-current="page" href="#" onClick={e => escogerCampo('donde')}>Filtro</a>
                            </li>
                            <li className="nav-item w-50">
                                <a className={`nav-link ${claseActivar(pestanaValor === 'orden')}`} href="#" onClick={e => escogerCampo('orden')}>Orden</a>
                            </li>
                        </ul>
                        <div className="d-blox d-sm-flex align-items-start m-2">
                            <MenuModalFiltroSubHeader tipofiltro={pestanaValor} setOrden={agregarEnListaOrden} setDonde={agregarEnListaDonde}/>
                        </div>
                    </div>
                    <div className="modal-body py-0 position-relative z-0">
                        {
                            (pestanaValor === 'donde')?
                                listaDonde.map( valor => {
                                    return (
                                        <MenuModalFiltroDondeCategoria data={valor} key={valor.coleccion} />
                                    )
                                })
                            :                       
                            <ul className="list-group list-group-flush">
                                {
                                    listaOrden.map( valor => {
                                        return (
                                            <MenuModalFiltroOrdenarComponente data={valor} key={`${valor.idColeccion}_${valor.idCampo}`} setQuitar={quitarListaOrden}/>
                                        )
                                    })
                                }
                            </ul>
                        }
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-primary">Aceptar</button>
                    </div>
                </div>
            </div>
        </div>
	
    )
}