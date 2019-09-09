import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Button, Badge, Row, Col } from 'reactstrap';
import { deleteVehicle, getVehicles, changeVehicleSpeed } from '../actions/vehiclesActions';
import PropTypes from 'prop-types';

class Vehicles extends Component {

    state = {
        speedChangeDiff: 5
    };

    // Get vehicles when component has mounted
    componentDidMount() {
        this.props.getVehicles();
    }

    decreaseSpeed = id => {
        this.props.changeVehicleSpeed(id, -this.state.speedChangeDiff);
    }

    increaseSpeed = id => {
        this.props.changeVehicleSpeed(id, this.state.speedChangeDiff);
    }

    render() {
        const speedButtonClasses = 'mr-3';
        const { vehicles } = this.props.vehicle;
        return (
            <div>
                <ListGroup className='mb-3'>
                    {vehicles.map(vehicle => 
                        <ListGroupItem key={vehicle._id}>
                            <Button
                                outline
                                color='danger'
                                size='sm'
                                className='mr-2'
                                onClick={this.props.deleteVehicle.bind(this, vehicle._id)}
                            >&times;</Button>
                            {vehicle.name}
                            <Badge className='ml-2 mr-2' color='secondary'>{vehicle.speed} km/h</Badge>
                            <Button
                                outline 
                                color='warning' 
                                size='sm' 
                                className={speedButtonClasses} 
                                onClick={this.decreaseSpeed.bind(this, vehicle._id)}
                            >{this.props.winWidth < 700 ? '-' : 'Slow down'}</Button>
                            <Button 
                            outline 
                            color='success' 
                            size='sm' 
                            className={speedButtonClasses} 
                            onClick={this.increaseSpeed.bind(this, vehicle._id)}
                            >{this.props.winWidth < 700 ? '+' : 'Speed up'}</Button>
                        </ListGroupItem>
                    )}
                </ListGroup>
            </div>
        )
    }
}

Vehicles.propTypes = {
    vehicle: PropTypes.object.isRequired,
    deleteVehicle: PropTypes.func.isRequired,
    getVehicles: PropTypes.func.isRequired,
    changeVehicleSpeed: PropTypes.func.isRequired,
    winWidth: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
    vehicle: state.vehicles,
    winWidth: state.app.width
});

export default connect(mapStateToProps, { deleteVehicle, getVehicles, changeVehicleSpeed })(Vehicles);
