
import React, { useState } from 'react';
import Chapter from './Chapter';
 import { useNavigate } from 'react-router-dom';

const Dashboardpage = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('');

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedClass('');
    setSelectedSubject('');
    setSelectedChapter('');
  };

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
    setSelectedSubject('');
    setSelectedChapter('');
  };

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
    setSelectedChapter('');
  };

  const handleChapterChange = (chapter) => {
    setSelectedChapter(chapter);
  };

  const getClassOptions = () => {
    switch (selectedState) {
      case 'Andhra Pradesh':
        return ['6', '7', '8', '9', '10', '11', '12', 'UG', 'PG'];
      case 'Telangana':
        return ['Nursery', 'LKG', 'UKG', '1', '2', '3', '4', '5'];
      default:
        return ['Please select a state first'];
    }
  };

  const subjectOptions = () => {
    if (selectedState === 'Andhra Pradesh') {
      switch (selectedClass) {
        case '6':
        case '7':
        case '8':
        case '9':
        case '10':
          return ['Telugu', 'English', 'Hindi', 'Mathematics', 'Science', 'Social Studies'];
        case '11':
        case '12':
          return ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'English'];
        case 'UG':
        case 'PG':
          return ['Engineering', 'Medicine', 'Arts', 'Science'];
        default:
          return ['Please select a class'];
      }
    } else if (selectedState === 'Telangana') {
      switch (selectedClass) {
        case 'Nursery':
          return ['Rhymes', 'Drawing'];
        case 'LKG':
        case 'UKG':
          return ['Rhymes', 'English', 'Drawing'];
        case '1':
        case '2':
        case '3':
          return ['Rhymes', 'English', 'Mathematics', 'Drawing'];
        case '4':
        case '5':
          return ['Telugu', 'English', 'Mathematics', 'Science', 'Social Studies', 'Drawing'];
        default:
          return ['Please select a class'];
      }
    } else {
      return ['Please select a state first'];
    }
  };
   const navigate = useNavigate();

  const goToDashboard = () => {
     navigate('/');
  };

  return (
    <div className="max-w-sm mx-auto mt-8">
      <button 
        onClick={goToDashboard} 
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded w-[100%] hover:bg-blue-600 "
      >
        Logout
      </button>
      <div className="flex flex-col items-start justify-center p-5 bg-white rounded-lg shadow-md">
        <div className="flex items-center mb-4 w-full">
          <label className="font-semibold text-sm text-gray-600 mr-4 w-32 text-right">State:</label>
          <select 
            className="flex-1 cursor-pointer px-3 py-2 border border-gray-300 rounded bg-gray-100 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-blue-500 focus:outline-none"
            value={selectedState} 
            onChange={handleStateChange}
          >
            <option value="">Select a State</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Telangana">Telangana</option>
          </select>
        </div>

        <div className="flex items-center mb-4 w-full">
          <label className="font-semibold text-sm text-gray-600 mr-4 w-32 text-right">Class:</label>
          <select 
            className="flex-1 cursor-pointer px-3 py-2 border border-gray-300 rounded bg-gray-100 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-blue-500 focus:outline-none"
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
          <label className="font-semibold text-sm text-gray-600 mr-4 w-32 text-right">Subjects:</label>
          <select 
            className="flex-1 px-3 cursor-pointer py-2 border border-gray-300 rounded bg-gray-100 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-blue-500 focus:outline-none"
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

        <div className="flex items-center mb-4 w-full">
          <Chapter 
            state={selectedState} 
            clas={selectedClass} 
            subject={selectedSubject} 
            onChapterChange={handleChapterChange} 
          />
        </div>

        {selectedState && <p className="text-xs text-gray-500 mt-2 font-medium">You have selected state: {selectedState}</p>}
        {selectedClass && <p className="text-xs text-gray-500 mt-2 font-medium">You have selected class: {selectedClass}</p>}
        {selectedSubject && <p className="text-xs text-gray-500 mt-2 font-medium">You have selected subject: {selectedSubject}</p>}
        {selectedChapter && <p className="text-xs text-gray-500 mt-2 font-medium">You have selected chapter: {selectedChapter}</p>}
      </div>
    </div>
  );
};

export default Dashboardpage;




