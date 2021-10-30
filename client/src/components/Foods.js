import React, {useState} from 'react';
import FoodNutrients from './FoodNutrients';
import "../styles/foodsearch.css";

const Foods = ({foods}) => {
  const [show, setShow] = useState(false);

  const { description, foodCategory, foodNutrients} = foods;
  return (
    <div className="food">
      <h2>Food Name: {description}</h2>

      <h2>Category: {foodCategory}</h2>
      <button onClick={()=>setShow(!show)} className="search-button">
      Nutrients
      </button>
      {show && <FoodNutrients foodNutrients={foodNutrients}/>}
    </div>
  )
};

export default Foods;
