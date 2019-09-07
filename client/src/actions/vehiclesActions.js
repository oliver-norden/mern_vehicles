import { ADD_VEHICLE, DELETE_VEHICLE, VEHICLES_LOADING, GET_VEHICLES, UPDATE_VEHICLE } from './types';
import axios from 'axios';

export const addVehicle = newVehicle => dispatch => {

    // Attempt to add new vehicle
    axios
        .post('/api/vehicles', newVehicle, config)
        .then(res => dispatch({
                type: ADD_VEHICLE,
                payload: res.data
            }))
        .catch(err => console.log(err));
}

export const deleteVehicle = id => dispatch => {

    axios
        .delete(`/api/vehicles/${id}`)
        .then(res => dispatch({
            type: DELETE_VEHICLE,
            payload: id
        }))
        .catch(err => console.log(err));
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

export const changeVehicleSpeed = (id, diff) => dispatch => {

    const body = {
        id,
        diff
    };

    // Set new speed of vehicle
    axios.put('/api/vehicles', body, config)
        .then(res=>
            dispatch({
                type: UPDATE_VEHICLE,
                payload: res.data
            }));
}

export const vehiclesLoading = () => {
    return {
        type: VEHICLES_LOADING
    }
}

// Configure headers
const config = {
    headers: {
        "Content-Type": "application/json"
    }
};