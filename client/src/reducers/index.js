import { combineReducers } from 'redux';
import vehiclesReducer from './vehiclesReducer'

export default combineReducers({
    vehicles: vehiclesReducer
});