import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/requestcoach.css";

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
  console.log("coach options:", coachOptions);

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
      <h1>Request a Coach</h1>
      <main className="container">
        <section>
          <form className="form_center" onSubmit={onShowCoaches}>
            <br />
            <strong>
              <h3>Choose your GOAL:</h3>
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

        <section>
                <br />
                <h2>Select this coach:</h2>
                <br />
         
            <select
              value={coachName}
              onChange={(event) => {
                console.log(coaches, event.target.value)
                let coach = coaches.find(coach => coach.id == event.target.value)
                if (coach) {coach = coach.alias} else {coach = ''}
                setCoachName(coach)
              }}
            >
              {/* dropdown will have the goaltypes (select * from goaltypes)  */}
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
       {coachName.length > 0 && <section>
  
        Congrats!
        <br />
        You are assigned to {coachName}
      </section> 
}
      </main>
    </>
  );
}
export default RequestCoach;

// search the coaches table for all coaches whose goals match the goals of a specified user's id
