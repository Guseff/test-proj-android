import React from 'react';
import { 
    StyleSheet,
    View,
    Image,
    TouchableNativeFeedback,
    Animated,
    Dimensions
} from 'react-native';
import { Text } from 'native-base';
import { TABS } from '../constants';

import { setMode } from '../actions';

export default class AnimeExample extends React.Component {
    constructor() {
        super();

        this.btnPress = this.btnPress.bind(this);
        this.btnPress1 = this.btnPress1.bind(this);
    }

    state = {
        coordX: new Animated.Value(0),
        widthX: new Animated.Value(80),
        shY: new Animated.Value(258),
        shoot: false
    }

    btnPress() {
        let maxX = Dimensions.get('window').width - 94;
        // console.log(maxX);
        let a = this.state.coordX._value === 0 ? maxX : 0;

        Animated.parallel([
            Animated.timing(
                this.state.coordX,
                {
                    toValue: a,
                    duration: 3000
                }
            ),
            Animated.timing(
                this.state.widthX,
                {
                    toValue: 80
                }
            )
        ]).start();
    }

    btnPress1() {
        
        Animated.timing(
            this.state.shY,
            {
                toValue: 100,
                duration: 3000
            }
        ).start();
    }

    render() {
        let { coordX, widthX, shY } = this.state;
        return (
            <View style={styles.wrap}>
                <Animated.Image 
                    resizeMode={'stretch'} 
                    source={require('../img/Airplane.png')} 
                    style={[styles.img, {left: coordX, width: widthX}]}
                />
                <Animated.View 
                    style={[styles.bullet, {top: shY}]}>
                </Animated.View>
                <TouchableNativeFeedback onPress={() => this.btnPress()}>
                    <View style={styles.touchblock}>
                        <Text style={styles.btnText}>Move!</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback onPress={() => this.btnPress1()}>
                    <View style={[styles.touchblock, {left: '50%'}]}>
                        <Text style={styles.btnText}>Look!</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        borderColor: 'red',
        borderWidth:1
    },
    img: {
        height: 80,
        width: 80,
        position: 'absolute',
        top: 250
    },
    touchblock: {
        height: 100, width: '48%',
        backgroundColor: '#3498DB',
        position: 'absolute',
        bottom: 5
    },
    btnText: {
          textAlign: 'center',
          lineHeight: 60,
          color: 'white'
    },
    bullet: {
        height: 3,
        width: 3,
        position: 'absolute',
        left: 38,
        backgroundColor: 'black'
    },
});