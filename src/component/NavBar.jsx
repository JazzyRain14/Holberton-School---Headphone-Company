import React, { useEffect, useState } from 'react'
import Burger from './Burger'
import Logo from '../assets/Images/logo.png'
const NavBar = () => {
    const [isTrue, setIsTrue] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 250);
        };
        window.addEventListener('scroll', handleScroll);
    
      return () => {
        window.addEventListener('scroll', handleScroll)
      }
    }, [])
    

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className={`z-50 transition-colors duration-150 ease-in-out w-full p-4 bg-transparent fixed ${isScrolled ? 'bg-secondary':''}`}>
                <div className='relative tablet:flex tablet:flex-row-reverse'>
                    {/* Responsivenes navLinks */}
                    <div className={`flex max-tablet:flex-col max-tablet:absolute w-full max-tablet:space-y-2 items-center tablet:justify-end tablet:space-x-4 tablet:text-sm font-SourceReg top-full max-tablet:bg-primary rounded-xl p-2 ${isOpen ? 'max-tablet:grid' : 'max-tablet:hidden'}`}>
                        <a href="" className='text-white'>what we do</a>
                        <a href="" className='text-white'>our results</a>
                        <a href="" className='text-white'>contact us</a>
                    </div>

                    <ul className=' list-none flex space-x-5 items-center justify-between'>
                        <li className='max-tablet:block hidden'>
                            <Burger isOpen={isOpen} toggleMenu={toggleMenu} />
                        </li>
                        <li className='max-tablet:flex-1 flex items-center justify-center'>
                            <img src={Logo} alt="" />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar