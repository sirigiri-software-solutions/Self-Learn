// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { chaptersData } from "./chapterdata"; // Assuming correct import of chaptersData
// // import { useChapterContext } from "./ChapterContext";

// // const ChapterComponent = () => {
// //   const navigate = useNavigate();
// //   const { selectedState, selectedClass, selectedSubject, setSelectedSubject, currentStep, setCurrentStep } = useChapterContext();
// //   const { setSelectedChapter, setSelectedQuestions } = useChapterContext();

// //   const [selectedChapter, setSelectedChapterState] = useState("");
// //   const [selectedSubchapter, setSelectedSubchapter] = useState("");
// //   const [selectedQuestion, setSelectedQuestion] = useState("");
// //   const [selectedChapters, setSelectedChapters] = useState([]);

// //   // Debugging: Log selectedState, selectedClass, and selectedSubject to check if they are correct
// //   useEffect(() => {
// //     console.log('selectedState:', selectedState, 'selectedClass:', selectedClass, 'selectedSubject:', selectedSubject);
// //     if (selectedState && selectedClass && selectedSubject) {
// //       const chapters = chaptersData[selectedState]?.[selectedClass]?.[selectedSubject] || [];
// //       console.log('Available chapters:', chapters); // Log the fetched chapters
// //       setSelectedChapters(chapters);
// //     } else {
// //       setSelectedChapters([]);
// //     }
// //   }, [selectedState, selectedClass, selectedSubject]);

// //   const handleChapterSelection = (event) => {
// //     const chapter = event.target.value;
// //     setSelectedChapterState(chapter);
// //     // setSelectedSubchapter("");
// //     // setSelectedQuestion("");
// //     setSelectedChapter(chapter); // Set chapter context state
// //   };

// //   const handleSubchapterSelection = (event) => {
// //     const subchapter = event.target.value;
// //     setSelectedSubchapter(subchapter);
// //     setSelectedQuestion("");
// //   };

// //   const handleQuestionSelection = (event) => {
// //     setSelectedQuestion(event.target.value);
// //     setSelectedQuestions(`Questions for ${selectedSubchapter}`);
// //   };

// //   const chapterObject = selectedChapters.find(
// //     (chapter) => chapter.chapter === selectedChapter
// //   );

// //   const handleNext = () => {
// //     setCurrentStep(currentStep + 1);
// //     navigate("/question");
// //   };
// //   const nextbutt = () => {
// //     console.log(selectedState, selectedClass, selectedSubject);

// //   }

// //   return (
// //     // <div className="flex flex-col mb-4 w-full h-full">
// //     //   <div className="flex flex-row items-center w-full space-x-2.5">
// //     //     <label className="font-semibold text-sm text-gray-600 w-[30%] text-right">
// //     //       Chapters:
// //     //     </label>
// //     //     <select
// //     //       className="w-[70%] px-3 cursor-pointer py-2 border border-gray-300 rounded bg-gray-100 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-blue-500 focus:outline-none"
// //     //       onChange={handleChapterSelection}
// //     //       value={selectedChapter}
// //     //     >
// //     //       <option value="">Select a Chapter</option>
// //     //       {selectedChapters.length > 0 ? (
// //     //         selectedChapters.map((chapter, index) => (
// //     //           <option key={index} value={chapter.chapter}>
// //     //             {chapter.chapter}
// //     //           </option>
// //     //         ))
// //     //       ) : (
// //     //         <option>No chapters available</option>
// //     //       )}
// //     //     </select>
// //     //   </div>
// //     //   {selectedChapters.length > 0 ? (
// //     //         selectedChapters.map((chapter, index) => (
// //     //           <li key={index} value={chapter.chapter}>
// //     //             {chapter.chapter}
// //     //           </li>
// //     //         ))
// //     //       ) : (
// //     //         <h1>No chapters available</h1>
// //     //       )}

