import React from 'react';
import {Simbolos} from '../Simbolos';
import { SimbolosCalendario } from '../SimbolosCalendario';
import { MainStock, CabeceraSinFiltro, Footer } from '../ui';
import { UseUsuarioProvider } from '../context/UseUsuarioProvider';

const dataHeader = {
    titulo: "Rodrigo",
    symbolSVG: "bi-person-circle"
}

export const InicioPage = () => {
    return (
        <UseUsuarioProvider>
            <Simbolos />
            <SimbolosCalendario />
            <CabeceraSinFiltro titulo={dataHeader.titulo} symbolSVG={dataHeader.symbolSVG} />
            <MainStock />
            <Footer />
        </UseUsuarioProvider>
       
    );
}