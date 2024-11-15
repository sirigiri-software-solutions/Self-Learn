import React from "react";
import { Route, Routes } from "react-router-dom";
import { ChapterProvider } from "./Components/ChapterContext"; // Ensure the path is correct

import Registration from "./Components/Registration";
import Dashboardpage from "./Components/Dashboardpage";
import Testpage from "./Components/Testpage";
import Doubtsection from "./Components/Doubtsection";
import ChapterQuestion from "./Components/ChapterQuestion";
import Chapter from "./Components/Chapter";
import Homepage from "./Components/Homepage";
import Layout from "./Components/Layout";
import Quizpage from "./Components/Quizpage";

function App() {
  return (
    <ChapterProvider> {/* Wrapping context provider at the top level */}
      <Routes>
        
        <Route path="/registration" element={<Registration />} />
        <Route path="/" element={<Layout />}>
        <Route path="/quizpage" element={<Quizpage/>}></Route>
        <Route path="/homepage" element={<Homepage/>} />
        </Route>
        
        <Route path="/Dashboardpage" element={<Dashboardpage />} />
        <Route path="/doubt" element={<Doubtsection />} />
        <Route path="/Chapter" element={<Chapter />} />
        <Route path="/testpage" element={<Testpage />} />
        <Route path="/question" element={<ChapterQuestion />} />
        
      </Routes>
    </ChapterProvider>
  );
}

export default App;
