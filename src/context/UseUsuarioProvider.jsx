import { UseUsuarioContext } from "./UseUsuarioContext"


export const UseUsuarioProvider = ({ children }) => {
    return (
        <UseUsuarioContext.Provider value={{ data: 'jiji'}}>
            {children}
        </UseUsuarioContext.Provider>
    )
}