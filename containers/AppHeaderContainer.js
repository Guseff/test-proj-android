import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AppHeader from '../components/AppHeader.js';

function mapStateToProps(state) {
    return {
        // mode: state.header.mode,  
        // it's no header reducer added yet 
    };
}

export default connect(mapStateToProps)(AppHeader);