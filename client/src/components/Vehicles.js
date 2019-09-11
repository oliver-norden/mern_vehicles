import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, Button, Badge, Card, CardHeader, CardBody, Alert } from 'reactstrap';
import { deleteVehicle, changeVehicleSpeed } from '../actions/vehiclesActions';
import Car from './vehicles/Car';
import Motorcycle from './vehicles/Motorcycle';
import Truck from './vehicles/Truck';
import PropTypes from 'prop-types';
import './vehicles/style.css';

class Vehicles extends Component {

    state = {
        speedChangeDiff: 5,
        isAuthenticated: false
    };

    componentDidUpdate(prevProps) {
        if (this.props.isAuthenticated !== prevProps.isAuthenticated){
            this.setState({ isAuthenticated: this.props.isAuthenticated })
        }
    }

    decreaseSpeed = id => {
        this.props.changeVehicleSpeed(id, -this.state.speedChangeDiff);
    }

    increaseSpeed = id => {
        this.props.changeVehicleSpeed(id, this.state.speedChangeDiff);
    }

    getVehicle = (type, speed, color) => {
        switch(type){
            case 'car':{
                return <Car speed={speed} color={color}/>
            }
            case 'motorcycle':{
                return <Motorcycle speed={speed} color={color} />
            }
            case 'truck':{
                return <Truck speed={speed} color={color} />
            }
            default:
                return null
        }
    }

    render() {
        const { vehicles } = this.props.vehicle;
        return (
            <div>
                {!this.state.isAuthenticated ? <Alert color='info'>Please login to manage your vehicles</Alert> : null}
                <ListGroup className='mb-3'>
                    {vehicles.map(vehicle => 
                        <Card key={vehicle._id} className="text-center mb-3">
                            <CardHeader>
                                <Button
                                    outline
                                    color='danger'
                                    size='sm'
                                    className='mr-2'
                                    onClick={this.props.deleteVehicle.bind(this, vehicle._id)}
                                >&times;</Button>
                                {vehicle.name}
                            </CardHeader>
                            <CardBody>
                                {this.getVehicle(vehicle.type, vehicle.speed, vehicle.color)}
                                <Button
                                    outline 
                                    color='warning' 
                                    size='sm' 
                                    onClick={this.decreaseSpeed.bind(this, vehicle._id)}
                                >{this.props.winWidth < 700 ? '-' : 'Slow down'}</Button>
                                <Badge className='ml-2 mr-2' color='secondary'>{vehicle.speed} km/h</Badge>
                                <Button 
                                outline 
                                color='success' 
                                size='sm' 
                                onClick={this.increaseSpeed.bind(this, vehicle._id)}
                                >{this.props.winWidth < 700 ? '+' : 'Speed up'}</Button>
                            </CardBody>
                        </Card>
                    )}
                </ListGroup>
            </div>
        )
    }
}

Vehicles.propTypes = {
    vehicle: PropTypes.object.isRequired,
    deleteVehicle: PropTypes.func.isRequired,
    changeVehicleSpeed: PropTypes.func.isRequired,
    winWidth: PropTypes.number.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    vehicle: state.vehicles,
    winWidth: state.app.width,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { deleteVehicle, changeVehicleSpeed })(Vehicles);
