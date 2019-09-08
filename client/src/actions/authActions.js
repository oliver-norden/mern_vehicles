import { REG_FAIL, REG_SUCCESS, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, USER_LOADED, USER_FAIL, USER_LOADING } from './types';
import axios from 'axios';

export const loadUser = () => (dispatch, getState) => {

    // Set user to loading
    dispatch({
        type: USER_LOADING
    });

    // Configure headers
    const config = headerConfig(getState);

    console.log(config);

    axios
        .get('/api/auth/user', config)
            .then(res => dispatch({
                type: USER_LOADED,
                payload: res.data
            }))
            .catch(err => dispatch({
                type: USER_FAIL
            }));
}

export const register = ({ name, userName, password }) => dispatch => {

    // Configure headers
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    };

    // Request body
    const body = JSON.stringify({ name, userName, password});

    axios
        .post('/api/users', body, config)
            .then(res => dispatch({
                type: REG_SUCCESS,
                payload: res.data
            }))
            .catch(err => dispatch({
                type: REG_FAIL
            }));
}

export const login = ({ userName, password }) => dispatch => {

    // Configure headers
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    };

    // Request body
    const body = JSON.stringify({ userName, password});

    axios
        .post('/api/auth/', body, config)
            .then(res => dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            }))
            .catch(err => dispatch({
                type: LOGIN_FAIL
            }));
}

export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}

const headerConfig = (getState) => {

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