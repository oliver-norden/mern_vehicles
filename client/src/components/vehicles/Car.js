import React, { Component } from 'react';
import carImg from './car inverse.png';
import './car.css'

class Car extends Component {
    render() {
        const vehicleStyle = {
            backgroundColor: 'red',
            width: '100%'
        }

        const wheelStyle = {
            animationDuration: '3s'
        }
        return (
            <div className='vehicle'>
                <img src={carImg} style={vehicleStyle} alt='car'/>
                <div class='wheel1' style={wheelStyle}>
                    <div class='wheel-dot1'></div>
                    <div class='wheel-dot2'></div>
                    <div class='wheel-dot3'></div>
                    <div class='wheel-dot4'></div>
                </div>
                <div class='wheel2' style={wheelStyle}>
                    <div class='wheel-dot1'></div>
                    <div class='wheel-dot2'></div>
                    <div class='wheel-dot3'></div>
                    <div class='wheel-dot4'></div>
                </div>
            </div>
        )
    }
}

export default Car
