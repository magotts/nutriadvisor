import React, {useState, useEffect} from "react";
import "../App.css";
import Sidebar from "../components/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Food_Diary from "../pages/Food_Diary";
import Biometrics from "../pages/Biometrics";
import Food_Search from "../pages/Food_Search";
import Chat from "../components/Chat";

import Exercise_Search from "../pages/Exercise_Search";


export default function UserDashboard() {  
  const [userInfo, setUserInfo] = useState([]);

  const getUserInfo = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/userdashboard/${id}`);
      const jsonData = await response.json();
      console.log("json", jsonData)
      setUserInfo(jsonData);
      return jsonData;
    }
    catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    const info = getUserInfo(1); 
    console.log("info", userInfo)
  }, []);

  return (
    <>
    {/* <h1>User Dashboard</h1>
    Name: <br/>
    Gender: <br/>
    Age: <br/>
    Height: <br/>
    Weight: <br/> 

    <ul className="userdashboard-ul">
      <li className="userdashboard-li"><a className="userdashboard-li a" href="/">Home</a></li>
      <li className="userdashboard-li"><a className="userdashboard-li a" href="/">News</a></li>
    </ul> */}


         {/* When user is logged in, show the sidebar page in UserDashboard */}

        <div className="sidebarcontainer">
      
        </div>
    
 
    </>
    );
}