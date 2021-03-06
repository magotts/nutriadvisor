import "./App.css";
import "./Login.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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

import Exercise_Search from "./pages/Exercise_Search";
import RequestCoach from "./pages/RequestCoach";
import UserProfile from "./pages/UserProfile";
import CoachProfile from "./pages/CoachProfile";

import { authContext } from "./providers/AuthProvider";
import { useContext } from "react";

function App() {
  const { auth, user, logout } = useContext(authContext);
  return (
    <div className="outer-container">
      <Router>
        <Navbar />
        <main>
          <section>
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
              <Route path="/userprofile" exact component={UserProfile} />
              <Route path="/coachprofile" exact component={CoachProfile} />
            </Switch>
          </section>
        </main>
        {auth && <Chat />}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
