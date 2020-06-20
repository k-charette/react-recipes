import React from 'react'
import RandomMeal from './components/RandomMeal'
import './styles.css'

// TODOS
// 1. Search for meals
// 2. Display results
// 3. Random / Featured meal
// Optional 4. Favorite Meals 


const App = () => {
  return (
    <div>
      <section className='container'>
        <h2> Featured Meal </h2>
        <RandomMeal />
      </section>
    </div>
  );
}

export default App;
