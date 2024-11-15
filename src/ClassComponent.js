// import React, { useState } from 'react';
// import { useChapterContext } from './ChapterContext';

// const ClassComponent = () => {
//   const { selectedState, selectedClass, setSelectedClass, currentStep, setCurrentStep } = useChapterContext();
//   const [selectedoptions, setSelectedoptions] = useState(false)

//   const handleClassChange = (event) => {
//     setSelectedClass(event.target.value);
//   };

//   const handleNext = () => {
//     setCurrentStep(currentStep + 1);
//     console.log(selectedState)
//     // console.log(selectedState)
//     console.log(selectedClass)
//   };
//   const handboderClick=()=>{
//     setSelectedoptions(!selectedoptions)
//     console.log(selectedoptions)

//   }

//   const getClassOptions = () => {
//     switch (selectedState) {
//       case "Andhra Pradesh":
//         return ["6", "7", "8", "9", "10", "Inter_FIRST_YEAR", "Inter_SECOND_YEAR", "12", "UG", "PG"];
//       case "Telangana":
//         return ["8", "9", "10", "Inter_1st_year", "Inter_2nd_year"];
//       default:
//         return [];
//     }
//   };

//   return (
//     <div className="bg-[#E0F7FA] min-h-screen flex flex-col items-center">
//     <div className="text-center ">
//       <h1 className="text-[40px] w-[598px] h-[36px] leading-36 font-medium text-[#424242] mb-4 mt-[175px]">Select Your Class</h1>
//       <p className="w-[641px] h-[36px] gap-0 opacity-70 font-inter text-[24px] font-normal leading-[36px] text-left underline-offset-from-font decoration-skip-ink">
//         Your Learning Journey Continues - <span className='text-[#009688]'> Choose Your Class!</span>
//       </p>
//     </div>
  
//     <div className="relative">
//       <select
//         className={` px-[30px] outline-none w-[928px] h-[50px] rounded-t-[30px] border-t-[3px] border-l-[3px] ${selectedoptions ? "" : "rounded-b-[29px] border-b-[3px] border-r-[3px]"} border-solid border-[#00796B4D]`}
//         value={selectedClass}
//         onChange={handleClassChange}
//         onClick={handboderClick}
//       >
//         <option value="" className="custom-option">Select a Class</option>
//         {getClassOptions().map((classOption) => (
//           <option key={classOption} value={classOption} className="custom-option bg-[#B3DEDD] ">
//             {classOption}
//           </option>
//         ))}
//       </select>
//     </div>
  
//     {selectedClass && (
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

// export default ClassComponent;

import React, { useState } from 'react';
import { useChapterContext } from './ChapterContext';
import { RiArrowDropDownLine } from "react-icons/ri";


const ClassComponent = () => {
  const { selectedState, selectedClass, setSelectedClass, currentStep, setCurrentStep } = useChapterContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClassChange = (classOption) => {
    setSelectedClass(classOption);
    setIsDropdownOpen(false); // Close dropdown on selection
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
    console.log(selectedState);
    console.log(selectedClass);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const getClassOptions = () => {
    switch (selectedState) {
      case "Andhra Pradesh":
        return ["6", "7", "8", "9", "10", "Inter_FIRST_YEAR", "Inter_SECOND_YEAR", "12", "UG", "PG"];
      case "Telangana":
        return ["8", "9", "10", "Inter_1st_year", "Inter_2nd_year"];
      default:
        return [];
    }
  };

  return (
    <div className="bg-[#E0F7FA] h-[100vh] overflow-hidden flex flex-col items-center">
      <div className="text-center ">
        <h1 className="text-[40px] w-[598px] h-[36px] leading-36 font-medium text-[#424242] mb-4 mt-[105px]">Select Your Class</h1>
        <p className="w-[641px] h-[36px] gap-0 opacity-70 font-inter text-[24px] font-normal leading-[36px] text-left underline-offset-from-font decoration-skip-ink">
          Your Learning Journey Continues - <span className='text-[#009688]'> Choose Your Class!</span>
        </p>
      </div>

      <div className="relative mt-[40px] h-[50%]">
        {/* Dropdown Button */}
        <button
          onClick={toggleDropdown}
         
          className={`flex justify-between px-[30px] outline-none w-[700px] rounded-t-[29px] border-t-[3px] border-l-[3px] border-r-[3px] ${isDropdownOpen ? "" : "rounded-b-[29px] border-b-[3px] border-r-[3px]"} border-solid border-[#00796B4D] text-left`}>


          {selectedClass ?<div className='mt-3'> {selectedClass} </div> : "Select a Class"}
          <div><RiArrowDropDownLine size={50} className='text-gray-900' /></div>

        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
         
        <div className="absolute z-10 w-[700px] h-full overflow-y-auto bg-[#00796B] bg-opacity-20 border border-[#9DD1CF] rounded-b-2xl  mt-[1%] custom-scrollbar  ">
        {getClassOptions().map((classOption) => (
          <div
            key={classOption}
            onClick={() => handleClassChange(classOption)}
            className="px-4 p-3 cursor-pointer hover:bg-[#00796B] rounded-md"
          >
            {classOption}
          </div>
        ))}
      </div>
      
        )}
      </div>

      {selectedClass && (
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

export default ClassComponent;
