import { REG_FAIL, REG_SUCCESS } from './types';
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