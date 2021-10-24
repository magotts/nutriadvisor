import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Table } from 'react-bootstrap';

// import Edit from "../components/EditFood";


function Weight() {

  const [genders, setGenders] = useState([]);
  const [heights, setHeights] = useState([]);
  const [weights, setWeights] = useState([]);
  const [calories, setCalories] = useState([]);


  const getWeight = async () => {
    try {
      const response = await fetch("http://localhost:3001/weight");
      const jsonData = await response.json();
      setWeights(jsonData);
    }
    catch (err) {
      console.error(err.message)
    }
  }


  const onSubmitForm = async (event) => {
    event.preventDefault();
    try {
      const body = { weights, calories };
      const response = await fetch("http://localhost:3001/weight", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      })
      console.log(response)
      window.location ="/weight";

    }
    catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getWeight(); 
  }, []);

  return (
    <>
    <div>
      <div>
        <h1>Biometrics History</h1><br/>
   
        <form onSubmit={onSubmitForm}>
          Enter your Weight:<input type="text" value={weights} onChange={ event => setWeights(event.target.value)}/><br/>
          Enter your Daily Calorie Intake:<input type="text" value={calories} onChange={ event => setCalories(event.target.value)}/><br/>
            <button>Add</button>
            </form>
       <br />
    
      
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>Date</th>
      <th>Weight</th>
      <th>Calories Per Day</th>

     
    </tr>
  </thead>
  <tbody>
  {weights.map(weight => (
     <tr key={weight.id}>
     <td>{weight.date_created}</td>
     <td>{weight.weight}</td>
     <td>{weight.calories_per_day}</td>
   </tr>
  ))}
  </tbody>
</Table>
      </div>
    </div>
    </>
  );
}

export default Weight;