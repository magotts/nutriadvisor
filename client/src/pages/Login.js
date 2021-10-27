// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";


// export default function Login(props) {
//   //  get login funcition from useContext
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const onSubmit = function(event) {
//     event.preventDefault();
//     email && props.login(email, password);
//   };

//   return (
//     // <div className="Login">
//     //   <Form onSubmit={handleSubmit}>
//     //     <Form.Group size="lg" controlId="email">
//     //       <Form.Label>Email change</Form.Label>
//     //       <Form.Control
//     //         autoFocus
//     //         type="email"
//     //         value={email}
//     //         onChange={(e) => setEmail(e.target.value)}
//     //       />
//     //     </Form.Group>
//     //     <Form.Group size="lg" controlId="password">
//     //       <Form.Label>Password </Form.Label>
//     //       <Form.Control
//     //         type="password"
//     //         value={password}
//     //         onChange={(e) => setPassword(e.target.value)}
//     //       />
//     //     </Form.Group>
//     //     <Button block size="lg" type="submit" disabled={!validateForm()}>
//     //       Login
//     //     </Button>
//     //   </Form>
//     // </div>
//     <div className="login">
//     <form onSubmit={onSubmit}>
//       <p>
//         <input type="text" name="username"
//           value={email} placeholder="Enter Username or email"
//           onChange={event => setEmail(event.target.value)} />
//       </p>
//       <p>
//         <input type="password" name="password"
//           value={password} placeholder="Password"
//           onChange={event => setPassword(event.target.value)} />
//       </p>
//       <p className="submit">
//         <button type="submit" name="commit">Login</button>
//       </p>
//     </form>

//   </div>

//   );
// }


import { useState } from 'react';
import { authContext } from '../providers/AuthProvider';
import { useContext } from 'react';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(authContext);

  const onSubmit = function(event) {
    event.preventDefault();
    email && login(email, password);
  };

  return (
    <div className="login">
      <form onSubmit={onSubmit}>
        <p>
          <input type="text" name="username"
            value={email} placeholder="Enter Username or email"
            onChange={event => setEmail(event.target.value)} />
        </p>
        <p>
          <input type="password" name="password"
            value={password} placeholder="Password"
            onChange={event => setPassword(event.target.value)} />
        </p>
        <p className="submit">
          <button type="submit" name="commit">Login</button>
        </p>
      </form>

    </div>
  );
};