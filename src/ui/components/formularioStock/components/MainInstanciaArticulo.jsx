import { FormularioArticuloExterno } from "./FormularioArticuloExterno"
import { FormularioArticuloGeneral } from "./FormularioArticuloGeneral"
import { ReglaRango } from "./ReglaRango"
import dataArticulo from "../JsonArticuloData.json"
import { FormularioArticuloEvento } from "./FormularioArticuloEvento"

export const MainInstanciaArticulo = ({ formato = 'editar', setFormato }) => {

    //const formadoInstancia = (formato === 'crear' || formato === 'editar')? 'editar': 'lectura';

    const esEditar = () => {
        setFormato('editar');
    }

    const onGuardar = () => {
        setFormato('lectura');
    }

    return (
        <>
            <main className="container gb-container py-2 px-0" >
                <div className="d-flex my-3 justify-content-center" >
                    <ReglaRango />
                    <div className="card bg-white border border-0 placeholder-glow" style={{ maxWidth: '720px' }}>
                        {
                            (formato === 'lectura') ? (
                                <div className="card-header bg-transparent border border-0 text-end">
                                    <button type="button" className="btn btn-link text-primario" onClick={() => esEditar()} >Editar</button>
                                </div>
                            ) : ''
                        }
                        <div className="card-body bg-transparent pt-0 placeholder-glow">
                            <FormularioArticuloExterno getData={dataArticulo.datExterna} />
                            <FormularioArticuloGeneral getData={dataArticulo.dataGeneral} formato={formato} />
                            <FormularioArticuloEvento getData={dataArticulo.dataEvento} formato={formato} />
                        </div>
                        {
                            (formato === 'editar') ? (
                                <div className="card-footer bg-transparent border border-0">
                                    <div className="d-flex justify-content-around">
                                        <button type="submit" className="btn btn-outline-primario" onClick={() => onGuardar()}>Cancelar</button>
                                        <button type="submit" className="btn btn-primario" onClick={() => onGuardar()}>Aceptar</button>
                                    </div>
                                </div>
                            ) : ''
                        }
                    </div>
                </div>
            </main>
        </>
    )
}