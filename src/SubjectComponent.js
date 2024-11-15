// import React from 'react';
// import { useChapterContext } from './ChapterContext';

// const SubjectComponent = () => {
//   const { selectedState, selectedClass, selectedSubject, setSelectedSubject, currentStep, setCurrentStep } = useChapterContext();

//   const handleSubjectChange = (event) => {
//     setSelectedSubject(event.target.value);
//   };

//   const handleNext = () => {
//     setCurrentStep(currentStep + 1);
//   };

//   const getSubjectOptions = () => {
//     if (selectedState === "Andhra Pradesh") {
//       switch (selectedClass) {
//         case "6":
//         case "7":
//         case "8":
//           return ["Telugu_Sem_1", "Telugu_Sem_2", "English", "Math_SEM1", "Physics_SEM1"];
//         case "9":
//         case "10":
//           return ["Physics", "Chemistry", "Math"];
//         case "Inter_FIRST_YEAR":
//           return ["Physics", "Mathematics_I_A"];
//         case "Inter_SECOND_YEAR":
//           return ["Physics", "Mathematics_II_A"];
//         default:
//           return [];
//       }
//     } else if (selectedState === "Telangana") {
//       switch (selectedClass) {
//         case "8":
//         case "9":
//         case "10":
//           return ["Mathematics", "Physics", "Biology", "Telugu"];
//         default:
//           return [];
//       }
//     }
//     return [];
//   };

//   return (
//     <div>
//       <div className="flex items-center mb-4">
//         <label className="mr-4">Subjects:</label>
//         <select value={selectedSubject} onChange={handleSubjectChange}>
//           <option value="">Select a Subject</option>
//           {getSubjectOptions().map((subjectOption) => (
//             <option key={subjectOption} value={subjectOption}>
//               {subjectOption}
//             </option>
//           ))}
//         </select>
//       </div>

//       {selectedSubject && (
//         <button className="bg-blue-500 text-white mt-4" onClick={handleNext}>
//           Next
//         </button>
//       )}
//     </div>
//   );
// };

// export default SubjectComponent;


// import React, { useState } from 'react';
// import { useChapterContext } from './ChapterContext';

// const SubjectComponent = () => {
//   const { selectedState, selectedClass, selectedSubject, setSelectedSubject, currentStep, setCurrentStep } = useChapterContext();
//   const [selectedoptions, setSelectedoptions] = useState(false)
//   const handleSubjectChange = (event) => {
//     setSelectedSubject(event.target.value);
//   };

//   const handleNext = () => {
//     setCurrentStep(currentStep + 1);
//     console.log(selectedSubject)
//   };

//   const subjectOptions = () => {
//     if (selectedState === "Andhra Pradesh") {
//         switch (selectedClass) {
//           case "6":
//           case "7":
//           case "8":
//             return [
//               "Telugu_Sem_1",
//               "Telugu_Sem_2",
//               "English",
//               "English_Supplementary",
//               "Hindi",
//               "Math_SEM1",
//               "Math_SEM2",
//               "Physics_SEM1",
//               "Physics_SEM2",
//               "Biology_Sem1",
//               "Biology_Sem2",
//               "Social_Geography_Sem_1",
//               "Social_Geography_Sem_2",
//               "Social_History_sem_1",
//               "Social_History_sem_2",
//               "Social_Politics_sem_1",
//               "Social_Politics_sem_2",
//             ];
  
//           case "9":
//             return [
//               "Telugu_Sem_1",
//               "Telugu_Sem_2",
//               "English",
//               "English_Supplementary",
//               "Hindi",
//               "Math_SEM1",
//               "Math_SEM2",
//               "Physics_SEM1",
//               "Physics_SEM2",
//               "Biology_Sem1",
//               "Biology_Sem2",
//               "Social_Geography",
//               "Social_History",
//               "Social_Politics",
//               "Social_Economics",
//             ];
//           case "10":
//             return [
//               "Telugu_Sem_1",
//               "Telugu_Sem_2",
//               "English",
//               "English_Supplementary",
//               "Hindi",
//               "Math_SEM1",
//               "Math_SEM2",
//               "Physics",
//               "Biology",
//               "Social_Geography",
//               "Social_History",
//               "Social_Politics",
//               "Social_Economics",
//             ];
//           case "Inter_FIRST_YEAR":
//             return [
//               "Physics",
//               "MATHEMATICS_I_A",
//               "MATHEMATICS_I_B",
//               "PHYSICS_I",
//               "CHEMISTRY_I",
//               "BOTANY_I",
//               "ZOOLOGY_I",
//               "English",
//             ];
  
//           case "Inter_SECOND_YEAR":
//             return [
//               "Physics",
//               "MATHEMATICS_II_A",
//               "MATHEMATICS_II_B",
//               "PHYSICS_II",
//               "CHEMISTRY_II",
//               "BOTANY_II",
//               "ZOOLOGY_II",
//               "English",
//             ];
  
//           case "UG":
//           case "PG":
//             return ["Engineering", "Medicine", "Arts", "Science"];
//           default:
//             return ["Please select a class"];
//         }
//       } else if (selectedState === "Telangana") {
//         switch (selectedClass) {
//           case "8":
//           case "9":
//           case "10":
//             return ["Mathematics", "Physics","Biology", "Telugu","Social_Science", "English"];
         
