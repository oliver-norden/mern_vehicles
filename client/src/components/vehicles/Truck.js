import React, { Component } from 'react';
import truckImg from './truck inv.png';
import './truck.css'

class Truck extends Component {
    render() {
        const vehicleStyle = {
            backgroundColor: 'green',
            width: '100%'
        }

        const wheelStyle = {
            animationDuration: '0.5s'
        }
        return (
            <div className='vehicle'>
                <img src={truckImg} style={vehicleStyle} alt='truck'/>
                <div class='truck-wheel1' style={wheelStyle}>
                    <div class='truck-wheel-dot1'></div>
                    <div class='truck-wheel-dot2'></div>
                    <div class='truck-wheel-dot3'></div>
                    <div class='truck-wheel-dot4'></div>
                </div>
                <div class='truck-wheel2' style={wheelStyle}>
                    <div class='truck-wheel-dot1'></div>
                    <div class='truck-wheel-dot2'></div>
                    <div class='truck-wheel-dot3'></div>
                    <div class='truck-wheel-dot4'></div>
                </div>
            </div>
        )
    }
}

export default Truck
