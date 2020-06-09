import React, { useState, useEffect } from 'react'

const API_URL = 'https://www.themealdb.com/api/json/v1/1/random.php'

const RandomMeal = () => {
    const [meal, setMeal] = useState(undefined)

    useEffect(() => {
        // fetch(API_URL)
        // .then((response) => {
        //     if(response.ok){
        //         return response
        //     } else {
        //         let errorMessage = `${response.status} ${response.statusText}`,
        //             error = new Error(errorMessage)
        //             throw(error)
        //     }
        // })
        // .then((response) => response.json())
        // .then((data) => {
        //     setMeal(data.meals[0])
        // })

        async function getMeal() {
            const res = await fetch(API_URL)
            const data = await res.json()
            setMeal(data.meals[0])
        }

        getMeal()
    }, [])

    console.log(meal)

    if (!meal) return null

    const { strMeal, strCategory, strArea, strInstructions, strMealThumb, } = meal

    return (
        <div className='meal'>
            <div className='meal-img'>
                <img src={strMealThumb} alt='meal pics'/>
            </div>
            <div className='meal-details'>
                <h2 className='meal-title'>{strMeal}</h2>
                <p className='meal-instructions'>{strInstructions.substring(0, 99) + '...'}</p>
                <ul className='meal-info'>
                    <li>
                        Category:
                        <strong className='meal-category'> {strCategory} </strong>
                    </li>
                    <li>
                        Area:
                        <strong className='meal-area'> {strArea} </strong>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default RandomMeal