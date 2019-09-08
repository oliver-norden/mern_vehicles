import React, { Component } from 'react';
import { Modal, 
    ModalHeader, 
    ModalBody, 
    Form, 
    FormGroup, 
    Label, 
    Input,
    NavLink } from 'reactstrap';

export class RegisterModal extends Component {

    state = {
        modalOpen: false,
        name: '',
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

    render() {
        return (
            <>
                <NavLink onClick={this.toggle} href='#'>Register</NavLink>
                <Modal isOpen={this.state.modalOpen} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Register
                    </ModalHeader>
                    <ModalBody>
                        <Form>
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
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}

export default RegisterModal
