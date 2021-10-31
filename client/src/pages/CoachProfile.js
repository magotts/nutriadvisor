import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Sidebar from "../components/Sidebar";

function CoachProfile() {
  const [userUnderCoach, setUserUnderCoach] = useState([1]);
  const [userInfo, setUserInfo] = useState([1]);
  const [showFoodDiary, setShowFoodDiary] = useState(false);
  const [userFoodDiary, setUserFoodDiary] = useState([]);
  const [showUserProfile, setShowUserProfile] = useState(false);

  const getUserInfo = async (id) => {
    try {
      setShowUserProfile(false);
      const response = await fetch(`http://localhost:5000/biometrics/${id}`);
      const jsonData = await response.json();
      console.log("json", jsonData);
      setUserInfo(jsonData);
      return jsonData;
    } catch (err) {
      console.error(err.message);
    }
  }

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
    getUserInfo(1);
  }, []);

  useEffect(() => {
    getUserUnderCoach(1);
  }, []); 

  useEffect(() => {
    getUserFoodDiary(1);
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
     
      {userUnderCoach[0] && <>
        <h2><span name="name">{userUnderCoach[0].alias}</span></h2>
      <span name="profile-image"><img className="img-coach" src={userUnderCoach[0].imageurl} alt="Coach" /> </span>
      <br/>
          </> 
}
          <h2>Users assigned to this coach:</h2>
          <table>
            <tr>
                <td>{usersCoach}</td>
                <td><button onClick={()=>setShowUserProfile(!showUserProfile)}>User Profile</button></td>
                <td><button onClick={()=>setShowFoodDiary(!showFoodDiary)}>Food Diary</button></td>
          </tr>
          </table>

          {showUserProfile && userInfo[0] && <>
      <img className="img-coach" src={userInfo[0].profile_image} alt="User" /> 
      
          <Table striped bordered hover>
            <thead className ="table"><br/>
            <tr>
            <th>Name:</th>
            <td><span name="name">{userInfo[0].first_name} {userInfo[0].last_name}</span></td>
          </tr>
          <tr>
            <th>Gender:</th>
            <td><span name="gender">{userInfo[0].gender}</span></td>
          </tr>
          <tr>
            <th>Age:</th>
            <td><span name="age">{userInfo[0].age}</span></td>
          </tr>
          <tr>
            <th>Height (cm):</th>
            <td><span name="height">{userInfo[0].height}</span></td>
          </tr>
          </thead>
         
         </Table>
         </>
}
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
