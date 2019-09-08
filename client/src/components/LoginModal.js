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
    Button,
    Alert } from 'reactstrap';
import { login } from '../actions/authActions';
import PropTypes from 'prop-types';

class RegisterModal extends Component {

    state = {
        modalOpen: false,
        userName: '',
        password: '',
        msg: ''
    }

    componentDidUpdate(prevProps) {
        const { error } = this.props
        if (error !== prevProps.error) {
            //Check for login errors
            if (error.id === 'LOGIN_ERROR'){
                this.setState({ msg: error.msg });
            }
            else {
                this.setState({ msg: null});
            }
        }
    }

    toggle = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        });
    }
    
    onChange = e => {
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
                        {this.state.msg ? <Alert color='danger'>{this.state.msg}</Alert> : null}
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
    register: PropTypes.func.isRequired,
    error: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    error: state.error
});

export default connect(mapStateToProps, { login })(RegisterModal);
