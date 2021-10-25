import React, {useState} from 'react';
import FoodNutrients from './FoodNutrients';

const Foods = ({foods}) => {
  const [show, setShow] = useState(false);

  const { description, foodCategory, foodNutrients} = foods;
  return (
    <div>
      <h2>Food Name: {description}</h2>

      <h2>Category: {foodCategory}</h2>
      <button onClick={()=>setShow(!show)}>
      Nutrients
      </button>
      {show && <FoodNutrients foodNutrients={foodNutrients}/>}
    </div>
  )
};

export default Foods;
