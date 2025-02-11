import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Desktop } from "./screens/Desktop.jsx";
import {SignUp} from "./screens/SignUp.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import DashboardPreview from "./screens/DashboardPreview.jsx";


createRoot(document.getElementById("app")).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<Desktop />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path= "/dashboard" element = {<DashboardPreview/>}/>
      </Routes>
    </StrictMode>
  </BrowserRouter>
  
);
