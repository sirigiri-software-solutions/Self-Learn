import React from 'react';
import { useChapterContext } from './ChapterContext';
import StateComponent from './StateComponent';
import ClassComponent from './ClassComponent';
import SubjectComponent from './SubjectComponent';
import ChapterComponent from './ChapterComponent';
import ChapterQuestions from './ChapterQuestions';

const MainComponent = () => {
  const { currentStep } = useChapterContext();

  return (
    <div>
      {currentStep === 0 && <StateComponent />}
      {currentStep === 1 && <ClassComponent />}
      {currentStep === 2 && <SubjectComponent />}
      {currentStep === 3 && <ChapterComponent />}
      {currentStep === 4 && <ChapterQuestions />}
    </div>
  );
};

export default MainComponent;
