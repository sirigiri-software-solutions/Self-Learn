import React from 'react';
import { FaArrowUp } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const DoutSection = () => {
  const navigate = useNavigate();
  
  const goToDashboard = () => {
    navigate('/');
  };
  
  const goToTestPage = () => {
    navigate('/test');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 relative">
      <div className="flex justify-between w-full max-w-lg mb-4">
        <button
          className="test-button px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition duration-300"
          onClick={goToTestPage}
        >
          Test
        </button>
        <button
          onClick={goToDashboard}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          Log out
        </button>
      </div>

      <div className="w-full max-w-lg flex-1">
        <div className="mb-4 flex justify-center">
          <textarea
            className="w-full h-[60vh] md:h-[70vh] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none shadow-sm"
          />
        </div>

        <div className="relative flex justify-center mb-4">
          <input 
            type="text" 
            placeholder="Enter your doubt" 
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
          />
          <button className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-300">
            <FaArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoutSection;
