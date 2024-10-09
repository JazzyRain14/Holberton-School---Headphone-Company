import React from 'react'

const HeroSection = () => {
    return (
        <div className='bg-hero-pattern w-full h-[600px] px-[20px] bg-cover bg-no-repeat max-sm:bg-left bg-center flex flex-col justify-end items-center pb-6'>
            <div className='grid place-items-center'>
                <h1 className='w-full font-SourceBold text-3xl leading-8 text-white text-center font-bold'>Lorem ipsum dolor set amet lorem ipsum</h1>
                <p className='text-white mt-1 font-SourceBold text-center'>Lorem ipsum dolor set amet lorem ipsum dolor set</p>
                <button className='outline-none text-sm font-SourceBold text-white uppercase px-5 py-2.5 my-2 tablet:py-4 tablet:px-12 tablet:text-lg tablet:my-3.5 bg-primary rounded-full'>Call To Action</button>
            </div>
            <div className='flex items-center'>
                <p className='text-white mt-8 text-sm font-SourceReg text-center tablet:text-base max-w-[650px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
        </div>
    )
}

export default HeroSection