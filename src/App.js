import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Components/Login"; 
import Signup from "./Components/Signup";
import Dashboardpage from "./Components/Dashboardpage";
import Testpage from "./Components/Testpage";
import Doubtsection from "./Components/Doubtsection";

function App() {
  return (
    <Router>
      <Routes>
  
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Dashboardpage" element={<Dashboardpage />} />
        <Route path="/doubtsection" element={<Doubtsection />} />
        
        <Route path="/testpage" element={<Testpage />} />

      </Routes>
    </Router>
  );
}

export default App;
