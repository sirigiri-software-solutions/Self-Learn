// import React, { useState } from 'react';
// import Chapter from './Chapter';
// import { useNavigate } from 'react-router-dom';
// import './state.css'; // Import your CSS file here
// // import { FaArrowAltCircleUp } from "react-icons/fa";
// import { FaArrowUp } from "react-icons/fa";
// import WindowWidth from './WindowWidth';

// const StateDropdown = () => {
//   const [selectedState, setSelectedState] = useState('');
//   const [selectedClass, setSelectedClass] = useState('');
//   const [selectedSubject, setSelectedSubject] = useState('');
//   const [selectedChapter, setSelectedChapter] = useState('');
//   const [EnptytextArea, setSelectedEnptytextArea] = useState(false);
//   const [selectedcontent, setSelectedContent] = useState(true);

//   const handleStateChange = (event) => {
//     setSelectedState(event.target.value);
//     setSelectedClass('');
//     setSelectedSubject('');
//     setSelectedChapter('');
//   };

//   const handleClassChange = (event) => {
//     setSelectedClass(event.target.value);
//     setSelectedSubject('');
//     setSelectedChapter('');
//   };

//   const handleSubjectChange = (event) => {
//     setSelectedSubject(event.target.value);
//     setSelectedChapter('');
//   };

//   const handleChapterChange = (chapter) => {
//     setSelectedChapter(chapter);
//   };

//   const getClassOptions = () => {
//     switch (selectedState) {
//       case 'Andhra Pradesh':
//         return ['6', '7', '8', '9', '10', '11', '12', 'UG', 'PG'];
//       case 'Telangana':
//         return ['Nursery', 'LKG', 'UKG', '1', '2', '3', '4', '5'];
//       default:
//         return ['Please select a state first'];
//     }
//   };

//   const subjectOptions = () => {
//     if (selectedState === 'Andhra Pradesh') {
//       switch (selectedClass) {
//         case '6':
//         case '7':
//         case '8':
//         case '9':
//         case '10':
//           return ['Telugu', 'English', 'Hindi', 'Mathematics', 'Science', 'Social Studies'];
//         case '11':
//         case '12':
//           return ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'English'];
//         case 'UG':
//         case 'PG':
//           return ['Engineering', 'Medicine', 'Arts', 'Science'];
//         default:
//           return ['Please select a class'];
//       }
//     } else if (selectedState === 'Telangana') {
//       switch (selectedClass) {
//         case 'Nursery':
//           return ['Rhymes', 'Drawing'];
//         case 'LKG':
//         case 'UKG':
//           return ['Rhymes', 'English', 'Drawing'];
//         case '1':
//         case '2':
//         case '3':
//           return ['Rhymes', 'English', 'Mathematics', 'Drawing'];
//         case '4':
//         case '5':
//           return ['Telugu', 'English', 'Mathematics', 'Science', 'Social Studies', 'Drawing'];
//         default:
//           return ['Please select a class'];
//       }
//     } else {
//       return ['Please select a state first'];
//     }
//   };

//   const handelStateandEmptyarea =()=>{
//     // setSelectedEnptyTextArea(!EnptyTextArea);
//     setSelectedContent(false);
//   }

//   const navigate = useNavigate();

//   const goToDashboard = () => {
//     navigate('/');
//   };

//   return (
//     <div className="container">
//       <button
//         onClick={goToDashboard}
//         className="logout-button"
//       >
//         Log out
//       </button>
//       {/* <div className="dropdown-container">
//         <div className="flex items-center mb-4 w-full">
//           <label className="dropdown-label">State:</label>
//           <select
//             className="dropdown"
//             value={selectedState}
//             onChange={handleStateChange}
//           >
//             <option value="">Select a State</option>
//             <option value="Andhra Pradesh">Andhra Pradesh</option>
//             <option value="Telangana">Telangana</option>
//           </select>
//         </div>

//         <div className="flex items-center mb-4 w-full">
//           <label className="dropdown-label">Class:</label>
//           <select
//             className="dropdown"
//             value={selectedClass}
//             onChange={handleClassChange}
//           >
//             <option value="">Select a Class</option>
//             {getClassOptions().map((classOption) => (
//               <option key={classOption} value={classOption}>
//                 {classOption}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="flex items-center mb-4 w-full">
//           <label className="dropdown-label">Subjects:</label>
//           <select
//             className="dropdown"
//             value={selectedSubject}
//             onChange={handleSubjectChange}
//           >
//             <option value="">Select a Subject</option>
//             {subjectOptions().map((subjectOption) => (
//               <option key={subjectOption} value={subjectOption}>
//                 {subjectOption}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="chapter-container">
//           <Chapter
//             state={selectedState}
//             clas={selectedClass}
//             subject={selectedSubject}
//             onChapterChange={handleChapterChange}
//           />
//         </div>

