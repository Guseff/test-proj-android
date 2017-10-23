import React from 'react';
import { Footer, FooterTab, Button, Text } from 'native-base';
import { MODES } from '../constants';

export default class AppFooter extends React.Component {
    constructor() {
        super();

        this.btnPress = this.btnPress.bind(this);
    }

    btnPress(arg) {
        // this.props.setMode(arg);
    }

    render() {
        return (
            <Footer>
                <FooterTab>
                    <Button active={this.props.mode === MODES.ARTICLES} onPress={this.btnPress(MODES.ARTICLES)}>
                        <Text>Статьи</Text>
                    </Button>
                    <Button active={this.props.mode === MODES.PODCASTS} onPress={this.btnPress(MODES.PODCASTS)}>
                        <Text>Подкасты</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}
