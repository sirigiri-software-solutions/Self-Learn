// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// import { chaptersData } from "../src/chapterdata";
// import "../src/chapters.css"


// const Chapter = ({ state, clas, subject, onChapterChange,onSubchapterChange }) => {

//   //   const handleChapterSelection = (event) => {
//   //     const selectedChapter = event.target.value;
//   //     onChapterChange(selectedChapter);
//   //   };

//   //   return (
//   //     <div className="flex items-center mb-4 w-full">
//   //       <label className="font-semibold text-sm text-gray-600 mr-4 w-32 text-right">
//   //         Chapters:
//   //       </label>
//   //       <select
//   //         className="flex-1 px-3 cursor-pointer py-2 border border-gray-300 rounded bg-gray-100 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-blue-500 focus:outline-none"
//   //         onChange={handleChapterSelection}
//   //       >
//   //         {chaptersData[state] &&
//   //         chaptersData[state][clas] &&
//   //         chaptersData[state][clas][subject] ? (
//   //           chaptersData[state][clas][subject].map((chapter, index) => (
//   //             <option key={index} value={chapter}>
//   //               {chapter}
//   //             </option>
//   //           ))
//   //         ) : (
//   //           <option>No chapters available</option>
//   //         )}
//   //       </select>
//   //     </div>
//   //   );
//   // };

//   // export default Chapter;



  
//   const navigate = useNavigate();
//   const [selectedChapter, setSelectedChapter] = useState("");
//   const [selectedSubchapter, setSelectedSubchapter] = useState("");
//   const [selectedQuestion, setSelectedQuestion] = useState("");

//   const handleChapterSelection = (event) => {
//     const chapter = event.target.value;
//     setSelectedChapter(chapter);
//     setSelectedSubchapter("");
//     onChapterChange(chapter);
//   };

//   const handleSubchapterSelection = (event) => {
//     const subchapter = event.target.value;
//     setSelectedQuestion(selectedSubchapter)
//     console.log(subchapter)
//     setSelectedSubchapter(subchapter);
//     onSubchapterChange(subchapter)
//     // setSelectedQuestion("");
//   };
//   const handleQuestionSelection = (event) => {
//     setSelectedQuestion(event.target.value);
//   };

//   const selectedChapters = chaptersData[state]?.[clas]?.[subject] || [];

//   const chapterObject = selectedChapters.find(
//     (chapter) => chapter.chapter === selectedChapter
//   );
//   const gotoQuestion = () => {
//     navigate("/question");
//   }

//   return (
//     <div className="flex flex-col mb-4 w-full h-full ">
//       <div className="flex flex-row items-center w-full space-x-2.5 ">
//         <label className="font-semibold text-sm text-gray-600 w-[30%] text-right">
//           Chapters:
//         </label>
//         <select
//           className="w-[70%] px-3 cursor-pointer py-2 border border-gray-300 rounded bg-gray-100 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-blue-500 focus:outline-none"
//           onChange={handleChapterSelection}
//         >
//           <option value="">Select a question</option>
//           {selectedChapters.length > 0 ? (
//             selectedChapters.map((chapter, index) => (
//               <option key={index} value={chapter.chapter}>
//                 {chapter.chapter}
//               </option>
//             ))
//           ) : (
//             <option>No chapters available</option>
//           )}
//         </select>
//       </div>

//       {/* Subchapter Dropdown */}
//       {chapterObject && chapterObject.subchapters.length > 0 && (
//         <div className="flex items-center mb-4 mt-[3%]">
//           <label className="dropdown-label font-semibold text-sm text-gray-600 mr-4  w-[30%] text-right">
//             Subchapters:
//           </label>
//           <select
//             className="w-[80%] px-3 cursor-pointer py-2 border border-gray-300 rounded bg-gray-100 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-blue-500 focus:outline-none"
//             onChange={handleSubchapterSelection}
//             value={selectedSubchapter}>
//             <option value="">Select a subchapter</option>
//             {chapterObject.subchapters.map((subchapter, index) => (
//               <option key={index} value={subchapter}>
//                 {subchapter}
//               </option>
//             ))}
//           </select>
//         </div>
//       )}
    

