import { useContext } from "react";
import { authContext } from "../providers/AuthProvider";

export default function Info() {
  const { user } = useContext(authContext);

  // Show user Info
  return (
    <div>
      <div
        style={{
          color: "rgb(255, 255, 255)",
          fontSize: "20px",
        }}
      >
        Logged in as{" "}
      </div>
      <div
        style={{
          color: "rgb(255, 255, 255)",
          fontSize: "20px",
        }}
      >
        {user.name}
      </div>

      <p>{/* <button type="button" onClick={logout}>Logout</button> // add logout in line 5 if logout is needed*/}</p>
    </div>
  );
}
