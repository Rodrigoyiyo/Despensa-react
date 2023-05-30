import {JsonColores} from '../data/JsonColores'

export const MenuColores = () => {
    return (
        <>
            <div className="col-12 py-3">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" >Envase</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" >Tapa</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" >Etiqueta</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" >Marca</a>
                    </li>
                </ul>
            </div>
            <div className="col-12 px-3">
                <div className="overflow-x-auto">
                    <div className="bd_table3 d-inline-flex">
                        {
                            JsonColores.map(color => {
                                return <a key={color.id} style={{backgroundColor: color.color}}></a>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}