// //     //   {/* Subchapter Dropdown */}
// //     //   {chapterObject && chapterObject.subchapters.length > 0 && (
// //     //     <div className="flex items-center mb-4 mt-[3%]">
// //     //       <label className="dropdown-label font-semibold text-sm text-gray-600 mr-4 w-[30%] text-right">
// //     //         Subchapters:
// //     //       </label>
// //     //       <select
// //     //         className="w-[80%] px-3 cursor-pointer py-2 border border-gray-300 rounded bg-gray-100 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-blue-500 focus:outline-none"
// //     //         onChange={handleSubchapterSelection}
// //     //         value={selectedSubchapter}
// //     //       >
// //     //         <option value="">Select a subchapter</option>
// //     //         {chapterObject.subchapters.map((subchapter, index) => (
// //     //           <option key={index} value={subchapter}>
// //     //             {subchapter}
// //     //           </option>
// //     //         ))}
// //     //       </select>
// //     //     </div>
// //     //   )}

// //     //   {/* Questions Section */}
// //     //   {chapterObject && chapterObject.questions && chapterObject.questions.length > 0 && (
// //     //     <div className="flex items-center mb-4 w-full">
// //     //       <label className="dropdown-label font-semibold text-sm text-gray-600 mr-4 w-[30%] text-right">
// //     //         Questions:
// //     //       </label>
// //     //       <button
// //     //         className="doubt-button px-4 py-2 bg-green-700 mt-10 text-white rounded-md w-full"
// //     //         onClick={handleNext}
// //     //       >
// //     //         Go To Questions
// //     //       </button>
// //     //       {selectedSubject && (
// //     //     <button
// //     //       className="bg-blue-500 text-white mt-4 px-4 py-2 rounded focus:outline-none"
// //     //       onClick={handleNext}
// //     //     >
// //     //       Next
// //     //     </button>
// //     //   )}
// //     //     </div>
// //     //   )}
// //     // </div>
// // //     <div className="flex flex-col gap-8">

// // //   <div className="flex justify-between items-center">
// // //     <label className="font-semibold text-sm text-gray-600 w-[30%] text-right">
// // //       Chapters:
// // //     </label>
// // //     <select
// // //       className="w-[70%] px-3 cursor-pointer py-2 border border-gray-300 rounded bg-gray-100 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-blue-500 focus:outline-none"
// // //       onChange={handleChapterSelection}
// // //       value={selectedChapter}
// // //     >
// // //       <option value="">Select a Chapter</option>
// // //       {selectedChapters.length > 0 ? (
// // //         selectedChapters.map((chapter, index) => (
// // //           <option key={index} value={chapter.chapter}>
// // //             {chapter.chapter}
// // //           </option>
// // //         ))
// // //       ) : (
// // //         <option>No chapters available</option>
// // //       )}
// // //     </select>
// // //   </div>

// // //   <div className="flex flex-col gap-4">
// // //     {selectedChapters.length > 0 ? (
// // //       selectedChapters.map((chapter, index) => (
// // //         <a
// // //           key={index}
// // //           href="#"
// // //           className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200"
// // //         >
// // //           <span>{chapter.chapter}</span>
// // //           <span className="text-sm">{chapter.questions.length}</span>
// // //         </a>
// // //       ))
// // //     ) : (
// // //       <h1>No chapters available</h1>
// // //     )}
// // //   </div>

// // //   {/* Subchapter Dropdown */}
// // //   {chapterObject && chapterObject.subchapters.length > 0 && (
// // //     <div className="flex justify-between items-center">
// // //       <label className="font-semibold text-sm text-gray-600 w-[30%] text-right">
// // //         Subchapters:
// // //       </label>
// // //       <select
// // //         className="w-[70%] px-3 cursor-pointer py-2 border border-gray-300 rounded bg-gray-100 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-blue-500 focus:outline-none"
// // //         onChange={handleSubchapterSelection}
// // //         value={selectedSubchapter}
// // //       >
// // //         <option value="">Select a subchapter</option>
// // //         {chapterObject.subchapters.map((subchapter, index) => (
// // //           <option key={index} value={subchapter}>
// // //             {subchapter}
// // //           </option>
// // //         ))}
// // //       </select>
// // //     </div>
// // //   )}

// // //   {/* Questions Section */}
// // //   {chapterObject && chapterObject.questions && chapterObject.questions.length > 0 && (
// // //     <div className="flex flex-col gap-4">
// // //       <div className="flex justify-between items-center">
// // //         <label className="font-semibold text-sm text-gray-600 w-[30%] text-right">
// // //           Questions:
// // //         </label>
// // //         <button
// // //           className="px-4 py-2 bg-green-700 text-white rounded-lg w-[70%] hover:bg-green-800"
// // //           onClick={handleNext}
// // //         >
// // //           Go To Questions
// // //         </button>
// // //       </div>
// // //     </div>
// // //   )}

