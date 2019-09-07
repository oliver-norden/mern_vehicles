import { ADD_VEHICLE, DELETE_VEHICLE, VEHICLES_LOADING, GET_VEHICLES } from './types';
import uuid from 'uuid';

export const addVehicle = newVehicle => {
    return {
        type: ADD_VEHICLE,
        payload: newVehicle
    }
}

export const deleteVehicle = id => {
    return {
        type: DELETE_VEHICLE,
        payload: id
    }
}

export const getVehicles = () => dispatch => {

    dispatch(vehiclesLoading());

    //To be replaced with server request
    const vehicles = [
        {
            minSpeed: 0,
            _id: uuid(),
            name: "My XC90",
            type: "Car",
            color: "Silver",
            make: "Volvo",
            model: "XC90",
            noOfWheels: 4,
            maxSpeed: 180,
        },
        {
            minSpeed: 0,
            _id: uuid(),
            name: "My NC750x",
            type: "Motorcycle",
            color: "White",
            make: "Honda",
            model: "NC750x",
            noOfWheels: 2,
            maxSpeed: 190,
        },
        {
            minSpeed: 0,
            _id: uuid(),
            name: "My R8",
            type: "Car",
            color: "Black",
            make: "Audi",
            model: "R8",
            noOfWheels: 4,
            maxSpeed: 350,
        }
    ];

    dispatch({
        type: GET_VEHICLES,
        payload: vehicles
    });
}

export const vehiclesLoading = () => {
    return {
        type: VEHICLES_LOADING
    }
}