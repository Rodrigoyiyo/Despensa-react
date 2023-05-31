import React from 'react';
import {Simbolos} from '../Simbolos';
import { SimbolosCalendario } from '../SimbolosCalendario';
import { CabeceraSinFiltro, Footer, MainBodega } from '../ui';
import {limpiarStyleBody} from '../ui/helpers/limpiesaBootstrap';

const dataHeader = {
    titulo: "Bodegas"
}

export const BodegasPage = () => {

    limpiarStyleBody();
    
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