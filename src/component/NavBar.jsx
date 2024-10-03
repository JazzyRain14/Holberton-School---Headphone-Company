import React, { useState } from 'react'
import Burger from './Burger'
import Logo from '../assets/Images/logo.png'
const NavBar = () => {
    const [isTrue, setIsTrue] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className='h-full w-full p-4 bg-transparent fixed'>

                <div className='relative'>
                    {/* Responsivenes navLinks */}
                    <div className={`grid absolute w-full space-y-2 top-full border bg-primary rounded-xl p-2 ${isOpen ? 'block' : 'hidden'}`}>
                        <a href="" className='text-white'>what we do</a>
                        <a href="" className='text-white'>our results</a>
                        <a href="" className='text-white'>contact us</a>
                    </div>
                    
                    <ul className=' list-none flex space-x-5 items-center justify-between'>
                        <li>
                            <Burger isOpen={isOpen} toggleMenu={toggleMenu} />
                        </li>
                        <li className='flex-1 flex items-center justify-center'>
                            <img src={Logo} alt="" />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar