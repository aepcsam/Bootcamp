import React,{useState,useEffect} from 'react';

const Meal = ({meal}) => {
const [imageurl, setImageUrl] = useState("");

useEffect(()=>{
    fetch(
        `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=1ba24d46be384ed295534d112155d855&includeNutrition=false`
        
    )
    .then((response)=>
        response.json())
    
    .then((data)=>{
        setImageUrl(data.image);
        // console.log(data)
    })
    .catch(()=>{
        console.log("error");
    });
},[meal.id]);


return (
      <article>
          <h1>{meal.title}</h1>
          <img src={imageurl} alt='recipe' />
          <ul className='instructions'>
              <li>Preparation time :{meal.readyInMinutes} minutes</li>
              <li>Number of Servings : {meal.servings}</li>
          </ul>
          <a href={meal.sourceUrl}>Go to Receipe</a>

      </article>
  )
};

export default Meal;