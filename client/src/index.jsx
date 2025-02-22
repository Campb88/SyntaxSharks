import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Desktop } from "./screens/Desktop.jsx";
import { SignUp } from "./screens/SignUp.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import DashboardPreview from "./screens/DashboardPreview.jsx";
import Login from "./screens/Login.jsx";
import { Provider } from "react-redux";
import {store} from "./store/store.js";
import ProtectedRoute from "./utils/ProtectedRoute.jsx";
import Account from "./screens/TestAcount.jsx";



createRoot(document.getElementById("app")).render(
  <BrowserRouter>
    <StrictMode>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Desktop />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path= "/dashboard" element = {<DashboardPreview/>}/>
        {/* Test */}
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />
        

      </Routes>
      </Provider>
    </StrictMode>
  </BrowserRouter>
  
);
