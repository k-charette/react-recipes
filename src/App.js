import React from 'react'
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
  return (
    <div className='flex flex-wrap justify-center items-center'>
      <Search />
      <RandomMeal />

      <Meal />
    </div>
  );
}

export default App;
