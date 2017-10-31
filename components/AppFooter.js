import React from 'react';
import { Footer, FooterTab, Button, Text, Icon } from 'native-base';
import { TABS } from '../constants';

import { setMode } from '../actions';

export default class AppFooter extends React.Component {
    constructor() {
        super();

        this.btnPress = this.btnPress.bind(this);
    }

    btnPress(arg) {
        return (e) => {
            this.props.dispatch(setMode(arg));
        };
    }

    render() {
        return (
            <Footer>
                <FooterTab>
                    <Button active={this.props.mode === TABS.HOME} onPress={this.btnPress(TABS.HOME)}>
                        <Icon name='home' />
                    </Button>
                    <Button active={this.props.mode === TABS.LOVES} onPress={this.btnPress(TABS.LOVES)}>
                        <Icon name='heart'/>
                    </Button>
                    <Button active={this.props.mode === TABS.SETTINGS} onPress={this.btnPress(TABS.SETTINGS)}>
                        <Icon name='build'/>
                    </Button>
                    <Button active={this.props.mode === TABS.HELP} onPress={this.btnPress(TABS.HELP)}>
                        <Icon name='help'/>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}
