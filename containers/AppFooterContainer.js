import React from 'react';
import AppFooter from '../components/AppFooter.js';
import { connect } from 'react-redux';
import { setMode } from '../actions';

function mapStateToProps(state) {
    return {
        mode: state.mode
    };
}

// function mapDispatchToProps(dispatch) {
//     return {
//         setMode: function (mode) {
//             return dispatch(setMode(mode));
//         }
//     };
// }

class AppFooterContainer extends React.Component {
    render() {
        return (
            <AppFooter mode={this.props.mode} setMode={this.props.setMode} />
        );
    }
} 

// export default AppFooterContainer;

export default connect(mapStateToProps)(AppFooterContainer);