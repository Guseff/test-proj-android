import React from 'react';
import { 
    StyleSheet,
    View,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
    PanResponder
} from 'react-native';
import { Text } from 'native-base';

import { setMode } from '../actions';

export default class MoveExample extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            // Ask to be the responder:
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      
            onPanResponderGrant: (evt, gestureState) => {
                console.log('Touch');
            },
            onPanResponderMove: (evt, gestureState) => {
              // The most recent move distance is gestureState.move{X,Y}
              console.log(
                  'Move',
                //   gestureState.x0,
                //   gestureState.y0,
                  gestureState.moveX,
                //   gestureState.moveY,
                  gestureState.dx,
                //   gestureState.dy
                );
              // The accumulated gesture distance since becoming responder is
              // gestureState.d{x,y}
            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => {},
            onPanResponderTerminate: (evt, gestureState) => {},
            onShouldBlockNativeResponder: (evt, gestureState) => {
              return true;
            },
          });
    }

    render() {
        return (
            <View 
                {...this._panResponder.panHandlers}
                style={styles.wrap}> 
                    <Image 
                        source={require('../img/Airplane.png')} 
                        style={styles.img} 
                    />
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
        top: 0,
        left: 50
    }
  });