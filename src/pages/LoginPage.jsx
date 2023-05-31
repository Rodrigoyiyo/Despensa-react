import { useNavigate } from 'react-router-dom';
import { Simbolos } from '../Simbolos';
import { limpiarStyleBody } from '../ui/helpers/limpiesaBootstrap';
import { useContext } from 'react';
import { AuthCotext } from '../auth/context/AuthContext';

export const LoginPage = () => {

    limpiarStyleBody();

    const {login} = useContext(AuthCotext);
    const navigate = useNavigate();

    const onLogin = () => {
        login('Rodrigo');
        navigate('/', {
            replace: true
        })
    }

    return (
        <>
            <Simbolos />
            <main className="  h-100 d-flex align-items-center bg-primario ">
                <div className="card text-center mx-auto " style={{width: '18rem'}}>
                    <div className="card-body ">
                        <h5 className="card-title">Despensa</h5>
                        <div className="d-grid gap-2">
                            <button type="button" className="btn btn-primario icon-link d-flex justify-content-center" onClick={() => onLogin()}>
                                <svg className="bi" aria-hidden="true" ><use xlinkHref="#bi-google"></use></svg>
                                Login
                            </button>
                        </div>
                        
                    </div>
                </div>
            </main>
        </>

    );
}