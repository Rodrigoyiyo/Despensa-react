import React from 'react';
import {Simbolos} from '../Simbolos';
import { CalendarioMeses, CabeceraSinFiltro, Footer } from '../ui';
import { SimbolosCalendario } from '../SimbolosCalendario';
import {limpiarStyleBody} from '../ui/helpers/limpiesaBootstrap';

const dataHeader = {
    titulo: "Adquisiciones"
}

export const AdquisicionesPage = () => {

    limpiarStyleBody();

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