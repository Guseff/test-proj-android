import { SET_MODE, NEW_ROTATION } from '../constants';

export function setMode(mode) {
    return {
        type: SET_MODE,
        payload: mode
    };
}

export function changeFields(arr) {
    console.log('action');
    return {
        type: NEW_ROTATION,
        payload: arr
    };
}