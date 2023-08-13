import React from 'react'

const HeroSection = () => {
    return (
        <div className='w-full h-[400px relative grid items-center'>
            <div className='absolute'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white'>The <span className='text-orange-500'>Best</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white'> <span className='text-orange-500'>Foods</span> Delivered</h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
        </div>
    )
}

export default HeroSection