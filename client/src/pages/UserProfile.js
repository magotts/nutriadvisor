import React, {useState, useEffect} from "react";
import { Table } from 'react-bootstrap';
import Sidebar from "../components/Sidebar";


function UserProfile() {
  const [userInfo, setUserInfo] = useState([1]);
  const [userGoal, setUserGoal] = useState([1]);

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

  const getGoalOfUser= async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/biometrics/goal/${id}`);
      const jsonData = await response.json();
      console.log("json", jsonData)
      setUserGoal(jsonData);
      return jsonData;
    }
    catch (err) {
      console.error(err.message)
    }
  }


  useEffect(() => {
    getUserInfo(1);
    console.log("info", userInfo)
  }, []);



  useEffect(() => {
    getGoalOfUser(1);
  }, []);
  // useEffect(() => {
  //   axios.get(`http://localhost:5000/biometrics/1`).then((res) => {
  //     console.log("user profile", res.data)
  //     setUserInfo(res.data);
   
  //   });
  // }, []);


  return (
    <div style={{
      display: "flex",
      padding: 0,
      margin: 0
    }}>

      <Sidebar />

      <div className="form_center">
      <h2> User Information  </h2>
      {userInfo[0] && <>
      <span name="profile-image"><img className="img-coach" src={userInfo[0].profile_image} /> </span>
      <br/>
          <Table striped bordered hover>
            <thead>
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
          {userGoal[0] && <>
          <tr>
            <th>Goal:</th>
            <td><span name="goal-description">{userGoal[0].description}</span></td>
          </tr>
          <tr>
            <th>Assigned Coach:</th>
            <td><span name="coach-name">{userGoal[0].alias}</span></td>
          </tr>
          </>
          }
          </thead>
         
          </Table>
          </>
}
        </div>
        </div>
       

     
    
  )
}

export default UserProfile;