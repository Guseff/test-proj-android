import React from 'react';
import { 
    StyleSheet,
    View,
    Image,
    TouchableNativeFeedback,
} from 'react-native';

import { TABS } from '../constants';
import { changeFields } from '../actions';

export default class Field extends React.Component {
    constructor() {
        super();

        this.btnPress = this.btnPress.bind(this);
        this.rotationHandle = this.rotationHandle.bind(this);
        this.getSrc = this.getSrc.bind(this);
    }

    componentWillMount() {
        this.rotationHandle(this.props.level);
    }

    btnPress(e) {
        this.rotationHandle(this.props.level, this.props.x, this.props.y);
    }

    rotationHandle(arr, x, y) {
        let res = arr.slice();

        // if X & Y arguments present, rotate field
        if (Number.isInteger(x) && Number.isInteger(y)) {
            res[y][x].ends = res[y][x].ends.map((el) => {
                return (el > 2) ? 0 : el += 1;
            });
        }

        let que = [];
        let start;
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                res[i][j].status = 0;
                if (res[i][j].type === 1) {
                    start = res[i][j];
                }
            }
        }
        que.push(start);
      
        while(que.length > 0) {
          let field = que.pop();
          res[field.y][field.x].status = 1;
      
          let near; 
          if (field.x < 4) {
            near = (res[field.y][field.x + 1]);
            if (near && field.ends.includes(1)) {
              if (near.ends.includes(3) && near.status === 0) {
                que.push(near);
              } 
            }
          }
          if (field.x > 0) {
            near = (res[field.y][field.x - 1]) ? res[field.y][field.x - 1] : null;
            if (near && field.ends.includes(3)) {
              if (near.ends.includes(1) && near.status === 0) {
                que.push(near);
              } 
            }
          }
          if (field.y < 4) {
            near = (res[field.y + 1][field.x]) ? res[field.y + 1][field.x] : null;
            if (near && field.ends.includes(2)) {
              if (near.ends.includes(0) && near.status === 0) {
                que.push(near);
              } 
            }
          }
          if (field.y > 0) {
            near = (res[field.y - 1][field.x]) ? res[field.y - 1][field.x] : null;
            if (near && field.ends.includes(0)) {
              if (near.ends.includes(2) && near.status === 0) {
                que.push(near);
              } 
            }  
          }
        }
        // return () => {
        this.props.dispatch(changeFields(res));
        // };
    }

    getRotation(field) {
        if (field.type === 1 || field.type === 5 ) {
            if (!field.ends.includes(3)) {
                return 0;
            } else if (!field.ends.includes(0)) {
                return 90;
            } else if (!field.ends.includes(1)) {
                return 180;
            } else {
                return 270;
            }
        }
        if (field.type === 2) {
            if (field.ends.includes(0)) {
                return 0;
            } else if (field.ends.includes(1)) {
                return 90;
            } else if (field.ends.includes(2)) {
                return 180;
            } else {
                return 270;
            }
        }
        if (field.type === 3) {
            if (field.ends.includes(0) && field.ends.includes(1)) {
                return 0;
            } else if (field.ends.includes(1) && field.ends.includes(2)) {
                return 90;
            } else if (field.ends.includes(2) && field.ends.includes(3)) {
                return 180;
            } else {
                return 270;
            }
        }
        if (field.type === 4) {
            if (field.ends.includes(0) || field.ends.includes(2)) {
                return 0;
            } else {
                return 90;
            }
        }
    }

    getSrc(field) {
        if (field.type === 1) {
            return require('../img/type-5-yellow.png');
        } else if (field.type === 2) {
            return (field.status === 0) ? require('../img/type-2-white.png') : require('../img/type-2-yellow.png');
        } else if (field.type === 3) {
            return (field.status === 0) ? require('../img/type-3-white.png') : require('../img/type-3-yellow.png');
        } else if (field.type === 4) {
            return (field.status === 0) ? require('../img/type-4-white.png') : require('../img/type-4-yellow.png');
        } else {
            return (field.status === 0) ? require('../img/type-5-white.png') : require('../img/type-5-yellow.png');
        }
    }

    shouldComponentUpdate() {
        console.log('Field', 'shouldComponentUpdate');
        return true;
    }

    render() {
        let src = this.getSrc(this.props.level[this.props.y][this.props.x]);
        let rtt = this.getRotation(this.props.level[this.props.y][this.props.x]) + 'deg';
        let bkgImg = (this.props.level[this.props.y][this.props.x].type === 1) ? require('../img/source.png') : require('../img/transp.png');
        return (
            <Image source={bkgImg} style={styles.background}> 
                <TouchableNativeFeedback onPress={() => this.btnPress()}>
                    <Image 
                        source={this.getSrc(this.props.level[this.props.y][this.props.x])} 
                        style={{
                            transform: [
                                {rotate: this.getRotation(this.props.level[this.props.y][this.props.x]) + 'deg'}
                            ]
                        }}
                    />
                </TouchableNativeFeedback>
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    touchfield: {
      height: 60,
      width: 60,
    },
    background: {
      flex: 1,
      width: null,
      height: null,
      justifyContent: 'center',
      alignItems: 'center',  
    }
  });