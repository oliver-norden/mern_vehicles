import { combineReducers } from 'redux';
import vehiclesReducer from './vehiclesReducer';
import authReducers from './authReducers';
import errorReducers from './errorReducers';
import appReducers from './appReducers';

export default combineReducers({
    vehicles: vehiclesReducer,
    auth: authReducers,
    error: errorReducers,
    app: appReducers
});