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
import { register } from '../actions/authActions';
import PropTypes from 'prop-types';
import { clearErrors } from '../actions/errorActions';

class RegisterModal extends Component {

    state = {
        modalOpen: false,
        name: '',
        userName: '',
        password: '',
        msg: ''
    }

    componentDidUpdate(prevProps) {
        const { error } = this.props;
        if(error !== prevProps.error){
            if (error.id === 'REG_ERROR'){
                this.setState({ msg: error.msg });
            }
            else {
                this.setState({ msg: null })
            }
        }
        
        //Close modal if authenticated
        if(this.state.modalOpen){
            if (this.props.isAuthenticated){
                this.toggle();
            }
        }
    }

    toggle = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        });

        this.props.clearErrors();
    }
    
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();

        const { name, userName, password } = this.state;

        const newUser = { 
            name,
            userName,
            password
        };

        this.props.register(newUser);
    }

    render() {
        return (
            <>
                <NavLink onClick={this.toggle} href='#'>Register</NavLink>
                <Modal isOpen={this.state.modalOpen} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Register
                    </ModalHeader>
                    <ModalBody>
                        {this.state.msg ? <Alert color='danger'>{this.state.msg}</Alert> : null}
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for='name'>Name</Label>
                                <Input type='text' name='name' id='name' placeholder='Name' onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for='userName'>Username</Label>
                                <Input type='text' name='userName' id='userName' placeholder='Username' onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for='password'>Password</Label>
                                <Input type='password' name='password' id='password' placeholder='Password' onChange={this.onChange} />
                            </FormGroup>
                            <Button type='submit' color='light' block>Register User</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}

RegisterModal.propType = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    clearErrors: PropTypes.func.isRequired,
    error: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    error: state.error,
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { register, clearErrors })(RegisterModal);
