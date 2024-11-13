import React from "react";
<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Dashboardpage from "./Dashboardpage";
import DoutSection from "./DoutSection";
import Test from "./Test";
import Chapter from "./Chapter"; 

import { ChapterProvider } from './ChapterContext';
import ChapterQuestion from "./ChapterQuestion";

function App() {
  return (
    <ChapterProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboardpage" element={<Dashboardpage />} />
        <Route path="/doubt" element={<DoutSection />} />
        <Route path="/test" element={<Test />} />
        <Route path="/chapter" element={<Chapter />} /> 
        <Route path="/question" element={<ChapterQuestion />} /> 
      </Routes>
    </ChapterProvider>
  );
}

export default App;
=======
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChapterProvider } from "./Components/ChapterContext"; // Ensure the path is correct
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Dashboardpage from "./Components/Dashboardpage";
import Testpage from "./Components/Testpage";
import Doubtsection from "./Components/Doubtsection";
import ChapterQuestion from "./Components/ChapterQuestion";
import Chapter from "./Components/Chapter";

function App() {
  return (
    <Router>
      <ChapterProvider> {/* Wrapping the entire Routes block */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Dashboardpage" element={<Dashboardpage />} />
          <Route path="/doubt" element={<Doubtsection />} />
          <Route path="/Chapter" element={<Chapter />} />
          <Route path="/testpage" element={<Testpage />} />
          <Route path="/question" element={<ChapterQuestion />} />
        </Routes>
      </ChapterProvider>
    </Router>
  );
}

export default App;
>>>>>>> b076b5c8cbf2c56d94b4eec37b27cdd4c07318ed
