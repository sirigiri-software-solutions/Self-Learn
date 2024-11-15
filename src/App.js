// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Login from "./Login";
// import Signup from "./Signup";
// import Dashboardpage from "./Dashboardpage";
// import DoutSection from "./DoutSection";
// import Test from "./Test";
// import Chapter from "./Chapter"; 

// import { ChapterProvider } from './ChapterContext';
// import ChapterQuestion from "./ChapterQuestion";

// function App() {
//   return (
//     <ChapterProvider>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/dashboardpage" element={<Dashboardpage />} />
//         <Route path="/doubt" element={<DoutSection />} />
//         <Route path="/test" element={<Test />} />
//         <Route path="/chapter" element={<Chapter />} /> 
//         <Route path="/question" element={<ChapterQuestion />} /> 
//       </Routes>
//     </ChapterProvider>
//   );
// }

// export default App;

import React from 'react';
import { ChapterProvider } from './ChapterContext';
import MainComponent from './MainComponent';

const App = () => {
  return (
    <ChapterProvider>
      <div className="App">
        {/* <h1>Select Your Options</h1> */}
        <MainComponent />
      </div>
    </ChapterProvider>
  );
};

export default App;
