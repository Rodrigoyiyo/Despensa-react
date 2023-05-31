import { useState } from "react";
import { Simbolos } from "../Simbolos"
import { CabeceraCodigoFiltro, MainPlantillaArticulo } from "../ui"
import {limpiarStyleBody} from '../ui/helpers/limpiesaBootstrap';

const dataHeader = {
    titulo: "Plantilla artículo",
    symbolSVG: "bi-arrow-left",
    enlace: "Bodegas"
}

export const PlantillaArticuloPage = () => {

    limpiarStyleBody();
    

    const [tipoEdicion, setTipoEdicion] = useState('lectura');

    return (
        <>
            <Simbolos />
            <CabeceraCodigoFiltro titulo={dataHeader.titulo} symbolSVG={dataHeader.symbolSVG} enlace={dataHeader.enlace}/>
            <MainPlantillaArticulo formato={tipoEdicion} setFormato={setTipoEdicion} />
        </>
    )
}