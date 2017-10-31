import React from 'react';
import { connect } from 'react-redux';

import MainField from '../components/MainField.js';

function mapStateToProps(state) {
    return {
        // mode: state.mainField.mode,  
        // it's no mainField reducer added yet 
    };
}

export default connect(mapStateToProps)(MainField);