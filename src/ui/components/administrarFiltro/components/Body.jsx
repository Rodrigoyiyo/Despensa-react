import { ColeccionListaDonde } from "./ColeccionListaDonde";
import { ColeccionListaOrden } from "./ColeccionListaOrden";

export const Body = ({tipofiltro, dataDonde, dataOrden, quitarDonde, quitarOrden}) => {

    if (tipofiltro === 'donde')
        return (
            <div className="modal-body py-0 position-relative z-0">
                {
                    dataDonde.map( valor => <ColeccionListaDonde 
                        getData={valor} 
                        key={valor.id} 
                        setCambios={quitarDonde} />
                    )
                }
            </div>
        )

    if (tipofiltro === 'orden')
        return (
            <div className="modal-body py-0 position-relative z-0">
                <ul className="list-group list-group-flush">
                    {
                        dataOrden.map( valor => <ColeccionListaOrden  
                            getData={valor} 
                            key={`${valor.idColeccion}_${valor.idCampo}`} 
                            quitarOrden={quitarOrden} />
                        )
                    }
                </ul>
            </div>
        )
    
    return '';
}

