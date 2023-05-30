import { CantidadCapsulaUnMonto } from "./CantidadCapsulaUnMonto"

export const CantidadCapsulaDoble = ({getData : {cerrado, abierto}}) => {

    return (
        <div className="row w-100 rounded-5 bg-light p-0 ms-auto me-0" style={{maxWidth: '24rem'}}>
            <div className="col-6 px-0">
                <CantidadCapsulaUnMonto getData={{...cerrado,tipo:'cerrado'}} />
            </div>
            <div className="col-6 px-0">
                <CantidadCapsulaUnMonto getData={{...cerrado,tipo:'abierto'}} />
            </div>
        </div>
    )
}