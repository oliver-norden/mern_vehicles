import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    Form, 
    FormGroup, 
    Label, 
    Input,
    Alert } from 'reactstrap';
import { addVehicle } from '../actions/vehiclesActions';
import { clearErrors } from '../actions/errorActions';
import PropTypes from 'prop-types';

export class VehicleModal extends Component {

    state = {
        modalOpen: false,
        isAuthenticated: false,
        vehicle: {
            name: '',
            type: '',
            color: '',
            maxSpeed: 0
        },
        errMsg: null
    };

    componentDidUpdate(prevProps) {
        const { vehicles, error, isAuthenticated } = this.props;
        if (vehicles.length > prevProps.vehicles.length){
            this.setState({ modalOpen: false }); // Close modal when new vehicle is added
        }

        // Is authenticated
        if (isAuthenticated !== prevProps.isAuthenticated){
            this.setState({ isAuthenticated: isAuthenticated });
        }

        // Error msg
        if (error !== prevProps.error){
            if (error.id === 'VEHICLE_ERROR'){
                this.setState({ msg: error.msg })
            }
            else {
                this.setState({ msg: null })
            }
        }
    }

    addVehicle = e => {
        e.preventDefault();

        // Add vehicle with action
        this.props.addVehicle(this.state.vehicle);
    }

    onChange = e => {

        // Add form input to corresponding Property in state
        this.setState({ vehicle: {
            ...this.state.vehicle,
            [e.target.name]: e.target.value 
        }});
    }

    toggleModal = () => {
        this.setState({modalOpen: !this.state.modalOpen});
        this.props.clearErrors();
    }

    render() {

        return (this.state.isAuthenticated) ? ( // Only return if user is authenticated
            <div>
                <Button
                    color='light'
                    onClick={this.toggleModal}
                >Add Vehicle</Button>
                <Modal isOpen={ this.state.modalOpen } toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Add Vehicle</ModalHeader>
                    <ModalBody>
                        {this.state.msg ? <Alert color='danger'>{this.state.msg}</Alert> : null}
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
                                <Input type='color' name='color' id='color' onChange={this.onChange} >
                                </Input>
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
        ) : null;
    }
}

VehicleModal.propTypes = {
    addVehicle: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
    vehicles: PropTypes.array.isRequired,
    error: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    vehicles: state.vehicles.vehicles,
    error: state.error,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { addVehicle, clearErrors })(VehicleModal);
