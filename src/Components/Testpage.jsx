import React, { useState } from 'react';
import './Testpage.css';

const Testpage = () => {
  const mcqData = [
    { id: 1, question: "What is the correct way to declare a variable in JavaScript?", options: ["var myVar;", "declare myVar;", "variable myVar;", "myVar = var;"], answer: "var myVar;" },
    { id: 2, question: "What does '===' mean in JavaScript?", options: ["Checks equality and type.", "Checks equality only.", "Assigns a value.", "Compares two objects."], answer: "Checks equality and type." },
    { id: 3, question: "How do you create a function in JavaScript?", options: ["function myFunction() {}", "create myFunction() {}", "function: myFunction() {}", "myFunction() = function {}"], answer: "function myFunction() {}" },
    { id: 4, question: "What will the following code output: console.log(typeof 'Hello');?", options: ["String", "Text", "Object", "Undefined"], answer: "String" },
    { id: 5, question: "What is an array in JavaScript?", options: ["A type of variable that can hold multiple values.", "A function.", "A method for manipulating strings.", "A way to define objects."], answer: "A type of variable that can hold multiple values." },
    { id: 6, question: "Which symbol is used to comment a single line in JavaScript?", options: ["//", "#", "/*", "<!--"], answer: "//" },
    { id: 7, question: "How can you create an object in JavaScript?", options: ["let myObject = {};", "let myObject = [];", "let myObject = object();", "let myObject = ();"], answer: "let myObject = {};" },
    { id: 8, question: "What is the purpose of the 'this' keyword in JavaScript?", options: ["Refers to the global object.", "Refers to the current object.", "Creates a new object.", "Declares a variable."], answer: "Refers to the current object." },
    { id: 9, question: "What does JSON stand for?", options: ["JavaScript Object Notation", "JavaScript Online Notation", "Java Syntax Object Notation", "Java Source Object Notation"], answer: "JavaScript Object Notation" }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(Array(mcqData.length).fill(''));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [numQuestions, setNumQuestions] = useState(5);

  const handleOptionChange = (option) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestionIndex] = option;
    setSelectedOptions(newSelectedOptions);
  };

  const handleNext = () => {
    if (currentQuestionIndex < numQuestions - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let correctAnswers = 0;
    mcqData.slice(0, numQuestions).forEach((item, index) => {
      if (item.answer === selectedOptions[index]) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
    setSubmitted(true);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptions(Array(mcqData.length).fill(''));
    setSubmitted(false);
    setScore(0);
    setShowQuiz(false);
  };

  return (
    <div className="quiz-container">
      {!showQuiz && (
        <div className="start-quiz-container">
          <label htmlFor="numQuestions" className="num-questions-label">Number of Questions:</label>
          <input
            type="number"
            id="numQuestions"
            min="1"
            max={mcqData.length}
            value={numQuestions}
            onChange={(e) => setNumQuestions(Math.min(e.target.value, mcqData.length))}
            className="num-questions-input"
          />
          <button className="start-quiz-btn" onClick={() => setShowQuiz(true)}>Start Test</button>
        </div>
      )}

      {showQuiz && (
        <div className="question-content">
          <div className="question-header">
            <h3>Current Question: {currentQuestionIndex + 1} / {numQuestions}</h3>
          </div>
          {!submitted ? (
            <>
              <form onSubmit={handleSubmit}>
                <div className="question">
                  <h3>{mcqData[currentQuestionIndex].question}</h3>
                </div>
                <div className="options-container">
                  {mcqData[currentQuestionIndex].options.map((option, optionIndex) => (
                    <div key={optionIndex}>
                      <input
                        type="radio"
                        name={`question-${currentQuestionIndex}`}
                        value={option}
                        id={`option-${optionIndex}`}
                        checked={selectedOptions[currentQuestionIndex] === option}
                        onChange={() => handleOptionChange(option)}
                      />
                      <label htmlFor={`option-${optionIndex}`}>{option}</label>
                    </div>
                  ))}
                </div>
                <div className="buttons">
                  {currentQuestionIndex > 0 && (
                    <button type="button" onClick={handlePrevious} className="previous-btn">
                      Previous
                    </button>
                  )}
                  {currentQuestionIndex < numQuestions - 1 ? (
                    <button type="button" onClick={handleNext} className="next-btn">
                      Next
                    </button>
                  ) : (
                    <button type="submit" className="submit-btn">Submit</button>
                  )}
                </div>
              </form>
            </>
          ) : (
            <div className="score-container">
              <h2>Your score: {score}/{numQuestions}</h2>
              <button onClick={resetQuiz}>Retake Quiz</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Testpage;
