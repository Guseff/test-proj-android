import React from 'react';
import { 
    View,
} from 'react-native';
import { Text } from 'native-base';

import { TABS } from '../constants';
import GameField from './GameField';
import MoveExample from './MoveExample';
import AnimeExample from './AnimeExample';
import SmartExample from './SmartExample';

export default class MainField extends React.Component {
    
    render() {
        if (this.props.mode === TABS.HOME) {
            return (<GameField level={this.props.level} />);
        } else if (this.props.mode === TABS.LOVES) {
            return (<AnimeExample />);
        } else if (this.props.mode === TABS.SETTINGS) {
            return (<MoveExample />);
        } else {
            return (<SmartExample />);
        }         
    }
}