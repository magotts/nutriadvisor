import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Sidebar from "../components/Sidebar";

function Biometrics() {
  const [userInfo, setUserInfo] = useState([]);

  const [biometrics, setBiometrics] = useState([]);
  const [weight, setWeight] = useState("");

  const deleteBiometrics = async (id) => {
    try {
      const deleteBiometrics = await fetch(
        `http://localhost:5000/biometrics/${id}`,
        {
          method: "DELETE",
        }
      );
      setBiometrics(biometrics.filter((biometric) => biometric.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };
  const getBiometrics = async () => {
    try {
      const response = await fetch("http://localhost:5000/biometrics");
      const jsonData = await response.json();
      setBiometrics(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getUserInfo = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/biometrics/${id}`);
      const jsonData = await response.json();
      setUserInfo(jsonData);
      return jsonData;
    } catch (err) {
      console.error(err.message);
    }
  };

  const [choice, setChoice] = useState([]);

  const onSubmitForm = async (event) => {
    event.preventDefault();
    try {
      const first_name = userInfo[0].first_name;
      const age = userInfo[0].age;
      const height = userInfo[0].height;
      const gender = userInfo[0].gender;
      const calories_per_day = Math.round(
        calculateCalories(weight, gender, height, age, choice)
      );
      const body = {
        weight,
        first_name,
        age,
        height,
        gender,
        calories_per_day,
      };

      const response = await fetch("http://localhost:5000/biometrics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/biometrics";
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getBiometrics();
    getUserInfo(1);
  }, []);

  const calculateCalories = (weight, gender, height, age, choice) => {
    let bmr = 0;
    let calorie = 0;

    if (gender === "Male") {
      bmr = 66.5 + 13.75 * weight + 5.003 * height - 6.755 * age;
    }

    if (gender === "Female") {
      bmr = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;
    }

    if (choice === "sedentary") {
      calorie = bmr * 1.2;
    }
    if (choice === "lightlyactive") {
      calorie = bmr * 1.375;
    }
    if (choice === "moderatelyactive") {
      calorie = bmr * 1.55;
    }
    if (choice === "veryactive") {
      calorie = bmr * 1.725;
    }
    if (choice === "extraactive") {
      calorie = bmr * 1.9;
    }

    return calorie;
  };

  return (
    <div
      style={{
        display: "flex",
        padding: 0,
        margin: 0,
        paddingTop: "98px",
      }}
    >
      <Sidebar />
      <div
        className="form_center"
        style={{ color: "cadetblue", marginLeft: "20%" }}
      >
        <form onSubmit={onSubmitForm}>
          <span style={{ display: "none" }}>
            {userInfo.length > 0 && (
              <>
                <h2>
                  {" "}
                  User Information for {userInfo[0].first_name}{" "}
                  {userInfo[0].last_name}
                </h2>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Gender:</th>
                      <td>
                        <span name="gender">{userInfo[0].gender}</span>
                      </td>
                    </tr>
                    <tr>
                      <th>Age:</th>
                      <td>
                        <span name="age">{userInfo[0].age}</span>
                      </td>
                    </tr>
                    <tr>
                      <th>Height (cm):</th>
                      <td>
                        <span name="height">{userInfo[0].height}</span>
                      </td>
                    </tr>
                  </thead>
                </Table>
              </>
            )}
          </span>
          <br />
          <center>
            <h1 style={{color: "cadetblue"}}>Get your Daily Calories</h1><br/>
            <strong>Enter your Weight(kg):</strong>
            <br />
            <input
              className="search-form"
              type="text"
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
            />
            <strong>How active are you?</strong> <br />
            <select
              className="goal-dropdown"
              value={choice}
              onChange={(event) => {
                const selectedState = event.target.value;
                setChoice(selectedState);
              }}
            >
              <option selected value="choose">
                Please choose below
              </option>
              <option value="sedentary">
                Sedentary (little or no exercise)
              </option>
              <option value="lightlyactive">
                Lightly Active (light exercise/sports 1-3 days/week)
              </option>
              <option value="moderatelyactive">
                Moderately Active (moderate exercise/sports 3-5 days/week)
              </option>
              <option value="veryactive">
                Very Active (hard exercise/sports 6-7 days a week)
              </option>
              <option value="extraactive">
                Extra Active (very hard exercise/sports & physical job or 2x
                training)
              </option>
            </select>
            <br />
            <button className="request-button">Add</button>
          </center>
          <br />
        </form>
        <br />

        <Table striped borderless>
          <thead style={{ color: "cadetblue" }}>
            <tr>
              <th>Date</th>
              <th>Weight(kg)</th>
              <th>Calories Per Day</th>
              <th></th>
            </tr>
          </thead>
          <tbody style={{ color: "cadetblue" }}>
            {biometrics.map((weight) => (
              <tr key={weight.id}>
                <td>{weight.date_created.substring(0, 10)}</td>
                <td>{weight.weight}</td>
                <td>{weight.calories_per_day}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteBiometrics(weight.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}


export default Biometrics;
