import { WINDOW_RESIZE } from "./types";

export const windowResize = (width) => {
    return {
        type: WINDOW_RESIZE,
        payload: width
    }
};