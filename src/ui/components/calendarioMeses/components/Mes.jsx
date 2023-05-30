import { DiaMes } from "./DiaMes"
import { TituloDias } from "./TituloDias"

export const Mes = ({getData, getAnio, diaSeleccionado, setData}) => {

    return (
        <>
            <div className="card mx-2 my-4 rounded-4">
                <div className="card-body">
                    <div className="text-center">
                        <p className="fs-5 fw-semibold text-body-tertiary py-2">{getData.mes} de {getAnio}</p>
                    </div>
                    <TituloDias />
                    <div className="row row-cols-dias text-center mx-0 text-secundario fw-light bg-white py-2">
                        {
                            getData.dias.map(dia => <DiaMes 
                                getData={dia} 
                                key={dia.dia} 
                                diaSeleccionado={diaSeleccionado} 
                                setData={setData} 
                                primerDiaSemanaMes={getData.primerDiaSemanaMes}/>)
                        }
                    </div>

                </div>
            </div>
            
        </>
    )
}