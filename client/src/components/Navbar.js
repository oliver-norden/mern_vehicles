import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal';

class AppNavbar extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        return (
            <Navbar color="light" light expand="md" className="mb-5">
                <NavbarBrand href="/">MERN Vehicles</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <RegisterModal />
                        </NavItem>
                        <NavItem>
                            <LoginModal />
                        </NavItem>
                        <NavItem>
                            <NavLink href='#' onClick={this.props.logout}>Log out</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="http://olivernorden.se" target="_blank">olivernorden.se</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}

export default connect(null, { logout })(AppNavbar);
