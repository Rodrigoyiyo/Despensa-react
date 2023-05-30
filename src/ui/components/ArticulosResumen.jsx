import { Fragment} from 'react';
import { ArticuloResumenComponente } from "./ArticulosResumenComponente";
import gruposArticulos from './JsonArticulosResumen.json';

export const ArticulosResumen = () => {
    return (
        <div className="mb-3 ">
            {
                gruposArticulos.map( grupoArticulo => {
                    return (
                        <Fragment key={`${grupoArticulo.agrupacion}_conjunto`}>
                            <span className="small px-2 bg-body-tertiary d-block sticky-top " key={`${grupoArticulo.agrupacion}_agrupacion`}>{grupoArticulo.agrupacion}</span>
                            <ul className="list-group list-group-flush placeholder-glow " key={`${grupoArticulo.agrupacion}_conjunto`}>
                                {
                                    grupoArticulo.conjunto.map( articulo => {
                                        return(
                                            <ArticuloResumenComponente key={articulo.articulo}
                                            articulo={articulo.articulo} 
                                            inscribe={articulo.inscribe} 
                                            categoriaArbol={articulo.categoriaArbol} 
                                            idSymbolSVG={articulo.symbolSVG} 
                                            cantidad={articulo.cantidad} 
                                            unidades={articulo.unidades} 
                                            suma={articulo.suma} />
                                        )
                                    })
                                }
                            </ul>
                        </Fragment>
                        
                    )
                })
            }
        </div>
    )
}