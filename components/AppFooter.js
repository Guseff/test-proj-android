import React from 'react';
import { Footer, FooterTab, Button, Text, Icon } from 'native-base';
import { MODES } from '../constants';

import { setMode } from '../actions';

export default class AppFooter extends React.Component {
    constructor() {
        super();

        this.btnPress = this.btnPress.bind(this);
    }

    btnPress(arg) {
        return (e) => {
            console.log(this.props);
            this.props.dispatch(setMode(arg));
        };
    }

    render() {
        return (
            <Footer>
                <FooterTab>
                    <Button active={this.props.mode === MODES.ARTICLES} onPress={this.btnPress(MODES.ARTICLES)}>
                        <Icon name='home' />
                    </Button>
                    <Button active={this.props.mode === MODES.PODCASTS} onPress={this.btnPress(MODES.PODCASTS)}>
                        <Icon name='heart'/>
                    </Button>
                    <Button active={this.props.mode === MODES.PODCASTS}>
                        <Icon name='build'/>
                    </Button>
                    <Button active={this.props.mode === MODES.PODCASTS}>
                        <Icon name='help'/>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}
