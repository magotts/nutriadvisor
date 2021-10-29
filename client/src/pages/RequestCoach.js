import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/requestcoach.css";
import Sidebar from "../components/Sidebar";
import CoachRequested from '../components/CoachRequested';


function RequestCoach() {
  const [goalId, setGoalId] = useState(0);
  const [goals, setGoals] = useState([]);
  const [coaches, setCoaches] = useState([]);
  const [selectedCoach, setSelectedCoach] = useState(null);
  const [coachRequested, setCoachRequested] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:5000/requestcoach`).then((res) => {
      setGoals(res.data);
    });
  }, []);

  useEffect(() => {
    setCoachRequested(false);
    axios
      .get(`http://localhost:5000/requestcoach/coach/${goalId}`)
      .then((res) => {
        console.log("look", res.data);
        setCoaches(res.data);
        if (res.data.length >0 ) {
          setSelectedCoach(res.data[0].id);
        }
      });
  }, [goalId]);


  const request = (event) => {
    setCoachRequested(false);
    const url = "http://localhost:5000/requestcoach";
    const params = { 
      coachId: theCoach.id,
      goalId: goalId
    };
    axios.post(url, params) 
    .then(res =>  {
      console.log("request coach", res);
      setCoachRequested(true);
     
    })
    .catch(function (error) {
      console.log(error);
    });
  }



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

  const selectCoach = (event) => {
    setSelectedCoach(event.target.value);
  };

  const theCoach = coaches.find((c) => c.id === selectedCoach);

  return (
    <>
      <div
        style={{
          display: "flex",
          padding: 0,
          margin: 0,
        }}
      >
        <Sidebar />
        <main className="container">
          <section className="select">
            <br />
            <strong>
              <h4>Choose your goal:</h4>
            </strong>
            <select
              value={goalId}
              onChange={(event) => setGoalId(event.target.value)}
            >
              {/* dropdown will have the goaltypes (select * from goaltypes)  */}
              <option selected value="choose" >
                Please choose below
              </option>
              {goalOptions}
            </select>
            <br />
          </section>
 
          {theCoach && (
            <section className="select">
         
              <h4>{theCoach.alias}</h4>
                <center>
                  {theCoach.id && (
                  <div>
                    <img className="img-coach" src={theCoach.imageurl} alt="Coaches"/>
                  </div>
                  )}
                  <br/>
                     <button onClick={request}>Request for this Coach</button>
                </center>
            </section>
          )}
     
          { coachRequested && <CoachRequested name={theCoach.alias}/> } 

         </main>
      </div>
    </>
  );
}
export default RequestCoach;

// search the coaches table for all coaches whose goals match the goals of a specified user's id
