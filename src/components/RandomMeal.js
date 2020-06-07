import React, { useState, useEffect } from 'react'

const API_URL = 'https://www.themealdb.com/api/json/v1/1/random.php'

const RandomMeal = () => {
    const [meal, setMeal] = useState(undefined)

    useEffect(() => {
        fetch(API_URL)
        .then((response) => {
            if(response.ok){
                return response
            } else {
                let errorMessage = `${response.status} ${response.statusText}`,
                    error = new Error(errorMessage)
                    throw(error)
            }
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
    }, [])

    if (!meal) return null

    return (
        <div>
            <h1> Random Meal </h1>
        </div>
    )
}

export default RandomMeal