import { combineReducers } from 'redux';
import vehiclesReducer from './vehiclesReducer';
import authReducers from './authReducers';

export default combineReducers({
    vehicles: vehiclesReducer,
    auth: authReducers,
});