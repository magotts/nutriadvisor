import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Food_Diary from "./pages/Food_Diary";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Biometrics from "./pages/Biometrics";
import Food_Search from "./pages/Food_Search";
import UserDashboard from "./components/UserDashboard";
import Exercise_Search from "./pages/Exercise_Search";


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Dashboard}/>
                <Route path="/" exact component={Home} />
                <Route path="/userdashboard" exact component={UserDashboard} />
                <Route path="/biometrics" exact component={Biometrics} />
                <Route path="/food_diary" exact component={Food_Diary} />
                <Route path="/food_search" exact component={Food_Search} />
                <Route path="/exercise_search" exact component={Exercise_Search} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;