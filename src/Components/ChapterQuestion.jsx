import React, { useState } from "react";
import { useChapterContext } from "./ChapterContext";
import { FaArrowUp } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";


const ChapterQuestion = () => {
  const { selectedQuestions } = useChapterContext();
  const [textareaValue, setTextareaValue] = useState("");
  const navigate = useNavigate();

  const handleQuestionClick = (question) => {
    setTextareaValue(question); 
    
  
   
  };
  const goToDashboard = () => {
    navigate("/dashboardpage");
  };
  
 

  return (
    <div className="flex flex-col md:flex-row h-screen">
        {/* <div className="bg-sky-400  md:absolute right-20 top-10 rounded-md" >
<button
        onClick={goToDashboard}
        className="px-4 py-2 bg-blue-500 text-white rounded-md w-full md:w-[100px] shadow-md hover:bg-blue-700 transition duration-300"
        >
        Log out
    </button>
      </div> */}
      
      <div className="w-full md:w-[50%] p-6 overflow-auto h-[50vh] md:h-full shadow-lg bg-white rounded-lg scrollbar-hide">
        <h2 className="text-2xl font-bold mb-6 mt-4 md:mt-[20px] text-indigo-600">
          Chapter Questions
        </h2>
        <ul>
          {selectedQuestions.map((question, index) => (
            <li
              className="mt-3 cursor-pointer bg-indigo-100 text-black hover:bg-indigo-200 p-3 rounded-lg hover:text-indigo-700 shadow-sm transition-all duration-200 ease-in-out"
              key={index}
              onClick={() => handleQuestionClick(question)}
            >
              {question}
            </li>
          ))}
        </ul>
      </div>

      
      <div className="w-full md:max-w-lg flex-1 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg shadow-lg">
        <div className="mb-4 flex justify-center">
          <textarea
            className="w-full h-[40vh] md:h-[60vh] lg:h-[70vh] p-4 rounded-lg shadow-sm resize-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={textareaValue}
            onChange={(e) => setTextareaValue(e.target.value)}
            placeholder="Click on a question to display it here..."
          />
        </div>

        <div className="relative flex justify-center">
          <input
            type="text"
            placeholder="Enter your doubt"
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-indigo-300 bg-white shadow-sm"
          />
          <button className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-3 rounded-full hover:shadow-lg transition duration-300">
            <FaArrowUp className="w-4 h-4 md:w-6 md:h-6" />
          </button>
        </div>
      </div>

    </div>
  );
};

export default ChapterQuestion;
