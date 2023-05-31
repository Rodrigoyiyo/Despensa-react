import { Simbolos } from "../Simbolos";
import { UseUsuarioProvider } from "../context/UseUsuarioProvider";
import { CabeceraConFiltro, MainStock } from "../ui";
import {limpiarStyleBody} from '../ui/helpers/limpiesaBootstrap';

const dataHeader = {
    titulo: "Stock",
    symbolSVG: "bi-arrow-left",
    enlace: "Bodegas"
}

export const StockPage = () => {

    limpiarStyleBody();
    
    return (
        <UseUsuarioProvider>
            <Simbolos />
            <CabeceraConFiltro titulo={dataHeader.titulo} symbolSVG={dataHeader.symbolSVG} enlace={dataHeader.enlace}/>
            <MainStock />
        </UseUsuarioProvider>
    );
}