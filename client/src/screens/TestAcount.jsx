import React from "react";
import { useSelector } from "react-redux";

const Account = () => {
  // Access the user information from the Redux store
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="account">
      <h1>Account Information</h1>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
};

export default Account;
