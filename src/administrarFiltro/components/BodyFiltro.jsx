export const BodyFiltro = () => {
    return (
        <div className="modal-body py-0 position-relative z-0">
            {
                (pestanaValor === 'donde')?
                    listaDonde.map( valor => {
                        return (
                            <MenuModalFiltroDondeCategoria data={valor} key={valor.coleccion} />
                        )
                    })
                :                       
                <ul className="list-group list-group-flush">
                    {
                        listaOrden.map( valor => {
                            return (
                                <MenuModalFiltroOrdenarComponente data={valor} key={`${valor.idColeccion}_${valor.idCampo}`} setQuitar={quitarListaOrden}/>
                            )
                        })
                    }
                </ul>
            }
        </div>
    )
}

