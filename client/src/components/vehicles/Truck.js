import React, { Component } from 'react';
import truckImg from './truck inv.png';

class Truck extends Component {
    render() {
        const { color, speed } = this.props;
        const vehicleStyle = {
            backgroundColor: color || 'black',
            width: '100%'
        }

        const wheelStyle = {
            animationDuration: (speed === 0) ? 0+'s' : 30/this.props.speed+'s' // 0 if vehicle speed is 0
        }
        return (
            <div className='vehicle'>
                <img src={truckImg} style={vehicleStyle} alt='truck'/>
                <div className='wheel1 truck-wheel1' style={wheelStyle}>
                    <div className='wheel-dot truck-wheel-dot1'></div>
                    <div className='wheel-dot truck-wheel-dot2'></div>
                    <div className='wheel-dot truck-wheel-dot3'></div>
                    <div className='wheel-dot truck-wheel-dot4'></div>
                </div>
                <div className='wheel1 truck-wheel2' style={wheelStyle}>
                    <div className='wheel-dot truck-wheel-dot1'></div>
                    <div className='wheel-dot truck-wheel-dot2'></div>
                    <div className='wheel-dot truck-wheel-dot3'></div>
                    <div className='wheel-dot truck-wheel-dot4'></div>
                </div>
            </div>
        )
    }
}

export default Truck
