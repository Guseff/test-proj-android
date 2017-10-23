import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AppFooter from '../components/AppFooter.js';
import { setMode } from '../actions';

function mapStateToProps(state) {
    return {
        mode: state.mode
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setMode: bindActionCreators(setMode, dispatch)
    };
}

class AppFooterContainer extends React.Component {
    render() {
        return (
            <AppFooter mode={this.props.mode} setMode={this.props.setMode} />
        );
    }
} 

// export default AppFooterContainer;

export default connect(mapStateToProps, mapDispatchToProps)(AppFooterContainer);