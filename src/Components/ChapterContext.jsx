import React, { createContext, useContext, useState } from 'react';

const ChapterContext = createContext();

export const ChapterProvider = ({ children }) => {
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  return (
    <ChapterContext.Provider value={{ selectedQuestions, setSelectedQuestions }}>
      {children}
    </ChapterContext.Provider>
  );
};

export const useChapterContext = () => {
  return useContext(ChapterContext);
};