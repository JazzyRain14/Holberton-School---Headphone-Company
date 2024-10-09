import React from 'react'
import sound_frequency from '../assets/Images/sound_frequency.png'
import music from '../assets/Images/music.png'
import hearing from '../assets/Images/hearing.png'
import videoPic from '../assets/Images/video.png'
const Section2 = () => {
    return (
        <>
            <div className='w-full min-h-[600px] px-[30px] py-[60px] grid'>
                <div className='mb-[60px]'>
                    <h1 className='font-SourceBold text-2xl leading-8 text-secondary text-center font-bold'>What we do...</h1>
                    <p className='text-secondary mt-5 font-SourceReg text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className='grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-4 gap-12'>
                    <div className='flex flex-col justify-center items-center text-center max-w-[200px] text-secondary'>
                        <img src={sound_frequency} alt="" />
                        <p className='font-SourceBold'>Lorem ipsum</p>
                        <p className='font-SourceReg text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center text-center max-w-[200px] text-secondary'>
                        <img src={videoPic} alt="" />
                        <p className='font-SourceBold'>Lorem ipsum</p>
                        <p className='font-SourceReg text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center text-center max-w-[200px] text-secondary'>
                        <img src={music} alt="" />
                        <p className='font-SourceBold'>Lorem ipsum</p>
                        <p className='font-SourceReg text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center text-center max-w-[200px] text-secondary'>
                        <img src={hearing} alt="" />
                        <p className='font-SourceBold'>Lorem ipsum</p>
                        <p className='font-SourceReg text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section2