import React from 'react';
import { 
    StyleSheet,
    View,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
    PanResponder,
    Animated
} from 'react-native';
import { Text } from 'native-base';

import { setMode } from '../actions';

export default class MoveExample extends React.Component {
    constructor() {
        super();

        this.state = {
            coordX: new Animated.Value(0),
        }

        this.moveHandle = this.moveHandle.bind(this);
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            // Ask to be the responder:
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      
            onPanResponderGrant: (evt, gestureState) => {
                // console.log('Touch');
            },
            onPanResponderMove: (evt, gestureState) => {
                // console.log('Move', gestureState.moveX);
                this.moveHandle(gestureState.moveX);
                //   gestureState.moveX,
                //   gestureState.dx,
            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => {},
            onPanResponderTerminate: (evt, gestureState) => {},
            onShouldBlockNativeResponder: (evt, gestureState) => {
              return true;
            },
          });
    }


    moveHandle(xxx) {
        let a = xxx - 40;
        a = a < 0 ? 0 : a;
        a = a > 260 ? 260 : a;
        Animated.timing(
            this.state.coordX,
            {
                toValue: a,
                duration: 60
            }
        ).start();
    }

    render() {
        let { coordX } = this.state;

        return (
            <View 
                {...this._panResponder.panHandlers}
                style={styles.wrap}> 
                    <Animated.Image 
                        source={require('../img/Airplane.png')} 
                        style={[styles.img, {left: coordX}]} 
                    />
                    <View style={styles.note}>
                        <Text style={styles.noteText}>
                            M        O        V        E
                        </Text>
                    </View>
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
        top: 250,
    },
    note: {
        height: 50,
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
    noteText: {
        textAlign: 'center',
        color: 'white',
    }
  });