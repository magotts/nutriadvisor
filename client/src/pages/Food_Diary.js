import React, {useState, useEffect} from "react";
import { Table } from 'react-bootstrap';

import Edit from "../components/EditFood";
import '../pages/food.css';


function Food_Diary() {

  const [foods, setFoods] = useState([]);

  const deleteFood = async (id) => {
    try {
      const deleteFood = await fetch(`http://localhost:3000/food_diary/${id}`, {
        method: "DELETE"
      });
     setFoods(foods.filter(food => food.id !== id));
    }
    catch (err) {
      console.error(err.message)
    }
  }
  const getFood = async () => {
    try {
      const response = await fetch("http://localhost:3000/food_diary");
      const jsonData = await response.json();
      setFoods(jsonData);
    }
    catch (err) {
      console.error(err.message)
    }
  }
  const [breakfast, setBreakfast] = useState("");
  const [lunch, setLunch] = useState("");
  const [dinner, setDinner] = useState("");
  const [snacks, setSnacks] = useState("");

  const onSubmitForm = async (event) => {
    event.preventDefault();
    try {
      const body = { breakfast, lunch, dinner, snacks };
      const response = await fetch("http://localhost:3000/food_diary", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      })
      console.log(response)
      window.location ="/food_diary";
    }
    catch (err) {
      console.error(err.message)
    }
  }


  useEffect(() => {
    getFood(); 
  }, []);


  return (
    <>
    <div>
      <div >
        <h1>Food Diary</h1>
        <form onSubmit={onSubmitForm}>
          Breakfast:<input class="breakfast" type="text" value={breakfast} onChange={ event => setBreakfast(event.target.value)}/><br/>
          Lunch:<input type="text" value={lunch} onChange={ event => setLunch(event.target.value)}/><br/>
          Dinner:<input type="text" value={dinner} onChange={ event => setDinner(event.target.value)}/><br/>
          Snacks:<input type="text" value={snacks} onChange={ event => setSnacks(event.target.value)} /><br/>
            <button>Add</button>
            </form>
       <br/>
        
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>Date</th>
      <th>Breakfast</th>
      <th>Lunch</th>
      <th>Dinner</th>
      <th>Snacks</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
  {foods.map(food => (
     <tr key={food.id}>
     <td>{food.date_created}</td>
     <td>{food.breakfast}</td>
     <td>{food.lunch}</td>
     <td>{food.dinner}</td>
     <td>{food.snacks}</td>
     <td><Edit food={food}/></td>
     <td><button className="btn btn-danger" onClick={()=> deleteFood(food.id)}>Delete</button></td>
   </tr>
  ))}
  </tbody>
</Table>
      </div>
    </div>
    </>
  );
}

export default Food_Diary;