import { SET_MODE, TABS } from '../constants';

const initialState = {
    mode: TABS.HOME
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