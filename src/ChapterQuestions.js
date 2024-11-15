import React, { useState, useEffect } from "react";
import { useChapterContext } from "./ChapterContext";
import { FaArrowUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { chaptersData } from "./chapterdata"; // Assuming you have the chapter data imported

const ChapterQuestion = () => {
  const navigate = useNavigate();
  const { selectedState, selectedClass, selectedSubject, setSelectedSubject, currentStep, setCurrentStep } = useChapterContext();
  const { selectedChapter, setSelectedChapter, setSelectedQuestions } = useChapterContext();

  const [selectedSubchapter, setSelectedSubchapter] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [selectedChapters, setSelectedChapters] = useState([]);
  const [textareaValue, setTextareaValue] = useState("");
  const [textInputValue, setTextInputValue] = useState("");

  // Fetch chapters based on selectedState, selectedClass, and selectedSubject
  useEffect(() => {
    if (selectedState && selectedClass && selectedSubject) {
      const chapters = chaptersData[selectedState]?.[selectedClass]?.[selectedSubject] || [];
      setSelectedChapters(chapters);
    } else {
      setSelectedChapters([]);
    }
  }, [selectedState, selectedClass, selectedSubject]);

  const handleChapterSelection = (event) => {
    const chapter = event.target.value;
    setSelectedChapter(chapter);
    setSelectedSubchapter(""); // Clear subchapter selection when chapter changes
    setSelectedQuestion(""); // Clear question selection when chapter changes
  };

  const handleSubchapterSelection = (event) => {
    const subchapter = event.target.value;
    setSelectedSubchapter(subchapter);
    setSelectedQuestion(""); // Clear question selection when subchapter changes
  };

  const handleQuestionSelection = (question) => {
    setSelectedQuestion(question);
    console.log(question)
    console.log(chapterObject.questions)
    setTextareaValue(question); // Display the question in the textarea
    setTextInputValue(""); // Clear the doubt input
  };

  const chapterObject = selectedChapters.find(chapter => chapter.chapter === selectedChapter);

  // Navigate to next page
  const goToDashboard = () => {
    navigate("/dashboardpage");
  };

  return (
    <div className=" bg-[#E0F7FA] flex flex-col w-full md:flex-row text-black h-screen">
    
      <div className="w-full md:ml-[10px] md:mt-[10px] md:w-[50%] p-6 overflow-auto h-[60vh] md:h-full shadow-lg bg-white rounded-lg scrollbar-hide">
        <div className="flex flex-col mb-4 w-full h-[100vh] overflow-hidden">
          <div className="flex flex-row items-center w-full space-x-2.5">
            <label className="font-semibold text-sm text-gray-600 w-[30%] text-right">Chapters:</label>
            <select
              className="w-[70%] px-3 cursor-pointer py-2 border border-gray-300 rounded bg-gray-100 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-blue-500 focus:outline-none"
              onChange={handleChapterSelection}
              value={selectedChapter}
            >
              <option value="">Select a Chapter</option>
              {selectedChapters.length > 0 ? (
                selectedChapters.map((chapter, index) => (
                  <option key={index} value={chapter.chapter}>
                    {chapter.chapter}
                  </option>
                ))
              ) : (
                <option>No chapters available</option>
              )}
            </select>
          </div>

          {/* Subchapter Selection
          {chapterObject && chapterObject.subchapters.length > 0 && (
            <div className="flex items-center mb-4 mt-[3%]">
              <label className="dropdown-label font-semibold text-sm text-gray-600 mr-4 w-[30%] text-right">
                Subchapters:
              </label>
              <select
                className="w-[80%] px-3 cursor-pointer py-2 border border-gray-300 rounded bg-gray-100 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-blue-500 focus:outline-none"
                onChange={handleSubchapterSelection}
                value={selectedSubchapter}
              >
                <option value="">Select a subchapter</option>
                {chapterObject.subchapters.map((subchapter, index) => (
                  <option key={index} value={subchapter}>
                    {subchapter}
                  </option>
                ))}
              </select>
            </div>
          )} */}

          {/* Question Selection */}
          {chapterObject && chapterObject.questions && chapterObject.questions.length > 0 && (
  <div className="flex flex-col w-full h-[100vh] p-5 bg-white shadow-lg rounded-lg">
    <ul className="flex-1 space-y-3 overflow-y-scroll h-[80vh] p-2">
      {chapterObject.questions.map((question, index) => (
        <div
          key={index}
          className="p-4 bg-indigo-100 text-black rounded-lg cursor-pointer hover:bg-indigo-200 hover:text-indigo-700 shadow-sm transition-all duration-200 ease-in-out"
          onClick={() => handleQuestionSelection(question)}
        >
          {question}
        </div>
      ))}
    </ul>
  </div>
)}


        </div>
      </div>

   
      <div className="w-full m-auto lg:w-[100%] md:max-w-lg flex-1 p-6 bg-gradient-to-br rounded-lg">
        <div className="w-full h-[90%] flex justify-center">
          <textarea
            className="w-full h-[50vh] md:mb-[15px] md:h-[85vh] lg:h-[85vh] p-4 rounded-lg shadow-sm resize-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={textareaValue}
            onChange={(e) => setTextareaValue(e.target.value)}
            placeholder="Click on a question to display it here..."
          />
        </div>

        <div className="relative flex justify-center">
          <input
            value={textInputValue}
            onChange={(e) => setTextInputValue(e.target.value)}
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter your doubt here..."
          />
        </div>
      </div>
    </div>
  );
};

export default ChapterQuestion;
