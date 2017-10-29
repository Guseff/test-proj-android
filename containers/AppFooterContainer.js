import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AppFooter from '../components/AppFooter.js';

function mapStateToProps(state) {
    return {
        mode: state.mode
    };
}

export default connect(mapStateToProps)(AppFooter);