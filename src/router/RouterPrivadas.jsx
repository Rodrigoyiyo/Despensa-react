import { useContext } from "react"
import { AuthCotext } from "../auth/context/AuthContext"
import { Navigate, useLocation } from "react-router-dom"

export const RouterPrivadas = ({ children }) => {

    const { esLogeado } = useContext(AuthCotext);
    /*const { pathname, search } = useLocation();
    const ultimaRuta = `${pathname}${search}`;
    localStorage.setItem('ultimaRuta',ultimaRuta);*/

    return (esLogeado)
        ? children
        : <Navigate to="/login" />

}