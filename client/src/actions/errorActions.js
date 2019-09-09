import { CREATE_ERROR, CLEAR_ERRORS, USER_FAIL } from "./types";

export const createError = (status, msg, id = null) => dispatch => {
    if (status === 401 ) dispatch(USER_FAIL);
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