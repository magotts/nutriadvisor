import React from "react";
import "../styles/exercisesearch.css";

const Exercises = ({ exercises }) => {
  const { name, duration_min, nf_calories } = exercises;

  return (
    <div className="excercisetype">
      <h4>Exercise Type and Duration: {name}</h4>
      <h4>Exercise Duration: {duration_min} minutes</h4>
      <h4>Calories Burned: {nf_calories} calories</h4>
    </div>
  );
};

export default Exercises;
