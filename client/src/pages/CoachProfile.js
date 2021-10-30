import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import UserFoodDiary from "../components/UserFoodDiary";

function CoachProfile() {
  const [userUnderCoach, setUserUnderCoach] = useState([1]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showFoodDiary, setShowFoodDiary] = useState(false);
  const [userFoodDiary, setUserFoodDiary] = useState([]);

  const getUserUnderCoach = async (id) => {
    try {
      setShowFoodDiary(false);
      const response = await fetch(`http://localhost:5000/coach/${id}`);
      const jsonData = await response.json();
      console.log("coach jsondata",jsonData)
      setUserUnderCoach(jsonData);
      return jsonData;
    } catch (err) {
      console.error(err.message);
    }
  }

  const getUserFoodDiary = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/coach/userfooddiary/${id}`);
      const jsonData = await response.json();
      console.log("coach jsondata",jsonData)
      setUserFoodDiary(jsonData);
      return jsonData;
    } catch (err) {
      console.error(err.message);
    }
  }


  useEffect(() => {
    getUserUnderCoach(1);
    console.log("USER UNDER COACH", userUnderCoach)
  }, []); 

  useEffect(() => {
    getUserFoodDiary(1);
    console.log("USER Food DiaryZ", userFoodDiary)
  }, []); 

  const usersCoach = userUnderCoach.map((users) => (
    <h3> {users.first_name} {users.last_name} </h3>
  ));

  
  const userFoods = userFoodDiary.map((foodDiary) => (
    <>
    
    <tr>
      <td>{foodDiary.date_created.substring(0,10)}</td>
      <td>{foodDiary.breakfast}</td>
      <td>{foodDiary.lunch}</td>
      <td>{foodDiary.dinner}</td>
      <td>{foodDiary.snacks}</td>
      </tr>
      </>
 ))



  return (
    <div
      style={{
        display: "flex",
        padding: 0,
        margin: 0,
        paddingTop: "98px"
      }}
    >
      <Sidebar />

      <div className="form_center" style={{ marginLeft: "20%" }}>
      <h1><u> Coach Dashboard </u> </h1> <br/>
      <h2><span name="name">{userUnderCoach[0].alias}</span></h2>
      {userUnderCoach[0] && <>
      <span name="profile-image"><img className="img-coach" src={userUnderCoach[0].imageurl} alt="Coach Picture" /> </span>
      <br/>
          
       
          </> 
}


          <h2>Users assigned to this coach:</h2>
                {usersCoach}
          <button onClick={()=>setShowFoodDiary(!showFoodDiary)}>Show Food Diary</button>
       
          { showFoodDiary && <>
            <Table striped bordered hover>
            <thead className ="table">
          <tr>
      <td>Date</td>
      <td>Breakfast</td>
      <td>Lunch</td>
      <td>Dinner</td>
      <td>Snacks</td>
    </tr>
  
          {userFoods}
          </thead>
      </Table>
          </> } 
         
        </div>
        </div>
       

     
    
  )
}

export default CoachProfile;
