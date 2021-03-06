import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import "../styles/userprofile.css";

function UserProfile() {
  const [userInfo, setUserInfo] = useState([1]);
  const [userGoal, setUserGoal] = useState([1]);

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

  // show user info and their goaltype and coaches of user_id 1
  const getGoalOfUser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/biometrics/goal/${id}`
      );
      const jsonData = await response.json();
      setUserGoal(jsonData);
      return jsonData;
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteGoal = async (id) => {
    try {
      const deleteGoal = await fetch(
        `http://localhost:5000/biometrics/goal/${id}`,
        {
          method: "DELETE",
        }
      );
      setUserGoal(userGoal.filter((goalUser) => goalUser.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getUserInfo(1);
  }, []);

  useEffect(() => {
    getGoalOfUser(1);
  }, []);

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
        style={{ color: "#a2cdcb", marginLeft: "20%" }}
      >
        <h1> User Information </h1>
        <div className="usermain">
          {userInfo[0] && (
            <>
              <span name="profile-image">
                <img
                  className="userimg"
                  src={userInfo[0].profile_image}
                  alt="User"
                />{" "}
              </span>
              <div className="usertables">
                <Table borderless>
                  <thead
                    className="table table-borderless"
                    style={{ color: "cadetblue" }}
                  >
                    <tr>
                      <th>Name:</th>
                      <td>
                        <span name="name">
                          {userInfo[0].first_name} {userInfo[0].last_name}
                        </span>
                      </td>
                    </tr>
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

                {!userGoal[0] && (
                  <h3>You are currently not assigned to any coach.</h3>
                )}

                {userGoal[0] && (
                  <>
                    <Table borderless>
                      <thead
                        className="table table-borderless"
                        style={{ color: "cadetblue" }}
                      >
                        <tr>
                          <th>Goal:</th>
                          <td>
                            <span name="goal-description">
                              {userGoal[0].description}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <th>Assigned Coach:</th>
                          <td>
                            <span name="coach-name">{userGoal[0].alias} </span>
                            <button
                              className="userfirebutton"
                              style={{ backgroundColor: "#a2cdcb" }}
                              onClick={() => deleteGoal(userGoal[0].id)}
                            >
                              Cancel
                            </button>
                          </td>
                        </tr>
                      </thead>
                    </Table>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
