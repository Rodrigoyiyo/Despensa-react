import { useState } from "react";
import { Simbolos } from "../Simbolos"
import { CabeceraCodigoFiltro, MainInstanciaArticulo } from "../ui"
import {limpiarStyleBody} from '../ui/helpers/limpiesaBootstrap';

const dataHeader = {
    titulo: "Instancia artículo",
    symbolSVG: "bi-arrow-left",
    enlace: "Bodegas"
}

export const InstanciaArticuloPage = () => {

    limpiarStyleBody();
    

    const [tipoEdicion, setTipoEdicion] = useState('lectura');

    return (
        <>
            <Simbolos />
            <CabeceraCodigoFiltro titulo={dataHeader.titulo} symbolSVG={dataHeader.symbolSVG} enlace={dataHeader.enlace}/>
            <MainInstanciaArticulo formato={tipoEdicion} setFormato={setTipoEdicion} />
        </>
    )
}