// // //   {selectedSubject && (
// // //     <button
// // //       className="bg-blue-500 text-white mt-4 px-4 py-2 rounded focus:outline-none"
// // //       onClick={handleNext}
// // //     >
// // //       Next
// // //     </button>
// // //   )}
// // // </div>

// // <div className="flex flex-col gap-8 w-full">

// //   {/* <div className="flex justify-between items-center">
// //     <label className="font-semibold text-sm text-gray-600 w-[30%] text-right">
// //       Chapters:
// //     </label>
// //     <select
// //       className="w-[70%] px-3 cursor-pointer py-2 border border-gray-300 rounded bg-gray-100 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-blue-500 focus:outline-none"
// //       onChange={handleChapterSelection} // Dropdown selection handler
// //       value={selectedChapter} // Selected chapter
// //     >
// //       <option value="">Select a Chapter</option>
// //       {selectedChapters.length > 0 ? (
// //         selectedChapters.map((chapter, index) => (
// //           <option key={index} value={chapter.chapter}>
// //             {chapter.chapter}
// //           </option>
// //         ))
// //       ) : (
// //         <option>No chapters available</option>
// //       )}
// //     </select>
// //   </div> */}

// //   <div className="flex flex-col gap-4 w-[30%] bg-[#E0F7FA] ">
// //     <hl class="w-[135px] h-[36px] top-[123px] left-[20px] gap-0 opacity-0 font-inter text-[30px] font-semibold leading-[36.31px] text-left underline underline-offset-from-font decoration-skip-ink-none">Chapter</hl>
// //     {selectedChapters.length > 0 ? (
// //       selectedChapters.map((chapter, index) => (
// //         <a
// //           key={index}
// //           href="#"
// //           onClick={() => handleChapterSelection({ target: { value: chapter.chapter } })}
// //           className={`flex items-center gap-2 px-4 py-2 rounded-lg  ${
// //             chapter.chapter === selectedChapter
// //               ? 'bg-blue-100 hover:bg-blue-200'
// //               : 'bg-[rgba(0,153,135,0.2)] hover:bg-gray-200'
// //           }`}
// //         >
// //           <span>{chapter.chapter}</span>
// //           <span className="text-sm">{chapter.questions.length} Qns</span>
// //         </a>
// //       ))
// //     ) : (
// //       <h1>No chapters available</h1>
// //     )}
// //   </div>

// //   {/* Subchapter Dropdown */}
// //   {chapterObject && chapterObject.subchapters.length > 0 && (
// //     <div className="flex justify-between items-center">
// //       <label className="font-semibold text-sm text-gray-600 w-[30%] text-right">
// //         Subchapters:
// //       </label>
// //       <select
// //         className="w-[70%] px-3 cursor-pointer py-2 border border-gray-300 rounded bg-gray-100 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-blue-500 focus:outline-none"
// //         onChange={handleSubchapterSelection}
// //         value={selectedSubchapter}
// //       >
// //         <option value="">Select a subchapter</option>
// //         {chapterObject.subchapters.map((subchapter, index) => (
// //           <option key={index} value={subchapter}>
// //             {subchapter}
// //           </option>
// //         ))}
// //       </select>
// //     </div>
// //   )}

// //   {/* Questions Section */}
// //   {chapterObject && chapterObject.questions && chapterObject.questions.length > 0 && (
// //     <div className="flex flex-col gap-4">
// //       <div className="flex justify-between items-center">
// //         <label className="font-semibold text-sm text-gray-600 w-[30%] text-right">
// //           Questions:
// //         </label>
// //         <button
// //           className="px-4 py-2 bg-green-700 text-white rounded-lg w-[70%] hover:bg-green-800"
// //           onClick={handleNext}
// //         >
// //           Go To Questions
// //         </button>
// //       </div>
// //     </div>
// //   )}

// //   {selectedSubject && (
// //     <button
// //       className="bg-blue-500 text-white mt-4 px-4 py-2 rounded focus:outline-none"
// //       onClick={handleNext}
// //     >
// //       Next
// //     </button>
// //   )}
// // </div>

// //   );
// // };

// // export default ChapterComponent;

// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { chaptersData } from "./chapterdata"; // Assuming correct import of chaptersData
// // import { useChapterContext } from "./ChapterContext";

