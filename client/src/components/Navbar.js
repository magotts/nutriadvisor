import React, { useState } from 'react';
import Logo from "../assets/logo1.png";
import { Link } from "react-router-dom";
import "../components/Navbar.css";


export default function Navbar(props) {  
  
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} alt="logo"/>
        </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/food_diary"> Food Diary </Link>
        <Link to="/about"> About </Link>
        <Link to="/login"> Login </Link>
        <Link to="/register"> Register </Link>
        <Link to="/requestcoach"> RequestCoach </Link>
      </div>
    </div>
    );
}