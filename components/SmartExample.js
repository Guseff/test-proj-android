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
import SpriteSheet from 'rn-sprite-sheet';

import { setMode } from '../actions';

export default class SmartExample extends React.Component {
    constructor() {
        super();

        this.state = {
            coordX: new Animated.Value(0),
        }

        this.moveHandle = this.moveHandle.bind(this);
        this.touchHandle = this.touchHandle.bind(this);
        this.play = this.play.bind(this);
        this.stop = this.stop.bind(this);
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
                this.play('walk');
            },
            onPanResponderMove: (evt, gestureState) => {
                // console.log('Move', gestureState.moveX);
                // this.moveHandle(gestureState.moveX);
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

    play = type => {
        this.mummy.play({
          type,
          fps: 6,
          loop: true,
        });
      }
    
    stop = () => {
        this.mummy.stop(() => console.log('stopped'));
    }
    

    moveHandle(xxx) {
        let a = xxx - 60;
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

    touchHandle() {
        this.play('walk');
    }

    render() {
        let { coordX } = this.state;

        return (
            <View 
                {...this._panResponder.panHandlers}
                style={styles.wrap}> 
                    <View style={{ flex: 1, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', width: 70, height: 80 }}>
                        <SpriteSheet
                            ref={ref => this.mummy = ref}
                            source={require('../img/ken.png')}
                            columns={7}
                            rows={10}
                            // height={80} // set either, none, but not both
                            // width={490}
                            imageStyle={{ marginTop: -1 }}
                            animations={{
                                walk: [42, 43, 44, 45, 46, 42, 49, 50, 51, 52, 53],
                                appear: Array.from({ length: 15 }, (v, i) => i + 18),
                            }}
                        />
                    </View>
                    
                    <View style={styles.note}>
                        <Text style={styles.noteText}>
                            S        M        A        R        T
                        </Text>
                    </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
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
    },
    ken: {
        width: 70,
        height: 80,
        position: 'absolute',
        top: 250,
    }
  });