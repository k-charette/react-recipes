import React, { useState, useEffect } from 'react'
import Meal from './Meal'

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

    if (!meal) return null

    return (
        <section>
            <h2 className='text-2xl font-bold mb-4'> Featured Meal </h2> 
            <Meal meal={meal}/>
        </section>
    )
}

export default RandomMeal