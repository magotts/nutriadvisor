import React from 'react'

const Exercises = ({exercises}) => {
  const{name, duration_min, nf_calories} = exercises;
  
  return (
    <div>
      <h2>Exercise Type: {name}</h2>
      <h2>Exercise Duration: {duration_min}</h2>
      <h2>Calories Burned: {nf_calories}</h2>
    </div>
  )
}

export default Exercises;
