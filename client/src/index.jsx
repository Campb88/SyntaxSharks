import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Desktop } from "./screens/Desktop/Desktop.jsx";
import { SignUp } from "./screens/SignUp.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import DashboardPreview from "./screens/DashboardPreview.jsx";
import Login from "./screens/Login.jsx";
import ProtectedRoute from "./utils/ProtectedRoute.jsx";
import Account from "./screens/TestAcount.jsx";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store/store.js";
import React, { useEffect } from "react";
import { login } from "./store/slices/authSlice";
import { Settings } from "./screens/Settings.jsx";
import { Itinerary } from "./screens/Itinerary.jsx";
import YourTrips from "./screens/YourTrips.jsx";
import './style.css';
import Flights from "./screens/Flights.jsx"

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const user = localStorage.getItem("user");
    if (token && user) {
      dispatch(login({ user: JSON.parse(user), token }));
    }
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<Desktop />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={
          <ProtectedRoute>
            <DashboardPreview />
          </ProtectedRoute>
        } />
      <Route path="/account"
        element={
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
        }
      />
      <Route path ="/settings" element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }/>
      <Route path ="/itinerary" element={
          <ProtectedRoute>
            <Itinerary />
          </ProtectedRoute>
        }/>
      <Route path="/yourtrips" element={
          <ProtectedRoute>
            <YourTrips />
          </ProtectedRoute>
        } />
      <Route path="/flights" element={
          <ProtectedRoute>
            <Flights />
          </ProtectedRoute>
        }/>


    </Routes>
  );
}

createRoot(document.getElementById("app")).render(
  <BrowserRouter>
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  </BrowserRouter>
);
