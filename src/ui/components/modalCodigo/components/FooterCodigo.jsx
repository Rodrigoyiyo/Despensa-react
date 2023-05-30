export const FooterCodigo = ({setPasoBusqueda }) => {

    const onBuscar = () => {
        setPasoBusqueda('paso3');
    }

    return (
        <div className="modal-footer">
            <div className="d-flex justify-content-around w-100">
                <button type="button" className="btn btn-outline-primario" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" className="btn btn-primario" onClick={() => onBuscar()}>Aceptar</button>
            </div>
        </div>
    )
}