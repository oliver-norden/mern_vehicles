import { REG_FAIL, REG_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS, USER_LOADING, USER_LOADED, USER_FAIL } from '../actions/types';

const initialState = {
    isAuthenticated: false,
    token: localStorage.getItem('token'),
    user: null,
    userLoading: false
}

export default function(state = initialState, action) {
    switch(action.type){
        case USER_LOADING:
            return {
                ...state,
                userLoading: true
            }
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                userLoading: false,
                user: action.payload
            }
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
        case USER_FAIL:
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