// // const ChapterComponent = () => {
// //   const navigate = useNavigate();
// //   const { selectedState, selectedClass, selectedSubject, setSelectedSubject, currentStep, setCurrentStep } = useChapterContext();
// //   const { setSelectedChapter, setSelectedQuestions } = useChapterContext();

// //   const [selectedChapter, setSelectedChapterState] = useState("");
// //   const [selectedSubchapter, setSelectedSubchapter] = useState("");
// //   const [selectedQuestion, setSelectedQuestion] = useState("");
// //   const [selectedChapters, setSelectedChapters] = useState([]);

// //   // Pagination states
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const itemsPerPage = 10;

// //   useEffect(() => {
// //     if (selectedState && selectedClass && selectedSubject) {
// //       const chapters = chaptersData[selectedState]?.[selectedClass]?.[selectedSubject] || [];
// //       setSelectedChapters(chapters);
// //     } else {
// //       setSelectedChapters([]);
// //     }
// //   }, [selectedState, selectedClass, selectedSubject]);

// //   const handleChapterSelection = (event) => {
// //     const chapter = event.target.value;
// //     setSelectedChapterState(chapter);
// //     setSelectedChapter(chapter); // Set chapter context state
// //   };

// //   // Pagination logic
// //   const indexOfLastItem = currentPage * itemsPerPage;
// //   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// //   const currentChapters = selectedChapters.slice(indexOfFirstItem, indexOfLastItem);

// //   const totalPages = Math.ceil(selectedChapters.length / itemsPerPage);

// //   const handleNextPage = () => {
// //     if (currentPage < totalPages) {
// //       setCurrentPage(currentPage + 1);
// //     }
// //   };

// //   const handlePrevPage = () => {
// //     if (currentPage > 1) {
// //       setCurrentPage(currentPage - 1);
// //     }
// //   };

// //   const chapterObject = selectedChapters.find(
// //     (chapter) => chapter.chapter === selectedChapter
// //   );

// //   const handleNext = () => {
// //     setCurrentStep(currentStep + 1);
// //     navigate("/question");
// //   };

// //   return (
// //     <div className="flex flex-col gap-8 w-full h-[100vh] bg-[#00665A] text-black ">
// //       <div className="flex flex-col gap-4 w-[30%] bg-[#E0F7FA] p-5 h-[90%] ">
// //         <hl className="w-[135px] h-[36px] text-[30px] font-semibold leading-[36.31px] text-left underline">
// //           Chapter
// //         </hl>
// //         {currentChapters.length > 0 ? (
// //           currentChapters.map((chapter, index) => (
// //             <a
// //               key={index}
// //               href="#"
// //               onClick={() => handleChapterSelection({ target: { value: chapter.chapter } })}
// //               className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
// //                 chapter.chapter === selectedChapter
// //                   ? 'bg-blue-100 hover:bg-blue-200'
// //                   : 'bg-[rgba(0,153,135,0.2)] hover:bg-gray-200'
// //               }`}
// //             >
// //               <span>{chapter.chapter}</span>
// //               <span className="text-sm ml-0">{chapter.questions.length} Qns</span>
// //             </a>
// //           ))
// //         ) : (
// //           <h1>No chapters available</h1>
// //         )}

// //         {/* Pagination Controls */}
// //         {selectedChapters.length > itemsPerPage && (
// //           <div className="flex justify-between mt-4 bg-[#E0F7FA] p-4 w-full">
// //             <button
// //               onClick={handlePrevPage}
// //               disabled={currentPage === 1}
// //               className={`px-4 py-2 rounded-lg ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
// //             >
// //               Previous
// //             </button>
// //             <span className="text-sm">
// //               Page {currentPage} of {totalPages}
// //             </span>
// //             <button
// //               onClick={handleNextPage}
// //               // disabled={currentPage === totalPages}
// //               className={`px-4 py-2 rounded-lg ${currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
// //             >
// //               Next
// //             </button>
// //           </div>
// //         )}
// //       </div>

