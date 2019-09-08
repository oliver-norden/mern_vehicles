import { REG_FAIL, REG_SUCCESS } from '../actions/types';

const initialState = {
    isAuthenticated: false,
    token: localStorage.getItem('token'),
    user: null
}

export default function(state = initialState, action) {
    switch(action.type){
        case REG_SUCCESS:
            // Store token in local storage
            localStorage.token = action.payload.token;
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token
            }
        case REG_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                token: null
            }
        default:
            return state;
    }
} 