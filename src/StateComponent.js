// import React, { useState } from 'react';
// import { useChapterContext } from './ChapterContext';

// const StateComponent = () => {
//   const { selectedState, setSelectedState, currentStep, setCurrentStep } = useChapterContext();
//   const [selectedoptions, setSelectedoptions] = useState(false)

//   const handleStateChange = (event) => {
//     setSelectedState(event.target.value);
//   };

//   const handleNext = () => {
//     setCurrentStep(currentStep + 1);
//   };
//   const handboderClick=()=>{
//     setSelectedoptions(!selectedoptions)
//     console.log(selectedoptions)

   

//   }
//   const states = [
//     { id: 1, name: "Andhra Pradesh" },
//     { id: 2, name: "Telangana" },
    
//   ]

//   return (
//     <div className="bg-[#E0F7FA] min-h-screen flex flex-col items-center font-mulish">
//     <div className="text-center ">
//       <h1 className="text-[40px] w-[598px] h-[36px] leading-36 font-medium text-[#424242] mb-4 mt-[105px]">Tell us few more about yourself</h1>
//       <p className="w-[641px] h-[36px] top-[263px] left-[400px] gap-0 opacity-70 font-inter text-[24px] font-normal leading-[36px] text-left mt-[40px]">
//         Your Learning Adventure Begins Here -<span className='text-[#009688]'> Select Your State!</span>
//       </p>
//     </div>
   
//     <div className="relative ">
//   <select
//   className={` px-[30px] outline-none w-[928px] h-[50px] rounded-t-[29px] border-t-[3px]  border-l-[3px] ${selectedoptions ? "" : "rounded-b-[29px] border-b-[3px]  border-r-[3px] "} border-solid border-[#00796B4D] mt-[40px]`}
//   value={selectedState}
//   onChange={handleStateChange}
//   onClick={handboderClick}
// >
//   <option value="" className="custom-option bg-[#B3DEDD]" disabled>Choose your state</option>
//   {states.map((state) => (
//     <option key={state.id} value={state.name} className="custom-option bg-[#B3DEDD]">
//       {state.name}
//     </option>
//   ))}
  
//   {/* <option value="Andhra Pradesh" className="custom-option">Andhra Pradesh</option>
//   <option value="Telangana" className="custom-option">Telangana</option> */}
// </select>

// </div>

      

//       {selectedState && (
//         <button
//           className=" mt-4 absolute bottom-[15%] right-[10%] px-6 py-2 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
//           onClick={handleNext}
//         >
//           Next
//         </button>
//       )}
//     </div>
 
//   );
// };

// export default StateComponent;

import React, { useState } from 'react';
import { useChapterContext } from './ChapterContext';

import { RiArrowDropDownLine } from "react-icons/ri";

const StateComponent = () => {
  const { selectedState, setSelectedState, currentStep, setCurrentStep } = useChapterContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleStateChange = (state) => {
    setSelectedState(state);
    setIsDropdownOpen(false); 
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const states = [
    { id: 1, name: "Andhra Pradesh" },
    { id: 2, name: "Telangana" },
  ];

  return (
    <div className="bg-[#E0F7FA] min-h-screen flex flex-col items-center font-mulish">
      <div className="text-center">
        <h1 className="text-[40px] w-[598px] h-[36px] leading-36 font-medium text-[#424242] mb-4 mt-[105px]">Tell us a bit more about yourself</h1>
        <p className="w-[641px] h-[36px] top-[263px] left-[400px] gap-0 opacity-70 font-inter text-[24px] font-normal leading-[36px] text-left mt-[40px]">
          Your Learning Adventure Begins Here - <span className="text-[#009688]">Select Your State!</span>
        </p>
      </div>

      <div className="relative mt-[40px]">
        {/* Dropdown Button */}
        <button
          className={`flex justify-between px-[30px] outline-none w-[928px] h-[50px] rounded-t-[29px] border-t-[3px] border-l-[3px] ${isDropdownOpen ? "" : "rounded-b-[29px] border-b-[3px] border-r-[3px]"} border-solid border-[#00796B4D] text-left`}
          onClick={toggleDropdown}
        >
          {selectedState ? <div className='mt-3'> {selectedState} </div>: <h1 className='mt-[15px] -ml-[10px]'>Choose your state</h1>}
          <div><RiArrowDropDownLine size={50} className='text-gray-900' /></div>
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute z-10 w-full overflow-hidden bg-[#00796B] bg-opacity-20 border border-[#9DD1CF] rounded-b-[29px] mt-1">
            {states.map((state) => (
              <div
                key={state.id}
                className="px-4 p-3  cursor-pointer hover:bg-[#00796B]"
                onClick={() => handleStateChange(state.name)}
              >
                {state.name}
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedState && (
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

export default StateComponent;
