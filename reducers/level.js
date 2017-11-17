import { NEW_ROTATION } from '../constants';
import { level37 } from '../levels/level.37.js';

const initialState = {
    level: level37
  };

export default function level(state = initialState, action) {
    switch (action.type) {
        
        case NEW_ROTATION:
            console.log('old', state.level[4][4], 'change', action.payload[4][4]);
            return Object.assign({}, state, {
                level: action.payload
            });
        

        default: 
            return state;
    }
};