import React from 'react'

export default function Header(props) {
    return (
        <div className='header'>
            <div className='playerMoneyDisplay'>
                <h3>Your Money: ${props.playerMoney.toLocaleString()}</h3>
            </div>
            <div className='title'>
                <h1>Idle Game</h1>
            </div>
            <div className='placeHolder'>
                <p>poop</p>
            </div>
        </div>
    )
}
