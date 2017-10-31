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
import { Button, Text, Icon } from 'native-base';
import { TABS } from '../constants';

import { setMode } from '../actions';

export default class MainField extends React.Component {
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
                        <Text>1</Text>
                    </View>
                </TouchableHighlight>
                <TouchableOpacity onPress={() => this.btnPress('btn 2')}>
                    <View style={styles.touchblock}>
                        <Text>2</Text>
                    </View>
                </TouchableOpacity>
                <TouchableNativeFeedback onPress={() => this.btnPress('btn 3')}>
                    <View style={styles.touchblock}>
                        <Text>3</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableWithoutFeedback onPress={() => this.btnPress('btn 4')}>
                    <View style={styles.touchblock}>
                        <Text>4</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    touchblock: {
      height: 100,
      backgroundColor: '#81D4FA'
    },
  });