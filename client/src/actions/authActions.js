import { REG_FAIL, REG_SUCCESS, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS } from './types';
import axios from 'axios';

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