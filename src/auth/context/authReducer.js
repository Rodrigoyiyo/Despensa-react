import { types } from "../types/types";

export const authReducer = ( state = {}, action ) => {

    switch (action.type) {
        case types.login:
            return {
                ...state,
                esLogeado: true,
                usuario : action.payload
            }
        case types.logout:
            return {
                ...state,
                esLogeado: false
            }
        default:
            return state;
    }
}