import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, 
    ModalHeader, 
    ModalBody, 
    Form, 
    FormGroup, 
    Label, 
    Input,
    NavLink,
    Button } from 'reactstrap';
import { login } from '../actions/authActions';
import PropTypes from 'prop-types';

class RegisterModal extends Component {

    state = {
        modalOpen: false,
        userName: '',
        password: ''
    }

    toggle = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        });
    }
    
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();

        const { userName, password } = this.state;

        const user = { 
            userName,
            password
        };

        this.props.login(user);
    }

    render() {
        return (
            <>
                <NavLink onClick={this.toggle} href='#'>Sign in</NavLink>
                <Modal isOpen={this.state.modalOpen} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Sign in
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for='userName'>Username</Label>
                                <Input type='text' name='userName' id='userName' placeholder='Username' onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for='password'>Password</Label>
                                <Input type='password' name='password' id='password' placeholder='Password' onChange={this.onChange} />
                            </FormGroup>
                            <Button type='submit' color='light' block>Sign in</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}

RegisterModal.propType = {
    register: PropTypes.func.isRequired
};

export default connect(null, { login })(RegisterModal);
