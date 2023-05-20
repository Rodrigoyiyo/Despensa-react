import { useState } from "react";

export const useFiltroListaDonde = (dataInicial) => {

    const [listaDonde, setListaDonde] = useState(dataInicial);

    

    const agregarEnListaDonde = ({ coleccion, idColeccion, campo, idCampo, idCondicion, condicion, symbolSVG }) => {

        const nuevoElemento = {
            coleccion,
            id: idColeccion,
            campos: [
                {
                    texto: campo,
                    id: idCampo,
                    condiciones: [
                        {
                            symbolSVG,
                            id: idCondicion,
                            texto: condicion
                        }
                    ]
                }
            ]
        };

        const i_Coleccion = listaDonde.findIndex(e => e.id === nuevoElemento.id);
        if ( i_Coleccion === -1) {
            setListaDonde([...listaDonde, nuevoElemento]);
        }else{
            const nuevaLista = [...listaDonde];
            const i_Campo = listaDonde[i_Coleccion].campos.findIndex(e => e.id === nuevoElemento.campos[0].id);
            if ( i_Campo === -1) {
                nuevaLista[i_Coleccion].campos = [...listaDonde[i_Coleccion].campos ,nuevoElemento.campos[0]];
                setListaDonde(nuevaLista);
            }else{
                const i_Condicion = listaDonde[i_Coleccion].campos[i_Campo].condiciones.findIndex(e => e.id === nuevoElemento.campos[0].condiciones[0].id);
                if ( i_Condicion === -1) {
                    nuevaLista[i_Coleccion].campos[i_Campo].condiciones = [...listaDonde[i_Coleccion].campos[i_Campo].condiciones , nuevoElemento.campos[0].condiciones[0]];
                    setListaDonde(nuevaLista);
                }else{
                    nuevaLista[i_Coleccion].campos[i_Campo].condiciones[i_Condicion] = nuevoElemento.campos[0].condiciones[0];
                    setListaDonde(nuevaLista);
                }
            }
        }

        return;

    }

    const quitarListaDonde = (listaIds) => {

        const listaNueva = listaDonde.filter(elemento => {
            const elemento_campo = elemento.campos.filter(campo => {
                const campo_condicion = campo.condiciones.filter(condicion => {
                    return !listaIds.includes(condicion.id);
                });
                return (campo_condicion.condiciones.length >= 1) ? campo_condicion : false;
            });
            return (elemento_campo.campos.length >= 1) ? elemento_campo : false;
        });

        setListaDonde(listaNueva);

        return;

    }

    return {
        listaDonde,
        agregarEnListaDonde,
        quitarListaDonde
    }
}