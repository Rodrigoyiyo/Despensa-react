import { useFormularioGeneralToDo } from "../hooks/useFormularioGeneralToDo"
import { CampoCantidadArticulo } from "./CampoCantidadArticulo"
import { CampoCategoriaArticulo } from "./CampoCategoriaArticulo"
import { CampoConservacionArticulo } from "./CampoConservacionArticulo"
import { CampoSimboloArticulo } from "./CampoSimboloArticulo"

export const FormularioArticuloGeneral = ({getData, formato, idModal}) => {

    const {
        stateArticulo,
        editarTipoCategoria,
        editarCantidad,
        editarConservacion,
        interruptorConservacion
    } = useFormularioGeneralToDo(getData);

    const gris = (formato==='lectura')? 'bg-light': '';
    
    return (
        <div className={`card mb-2 ${gris}`}>
            <div className="card-body">
                <div className="row">
                    <div className="row mb-3">
                        <label className="col-sm-3 col-form-label text-body-tertiary">Tipo</label>
                        <div className="col-sm-9 d-flex align-items-center  mb-3">
                            <CampoSimboloArticulo formato={formato} />
                            <CampoCategoriaArticulo getData={stateArticulo.tipo} formato={formato} setData={editarTipoCategoria} idModal={idModal} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-3 col-form-label text-body-tertiary">Cantidad</label>
                        <div className="col-sm-9">
                            <CampoCantidadArticulo getData={stateArticulo.cantidad} formato={formato} setData={editarCantidad} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label className="col-sm-3 col-form-label text-body-tertiary">Conservar</label>
                        <div className="col-sm-9 mb-3">
                            <CampoConservacionArticulo getData={stateArticulo.conservacion} 
                            editarConservacion={editarConservacion} 
                            interruptorConservacion={interruptorConservacion}
                            formato={formato} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}