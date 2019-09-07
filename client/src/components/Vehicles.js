import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Button} from 'reactstrap';
import { addVehicle, deleteVehicle, getVehicles } from '../actions/vehiclesActions';
import PropTypes from 'prop-types';

class Vehicles extends Component {

    // Get vehicles when component has mounted
    componentDidMount() {
        this.props.getVehicles();
    }

    addVehicle = () => {

        // Prepare new vehicle object
        let newVehicle = {};
        newVehicle.name=prompt("Name?");
        newVehicle.type=prompt("Type?");
        newVehicle.color=prompt("Color?");
        newVehicle.make=prompt("Make?");
        newVehicle.model=prompt("Model?");
        newVehicle.noOfWheels=prompt("No. of wheels?");
        newVehicle.maxSpeed=prompt("Max speed?");

        this.props.addVehicle(newVehicle);
    }

    render() {
        const { vehicles } = this.props.vehicle;
        return (
            <div>
                <ListGroup className='mb-3'>
                    {vehicles.map(vehicle => 
                        <ListGroupItem key={vehicle._id}>
                            <Button
                                color='danger'
                                size='sm'
                                className='mr-2'
                                onClick={this.props.deleteVehicle.bind(this, vehicle._id)}
                            >&times;</Button>
                            {vehicle.name}
                        </ListGroupItem>
                    )}
                </ListGroup>
                <Button
                    color='light'
                    onClick={this.addVehicle}
                >Add Vehicle</Button>
            </div>
        )
    }
}

Vehicles.propTypes = {
    vehicle: PropTypes.object.isRequired,
    addVehicle: PropTypes.func.isRequired,
    deleteVehicle: PropTypes.func.isRequired,
    getVehicles: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    vehicle: state.vehicles
});

export default connect(mapStateToProps, { addVehicle, deleteVehicle, getVehicles })(Vehicles);
