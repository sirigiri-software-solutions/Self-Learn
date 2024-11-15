// import React, { createContext, useContext, useState } from 'react';

// const ChapterContext = createContext();

// export const ChapterProvider = ({ children }) => {
//   const [selectedQuestions, setSelectedQuestions] = useState([]);

//   return (
//     <ChapterContext.Provider value={{ selectedQuestions, setSelectedQuestions }}>
//       {children}
//     </ChapterContext.Provider>
//   );
// };

// export const useChapterContext = () => {
//   return useContext(ChapterContext);
// };


import React, { createContext, useState, useContext } from 'react';

const ChapterContext = createContext();

export const useChapterContext = () => {
  return useContext(ChapterContext);
};

export const ChapterProvider = ({ children }) => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('');
  const [selectedSubchapter, setSelectedSubchapter] = useState('');
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <ChapterContext.Provider
      value={{
        selectedState,setSelectedState,
        selectedClass,setSelectedClass,
        selectedSubject,setSelectedSubject,
        selectedChapter,setSelectedChapter,
        selectedSubchapter,setSelectedSubchapter,
        selectedQuestions,setSelectedQuestions,
        currentStep,setCurrentStep,
      }}
    >
      {children}
    </ChapterContext.Provider>
  );
};
