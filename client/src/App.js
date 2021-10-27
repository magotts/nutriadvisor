import './App.css';
import './Login.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Food_Diary from "./pages/Food_Diary";
import Biometrics from "./pages/Biometrics";
import Food_Search from "./pages/Food_Search";
import Chat from "./components/Chat";
import UserDashboard from "./components/UserDashboard";
import Sidebar from "./components/Sidebar"

import Exercise_Search from "./pages/Exercise_Search";
import RequestCoach from './pages/RequestCoach';

import { authContext } from "./providers/AuthProvider";
import { useContext } from 'react';

function App() {

  const { auth, user, logout } = useContext(authContext);
  return (
    <div className="App">
      <Router>
        <Navbar/>

         {/* When user is logged in, show the sidebar page in UserDashboard */}
        {/* <Sidebar /> 
        <div className="sidebarcontainer"> */}
        <Switch>
        <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/biometrics" exact component={Biometrics} />
          <Route path="/food_diary" exact component={Food_Diary} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/food_search" exact component={Food_Search} />
          <Route path="/exercise_search" exact component={Exercise_Search} />
          <Route path="/requestcoach" exact component={RequestCoach} />
          <Route path="/userdashboard" exact component={UserDashboard} />
        </Switch>
        {/* </div> */}
       
        {auth && <> 
   <Chat /> 
        </>}
    
      </Router>
     
    </div>

  );
}

export default App;


// <Route path="/" exact component={Home} />
// <Route path="/about" exact component={About} />
// <Route path="/biometrics" exact component={Biometrics} />
// <Route path="/food_diary" exact component={Food_Diary} />
// <Route path="/login" exact component={Login} />
// <Route path="/register" exact component={Register} />
// <Route path="/food_search" exact component={Food_Search} />
// <Route path="/exercise_search" exact component={Exercise_Search} />
// <Route path="/requestcoach" exact component={RequestCoach} />
// <Route path="/userdashboard" exact component={UserDashboard} />