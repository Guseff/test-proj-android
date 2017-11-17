import React from 'react';
import { connect } from 'react-redux';
import { 
    StyleSheet,
    View,
} from 'react-native';
import { Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import Field from './Field';
import { TABS } from '../constants';
import { setMode } from '../actions';

class GameField extends React.Component {
    constructor() {
        super();

        this.rowRender = this.rowRender.bind(this);
        this.fieldsRender = this.fieldsRender.bind(this);
    }

    // how write this function inside rowRender() ???
    fieldsRender(i) {
        let fields = [];
        for (let j = i*5; j < (i*5 + 5); j++) {
            fields.push(<Field key={j} x={j - i*5} y={i} {...this.props}/>);
        }
        return fields;
    }

    rowRender() {
        let rows = [];

        for (let i = 0; i < 5; i++) {
            rows.push(
                <Row key={i} style={{ width: '100%' }}>
                    {this.fieldsRender(i)}
                </Row>
            );
        }

        return rows;
    }

    shouldComponentUpdate() {
        console.log('GameField', 'shouldComponentUpdate');
        return true;
    }

    render() {
        return (
            <Content>
                <Grid style={styles.square}>
                    {this.rowRender()}
                </Grid>
            </Content>
        );
    }
}

function mapStateToProps(state) {
    return {
        level: state.level.level,
    };
}

export default connect(mapStateToProps)(GameField);

const styles = StyleSheet.create({
    square: {
        height: 300,
        width: 300,
        backgroundColor: '#34495E'
    },
    row: {
        flex: 1, 
        flexDirection: 'row',
    },
    field: {
    }
  });