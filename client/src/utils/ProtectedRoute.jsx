import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

// This component checks if the user is authenticated
// (by checking if their email exists in the Redux state).
// If not authenticated, it redirects to the login page.
const ProtectedRoute = ({ children }) => {
  const { loaded, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  
  useEffect(() => {
    // If the authentication state is loaded and no user is authenticated,
    // redirect to the login page.
    console.log(user);
    if (!user || !user.email) {
        navigate("/login", { replace: true });
    }
  }, [loaded, user, navigate]);
  return user && user.email ? children : null;
};

export default ProtectedRoute;