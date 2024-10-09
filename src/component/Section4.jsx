import React from 'react'

const Section4 = () => {
    return (
        <>
            <div className='w-full min-h-[600px] flex flex-col items-center justify-center px-[35px] py-[60px]'>
                <div className='mb-[60px]'>
                    <h1 className='font-SourceBold text-2xl leading-8 text-secondary text-center font-bold'>Contact us</h1>
                </div>
                <div className='grid max-w-[500px] w-full gap-5 space-y-8'>
                    <label className='w-full font-SourceBold text-secondary leading-none text-sm'>
                        Name
                        <input
                            type='text'
                            className='w-full font-SourceReg text-secondary text-sm outline-none border-b border-secondary/50'
                            placeholder='' />
                    </label>
                    <label className='w-full font-SourceBold text-secondary leading-none text-sm'>
                        Email
                        <input
                            type='text'
                            className='w-full font-SourceReg text-secondary text-sm outline-none border-b border-secondary/50'
                            placeholder='' />
                    </label>
                    <label className='w-full font-SourceBold text-secondary leading-none text-sm'>
                        Your message
                        <input
                            type='text'
                            className='w-full font-SourceReg text-secondary text-sm outline-none border-b border-secondary/50'
                            placeholder='' />
                    </label>
                    <button className='outline-none text-sm font-SourceBold text-white uppercase px-5 py-2.5 my-2 bg-primary rounded-full'>Call To Action</button>
                </div>
            </div>
        </>
    )
}

export default Section4