//       {chapterObject &&
//         chapterObject.questions &&
//         chapterObject.questions.length > 0 && (
//           <div className="flex items-center mb-4 w-full">
//             <label className="dropdown-label font-semibold text-sm text-gray-600 mr-4 w-[30%] text-right">
//               Questions:
//             </label>
// {/*         
//             <div className="w-[70%]">
//               <div className="overflow-x-auto">
//                 <select
//                   className="w-[200px] px-3 cursor-pointer py-2 border border-gray-300 rounded bg-gray-100 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-blue-500 focus:outline-none text-wrap"
//                   onChange={handleQuestionSelection}
//                   value={selectedQuestion}
//                 >
//                   <option value=''>Select a question</option>
        
//                   {chapterObject.questions.map((question, index) => (
//                     <option
//                       className="ml-[50px] p-11"
//                       key={index}
//                       value={question}
//                     >
//                       {question}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div> */}

// <button
//                 className="doubt-button px-4 py-2 bg-green-700 mt-10 text-white rounded-md w-full"
//                 onClick={gotoQuestion}
//                 >
//                 Go To Questions
//               </button>
//           </div>
//         )}
//     </div>
//   );
// };

// export default Chapter;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { chaptersData } from "../src/chapterdata"; 
import "../src/chapters.css";
import { useChapterContext } from './ChapterContext'; 



const Chapter = ({ state, clas, subject, onChapterChange, onSubchapterChange }) => {
  const navigate = useNavigate();
  const { setSelectedQuestions } = useChapterContext(); 
  const [selectedChapter, setSelectedChapter] = useState("");
  const [selectedSubchapter, setSelectedSubchapter] = useState("");

  const handleChapterSelection = (event) => {
    const chapter = event.target.value;
    setSelectedChapter(chapter);
    setSelectedSubchapter(""); 
    onChapterChange(chapter);

    const chapterObject = chaptersData[state]?.[clas]?.[subject]?.find(chap => chap.chapter === chapter);
    if (chapterObject) {
      setSelectedQuestions(chapterObject.questions); 
    }
    else{
    setSelectedQuestions("there is no chapter selected")

    }
  };


  const handleSubchapterSelection = (event) => {
    const subchapter = event.target.value;
    setSelectedSubchapter(subchapter);
    onSubchapterChange(subchapter);
  };

  const selectedChapters = chaptersData[state]?.[clas]?.[subject] || [];
  const chapterObject = selectedChapters.find(chap => chap.chapter === selectedChapter);

  const gotoQuestion = () => {
    navigate("/question"); 

  };

  return (
    <div className="flex flex-col mb-4 w-full h-full">
      <div className="flex flex-row items-center w-full space-x-1">
      <label className="dropdown-label font-semibold text-sm text-gray-600 mr-4 w-[30%] text-right">

          Chapters:
        </label>
        <select
          className="w-[90%] md:w-[85%] px-3 cursor-pointer py-2 border border-gray-300 rounded bg-gray-100 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-blue-500 focus:outline-none"
          onChange={handleChapterSelection}
        >
          <option value="">Select a chapter</option>
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


      {chapterObject?.subchapters?.length > 0 && (
  <div className="flex items-center mb-4 mt-[3%]">
    <label className="dropdown-label font-semibold text-sm text-gray-600 mr-4 w-[20%] text-right">
      Subchapters:
    </label>
    <select
          className="w-[90%] md:w-[85%] px-3 cursor-pointer py-2 border border-gray-300 rounded bg-gray-100 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-blue-500 focus:outline-none"
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
)}


    </div>
  );
};

export default Chapter;