// //       {/* Subchapter Dropdown */}
// //       {chapterObject && chapterObject.subchapters.length > 0 && (
// //         <div className="flex justify-between items-center">
// //           <label className="font-semibold text-sm text-gray-600 w-[30%] text-right">
// //             Subchapters:
// //           </label>
// //           <select
// //             className="w-[70%] px-3 cursor-pointer py-2 border border-gray-300 rounded bg-gray-100 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-blue-500 focus:outline-none"
// //             onChange={(e) => setSelectedSubchapter(e.target.value)}
// //             value={selectedSubchapter}
// //           >
// //             <option value="">Select a subchapter</option>
// //             {chapterObject.subchapters.map((subchapter, index) => (
// //               <option key={index} value={subchapter}>
// //                 {subchapter}
// //               </option>
// //             ))}
// //           </select>
// //         </div>
// //       )}

// //       {/* Questions Section */}
// //       {chapterObject && chapterObject.questions && chapterObject.questions.length > 0 && (
// //         <div className="flex flex-col gap-4">
// //           <div className="flex justify-between items-center">
// //             <label className="font-semibold text-sm text-gray-600 w-[30%] text-right">
// //               Questions:
// //             </label>
// //             <button
// //               className="px-4 py-2 bg-green-700 text-white rounded-lg w-[70%] hover:bg-green-800"
// //               onClick={handleNext}
// //             >
// //               Go To Questions
// //             </button>
// //           </div>
// //         </div>
// //       )}

// //       {selectedSubject && (
// //         <button
// //           className="bg-blue-500 text-white mt-4 px-4 py-2 rounded focus:outline-none"
// //           onClick={handleNext}
// //         >
// //           Next
// //         </button>
// //       )}
// //     </div>
// //   );
// // };

// // export default ChapterComponent;
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { chaptersData } from "./chapterdata"; // Assuming correct import of chaptersData
// import { useChapterContext } from "./ChapterContext";

// const ChapterComponent = () => {
//   const navigate = useNavigate();
//   const { selectedState, selectedClass, selectedSubject, setSelectedSubject, currentStep, setCurrentStep } = useChapterContext();
//   const { setSelectedChapter, setSelectedQuestions } = useChapterContext();

//   const [selectedChapter, setSelectedChapterState] = useState("");
//   const [selectedSubchapter, setSelectedSubchapter] = useState("");
//   const [selectedQuestion, setSelectedQuestion] = useState("");
//   const [selectedChapters, setSelectedChapters] = useState([]);

//   // Pagination states
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;

//   useEffect(() => {
//     if (selectedState && selectedClass && selectedSubject) {
//       const chapters = chaptersData[selectedState]?.[selectedClass]?.[selectedSubject] || [];
//       console.log("Chapters Data: ", chapters); // Debugging line
//       setSelectedChapters(chapters);
//     } else {
//       setSelectedChapters([]);
//     }
//   }, [selectedState, selectedClass, selectedSubject]);

//   const handleChapterSelection = (event) => {
//     const chapter = event.target.value;
//     setSelectedChapterState(chapter);
//     setSelectedChapter(chapter); // Set chapter context state
//   };

//   // Pagination logic
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentChapters = selectedChapters.slice(indexOfFirstItem, indexOfLastItem);

