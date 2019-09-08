import { REG_FAIL, REG_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../actions/types';

const initialState = {
    isAuthenticated: false,
    token: localStorage.getItem('token'),
    user: null
}

export default function(state = initialState, action) {
    switch(action.type){
        case REG_SUCCESS:
        case LOGIN_SUCCESS: 
            // Store token in local storage
            localStorage.token = action.payload.token;
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token
            }
        case REG_FAIL:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token');
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