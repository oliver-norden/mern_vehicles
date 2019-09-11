import { ADD_VEHICLE, GET_VEHICLES, CLEAR_VEHICLES, DELETE_VEHICLE, VEHICLES_LOADING, UPDATE_VEHICLE } from '../actions/types';

const initialState = {
    vehicles: [],
    loading: false
}

export default function (state=initialState, action) {
    switch(action.type){
        case ADD_VEHICLE:
            return {
                ...state,
                vehicles: [
                    action.payload,
                    ...state.vehicles
                ]
            };
        case GET_VEHICLES:
            return {
                ...state,
                vehicles: action.payload,
                loading: false
            };
        case CLEAR_VEHICLES:
            return {
                ...state,
                vehicles: []
            };
        case DELETE_VEHICLE:
            return {
                ...state,
                vehicles: state.vehicles.filter(vehicle => vehicle._id !== action.payload)
            };
        case UPDATE_VEHICLE:
            return {
                ...state,
                vehicles: state.vehicles.map(vehicle => (vehicle._id !== action.payload._id) ? vehicle : action.payload) // Replace old instance of updated vehicle with new
            };
        case VEHICLES_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}