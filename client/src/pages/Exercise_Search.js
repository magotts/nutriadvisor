import React, { useState } from "react";
import axios from "axios";
import Exercises from "../components/ExerciseInfo";
import Alert from "../components/ExerciseAlert";
import Sidebar from "../components/Sidebar";



const Exercise_Search = () => {
  const [query, setQuery] = useState("");
  const [gender, setGender] = useState("");
  const [weight_kg, setWeightKg] = useState("");
  const [height_cm, setHeightCm] = useState("");
  const [age, setAge] = useState("");
  const [exercises, setExercises] = useState([]);
  const [alert, setAlert] = useState("");

  const getExercise = () => {
    if (
      query !== "" &&
      gender !== "" &&
      weight_kg !== "" &&
      height_cm !== "" &&
      age !== ""
    ) {
      const headers = {
        "x-app-id": "5ea2186d",
        "x-app-key": "29aedbe15bbf7105ff8daa4a9b94b2b5",
        "Content-Type": "application/json",
      };
      const data = {
        query: `${query}`,
        gender: `${gender}`,
        weight_kg: `${weight_kg}`,
        height_cm: `${height_cm}`,
        age: `${age}`,
      };
      const url = `https://trackapi.nutritionix.com/v2/natural/exercise`;
      axios
        .post(url, data, { headers })
        .then((result) => {
          console.log(result.data);
          setExercises(result.data.exercises);
          setQuery("");
          setGender("");
          setWeightKg("");
          setHeightCm("");
          setAge("");
          setAlert("");
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      setAlert("Please complete the form.");
    }
  };

  const onChange = (event, setState) => {
    setState(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    getExercise();
  };

  return (
    <div
      style={{
        display: "flex",
        padding: 0,
        margin: 0,
        paddingTop: "98px"
      }}
    >
      <Sidebar />
      <div className="form_center" style={{ marginLeft: "20%" }}>
        <h1>Exercise Search</h1>
        <form onSubmit={onSubmit}>
          {alert !== "" && <Alert alert={alert} />}
          <div>
            <input
              type="text"
              value={query}
              placeholder="Exercise Type and Duration"
              onChange={(event) => onChange(event, setQuery)}
            />
          </div>
          <div>
            <input
              type="text"
              value={gender}
              placeholder="Gender"
              onChange={(event) => onChange(event, setGender)}
            />
          </div>
          <div>
            <input
              type="text"
              value={weight_kg}
              placeholder="Weight (kg)"
              onChange={(event) => onChange(event, setWeightKg)}
            />
          </div>
          <div>
            <input
              type="text"
              value={height_cm}
              placeholder="Height (cm)"
              onChange={(event) => onChange(event, setHeightCm)}
            />
          </div>
          <div>
            <input
              type="text"
              value={age}
              placeholder="Age"
              onChange={(event) => onChange(event, setAge)}
            />
          </div>
          <input type="submit" value="Search Exercise" />
        </form>
        <div>
          {exercises !== [] &&
            exercises.map((exercises, i) => (
              <Exercises key={i} exercises={exercises} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Exercise_Search;

{
  /* <h2 key={i} >{exercises['name']}</h2> */
}
