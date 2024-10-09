import React from 'react'

const Section3 = () => {
    return (
        <>
            <div className='w-full min-h-[600px] px-[30px] py-[60px] bg-section-pattern bg-no-repeat bg-cover bg-center'>
                <div className='mb-[60px] flex flex-col items-center'>
                    <h1 className='font-SourceBold text-2xl leading-8 text-white text-center font-bold'>Our results speak for themselves</h1>
                    <p className='text-white mt-5 font-SourceReg text-center max-w-[650px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-12'>
                    <div className='flex flex-col justify-center items-center text-center w-[190px] h-[190px] text-white bg-primary Pentagon'>
                        <p className='font-SourceBold text-[46px]'>2%</p>
                        <p className='font-SourceReg text-sm'>Lorem ipsum dolor</p>
                    </div>
                    <div className='flex flex-col justify-center items-center text-center w-[190px] h-[190px] text-white bg-primary Pentagon'>
                        <p className='font-SourceBold text-[46px]'>2%</p>
                        <p className='font-SourceReg text-sm'>Lorem ipsum dolor</p>
                    </div>
                    <div className='flex flex-col justify-center items-center text-center w-[190px] h-[190px] text-white bg-primary Pentagon'>
                        <p className='font-SourceBold text-[46px]'>2%</p>
                        <p className='font-SourceReg text-sm'>Lorem ipsum dolor</p>
                    </div>
                    <div className='flex flex-col justify-center items-center text-center w-[190px] h-[190px] text-white bg-primary Pentagon'>
                        <p className='font-SourceBold text-[46px]'>2%</p>
                        <p className='font-SourceReg text-sm'>Lorem ipsum dolor</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section3