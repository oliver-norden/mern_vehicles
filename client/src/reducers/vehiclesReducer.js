import { ADD_VEHICLE, GET_VEHICLES, DELETE_VEHICLE, VEHICLES_LOADING } from '../actions/types';

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
                    ...state.vehicles,
                    action.payload
                ]
            };
        case GET_VEHICLES:
            return {
                ...state,
                vehicles: action.payload,
                loading: false
            };
        case DELETE_VEHICLE:
            return {
                ...state,
                vehicles: state.vehicles.filter(vehicle => vehicle._id !== action.payload)
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