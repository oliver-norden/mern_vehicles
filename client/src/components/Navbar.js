import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal';
import Guest from './Guest';

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
                <Container>
                    <NavbarBrand href="/">MERN Vehicles</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {this.props.isAuthenticated ? 
                                <NavItem>
                                    <NavLink href='#' onClick={this.props.logout}>Log out</NavLink>
                                </NavItem>                            
                            :
                                <>
                                    <NavItem>
                                        <RegisterModal />
                                    </NavItem>
                                    <NavItem>
                                        <LoginModal />
                                    </NavItem>
                                    <NavItem>
                                        <Guest />
                                    </NavItem>
                                </>
                            }
                            <NavItem>
                                <NavLink href="http://olivernorden.se" target="_blank">olivernorden.se</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout } )(AppNavbar);
