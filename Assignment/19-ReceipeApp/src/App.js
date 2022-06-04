import React ,{useState}from 'react';
import MealList from './MealList';
import axios from 'axios';

const App = () => {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);


  function handleChange(e){
    setCalories(e.target.value)
  };

  

  const getMealData = async()=>{
    try {
      const response = await axios.get(`https://api.spoonacular.com/mealplanner/generate?apiKey=1ba24d46be384ed295534d112155d855&timeFrame=day&targetCalories=${calories}`);
      setMealData(response.data);
    } catch (error) {
      console.log("error");
    }
  }


  return (
    
    <div className='App'>
      <section className='controls'>
        <input type='number' placeholder='Calories (e.g. 2000)'  onChange={handleChange}/> 
      </section>
      <button onClick={getMealData}>Get daily Meal plan</button>
      {mealData && <MealList mealData={mealData} />}

    </div>
    
  ) 
}

export default App