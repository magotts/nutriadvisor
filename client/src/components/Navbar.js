import React, { useState } from 'react';
import Logo from "../assets/logo1.png";
import { Link } from "react-router-dom";
import "../components/Navbar.css";


export default function Navbar(props) {
  // get auth and user from useContext 
  const auth = props.auth;
  return (
    <div className="navbar">
      <div className="leftSide">
        <img className="nav-img" src={Logo} alt="logo"/>
        <Link to="/about"> About </Link>
        </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/food_diary"> Food Diary </Link>
        <Link to="/biometrics"> Biometrics </Link>
        <Link to="/food_search"> Food Search </Link>
        <Link to="/exercise_search"> Exercise Search </Link>
        {!auth && <Link to="/login"> Login </Link>}
        {auth && <Link to="/logout"> Logout </Link>}
        <Link to="/register"> Register </Link>
        <Link to="/requestcoach"> RequestCoach </Link>
      </div>
    </div>
    );
}