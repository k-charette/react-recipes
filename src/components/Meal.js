import React from 'react'

const Meal = ({ meal }) => {

    if (!meal) return null 

    const {strMealThumb, strMeal, strInstructions, strCategory, strArea, strYoutube} = meal

    return (
        <div className='meal'>
            <div className='meal-img'>
                <img src={strMealThumb} alt='meal pics'/>
            </div>
            <div className='meal-details'>
                <h1 className='meal-title'>{strMeal}</h1>
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