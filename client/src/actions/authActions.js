import { REG_FAIL, 
    REG_SUCCESS, 
    LOGIN_SUCCESS, 
    LOGIN_FAIL, 
    LOGOUT_SUCCESS, 
    USER_LOADED, 
    USER_FAIL, 
    USER_LOADING } from './types';
import axios from 'axios';
import { createError } from './errorActions';

export const loadUser = () => (dispatch, getState) => {

    // Set user to loading
    dispatch({
        type: USER_LOADING
    });

    // Configure headers
    const config = headerConfig(getState);

    axios
        .get('/api/auth/user', config)
            .then(res => dispatch({
                type: USER_LOADED,
                payload: res.data
            }))
            .catch(err => {
                dispatch({type: USER_FAIL});
                dispatch(createError(err.response.status, err.response.data.msg, 'APP_ERROR'));
            });
}

export const register = ({ name, userName, password }) => (dispatch, getState) => {

    // Configure headers
    const config = headerConfig(getState);

    // Request body
    const body = JSON.stringify({ name, userName, password});

    axios
        .post('/api/users', body, config)
            .then(res => dispatch({
                type: REG_SUCCESS,
                payload: res.data
            }))
            .catch(err => {
                dispatch({ type: REG_FAIL });
                dispatch(createError(err.response.status, err.response.data.msg, 'REG_ERROR'))
            });
}

export const login = ({ userName, password }) => (dispatch, getState) => {

    // Configure headers
    const config = headerConfig(getState);

    // Request body
    const body = JSON.stringify({ userName, password});

    axios
        .post('/api/auth/', body, config)
            .then(res => dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            }))
            .catch(err => {
                dispatch({ type: LOGIN_FAIL });
                dispatch(createError(err.response.status, err.response.data.msg, 'LOGIN_ERROR'));
            });
}

export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}

export default function headerConfig (getState) {

    // Configure headers
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    };

    // Attempt to get token and add to headers
    const token = getState().auth.token;
    if (token) config.headers['x-auth-token'] = token;

    return config;
}