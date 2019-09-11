import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../actions/authActions';
import { NavLink } from 'reactstrap';

class Guest extends Component {

    regGuest = () => {
        // Create guest user
        const rndNumString = Math.random().toString().slice(2);
        const name = 'guest'+rndNumString;
        const password = name;
        const userName = name;
        let newUser = {
            name,
            password,
            userName
        };

        this.props.register(newUser);
    }

    render() {
        return (
            <NavLink href='#' onClick={this.regGuest}>Sign in as guest</NavLink>
        )
    }
}

export default connect(null, { register })(Guest)
