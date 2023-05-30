import React from 'react';
import {Simbolos} from '../Simbolos';
import { CalendarioMeses, CabeceraSinFiltro, Footer } from '../ui';
import { SimbolosCalendario } from '../SimbolosCalendario';

const dataHeader = {
    titulo: "Adquisiciones"
}

export const AdquisicionesPage = () => {
    return (
        <>
            <Simbolos />
            <SimbolosCalendario />
            <CabeceraSinFiltro titulo={dataHeader.titulo} />
            <CalendarioMeses />
            <Footer />
        </>
       
    );
}