import React, {useState, useEffect} from "react";
import "../App.css";
import Sidebar from "../components/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  "../styles/userdashboard.css";


export default function UserDashboard() {  

  return (
  <>
  <main style={{display: "flex"}}>
    <section>
      <Sidebar />
    </section>
    <section className="right">
      <h2>Welcome to the User Dashboard</h2>
      </section>
    </main>
 </>
    );
}