import { useMemo } from "react";
import { clasesContenedorDia, clasesEventosDia, marcarDia } from "../helpers/Fecha";

export const DiaMes = ({ getData, diaSeleccionado, setData, primerDiaSemanaMes }) => {

    const esPrimerDia = useMemo(() => (getData.dia == 1) && primerDiaSemanaMes, []);

    const clasesEventos = useMemo(() => clasesEventosDia(getData), [getData]);
    const clasesContenedor = useMemo(() => clasesContenedorDia({ ...getData, primerDiaMes: esPrimerDia }), []);

    //console.log('d');

    if (getData.evento !== true)
        return (
            <div className={`${clasesContenedor}`}>
                <button type="button" className={`btn ${clasesEventos}`}>
                    {getData.dia}
                </button>
            </div>
        )

    if (getData.evento !== true)
        return <div className={`${clasesContenedor}`}></div>




    const escogerDia = () => {
        setData(getData.fecha);
    };

    return (
        <div className={`${clasesContenedor}`}>
            <button type="button" className={`btn icon-link fs-3 ${clasesEventos} ${marcarDia(diaSeleccionado === getData.fecha)}`}
                 data-bs-toggle="offcanvas" data-bs-target="#ModalArticulos"
                onClick={() => escogerDia()} >
                <svg className="bi" aria-hidden="true"><use xlinkHref={`#bi-calendar-${getData.dia}`}></use> </svg>
            </button>
        </div>
    )


}