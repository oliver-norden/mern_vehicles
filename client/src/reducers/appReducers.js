import { WINDOW_RESIZE } from "../actions/types";

const initalState = {
    width: window.innerWidth
}

export default function(state = initalState, action) {
    switch(action.type){
        case WINDOW_RESIZE:
            return {
                ...state,
                width: action.payload
            };
        default:
            return state;
    }
}