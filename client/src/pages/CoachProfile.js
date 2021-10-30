import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import UserFoodDiary from "../components/UserFoodDiary";

function CoachProfile() {
  // const [userUnderCoach, setuserUnderCoach] = useState([1]);
  const [userUnderCoach, setUserUnderCoach] = useState([1]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showFoodDiary, setShowFoodDiary] = useState(false);


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

  useEffect(() => {
    getUserUnderCoach(1);
    console.log("USER UNDER COACH", userUnderCoach)
  }, []); 

  const usersCoach = userUnderCoach.map((users) => (
    <h3> {users.first_name} {users.last_name} </h3>
  ));

  

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
      <h1><u> Coach Information </u> </h1>
      {userUnderCoach[0] && <>
      <span name="profile-image"><img className="img-coach" src={userUnderCoach[0].imageurl} /> </span>
      <br/>
          <Table striped bordered hover>
            <thead className ="table"><br/>
            <tr>
            <th>Coach Name:</th>
            <td><span name="name">{userUnderCoach[0].alias}</span></td>
          </tr>
          </thead>
          {userUnderCoach[0].first_name} {userUnderCoach[0].last_name}
         </Table>
          </> 
}


          <h2>Users assigned to this coach:</h2>
                {usersCoach}
          <button onClick={()=>setShowFoodDiary(!showFoodDiary)}>Show Food Diary</button>
          { showFoodDiary && <UserFoodDiary user={} /> } 
        </div>
        </div>
       

     
    
  )
}

export default CoachProfile;
