import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Food_Diary from "./pages/Food_Diary";
import Weight from "./pages/Weight";

function App() {

  
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/weight" exact component={Weight} />
          <Route path="/food_diary" exact component={Food_Diary} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
        <Footer />
      </Router>
    </div>

  );
}

export default App;
