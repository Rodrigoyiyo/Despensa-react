import { BotonesOrdenFiltro } from "./BotonesOrdenFiltro";


export const MenuModalFiltroOrdenarComponente = ({data,setQuitar}) => {

    const onQuitarCampo = (idCampo) => {
        setQuitar([idCampo]);
    };

    return (
        <li className="list-group-item px-0 px-sm-3 py-3 d-flex align-items-center position-relative">
            <BotonesOrdenFiltro seleccion={data.tipoOrden} tipoDato={data.tipoCampo} />
            <a className="float-end icon-link text-primario " onClick={() => (onQuitarCampo(data.idCampo))}>
                <svg className="bi fs-1" aria-hidden="true"><use xlinkHref="#bi-x"></use></svg>
            </a>
            <span className="d-inline-flex text-nowrap text-body-tertiary ms-2 ">{`${data.coleccion} > ${data.campo}`}</span>
        </li>
    )
}