import { CREATE_ERROR, CLEAR_ERRORS } from "../actions/types";

const initalState = {
    status: null,
    msg: '',
    id: null
}

export default function(state = initalState, action) {
    switch(action.type){
        case CREATE_ERROR:
            return {
                status: action.payload.status,
                msg: action.payload.msg,
                id: action.payload.id
            };
        case CLEAR_ERRORS:
            return {
                initalState
            };
        default:
            return state;
    }
}