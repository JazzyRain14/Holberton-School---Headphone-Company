import React from 'react'
import Logo from '../assets/Images/logo.png'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className='py-[50px] px-[35px] bg-secondary grid place-items-center gap-4 space-y-8'>
                <div className='flex flex-col tablet:flex-row w-full justify-between gap-12 tablet:gap-0 items-center  transition-all duration-200 ease-in-out'>
                    <img src={Logo} alt="" width={200} />
                    <div>
                        <ul className='flex gap-12 items-center'>
                            <li className='bg-white text-secondary p-2 text-xl border rounded-full'><FaFacebookF /></li>
                            <li className='bg-white text-secondary p-2 text-xl border rounded-full'><FaTwitter /></li>
                            <li className='bg-white text-secondary p-2 text-xl border rounded-full'><FaInstagram /></li>
                        </ul>
                    </div>
                </div>
                <h1 className='font-SourceReg text-lg text-white/35 font-medium'>©headphones 2020</h1>
            </div>
        </>
    )
}

export default Footer