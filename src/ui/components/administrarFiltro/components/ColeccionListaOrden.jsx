import { BotonesOrdenFiltro } from "./BotonesOrdenFiltro";

export const ColeccionListaOrden = ({getData,quitarOrden}) => {

    const onQuitarCampo = (idCampo) => {
        quitarOrden([idCampo]);
    };

    return (
        <li className="list-group-item px-0 px-sm-3 py-3 align-items-center">
            <BotonesOrdenFiltro seleccion={getData.tipoOrden} tipoDato={getData.tipoCampo} habilitados={true}  />
            <a className="float-end icon-link text-primario d-flex" onClick={() => (onQuitarCampo(getData.idCampo))}>
                <svg className="bi fs-1" aria-hidden="true"><use xlinkHref="#bi-x"></use></svg>
            </a>
            <span className="d-inline-flex text-nowrap text-body-tertiary ms-2 ">{`${getData.coleccion} > ${getData.campo}`}</span>
        </li>
    )
}