//         {selectedState && <p className="selected-info">You have selected state: {selectedState}</p>}
//         {selectedClass && <p className="selected-info">You have selected class: {selectedClass}</p>}
//         {selectedSubject && <p className="selected-info">You have selected subject: {selectedSubject}</p>}
//         {selectedChapter && <p className="selected-info">You have selected chapter: {selectedChapter}</p>}
//         <button onClick={()=>handelStateandEmptyarea()}>Next</button>
//       </div> */}
//       {/* <button onClick={()=>handelStateandEmptyarea()}>Next</button> */}
//       {
//         selectedcontent ?       <div className="dropdown-container">
//         <div className="flex items-center mb-4 w-full">
//           <label className="dropdown-label">State:</label>
//           <select
//             className="dropdown"
//             value={selectedState}
//             onChange={handleStateChange}
//           >
//             <option value="">Select a State</option>
//             <option value="Andhra Pradesh">Andhra Pradesh</option>
//             <option value="Telangana">Telangana</option>
//           </select>
//         </div>

//         <div className="flex items-center mb-4 w-full">
//           <label className="dropdown-label">Class:</label>
//           <select
//             className="dropdown"
//             value={selectedClass}
//             onChange={handleClassChange}
//           >
//             <option value="">Select a Class</option>
//             {getClassOptions().map((classOption) => (
//               <option key={classOption} value={classOption}>
//                 {classOption}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="flex items-center mb-4 w-full">
//           <label className="dropdown-label">Subjects:</label>
//           <select
//             className="dropdown"
//             value={selectedSubject}
//             onChange={handleSubjectChange}
//           >
//             <option value="">Select a Subject</option>
//             {subjectOptions().map((subjectOption) => (
//               <option key={subjectOption} value={subjectOption}>
//                 {subjectOption}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="chapter-container">
//           <Chapter
//             state={selectedState}
//             clas={selectedClass}
//             subject={selectedSubject}
//             onChapterChange={handleChapterChange}
//           />
//         </div>

//         {selectedState && <p className="selected-info">You have selected state: {selectedState}</p>}
//         {selectedClass && <p className="selected-info">You have selected class: {selectedClass}</p>}
//         {selectedSubject && <p className="selected-info">You have selected subject: {selectedSubject}</p>}
//         {selectedChapter && <p className="selected-info">You have selected chapter: {selectedChapter}</p>}
//         <button onClick={()=>handelStateandEmptyarea()}>Submit (dout , test
//           )</button>
//       </div> :
//       <div className="textarea-container">
//         <textarea
//           placeholder="Enter your doubt"
//           className="textarea"
//         />
//         {/* <button>Search Here...</button> */}
//         <input  type='text' placeholder='you have a dout' className='inputtext'/>
//         <FaArrowUp className='iconarrow'/>
//       </div>
//       }
// <WindowWidth/>

//       {/* <div className="textarea-container">
//         <textarea
//           placeholder="Enter your doubt"
//           className="textarea"
//         />
//         <button>Search Here...</button>
//       </div> */}
//     </div>
//   );
// };

// export default StateDropdown;

import React, { useState } from "react";
import Chapter from "./Chapter";
import { Link, useNavigate } from "react-router-dom";
import "./state.css";
import { useChapterContext } from "./ChapterContext";
// const { selectedQuestions } = useChapterContext();

