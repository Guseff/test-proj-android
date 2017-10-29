import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AppHeader from '../components/AppHeader.js';
import { setMode } from '../actions';

function mapStateToProps(state) {
    return {
        mode: state.mode,
    };
}

export default connect(mapStateToProps)(AppHeader);