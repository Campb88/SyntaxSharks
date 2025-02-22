import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// This component checks if the user is authenticated
// (by checking if their email exists in the Redux state).
// If not authenticated, it redirects to the login page.
const ProtectedRoute = ({ children }) => {
  const { loaded, user } = useSelector((state) => state.auth);
  if (!loaded || !user.email) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;