import { useContext } from 'react';
import { authContext } from '../providers/AuthProvider';

export default function Info() {
  const { user, logout } = useContext(authContext);

  // Show user Info
  return (
    <div>
      <p className="UserInfo">
        <div>Logged in as </div>
        <div>{user.name}</div>
      </p >
      <p>
     
        {/* <button type="button" onClick={logout}>Logout</button> */}
      </p>
    </div>
  );
};