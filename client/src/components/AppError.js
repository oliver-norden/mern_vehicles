import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';
import PropTypes from 'prop-types';

class AppError extends Component {

    state = {
        msg: null
    };

    componentDidUpdate(prevProps) {
        const { error } = this.props;
        if (error !== prevProps.error) {
            //Check for app errors
            if (error.id === 'APP_ERROR'){
                this.setState({ msg: error.msg });
            }
            else {
                this.setState({ msg: null});
            }
        }
    }

    render() {
        return (
            <>
                {this.state.msg ? <Alert color='danger'>{this.state.msg}</Alert> : null}
            </>
        )
    }
}

const mapStateToProps = state => ({
    error: state.error
});

AppError.propTypes = {
    error: PropTypes.object
};

export default connect(mapStateToProps)(AppError)
