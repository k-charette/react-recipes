import React from 'react'

const Meal = ({ meal }) => {

    if (!meal) return null 

    const {strMealThumb, strMeal, strInstructions, strCategory, strArea, strYoutube} = meal

    return (
        <div className='bg-white rounded shadow-lg flex m-auto'>
            <div className='w-1/3'>
                <img className='w-full rounded rounded-right-0 h-full object-cover' src={strMealThumb} alt={strMeal}/>
            </div>
            <div className='w-2/3 p-5 relative'>
                <h1 className='text-2xl font-semibold text-blue-900'>{strMeal}</h1>
                <p className='text-md my-3 text-gray-700'>{strInstructions && strInstructions.substring(0, 100) + '...'}</p>
                <ul className='flex'>
                    <li className='mr-8'>
                        <span className='text-gray-900'>Category</span>
                        <strong className='block text-blue-900'> {strCategory} </strong>
                    </li>
                    <li className='mr-8'> 
                        <span className='text-gray-900'>Area</span>
                        <strong className='block text-blue-900'> {strArea} </strong>
                    </li>
                    <li className='mr-8'>
                        <span className='text-gray-900'>Video Instructions</span> 
                        <a href={strYoutube} target="_blank" rel="noopener noreferrer"><strong className='block text-blue-900'> Here</strong></a>
                    </li>
                </ul>

                <button className='bg-blue-900 text-white rounded px-5 py-3 absolute bottom-0 right-0 -mr-3 -mb-3'>
                    View Recipe 
                </button>
            </div>
        </div>
    )}


export default Meal