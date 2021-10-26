import React, {useState, useEffect} from "react";
import { Table } from 'react-bootstrap';

import Edit from "../components/EditBiometrics";



function Biometrics() {
  const [userInfo, setUserInfo] = useState([]);

  const [biometrics, setBiometrics] = useState([]);
  // const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  // const [calories, setCalories] = useState("");


  const deleteBiometrics = async (id) => {
    try {
      const deleteBiometrics = await fetch(`http://localhost:5000/biometrics/${id}`, {
        method: "DELETE"
      });
     setBiometrics(biometrics.filter(biometric => biometric.id !== id));
    }
    catch (err) {
      console.error(err.message)
    }
  }
  const getBiometrics= async () => {
    try {
      const response = await fetch("http://localhost:5000/biometrics");
      const jsonData = await response.json();
      setBiometrics(jsonData);
    }
    catch (err) {
      console.error(err.message)
    }
  }

  const getUserInfo= async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/biometrics/${id}`);
      const jsonData = await response.json();
      console.log("json", jsonData)
      setUserInfo(jsonData);
      return jsonData;
    }
    catch (err) {
      console.error(err.message)
    }
  }

  const [choice, setChoice] = useState([]);

  const onSubmitForm = async (event) => {
    event.preventDefault();
    try {
      const first_name= userInfo[0].first_name;
      const age = userInfo[0].age;
      const height = userInfo[0].height;
      const gender = userInfo[0].gender;
      const calories_per_day = Math.round(calculateCalories(weight, gender, height, age, choice)); 
      const body = { weight, first_name, age, height, gender, calories_per_day};

      const response = await fetch("http://localhost:5000/biometrics", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      })
      console.log(response)
      window.location ="/biometrics";

    }
    catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getBiometrics(); 
    const info = getUserInfo(1); 
    console.log("info", userInfo)
  }, []);

  const calculateCalories = (weight, gender, height, age, choice) => {
    let bmr = 0;
    let calorie = 0;
    if (gender === "male") {
      bmr = 66 + (6.3 * weight) + (12.9 * height) - (6.8 * age);
    }

    if (gender === "female") {
      bmr = 655 + (4.3 * weight) + (4.7 * height) - (4.7 * age);
    }

    if (choice === "sedentary") {
      calorie = bmr * 1.2;
    }
    if (choice === "lightlyactive") {
      calorie = bmr * 1.375;
    }
    if (choice === "moderatelyactive") {
      calorie = bmr * 1.55;
    }
    if (choice === "veryactive") {
      calorie = bmr * 1.725;
    }
    if (choice === "extraactive") {
      calorie = bmr * 1.9;
    }

    return calorie;
  }

  return (
    <>
    <div>
      <div className="food_diary">
        <h1>Biometrics History</h1><br/>
        <br/>
       
        <form onSubmit={onSubmitForm}>
{ 
userInfo.length > 0 && 
<>
<h2> User Information for {userInfo[0].first_name} {userInfo[0].last_name}</h2>
    <Table striped bordered hover>
      <thead>
  
    <tr>
      <th>Gender:</th>
      <td><span name="gender">{userInfo[0].gender}</span></td>
    </tr>
    <tr>
      <th>Age:</th>
      <td><span name="age">{userInfo[0].age}</span></td>
    </tr>
    <tr>
      <th>Height (inch):</th>
      <td><span name="height">{userInfo[0].height}</span></td>
    </tr>
    </thead>
   
        </Table>
        </>
}
<br/>
          <h3>Get your Daily Calories</h3>
          <strong>Enter your Weight(lbs):</strong><input type="text" value={weight} onChange={ event => setWeight(event.target.value)}/><br/><br/>
     
          <strong>How active are you?</strong> <br/>
          <select value={choice} onChange={(event) => {
            const selectedState = event.target.value;
            setChoice(selectedState);
          }}>
            <option selected value="choose">Please choose below</option>
            <option value="sedentary">Sedentary (little or no exercise)</option>
            <option value="lightlyactive">Lightly Active (light exercise/sports 1-3 days/week)</option>
            <option value="moderatelyactive">Moderately Active (moderate exercise/sports 3-5 days/week)</option>
            <option value="veryactive">Very Active (hard exercise/sports 6-7 days a week)</option>
            <option value="extraactive">Extra Active (very hard exercise/sports & physical job or 2x training)</option>
          </select><br/>
            <button>Add</button><br/>
   
            </form> 
       <br />
    
      
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>Date</th>
      <th>Weight(lbs)</th>
      <th>Calories Per Day</th>

     
    </tr>
  </thead>
  <tbody>
  {biometrics.map(weight => (
     <tr key={weight.id}>
     <td>{weight.date_created}</td>
     <td>{weight.weight}</td>
     <td>{weight.calories_per_day}</td>
     <td><button className="btn btn-danger" onClick={()=> deleteBiometrics(weight.id)}>Delete</button></td>

   </tr>
  ))}
  </tbody>
</Table>
      </div>
    </div>
    </>
  );
}


// sedentary (little or no exercise) : Calorie-Calculation = BMR x 1.2
// lightly active (light exercise/sports 1-3 days/week) : Calorie-Calculation = BMR x 1.375
// moderately active (moderate exercise/sports 3-5 days/week) : Calorie-Calculation = BMR x 1.55
// very active (hard exercise/sports 6-7 days a week) : Calorie-Calculation = BMR x 1.725
// extra active (very hard exercise/sports & physical job or 2x training) : Calorie-Calculation = BMR x 1.9

export default Biometrics;

