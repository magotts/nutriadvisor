import React from "react";
import "../styles/foodsearch.css";

const FoodNutrients = ({ foodNutrients }) => {
  const nutrientsMap = function () {
    return foodNutrients.map((nutrient) => {
      if (
        nutrient.nutrientName === "Protein" ||
        nutrient.nutrientName === "Energy" ||
        nutrient.nutrientName === "Carbohydrate, by difference" ||
        nutrient.nutrientName === "Sugars, total including NLEA" ||
        nutrient.nutrientName === "Sodium, Na" ||
        nutrient.nutrientName === "Fiber, total dietary" ||
        nutrient.nutrientName === "Total lipid (fat)" ||
        nutrient.nutrientName === "Cholesterol"
      ) {
        return (
          <tr>
            <td>{nutrient.nutrientName}</td>
            <td>{nutrient.value}</td>
            <td>{nutrient.unitName}</td>
          </tr>
        );
      }
    });
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Nutrient name</th>
          <th scope="col">Value per serving</th>
          <th scope="col">Unit</th>
        </tr>
      </thead>
      <tbody>{nutrientsMap()}</tbody>
    </table>
  );
};

export default FoodNutrients;

// Object.keys(photo).map((key, value)=><img src={photo[key]}/>)
