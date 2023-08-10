import React, { useState } from 'react'
import { data } from "../data/data"

const FoodSection = () => {
    const [foods, setFoods] = useState(data);
    return (
        <div className='m-auto px-4 py-12 w-full'>
            <h2 className='text-orange-600 font-bold text-4xl text-center'>
                Top Rated Menu Items
            </h2>
        </div>
    )
}

export default FoodSection