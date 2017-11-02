import React from 'react';
import { 
    StyleSheet,
    View,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    TouchableOpacity,
    ToastAndroid 
} from 'react-native';
import { Text } from 'native-base';
import { TABS } from '../constants';

import { setMode } from '../actions';

export default class ButtonExample extends React.Component {
    constructor() {
        super();

        this.btnPress = this.btnPress.bind(this);
    }

    btnPress(e) {
        ToastAndroid.show(
            e + ' pressed',
            ToastAndroid.LONG
        );
    }

    render() {
        return (
            <View>
                <TouchableHighlight onPress={() => this.btnPress('btn 1')}>
                    <View style={styles.touchblock}>
                        <Text style={styles.btnText}>1</Text>
                    </View>
                </TouchableHighlight>
                <TouchableOpacity onPress={() => this.btnPress('btn 2')}>
                    <View style={styles.touchblock}>
                        <Text style={styles.btnText}>2</Text>
                    </View>
                </TouchableOpacity>
                <TouchableNativeFeedback onPress={() => this.btnPress('btn 3')}>
                    <View style={styles.touchblock}>
                        <Text style={styles.btnText}>3</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableWithoutFeedback onPress={() => this.btnPress('btn 4')}>
                    <View style={styles.touchblock}>
                        <Text style={styles.btnText}>4</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    touchblock: {
      height: 100,
      backgroundColor: '#3498DB',
    },
    btnText: {
        textAlign: 'center',
        lineHeight: 60,
        color: 'white',
        borderColor: 'white',
        borderWidth: 1,
        height: '100%'
    }
  });