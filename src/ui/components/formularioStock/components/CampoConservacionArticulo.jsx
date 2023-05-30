import dataConserva from "../JsonTipoConservacion.json"
import { CamposConservacionTemperatura } from "./CamposConservacionTemperatura";

export const CampoConservacionArticulo = ({ getData, formato, editarConservacion, interruptorConservacion }) => {

    const checks = getData.map(e => e.id);
    const dataTemperatura = getData.find(e => (e.id === 'temperatura'));

    const onTocar = (id) => {
        const objetoSeleccionado = getData.find(e => (e.id === id)) || { id };
        interruptorConservacion(objetoSeleccionado);
    }

    const onValores = (elemento) => {
        editarConservacion(elemento);
    }

    if (formato === 'crear')
        return (
            <ul className="list-group ">
                {
                    dataConserva.map(elemento => {
                        const esSeleccionado = checks.includes(elemento.id);
                        return (
                            <li className="list-group-item d-flex align-items-center" key={elemento.id}>
                                <a className="icon-link text-decoration-none text-dark user-select-none"
                                    onClick={() => onTocar(elemento.id)}>
                                    <svg className="bi text-secundario" aria-hidden="true">
                                        <use xlinkHref={(esSeleccionado) ? `#bi-check-square-fill` : `#bi-square`}></use>
                                    </svg>
                                    <span>{elemento.texto}</span>
                                </a>
                                {
                                    (elemento.id == 'temperatura') ? (
                                        <CamposConservacionTemperatura idConservacion={elemento.id}
                                            getData={dataTemperatura} setData={onValores} esSeleccionado={esSeleccionado} />
                                    ) : ''
                                }
                            </li>
                        )
                    })
                }
            </ul>
        )

    if (formato === 'editar' || formato === 'lectura') {

        const textos = getData.map(elemento => {
            const t = dataConserva.find(e => (e.id == elemento.id));
            if (elemento.id === 'temperatura') {
                return `${t.texto} de ${elemento.valores.temperatura1}`;
            }
            return t.texto
        });

        return (
            <div className="col-form-label">
                {
                    textos.join(', ')
                }
            </div>
        )
    }

}