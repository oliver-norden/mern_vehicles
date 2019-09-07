import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button} from 'reactstrap';
import uuid from 'uuid';

class Vehicles extends Component {

    state = {
        vehicles: [
            {
                minSpeed: 0,
                _id: uuid(),
                name: "My XC90",
                type: "Car",
                color: "Silver",
                make: "Volvo",
                model: "XC90",
                noOfWheels: 4,
                maxSpeed: 180,
            },
            {
                minSpeed: 0,
                _id: uuid(),
                name: "My NC750x",
                type: "Motorcycle",
                color: "White",
                make: "Honda",
                model: "NC750x",
                noOfWheels: 2,
                maxSpeed: 190,
            },
            {
                minSpeed: 0,
                _id: uuid(),
                name: "My R8",
                type: "Car",
                color: "Black",
                make: "Audi",
                model: "R8",
                noOfWheels: 4,
                maxSpeed: 350,
            }
        ]
    }

    deleteVehicle = id => {
        this.setState({
            vehicles: this.state.vehicles.filter(vehicle => vehicle._id !== id)
        });
    }

    addVehicle = () => {
        let newVehicle = {};
        newVehicle.name=prompt("Name?");
        newVehicle.type=prompt("Type?");
        newVehicle.color=prompt("Color?");
        newVehicle.make=prompt("Make?");
        newVehicle.model=prompt("Model?");
        newVehicle.noOfWheels=prompt("No. of wheels?");
        newVehicle.maxSpeed=prompt("Max speed?");
        newVehicle.minSpeed=0;
        newVehicle._id=uuid();

        this.setState({
            vehicles: [
                ...this.state.vehicles,
                newVehicle
            ]
        });
    }

    render() {
        return (
            <div>
                <ListGroup className='mb-3'>
                    {this.state.vehicles.map(vehicle => 
                        <ListGroupItem key={vehicle._id}>
                            <Button
                                color='danger'
                                size='sm'
                                className='mr-2'
                                onClick={this.deleteVehicle.bind(this, vehicle._id)}
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

export default Vehicles;
