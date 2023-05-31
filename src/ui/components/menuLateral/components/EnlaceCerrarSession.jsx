import { useContext } from "react";
import { AuthCotext } from "../../../../auth/context/AuthContext";
import { useNavigate } from "react-router-dom";

export const EnlaceCerrarSession = () => {

    const { logout } = useContext(AuthCotext);
    const navegate = useNavigate();

    const onLogout = () => {
        logout();
        navegate('/login', { replace: true })
    }


    return (
        <button className="btn icon-link btn-outline-primario" onClick={() => onLogout()}>
            <svg className="bi" aria-hidden="true" ><use xlinkHref="#bi-box-arrow-right"></use></svg>
            Logout
        </button>
    )
}