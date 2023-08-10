import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp } from 'react-icons/md'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const toggleNav = () => {
        setNav(!nav)
    }
    return (
        <nav className='w-full flex items-center justify-between py-[20px]'>
            <div className='flex items-center gap-4'>
                <div className='cursor-pointer flex items-center' onClick={toggleNav}>
                    <AiOutlineMenu size={25} />
                </div>
                <h1 className='text-2xl md:text-3xl '>Best <span className='font-bold'>Eat</span></h1>
                <div className='hidden md:flex bg-gray-300 rounded-xl'>
                    <button className='bg-black border-none text-white font-bold'>
                        Delivery
                    </button>
                    <button className='border-none font-bold p-2'>
                        PickUp
                    </button>
                </div>
            </div>
            <div className='flex items-center gap-2 w-[150px] md:w-[300px] bg-slate-300 rounded-xl p-2'>
                <AiOutlineSearch size={25} />
                <input className='outline-none w-full bg-transparent text-black' type="search" placeholder="Search for food..." name="" id="" />
            </div>
            <div className='hidden md:flex'>
                <button className='bg-black text-white flex items-center gap-2 py-2'>
                    <AiOutlineShoppingCart size={20} />
                    Cart
                </button>
            </div>
            {nav && <div className='absolute w-full h-screen bg-black/80 top-0 left-0 duration-100 z-10'>
                <div className='max-w-[350px] w-full bg-white h-full p-4 relative grids gap-2'>
                    <div className='absolute right-4 cursor-pointer' onClick={toggleNav}>
                        <AiOutlineClose size={25} />
                    </div>
                    <h2 className='text-2xl p-4'>
                        Best <span className='font-bold'>Eats</span>
                    </h2>
                    <ul className='flex flex-col p-4 text-gray-800 list-none'>
                        <li className='text-xl py-4 flex cursor-pointer'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
                        <li className='text-xl py-4 flex cursor-pointer'><MdFavorite size={25} className='mr-4' /> Favorites</li>
                        <li className='text-xl py-4 flex cursor-pointer'><FaWallet size={25} className='mr-4' /> Wallet</li>
                        <li className='text-xl py-4 flex cursor-pointer'><MdHelp size={25} className='mr-4' /> Help</li>
                        <li className='text-xl py-4 flex cursor-pointer'><AiFillTag size={25} className='mr-4' /> Promotions</li>
                        <li className='text-xl py-4 flex cursor-pointer'><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
                        <li className='text-xl py-4 flex cursor-pointer'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
                    </ul>
                </div>
            </div>}
        </nav>

    )
}

export default Navbar