import React from "react";
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
