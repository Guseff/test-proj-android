import { SET_MODE, MODES } from '../constants';

const initialState = {
    mode: MODES.ARTICLES
  };

export default function footer(state = initialState, action) {
    switch (action.type) {
        case SET_MODE: {
            return Object.assign({}, state, {
                mode: action.payload
            });
        }

        default: 
            return state;
    }
};