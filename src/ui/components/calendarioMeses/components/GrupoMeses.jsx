import { Mes } from "./Mes"
import listaFechas from "../JsonFechas.json"
import { useState } from "react";

export const GrupoMeses = ({getData}) => {

    const [diaSeleccionado, setDiaSeleccionado] = useState('');

    return (
        <>
            {
                    listaFechas.map( ({anio, meses}) => {
                        return meses.map( mes => <Mes 
                            getData={mes} 
                            key={`${mes.anio}_${mes.mes}`} 
                            getAnio={anio}
                            diaSeleccionado={diaSeleccionado}
                            setData={setDiaSeleccionado}  />)
                    })
            }
        </>   
    )
}