import React from 'react';
import {Simbolos} from '../Simbolos';
import { SimbolosCalendario } from '../SimbolosCalendario';
import { CabeceraSinFiltro, Footer, MainBodega } from '../ui';

const dataHeader = {
    titulo: "Bodegas"
}

export const BodegasPage = () => {
    return (
        <>
            <Simbolos />
            <SimbolosCalendario />
            <CabeceraSinFiltro titulo={dataHeader.titulo} />
            <MainBodega />
            <Footer />
        </>
       
    );
}