import { SET_MODE } from '../constants';

export function setMode(mode) {
    return {
        type: SET_MODE,
        mode
    };
}