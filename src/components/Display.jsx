import React from 'react'

const Display = () => {
    return (
        <div className='w-full my-5 grid grid-cols-1 md:grid-cols-3 gap-3'>
            <div className='w-full rounded-xl h-[200px] bg-black/60 relative flex items-center'>
                <div className="bg-black/60 h-[200px] w-full absolute rounded-xl" >
                </div>
                <div className='absolute p-4 h-[150px] w-full '>
                    <div className='grid gap-2'>
                        <h3 className='text-xl font-bold text-white'>Sun's Out, BOGO's Out</h3>
                        <p className='text-white font-medium'>Through 8/26</p>
                    </div>
                    <button className='bg-white text-black font-bold absolute bottom-0 border-none'>Order Now</button>
                </div>
                <img src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60" alt="" className='w-full h-full rounded-xl' />
            </div>
            <div className='w-full rounded-xl h-[200px] bg-black/60 relative flex items-center'>
                <div className="bg-black/60 h-[200px] w-full absolute rounded-xl" >
                </div>
                <div className='absolute p-4 h-[150px] w-full '>
                    <div className='grid gap-2'>
                        <h3 className='text-xl font-bold text-white'>New Restaurants</h3>
                        <p className='text-white font-medium'>Added Daily</p>
                    </div>
                    <button className='bg-white text-black font-bold absolute bottom-0 border-none'>Order Now</button>
                </div>
                <img src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60" alt="" className='w-full h-full rounded-xl' />
            </div>
            <div className='w-full rounded-xl h-[200px] bg-black/60 relative flex items-center'>
                <div className="bg-black/60 h-[200px] w-full absolute rounded-xl" >
                </div>
                <div className='absolute p-4 h-[150px] w-full '>
                    <div className='grid gap-2'>
                        <h3 className='text-xl font-bold text-white'>We Deliver Desserts Too</h3>
                        <p className='text-white font-medium'>Tasty Treats</p>
                    </div>
                    <button className='bg-white text-black font-bold absolute bottom-0 border-none'>Order Now</button>
                </div>
                <img src='https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
                    alt='' className='w-full h-full rounded-xl' />
            </div>
        </div>
    )
}

export default Display