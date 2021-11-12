import React from 'react'
import './Menu.css'

export default function Menu() {
    const buttons = ["home", "profile", "search", "characters", "planets", "ships"]
    return (
        <div className='Menu'>
            {buttons.map((btn, index) => (
                <div key={index} className="MenuButton">{btn}</div>
            ))}
        </div>
    )
}

