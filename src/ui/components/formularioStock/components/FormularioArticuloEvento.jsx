import { useFormularioEventoToDo } from "../hooks/useFormularioEventoToDo"
import { CrearEventoArticulo } from "./CrearEventoArticulo"
import { EventoArticulo } from "./EventoArticulo"

export const FormularioArticuloEvento = ({ getData, formato }) => {

    const {
        stateEventos,
        agregarEvento,
        quitarEvento
    } = useFormularioEventoToDo(getData);

    const gris = (formato==='lectura')? 'bg-light': '';
    
    return (
        <div className={`card mb-2 ${gris}`}>
            <div className="card-body">
                <div className="row">
                    {
                        stateEventos.map(evento => {
                            return <EventoArticulo getData={evento} key={evento.id} formato={formato} setData={quitarEvento} />
                        })
                    }
                    {
                        (formato === 'editar')? (
                            <>
                                <hr className="border border-secondary-subtle border-2" />
                                <CrearEventoArticulo getData={''} setData={agregarEvento} />
                            </>
                        ): ''
                    }
                    
                </div>
            </div>
        </div>
    )
}