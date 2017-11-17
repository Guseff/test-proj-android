import React from 'react';
import { connect } from 'react-redux';

import MainField from '../components/MainField.js';

function mapStateToProps(state) {
    return {
        mode: state.footer.mode,   
        level: state.level.level,
    };
}

export default connect(mapStateToProps)(MainField);