import { types } from "../types/types";

//Se recibira un objeto con la uid y nombre proporcionado por firebase


export const authReducer = (state= {} , action) => {

    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }
    
        case types.logout:
                return {}

        default:
           return state;
    }


}