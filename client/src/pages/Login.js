import React, {useState} from "react";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitForm = async (event) => {
    try {
      const body = { email, password };
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      })
      console.log(response)
    }
    catch (err) {
      console.error(err.message)
    }
  }

  return (
    <>
    <form onSubmit={onSubmitForm}>
     Email Address: <input type="text" value={email}  onChange={ event => setEmail(event.target.value)}/><br />
     Password: <input type="password" value={password}  onChange={ event => setPassword(event.target.value)}/><br />
     <button>Login</button>
    </form>
    </>
  );

}

export default Login;