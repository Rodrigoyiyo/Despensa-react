import { CampoListaDonde } from "./CampoListaDonde"

export const ColeccionListaDonde = ({getData}) => {

    return (
        <div className="">
            <span className="small p-2 bg-body-tertiary d-block sticky-top">{getData.coleccion}</span>
            <ul className="list-group list-group-flush">
                {
                    getData.campos.map( campo => <CampoListaDonde 
                        key={campo.id}
                        getData={campo} />
                    )
                }
            </ul>
        </div>
    )
}