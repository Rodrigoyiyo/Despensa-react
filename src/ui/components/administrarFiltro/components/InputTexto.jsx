import {tipoInput} from '../helpers/EditarHtml';

export const InputTexto = ({tipo, addClass, getData = "", setCambios}) => {

    const onTexto = (event) => {
        const valor = event.currentTarget.value;
        setCambios({ valor });
    }

    return (
        <input type={tipoInput(tipo)} className={`form-control ${addClass}`} value={getData} onChange={onTexto} />
    )
}