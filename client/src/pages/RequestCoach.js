import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/requestcoach.css";
import Sidebar from "../components/Sidebar";


function RequestCoach() {
  // const [userInfo, setUserInfo] = useState([]);
  const [goalId, setGoalId] = useState(0);
  const [goals, setGoals] = useState([]);
  const [coaches, setCoaches] = useState([]);
  const [coachName, setCoachName] = useState("");
  const [assignedCoach, setAssignedCoach] = useState("");
  
  const getGoals = async () => {
    try {
      const response = await fetch("http://localhost:5000/requestcoach");
      const jsonData = await response.json();
      setGoals(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  //when user clicks Show Coaches button, show all coaches under the goal type.
  const onShowCoaches = async (event) => {
    event.preventDefault();
    try {
      // const goaltype = show from dropdown value
      // user_id is always 1
      // coach_id = 1
      // goaltype_id = 1 get from dropdown value
      // const body = { goaltype, user_id, coach_id, goaltype_id };
      // const response = await fetch("http://localhost:5000/requestcoach", {
      //   method: "POST",
      //   headers: {"Content-Type": "application/json"},
      //   // body: JSON.stringify(body)
      // })
      // console.log(response)
      // window.location ="/requestcoach";
    } catch (err) {
      console.error(err.message);
    }
  };

  //   -- INSERT INTO goals(user_id, coach_id, goaltype_id)
  // -- VALUES (1, 1, 1);
  const onSubmitForm = async (event) => {
    event.preventDefault();
    try {
      // const goaltype = show from dropdown value
      // user_id is always 1
      // coach_id = 1
      // goaltype_id = 1 get from dropdown value
      // const body = { goaltype, user_id, coach_id, goaltype_id };
      // const response = await fetch("http://localhost:5000/requestcoach", {
      //   method: "POST",
      //   headers: {"Content-Type": "application/json"},
      //   // body: JSON.stringify(body)
      // })
      // console.log(response)
      // window.location ="/requestcoach";
    } catch (err) {
      console.error(err.message);
    }
  };

  const assignCoach = () => { 
      setAssignedCoach(coachName);
  }

  useEffect(() => {
    axios.get(`http://localhost:5000/requestcoach`).then((res) => {
      setGoals(res.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/requestcoach/coach/${goalId}`)
      .then((res) => {
        console.log("look", res.data)
        setCoaches(res.data);
      });
  }, [goalId]);

  const coachOptions = coaches.map((coach) => (
    <option key={coach.id} value={coach.id}>
      {coach.alias}
    </option>
  ));

  const goalOptions = goals.map((goal) => (
    <option key={goal.id} value={goal.id}>
      {goal.description}
    </option>
  ));

  // const getCoachById() {
  //   setCoaches
  // } 
  // const coach = getCoachById(assignedCoach);

  
  return (
    <>
    <div style={{
      display: "flex",
      padding: 0,
      margin: 0
    }}>
      <Sidebar />
      <main className="container">
        <section className="select">
          <form className="form_center">
            <br />
            <strong>
              <h4>Choose your GOAL:</h4>
            </strong>
            <select
              value={goalId}
              onChange={(event) => setGoalId(event.target.value)}
            >
              {/* dropdown will have the goaltypes (select * from goaltypes)  */}
              <option selected value="choose">
                Please choose below
              </option>
              {goalOptions}
            </select>
            <br />

          </form>
        </section>
        {goalId > 0 &&

        <section className="select">
                <br />
                <h4>Select a Coach:</h4>
                <br />
         
            <select
              value={coachName}
              onChange={(event) => {
                let coach = coaches.find(coach => coach.id == event.target.value)
                if (coach) {coach = coach.alias} else {coach = ''}
                setCoachName(coach)
              }}
            >
              <option selected value="choose">
                Please choose below
              </option>
              {coachOptions}
            </select>
            <br />
            {/* <button onClick={assignCoach}>Select this Coach</button> */}
            <br />
       
        </section>
}
      
     
      <br />
      {coachName.length > 0 && <section  className="select">

  <h1>Congrats!</h1>
  <br />
  <h4>You are assigned to</h4> 
  <h4>{coachName}</h4>
  <center>{coachName === "Coach Ryan" && <img className="img-coach" src="https://static.onecms.io/wp-content/uploads/sites/14/2015/11/12/111215-ryan-reynolds-2-2000.jpg" />}
  {coachName === "Coach Blake" && <img className="img-coach" src="https://pbs.twimg.com/media/E__E6EMVQAcEF15.jpg" />}
  {coachName === "Coach Mandy" && <img className="img-coach" src="https://media.allure.com/photos/5cbddb761e1ec0d66045523e/3:4/w_1263,h_1684,c_limit/Mandy%20Moore.jpg" />}
  {coachName === "Coach Blaire" && <img className="img-coach" src="https://media1.popsugar-assets.com/files/thumbor/foVjvLNLLafbcba7eL3fXaQHlp8/0x63:2087x2150/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/02/14/821/n/1922398/d53ac18b5e46ea2e06d0a9.40615575_/i/Leighton-Meester.jpg" />}</center>
  
</section>

}
</main>
</div>
    </>
  );
}
export default RequestCoach;

// search the coaches table for all coaches whose goals match the goals of a specified user's id
