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

    render() {
        return (
            <div>
                <ListGroup>
                    {this.state.vehicles.map(vehicle => 
                        <ListGroupItem key={vehicle._id}>
                            {vehicle.name}
                        </ListGroupItem>
                    )}
                </ListGroup>
            </div>
        )
    }
}

export default Vehicles;