//   const totalPages = Math.ceil(selectedChapters.length / itemsPerPage);

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const chapterObject = selectedChapters.find(
//     (chapter) => chapter.chapter === selectedChapter
//   ) || { questions: [], subchapters: [] }; // Default fallback to avoid undefined issues

//   console.log("Selected Chapter Object: ", chapterObject); // Debugging line to check chapter object

//   const handleNext = () => {
//     setCurrentStep(currentStep + 1);
//     navigate("/question");
//   };

//   return (
//     // <div className="flex flex-col gap-8 w-full h-[100vh] bg-[#00665A] text-black ">
//     //   <div className="flex flex-col gap-4 w-[30%] bg-[#E0F7FA] p-5 h-[90%] ">
//     //     <hl className="w-[135px] h-[36px] text-[30px] font-semibold leading-[36.31px] text-left underline">
//     //       Chapter
//     //     </hl>
//     //     {currentChapters.length > 0 ? (
//     //       currentChapters.map((chapter, index) => (
//     //         <a
//     //           key={index}
//     //           href="#"
//     //           onClick={() => handleChapterSelection({ target: { value: chapter.chapter } })}
//     //           className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
//     //             chapter.chapter === selectedChapter
//     //               ? 'bg-blue-100 hover:bg-blue-200'
//     //               : 'bg-[rgba(0,153,135,0.2)] hover:bg-gray-200'
//     //           }`}
//     //         >
//     //           <span>{chapter.chapter}</span>
//     //           <span className="text-sm ml-0">{chapter.questions?.length || 0} Qns</span>
//     //         </a>
//     //       ))
//     //     ) : (
//     //       <h1>No chapters available</h1>
//     //     )}

//     //     {/* Pagination Controls */}
//     //     {selectedChapters.length > itemsPerPage && (
//     //       <div className="flex justify-between mt-4 bg-[#E0F7FA] p-4 w-full">
//     //         <button
//     //           onClick={handlePrevPage}
//     //           disabled={currentPage === 1}
//     //           className={`px-4 py-2 rounded-lg ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
//     //         >
//     //           Previous
//     //         </button>
//     //         <span className="text-sm">
//     //           Page {currentPage} of {totalPages}
//     //         </span>
//     //         <button
//     //           onClick={handleNextPage}
//     //           disabled={currentPage === totalPages}
//     //           className={`px-4 py-2 rounded-lg ${currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
//     //         >
//     //           Next
//     //         </button>
//     //       </div>
//     //     )}
//     //   </div>

//     //   {/* Subchapter Dropdown */}
//     //   {chapterObject.subchapters && Array.isArray(chapterObject.subchapters) && chapterObject.subchapters.length > 0 && (
//     //     <div className="flex justify-between items-center">
//     //       <label className="font-semibold text-sm text-gray-600 w-[30%] text-right">
//     //         Subchapters:
//     //       </label>
//     //       <select
//     //         className="w-[70%] px-3 cursor-pointer py-2 border border-gray-300 rounded bg-gray-100 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-blue-500 focus:outline-none"
//     //         onChange={(e) => setSelectedSubchapter(e.target.value)}
//     //         value={selectedSubchapter}
//     //       >
//     //         <option value="">Select a subchapter</option>
//     //         {chapterObject.subchapters.map((subchapter, index) => (
//     //           <option key={index} value={subchapter}>
//     //             {subchapter}
//     //           </option>
//     //         ))}
//     //       </select>
//     //     </div>
//     //   )}

//     //   {/* Questions Section */}
//     //   {chapterObject.questions && Array.isArray(chapterObject.questions) && chapterObject.questions.length > 0 ? (
//     //     <div className="flex flex-col gap-4">
//     //       <div className="flex justify-between items-center">
//     //         <label className="font-semibold text-sm text-gray-600 w-[30%] text-right">
//     //           Questions:
//     //         </label>
//     //         <button
//     //           className="px-4 py-2 bg-green-700 text-white rounded-lg w-[70%] hover:bg-green-800"
//     //           onClick={handleNext}
//     //         >
//     //           Go To Questions
//     //         </button>
//     //       </div>
//     //     </div>
//     //   ) : (
//     //     <h3>No questions available for this chapter</h3> // Display a message if no questions
//     //   )}

//     //   {selectedSubject && (
//     //     <button
//     //       className="bg-blue-500 text-white mt-4 px-4 py-2 rounded focus:outline-none"
//     //       onClick={handleNext}
//     //     >
//     //       Next
//     //     </button>
//     //   )}
//     // </div>

//   );
// };

// export default ChapterComponent;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { chaptersData } from "./chapterdata";
import { useChapterContext } from "./ChapterContext";

const ChapterComponent = () => {
  const navigate = useNavigate();
  const {selectedState,selectedClass,selectedSubject,setSelectedSubject,currentStep,setCurrentStep} = useChapterContext();
  const { setSelectedChapter, setSelectedQuestions } = useChapterContext();

  const [selectedChapter, setSelectedChapterState] = useState("");
  const [selectedSubchapter, setSelectedSubchapter] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [selectedChapters, setSelectedChapters] = useState([]);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    if (selectedState && selectedClass && selectedSubject) {
      const chapters =
        chaptersData[selectedState]?.[selectedClass]?.[selectedSubject] || [];
      setSelectedChapters(chapters);
    } else {
      setSelectedChapters([]);
    }
  }, [selectedState, selectedClass, selectedSubject]);

  const handleChapterSelection = (event) => {
    const chapter = event.target.value;
    setSelectedChapterState(chapter);
    setSelectedChapter(chapter); 
  };


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentChapters = selectedChapters.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(selectedChapters.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const chapterObject = selectedChapters.find(
    (chapter) => chapter.chapter === selectedChapter
  ) || { questions: [], subchapters: [] };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
    navigate("/question");
  };

  return (
    <div className="flex w-full h-[100vh] bg-[#E0F7FA] text-black overflow-y-auto scrollbar-hide ">
      <div className="flex flex-col gap-4 h-[80%] w-[30%] bg-[#E0F7FA] p-5 ">
        <hl className="w-[135px] h-[36px] text-[30px] font-semibold leading-[36.31px] text-left ">
          Chapter
        </hl>
        {currentChapters.length > 0 ? (
          currentChapters.map((chapter, index) => (
            <a
              key={index}
              href="#"
              onClick={() =>
                handleChapterSelection({ target: { value: chapter.chapter } })
              }
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${chapter.chapter === selectedChapter
                  ? "bg-blue-100 hover:bg-blue-200"
                  : "bg-[rgba(0,153,135,0.2)] hover:bg-gray-200"
                }`}
            >
              <span>{chapter.chapter}</span>
              <span className="text-sm ml-0">
                {chapter.questions?.length || 0} Qns
              </span>
            </a>
          ))
        ) : (
          <h1>No chapters available</h1>
        )}

        {/* Pagination Controls 👇👇👇👇 */}


        {selectedChapters.length > itemsPerPage && (
          <div className="flex justify-between p-3  bg-[#E0F7FA]  w-[100%]">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg ${currentPage === 1
                  ? "bg-gray-300"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
            >
              Previous
            </button>
            <span className="text-sm">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg ${currentPage === totalPages
                  ? "bg-gray-300"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
            >
              Next
            </button>
          </div>
        )}

{/* Take a Quiz button 👇👇👇👇*/}

        {/* <div className="w-full">
          <button className="w-[200px] h-[58px] bg-[#009688] text-white rounded-[20px]  p-[5px] hover:opacity-75 absolute bottom-10 left-20 transition-opacity duration-300 ease-in-out">
            Take Quiz
          </button>
        </div> */}
      </div>

      <div className="flex flex-col gap-8 w-[75%] text-[#252641]  bg-[#FFFFFF] p-5 h-full">
        {/* {chapterObject.subchapters &&
          Array.isArray(chapterObject.subchapters) &&
          chapterObject.subchapters.length > 0 && (
            <div className="flex justify-between items-center">
              <label className="font-semibold text-sm text-gray-600 w-[30%] text-right">
                Subchapters:
              </label>
              <select
                className="w-[70%] px-3 cursor-pointer py-2 border border-gray-300 rounded bg-gray-100 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-blue-500 focus:outline-none"
                onChange={(e) => setSelectedSubchapter(e.target.value)}
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

        {/* Questions Section */}
        {chapterObject.questions &&
          Array.isArray(chapterObject.questions) &&
          chapterObject.questions.length > 0 ? (
          <div className="flex flex-col w-full gap-4 bg-white p-6 rounded-lg overflow-y-auto scrollbar-hide">
            <div className="font-semibold text-xl text-gray-800 border-b fixed top-0 left-[28.5%] py-10  w-full bg-[#009688] pb-2">
              <h3 className="ml-10 ">Questions for {selectedChapter}</h3>
            </div>

            <ul className="list-disc mt-9 text-sm text-gray-700 space-y-3 bg-gray-50 p-4 rounded-lg shadow-inner">
              {chapterObject.questions.map((question, index) => (
                <li
                  key={index}
                  className="mb-1 pl-2 cursor-pointer list-none w-full border-l-4 border-green-600 hover:bg-green-100 transition duration-300 ease-in-out"
                >
                  {question}
                </li>
              ))}
            </ul>

            {/* Next Button */}
            {/* <div className="flex justify-end mt-4">
              <button
                className="px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition duration-300 ease-in-out"
                onClick={handleNext}
              >
                Go To Questions
              </button>
            </div> */}
          </div>
        ) : (
          <h3 className="text-lg font-semibold text-center m-auto text-gray-600">
            No questions available for this chapter
          </h3>
        )}

        {/* {selectedSubject && (
          <button
            className="bg-blue-500 text-white mt-4 px-4 py-2 rounded focus:outline-none"
            onClick={handleNext}
          >
            Next
          </button>
        )} */}
      </div>
    </div>
  );
};

export default ChapterComponent;
