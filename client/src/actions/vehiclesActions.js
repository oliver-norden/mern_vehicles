import { ADD_VEHICLE, DELETE_VEHICLE, VEHICLES_LOADING, GET_VEHICLES, UPDATE_VEHICLE } from './types';
import axios from 'axios';
import headerConfig from './authActions';
import { createError } from './errorActions';

export const addVehicle = newVehicle => (dispatch, getState) => {

    const config = headerConfig(getState);

    // Attempt to add new vehicle
    axios
        .post('/api/vehicles', newVehicle, config)
            .then(res => dispatch({
                    type: ADD_VEHICLE,
                    payload: res.data
                }))
            .catch(err => {
                dispatch(createError(err.response.status, err.response.data.msg, 'VEHICLE_ERROR'))
            });
}

export const deleteVehicle = id => (dispatch, getState) => {

    const config = headerConfig(getState);

    axios
        .delete(`/api/vehicles/${id}`, config)
            .then(res => dispatch({
                type: DELETE_VEHICLE,
                payload: id
            }))
            .catch(err => {
                dispatch(createError(err.response.status, err.response.data.msg, 'APP_ERROR'))
            });
}

export const getVehicles = () => dispatch => {

    // Set vehicles to loading
    dispatch(vehiclesLoading());

    // Get vehicles from server and dispatch them
    axios.get('/api/vehicles')
        .then(res=>
            dispatch({
                type: GET_VEHICLES,
                payload: res.data
            }));
}

export const changeVehicleSpeed = (id, diff) => (dispatch, getState) => {

    const body = {
        id,
        diff
    };

    const config = headerConfig(getState);

    // Set new speed of vehicle
    axios.put('/api/vehicles', body, config)
        .then(res=>
            dispatch({
                type: UPDATE_VEHICLE,
                payload: res.data
            }))
        .catch(err => {
            dispatch(createError(err.response.status, err.response.data.msg, 'APP_ERROR'))
        });
}

export const vehiclesLoading = () => {
    return {
        type: VEHICLES_LOADING
    }
}