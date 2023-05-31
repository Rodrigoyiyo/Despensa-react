import { useReducer } from "react"
import { AuthCotext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"

const init = () => {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    return {
        esLogeado: !!usuario,
        usuario: usuario
    }
}

export const AuthProvider = ({ children }) => {

    const [stateAuth, dispachAuth] = useReducer(authReducer, {}, init);

    const login = (nombre = '') => {

        const usuario = { rol: 'admin', nombre: nombre }

        const action = {
            type: types.login,
            payload: usuario
        }

        localStorage.setItem('usuario', JSON.stringify(usuario));
        dispachAuth(action);
    }

    const logout = () => {
        localStorage.removeItem('usuario');

        const action = {
            type: types.logout
        }

        dispachAuth(action);

    }

    return (
        <AuthCotext.Provider value={{
            login,
            logout,
            usuario: (stateAuth.usuario) ? stateAuth.usuario : {},
            esLogeado: (stateAuth.esLogeado) ? stateAuth.esLogeado : false,
        }}>
            {children}
        </AuthCotext.Provider>
    )
}