import React, { useState } from 'react'

const Burger = ({isOpen, toggleMenu}) => {
   
    return (
        <>
            <div className={`burger-menu ${isOpen ? 'active' : '' }`} onClick={toggleMenu}>
                <div className='burger-line'></div>
                <div className='burger-line'></div>
                <div className='burger-line'></div>
            </div>
        </>
    )
}

export default Burger