const StateDropdown = () => {
const { selectedQuestions } = useChapterContext();

  const [selectedState, setSelectedState] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedChapter, setSelectedChapter] = useState("");
  // const [setchapterquestion]
  const [selectQuestion, setSelectedQuestion] = useState("");

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedClass("");
    setSelectedSubject("");
    setSelectedChapter("");
  };

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
    setSelectedSubject("");
    setSelectedChapter("");
  };

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
    setSelectedChapter("");
  };

  const handleChapterChange = (chapter) => {
    setSelectedChapter(chapter);
    // setSelectedQuestion(subchapter)
  };

  const handelsubchapter = (subchapter)=>{
    setSelectedQuestion(subchapter)
  }

  const getClassOptions = () => {
    switch (selectedState) {
      case "Andhra Pradesh":
        return [
          "6",
          "7",
          "8",
          "9",
          "10",
          "Inter_FIRST_YEAR",
          "Inter_SECOND_YEAR",
          "12",
          "UG",
          "PG",
        ];
      case "Telangana":
        return ["8","9","10","Inter_1st_year","Inter_2nd_year"];
      default:
        return ["Please select a state first"];
    }
  };

  const subjectOptions = () => {
    if (selectedState === "Andhra Pradesh") {
      switch (selectedClass) {
        case "6":
        case "7":
        case "8":
          return [
            "Telugu_Sem_1",
            "Telugu_Sem_2",
            "English",
            "English_Supplementary",
            "Hindi",
            "Math_SEM1",
            "Math_SEM2",
            "Physics_SEM1",
            "Physics_SEM2",
            "Biology_Sem1",
            "Biology_Sem2",
            "Social_Geography_Sem_1",
            "Social_Geography_Sem_2",
            "Social_History_sem_1",
            "Social_History_sem_2",
            "Social_Politics_sem_1",
            "Social_Politics_sem_2",
          ];

        case "9":
          return [
            "Telugu_Sem_1",
            "Telugu_Sem_2",
            "English",
            "English_Supplementary",
            "Hindi",
            "Math_SEM1",
            "Math_SEM2",
            "Physics_SEM1",
            "Physics_SEM2",
            "Biology_Sem1",
            "Biology_Sem2",
            "Social_Geography",
            "Social_History",
            "Social_Politics",
            "Social_Economics",
          ];
        case "10":
          return [
            "Telugu_Sem_1",
            "Telugu_Sem_2",
            "English",
            "English_Supplementary",
            "Hindi",
            "Math_SEM1",
            "Math_SEM2",
            "Physics",
            "Biology",
            "Social_Geography",
            "Social_History",
            "Social_Politics",
            "Social_Economics",
          ];
        case "Inter_FIRST_YEAR":
          return [
            "Physics",
            "MATHEMATICS_I_A",
            "MATHEMATICS_I_B",
            "PHYSICS_I",
            "CHEMISTRY_I",
            "BOTANY_I",
            "ZOOLOGY_I",
            "English",
          ];

        case "Inter_SECOND_YEAR":
          return [
            "Physics",
            "MATHEMATICS_II_A",
            "MATHEMATICS_II_B",
            "PHYSICS_II",
            "CHEMISTRY_II",
            "BOTANY_II",
            "ZOOLOGY_II",
            "English",
          ];

        case "UG":
        case "PG":
          return ["Engineering", "Medicine", "Arts", "Science"];
        default:
          return ["Please select a class"];
      }
    } else if (selectedState === "Telangana") {
      switch (selectedClass) {
        case "8":
        case "9":
        case "10":
          return ["Mathematics", "Physics","Biology", "Telugu","Social_Science", "English"];
       
        case "Inter_1st_year":
          return ["Mathematics_IA", "Mathematics_IB", "Physics", "Chemistry","Biology","Geography"];
        case "Inter_2nd_year":
          return ["Mathematics_IIA", "Mathematics_IIB", "Physics", "Chemistry","Biology","Economics","Geography"];

        case "5":
          return [
            "Telugu",
            "English",
            "Mathematics",
            "Science",
            "Social Studies",
            "Drawing",
          ];
        default:
          return ["Please select a class"];
      }
    } else {
      return ["Please select a state first"];
    }
  };

  const navigate = useNavigate();

  // const handleNext = () => {
  //   setShowTextArea(true);
  // };

  // const goToLogin = () => {
  //   console.log("Navigating to login...");
  //   // navigate('/');
  //   <Link to="/">Go to Login</Link>;
  // };

  const goToDashboard = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("firstName");
    localStorage.setItem("isLoggedIn", "false");
    navigate('/');
  };

  const goToTestPage = () => {
    navigate("/test");
  };

  const goToDoubtPage = () => {
    navigate("/doubt");
  };
  const gotoQuestion = () => {
    navigate("/question"); 

  };


  return (
    <div className="container mx-auto max-w-lg p-4 overflow-auto">
<div className="bg-sky-400 w-full md:absolute flex flex-col md:flex-row left-0 top-0 p-4 md:p-2 mt-2 justify-between items-start md:items-center">
    <h3 className="text-[20px] text-center w-full md:w-[200px] font-bold text-blue-600 bg-white py-2 px-4 md:px-10 rounded-lg shadow-xl transition-transform transform hover:scale-105 cursor-pointer mb-4 md:mb-0">
        Hi user....
    </h3>
    <button
        onClick={goToDashboard}
        className="px-4 p-2 bg-gray-400 w-full text-white hover:scale-105 rounded-md md:w-[100px] md:mr-[5%] shadow-md hover:bg-blue-700 transition duration-300"
    >
        Log out
    </button>
</div>




      <div className="dropdown-container flex flex-col items-start justify-center p-5 bg-white rounded-lg shadow-md w-full mt-[10%] ">
      <div className="w-full text-center">
<h3 className="text-[20px] font-bold text-blue-600 bg-white p-4 px-6 md:px-10 rounded-lg transition-transform transform hover:scale-105 cursor-pointer mb-4 ">

     Select you Topic </h3>
</div>
        <div className="flex  items-center mb-4  mt-[30px] w-full">
          <label className="dropdown-label font-semibold text-sm text-gray-600 mr-4 w-[30%] text-right">
            State:
          </label>
          <select
        className="w-[80%] px-3 cursor-pointer py-2 border  border-gray-300 rounded bg-gray-100 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-blue-500 focus:outline-none"
            
            // className="dropdown flex-1 cursor-pointer p-2 border border-gray-300 rounded-md bg-gray-100 text-sm text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
            value={selectedState}
            onChange={handleStateChange}
          >
            <option value="">Select a State</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Telangana">Telangana</option>
          </select>
        </div>

        <div className="flex items-center mb-4 w-full">
          <label className="dropdown-label font-semibold text-sm text-gray-600 mr-4  w-[30%] text-right">
            Class:
          </label>
          <select
        className="w-[80%] px-3 cursor-pointer py-2 border border-gray-300 rounded bg-gray-100 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-blue-500 focus:outline-none"
          
          // className="dropdown flex-1 cursor-pointer p-2 border border-gray-300 rounded-md bg-gray-100 text-sm text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
            value={selectedClass}
            onChange={handleClassChange}
          >
            <option value="">Select a Class</option>
            {getClassOptions().map((classOption) => (
              <option key={classOption} value={classOption}>
                {classOption}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center mb-4 w-full">
          <label className="dropdown-label font-semibold text-sm text-gray-600 mr-4  w-[30%] text-right">
            Subjects:
          </label>
          <select
        className="w-[80%] px-3 cursor-pointer py-2 border border-gray-300 rounded bg-gray-100 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-blue-500 focus:outline-none"
           
           // className="dropdown flex-1 cursor-pointer p-2 border border-gray-300 rounded-md bg-gray-100 text-sm text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
            value={selectedSubject}
            onChange={handleSubjectChange}
          >
            <option value="">Select a Subject</option>
            {subjectOptions().map((subjectOption) => (
              <option key={subjectOption} value={subjectOption}>
                {subjectOption}
              </option>
            ))}
          </select>
        </div>

        <div className="chapter-container mb-4  w-full">
          <Chapter
            state={selectedState}
            clas={selectedClass}
            subject={selectedSubject}
            onChapterChange={handleChapterChange}
            onSubchapterChange = {handelsubchapter}
          />
        </div>

        {/* {selectedState && (
          <p className="selected-info text-xs text-gray-500 mt-2">
            You have selected state: {selectedState}
          </p>
        )}
        {selectedClass && (
          <p className="selected-info text-xs text-gray-500 mt-2">
            You have selected class: {selectedClass}
          </p>
        )}
        {selectedSubject && (
          <p className="selected-info text-xs text-gray-500 mt-2">
            You have selected subject: {selectedSubject}
          </p>
        )}
        {selectedChapter && (
          <p className="selected-info text-xs text-gray-500 mt-2">
            You have selected chapter: {selectedChapter}
          </p>
        )}
        {
          selectQuestion &&(
            <p className="selected-info text-xs text-gray-500 mt-2">
                subChapter :{selectQuestion}
</p>
          )
        } */}

        {selectedState &&
          selectedClass &&
          selectedSubject &&
          selectedChapter && (
            <div className="flex flex-col w-full gap-2">
              {/* <button onClick={handleNext} className="px-4 py-2 bg-green-500 text-white rounded-md w-full">Next</button> */}
              <button
      className="doubt-button px-4 py-2 bg-green-500 text-white rounded-md w-full"
      onClick={gotoQuestion}
    >
      Go to Questions
    </button> 

              {/* {
  selectedQuestions && selectedQuestions.length > 0 ?   (
    <button
      className="doubt-button px-4 py-2 bg-green-500 text-white rounded-md w-full"
      onClick={gotoQuestion}
    >
      Go to Questions
    </button> 
  ) :null
} */}

              <button
                className="doubt-button px-4 py-2 bg-yellow-500 text-white rounded-md w-full"
                onClick={goToDoubtPage}
              >
                Doubt
              </button>
              <button
                className="test-button px-4 py-2 bg-purple-500 text-white rounded-md w-full"
                onClick={goToTestPage}
              >
                Test
              </button>
            </div>
          )}
      </div>

      {/* <WindowWidth /> */}
    </div>
  );
};

export default StateDropdown;
