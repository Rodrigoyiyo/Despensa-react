import React, { useContext } from 'react';
import { Simbolos } from '../Simbolos';
import { SimbolosCalendario } from '../SimbolosCalendario';
import { MainStock, CabeceraSinFiltro, Footer } from '../ui';
import { UseUsuarioProvider } from '../context/UseUsuarioProvider';
import { limpiarStyleBody } from '../ui/helpers/limpiesaBootstrap';
import { AuthCotext } from '../auth/context/AuthContext';

const dataHeader = {
    titulo: "MiNombre",
    symbolSVG: "bi-person-circle"
}

export const InicioPage = () => {

    const { usuario } = useContext(AuthCotext);
    if (usuario)
        dataHeader.titulo = usuario.nombre;

    limpiarStyleBody();

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