import React, { Component } from 'react';
import mcImg from './motorcycle inverse.png';
import './motorcycle.css'

class Motorcycle extends Component {
    render() {
        const vehicleStyle = {
            backgroundColor: 'gray',
            width: '100%'
        }

        const wheelStyle = {
            animationDuration: '0.2s'
        }
        return (
            <div className='vehicle'>
                <img src={mcImg} style={vehicleStyle} alt='motorcycle'/>
                <div class='mc-wheel1' style={wheelStyle}>
                    <div class='mc-wheel-dot1'></div>
                    <div class='mc-wheel-dot2'></div>
                    <div class='mc-wheel-dot3'></div>
                </div>
                <div class='mc-wheel2' style={wheelStyle}>
                    <div class='mc-wheel-dot1'></div>
                    <div class='mc-wheel-dot2'></div>
                    <div class='mc-wheel-dot3'></div>
                </div>
            </div>
        )
    }
}

export default Motorcycle
