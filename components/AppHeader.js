import React from 'react';
import { StatusBar, ToastAndroid } from 'react-native';
import { Header, Left, Body, Right, Button, Text, Icon } from 'native-base';
import { MODES } from '../constants';

export default class AppHeader extends React.Component {
    constructor() {
        super();

    }

    render() {
        console.log(this.props);
        ToastAndroid.showWithGravity('Test message', ToastAndroid.LONG, ToastAndroid.CENTER);
        return (
            <Header style={{marginTop: StatusBar.currentHeight}}>
                <Left>
                    <Button>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Text style={{color: '#FFF', fontSize: 24}}>Awesome</Text>
                </Body>
                <Right>
                    <Button>
                        <Icon name='more'/>
                    </Button>
                </Right>
            </Header>
        );
    }
}