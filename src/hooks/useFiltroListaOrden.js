import { useState } from "react"


export const useFiltroListaOrden = (dataInicial) => {

    const [listaOrden, setListaOrden] = useState(dataInicial);

    const agregarEnListaOrden = (pop) => {

        const {tipoOrden, coleccion, idColeccion, campo, idCampo, tipoCampo} = pop;
        const elemento = {
            tipoOrden,
            coleccion,
            idColeccion,
            campo,
            idCampo,
            tipoCampo
        };

        const listaNueva = listaOrden.filter(e => {
            return !(e.idCampo === idCampo)
        });

        setListaOrden([...listaNueva, elemento]);

    }


    const quitarListaOrden = (listaIds) => {

        const listaNueva = listaOrden.filter(elemento => {
            return !listaIds.includes(elemento.idCampo);
        });

        setListaOrden(listaNueva);

    }


    return {
        listaOrden,
        agregarEnListaOrden,
        quitarListaOrden
    }

}