//           case "Inter_1st_year":
//             return ["Mathematics_IA", "Mathematics_IB", "Physics", "Chemistry","Biology","Geography"];
//           case "Inter_2nd_year":
//             return ["Mathematics_IIA", "Mathematics_IIB", "Physics", "Chemistry","Biology","Economics","Geography"];
  
//           case "5":
//             return [
//               "Telugu",
//               "English",
//               "Mathematics",
//               "Science",
//               "Social Studies",
//               "Drawing",
//             ];
//           default:
//             return ["Please select a class"];
//         }
//       } else {
//         return ["Please select a state first"];
//       }
//   };
//   const handboderClick=()=>{
//     setSelectedoptions(!selectedoptions)
//     console.log(selectedoptions)

//   }

//   return (
//     <div className="bg-[#CCFFF9] min-h-screen flex flex-col items-center">
//     <div className="text-center ">
//       <h1 className="text-[40px] w-[598px] h-[36px] leading-36 font-medium text-[#424242] mb-4 mt-[175px]">Select Your Subject</h1>
//       <p className="w-[641px] h-[36px] gap-0 opacity-70 font-inter text-[24px] font-normal leading-[36px] text-left underline-offset-from-font decoration-skip-ink">
//         Your Learning Adventure Continues - <span className='text-[#009688]'> Choose Your Subject!</span>
//       </p>
//     </div>
  
//     <div className="relative w-full flex justify-center">
//       {/* <label className="font-semibold text-sm text-gray-600 mr-4 w-[15%] text-right">
//         Subjects:
//       </label> */}
//       <select
//         className={`bg-green-200 px-[30px] outline-none w-[928px] h-[50px] rounded-t-[29px] border-t-[3px] border-l-[3px] ${selectedoptions ? "" : "rounded-b-[29px] border-b-[3px] border-r-[3px]"} border-solid border-[#00796B4D]`}
//         value={selectedSubject}
//         onChange={handleSubjectChange}
//         onClick={handboderClick}
//       >
//         <option value="" className="custom-option">Select a Subject</option>
//         {subjectOptions().map((subjectOption) => (
//           <option key={subjectOption} value={subjectOption}>
//             {subjectOption}
//           </option>
//         ))}
//       </select>

      
//     </div>

  
//     {selectedSubject && (
//       <button
//         className="mt-4 absolute bottom-[15%] right-[10%] px-6 py-2 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
//         onClick={handleNext}
//       >
//         Next
//       </button>
//     )}
//   </div>
  
//   );
// };

// export default SubjectComponent;

import React, { useState } from 'react';
import { useChapterContext } from './ChapterContext';
import { RiArrowDropDownLine } from "react-icons/ri";


const SubjectComponent = () => {
  const { selectedState, selectedClass, selectedSubject, setSelectedSubject, currentStep, setCurrentStep } = useChapterContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSubjectChange = (subjectOption) => {
    setSelectedSubject(subjectOption);
    setIsDropdownOpen(false); // Close dropdown when a subject is selected
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
    console.log(selectedSubject);
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
          return ["Mathematics", "Physics", "Biology", "Telugu", "Social_Science", "English"];

        case "Inter_1st_year":
          return ["Mathematics_IA", "Mathematics_IB", "Physics", "Chemistry", "Biology", "Geography"];
        case "Inter_2nd_year":
          return ["Mathematics_IIA", "Mathematics_IIB", "Physics", "Chemistry", "Biology", "Economics", "Geography"];

        case "5":
          return ["Telugu", "English", "Mathematics", "Science", "Social Studies", "Drawing"];
        default:
          return ["Please select a class"];
      }
    } else {
      return ["Please select a state first"];
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  return (
    <div className="bg-[#CCFFF9] h-[100vh] overflow-hidden flex flex-col items-center">
      <div className="text-center ">
        <h1 className="text-[40px] w-[598px] h-[36px] leading-36 font-medium text-[#424242] mb-4 mt-[105px]">Select Your Subject</h1>
        <p className="w-[641px] h-[36px] gap-0 opacity-70 font-inter text-[24px] font-normal leading-[36px] text-left underline-offset-from-font decoration-skip-ink">
          Your Learning Adventure Continues - <span className='text-[#009688]'> Choose Your Subject!</span>
        </p>
      </div>

      <div className="relative mt-6 w-full h-full flex justify-center">
        {/* Dropdown Button */}
        <button
          onClick={toggleDropdown}
          className={`flex justify-between px-[30px] h-[50px] outline-none w-[700px] rounded-t-[29px] border-t-[3px] border-l-[3px] border-r-[3px] ${isDropdownOpen ? "" : "rounded-b-[29px] border-b-[3px] border-r-[3px]"} border-solid border-[#00796B4D] text-left`}>
          {selectedSubject ? <div className='mt-3'>{selectedSubject}</div>
          

          : "Select a Subject"}
          <div><RiArrowDropDownLine size={50} className='text-gray-900' /></div>

        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute z-10 w-[700px] h-[90%] pb-4 font-semibold  overflow-y-auto bg-[#00796B] bg-opacity-20 border border-[#9DD1CF] rounded-b-[29px] mt-[3.7%] custom-scrollbar">
        
            {subjectOptions().map((subjectOption) => (

              <div
                key={subjectOption}
                onClick={() => handleSubjectChange(subjectOption)}
                className="px-4 p-3   cursor-pointer hover:bg-[#00796B]"

              >
                {subjectOption}
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedSubject && (
        <button
          className="mt-4 absolute bottom-[15%] right-[10%] px-6 py-2 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
          onClick={handleNext}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default SubjectComponent;
