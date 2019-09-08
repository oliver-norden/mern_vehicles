import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    Form, 
    FormGroup, 
    Label, 
    Input } from 'reactstrap';
import { addVehicle } from '../actions/vehiclesActions';
import PropTypes from 'prop-types';

export class VehicleModal extends Component {

    state = {
        modalOpen: false,
        vehicle: {
            name: '',
            type: '',
            color: '',
            make: '',
            model: '',
            noOfWheels: 0,
            maxSpeed: 0
        }
    };

    addVehicle = (e) => {
        e.preventDefault();

        // Add vehicle with action
        this.props.addVehicle(this.state.vehicle);

        // Close modal
        this.toggleModal();
    }

    onChange = (e) => {

        // Add form input to corresponding Property in state
        this.setState({ vehicle: {
            ...this.state.vehicle,
            [e.target.name]: e.target.value 
        }});
    }

    toggleModal = () => {
        this.setState({modalOpen: !this.state.modalOpen});
    }

    render() {
        return (
            <div>
                <Button
                    color='light'
                    onClick={this.toggleModal}
                >Add Vehicle</Button>
                <Modal isOpen={ this.state.modalOpen } toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Add Vehicle</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.addVehicle}>
                            <FormGroup>
                                <Label for='name'>Name</Label>
                                <Input type='text' name='name' id='name' placeholder='Name' onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for='type'>Type</Label>
                                <Input type='select' name='type' id='type' onChange={this.onChange} >
                                    <option value=''>Select type</option>
                                    <option value='car'>Car</option>
                                    <option value='motorcycle'>Motorcycle</option>
                                    <option value='truck'>Truck</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for='color'>Color</Label>
                                <Input type='select' name='color' id='color' onChange={this.onChange} >
                                    <option value=''>Select color</option>
                                    <option value='red'>Red</option>
                                    <option value='green'>Green</option>
                                    <option value='blue'>Blue</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for='make'>Make</Label>
                                <Input type='text' name='make' id='make' placeholder='Make' onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for='model'>Model</Label>
                                <Input type='text' name='model' id='model' placeholder='Model' onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for='noOfWheels'>No. of wheels</Label>
                                <Input type='number' name='noOfWheels' id='noOfWheels' placeholder='No. of wheels' onChange={this.onChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for='maxSpeed'>Top speed</Label>
                                <Input type='number' name='maxSpeed' id='maxSpeed' placeholder='Top speed' onChange={this.onChange} />
                            </FormGroup>
                            {this.state.vehicle.type === 'truck' ? // Add loading capacity if vehicle type is truck
                                <FormGroup>
                                    <Label for='maxSpeed'>Loading capacity</Label>
                                    <Input type='number' name='loadingCapacity' id='loadingCapacity' placeholder='Loading capacity' onChange={this.onChange} />
                                </FormGroup>
                            : null}
                            
                            <Button color='light' block >Add Vehicle</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

VehicleModal.propTypes = {
    addVehicle: PropTypes.func.isRequired
}

export default connect(null, { addVehicle })(VehicleModal);
