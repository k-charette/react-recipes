import React, { useState } from 'react'
import RandomMeal from './components/RandomMeal'
import Meal from './components/Meal'
import Search from './components/Search'

import './styles/app.css'

// TODOS
// 1. Search for meals
// 2. Display results
// 3. Random / Featured meal
// Optional 4. Favorite Meals 

const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault()

  }
  
  return (
    <div className='container mx-auto p-10'>
      <Search handleSubmit={handleSubmit} />
      <RandomMeal />
    </div>
  );
}

export default App;
