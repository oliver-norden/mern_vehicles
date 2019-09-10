import React, { Component } from 'react';
import mcImg from './motorcycle inverse.png';

class Motorcycle extends Component {
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
                <img src={mcImg} style={vehicleStyle} alt='motorcycle'/>
                <div className='wheel1 mc-wheel1' style={wheelStyle}>
                    <div className='wheel-dot mc-wheel-dot1'></div>
                    <div className='wheel-dot mc-wheel-dot2'></div>
                    <div className='wheel-dot mc-wheel-dot3'></div>
                </div>
                <div className='wheel1 mc-wheel2' style={wheelStyle}>
                    <div className='wheel-dot mc-wheel-dot1'></div>
                    <div className='wheel-dot mc-wheel-dot2'></div>
                    <div className='wheel-dot mc-wheel-dot3'></div>
                </div>
            </div>
        )
    }
}

export default Motorcycle
