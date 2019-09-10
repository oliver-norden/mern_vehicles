import { CREATE_ERROR, CLEAR_ERRORS } from "./types";
import { loadUser } from './authActions';

export const createError = (status, msg, id = null) => {
    loadUser();
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