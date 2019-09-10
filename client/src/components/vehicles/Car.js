import React, { Component } from 'react';
import carImg from './car inverse.png';

class Car extends Component {
    render() {
        const { color, speed } = this.props;
        const vehicleStyle = {
            backgroundColor: color || 'black',
            width: '100%'
        }

        const wheelStyle = {
            animationDuration: (speed === 0) ? 0 : 30/this.props.speed+'s' // 0 if vehicle speed is 0
        }
        return (
            <div className='vehicle'>
                <img src={carImg} style={vehicleStyle} alt='car'/>
                <div className='wheel1' style={wheelStyle}>
                    <div className='wheel-dot wheel-dot1'></div>
                    <div className='wheel-dot wheel-dot2'></div>
                    <div className='wheel-dot wheel-dot3'></div>
                    <div className='wheel-dot wheel-dot4'></div>
                </div>
                <div className='wheel2' style={wheelStyle}>
                    <div className='wheel-dot wheel-dot1'></div>
                    <div className='wheel-dot wheel-dot2'></div>
                    <div className='wheel-dot wheel-dot3'></div>
                    <div className='wheel-dot wheel-dot4'></div>
                </div>
            </div>
        )
    }
}

export default Car
