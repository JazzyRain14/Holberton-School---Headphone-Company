import React from 'react'

const HeroSection = () => {
    return (
        <div className='w-full min-h-[600px] px-[30px] grid border border-black pb-6'>
            <h1 className='font-SourceBold text-2xl leading-8 te text-center font-bold'>What we do...</h1>
            <p className='text-white mt-1 font-SourceBold text-center'>Lorem ipsum dolor set amet lorem ipsum dolor set</p>
            <button className='outline-none text-sm font-SourceBold text-white uppercase px-5 py-2.5 my-2 bg-primary rounded-full'>Call To Action</button>
            <p className='text-white mt-8 text-sm font-SourceReg text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
    )
}

export default HeroSection