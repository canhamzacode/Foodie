import React, { useState } from 'react';
import { data } from '../data/data';

const FoodSection = () => {
    const [foods, setFoods] = useState(data);
    const categories = ['All', 'burger', 'pizza', 'salad', 'chicken'];
    const price = ["$", "$$", "$$$", "$$$$"]
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const filterCategory = (category) => {
        if (category === 'All') {
            setFoods(data);
        } else {
            const filteredData = data.filter((item) => item.category === category);
            setFoods(filteredData);
        }
        setCurrentPage(1);
    };
    const filterPrice = (price) => {
        const filteredData = data.filter((item) => item.price === price);
        setFoods(filteredData);
    }

    const totalPages = Math.ceil(foods.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = foods.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className='m-auto px-4 py-12 w-full grid gap-6'>
            <h2 className='text-orange-600 font-bold text-4xl text-center'>
                Top Rated Menu Items
            </h2>
            <div className='flex justify-between items-center flex-wrap'>
                <div className='flex flex-col gap-3'>
                    <h4 className='text-2xl font-semibold'>Filter Type</h4>
                    <div className='flex gap-2 flex-wrap items-center'>
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className='text-orange-500 border border-orange-500'
                                onClick={() => filterCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <h4 className='text-2xl font-semibold'>Filter Price</h4>
                    <div className='flex gap-2 flex-wrap items-center'>
                        {price.map((price, index) => (
                            <button
                                key={index}
                                className='text-orange-500 border border-orange-500'
                                onClick={() => filterPrice(price)}
                            >
                                {price}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-4 gap-4'>
                {currentItems.map((food, index) => (
                    <div className='bg-slate-200 shadow-md w-full' key={index}>
                        <div className='h-[200px] w-full'>
                            <img src={food.image} alt={food.name} className='object-cover h-full w-full' />
                        </div>
                        <div className='w-full grid justify-between items-center p-4 grid-cols-1 gap-1'>
                            <p className='text-[15px] font-bold text-center'>{food.name}</p>
                            <button className='bg-orange-500 text-white border-none w-full'>{food.price}</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex justify-center mt-4'>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        className={`border-none px-3 py-2 mx-1 rounded-lg ${currentPage === index + 1 ? 'bg-orange-500 text-white' : 'bg-gray-300'
                            }`}
                        onClick={() => setCurrentPage(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FoodSection;
