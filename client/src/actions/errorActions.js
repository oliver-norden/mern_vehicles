import { CREATE_ERROR, CLEAR_ERRORS } from "./types";

export const createError = (status, msg, id = null) => {
    return {
        type: CREATE_ERROR,
        payload: {
            status,
            msg,
            id
        }
    }
} 
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
} 