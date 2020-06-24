import React from 'react'

const Meal = ({ meal }) => {

    if (!meal) return null 

    const {strMealThumb, strMeal, strInstructions, strCategory, strArea, strYoutube} = meal

    return (
        <div className='bg-white rounded flex flex-wrap w-auto'>
            <div className='md:w-1/4 w-full rounded overflow-hidden'>
                <img src={strMealThumb} alt={strMeal}/>
            </div>
            <div className='p-5'>
                <h1 className='text-lg'>{strMeal}</h1>
                <p className='meal-instructions'>{strInstructions && strInstructions.substring(0, 100) + '...'}</p>
                <ul className='meal-info'>
                    <li>
                        Category
                        <strong className='meal-category'> {strCategory} </strong>
                    </li>
                    <li>
                        Area
                        <strong className='meal-area'> {strArea} </strong>
                    </li>
                    <li>
                        Video Instructions 
                        <a href={strYoutube} target="_blank" rel="noopener noreferrer"><strong className='meal-video'> Here</strong></a>
                    </li>
                </ul>

                <button className='btn-view-recipe'>
                    View Recipe 
                </button>
            </div>
        </div>
    )}


export default Meal