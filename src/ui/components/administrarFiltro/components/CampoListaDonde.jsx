import { ValorListaDonde } from "./ValorListaDonde"

export const CampoListaDonde = ({getData}) => {
    return (
        <li key={getData.texto} className="list-group-item px-0 px-sm-3">
            <div className="row mx-0 text-start">
                <div className="col-menos-icono px-0">
                    <label className="btn border border-0 rounded-0 text-body-tertiary d-flex">
                        <span className="d-inline-block text-truncate">{getData.texto}</span>
                    </label>
                </div>
                <div className="col-mas-icono px-0">
                    {
                        getData.condiciones.map( condicion => <ValorListaDonde 
                            key={condicion.id}
                            getData={condicion}/>
                        )
                    }
                </div>
            </div>
        </li>
    )
}