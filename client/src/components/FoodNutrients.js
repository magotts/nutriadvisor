import React from 'react';
import { Table } from 'react-bootstrap';

const FoodNutrients = ({foodNutrients}) => {
  return foodNutrients.map(nutrient => {
    if (nutrient.nutrientName === 'Protein' || nutrient.nutrientName === 'Energy' || nutrient.nutrientName === 'Carbohydrate, by difference' || nutrient.nutrientName === 'Sugars, total including NLEA' || nutrient.nutrientName === 'Sodium, Na' || nutrient.nutrientName === 'Fiber, total dietary' || nutrient.nutrientName === 'Total lipid (fat)' || nutrient.nutrientName === 'Cholesterol') {
      return(
        <table class="table">
        <thead>
          <tr>
            <th scope="col">Nutrient Name</th>
            <th scope="col">NUtrient Value</th>
          </tr>
        </thead>
          <tbody>
            <td>
              {nutrient.nutrientName}
            </td>
            <td>
              {nutrient.value}
            </td>
          </tbody>
        </table>
        )
      }
    }
  )};

export default FoodNutrients;

// Object.keys(photo).map((key, value)=><img src={photo[key]}/>)
