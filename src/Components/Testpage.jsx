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

  const handleOptionChange = (option) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestionIndex] = option;
    setSelectedOptions(newSelectedOptions);
  };

  const handleNext = () => {
    setCurrentQuestionIndex((prevIndex) => Math.min(prevIndex + 1, mcqData.length - 1));
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let correctAnswers = 0;
    mcqData.forEach((item, index) => {
      if (item.answer === selectedOptions[index]) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
    setSubmitted(true);
  };

  const handleQuestionSelect = (index) => {
    setCurrentQuestionIndex(index);
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
      {/* Only show the 'Start Quiz' button if the quiz hasn't started */}
      {!showQuiz && (
        <div className="start-quiz-container">
          <button className="start-quiz-btn" onClick={() => setShowQuiz(true)}>Start Test</button>
        </div>
      )}

      {/* Show the quiz content after clicking 'Start Quiz' */}
      {showQuiz && (
        <>
          {/* Hide question buttons if the quiz has been submitted */}
          {!submitted && (
            <div className="question-buttons">
              {mcqData.map((question, index) => (
                <button
                  key={question.id}
                  onClick={() => handleQuestionSelect(index)}
                  disabled={submitted}
                  className={currentQuestionIndex === index ? 'active' : ''}
                >
                  {question.id}
                </button>
              ))}
            </div>
          )}

          <div className="question-content">
            {submitted ? (
              <div className="score-container">
                <h2>Your score: {score}/{mcqData.length}</h2>

                <button onClick={resetQuiz}>Retake Quiz</button>

                <button onClick={() => alert("Redirecting to more questions!")}>
                  More Questions on this Topic
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="question">
                  <h3>{mcqData[currentQuestionIndex].question}</h3>
                  {mcqData[currentQuestionIndex].options.map((option, optionIndex) => (
                    <div key={optionIndex}>
                      <label>
                        <input
                          type="radio"
                          name={`question-${currentQuestionIndex}`}
                          value={option}
                          checked={selectedOptions[currentQuestionIndex] === option}
                          onChange={() => handleOptionChange(option)}
                        />
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="buttons">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    disabled={currentQuestionIndex === 0} // Disable when on the first question
                    className="previous-btn"
                  >
                    Previous
                  </button>
                  

                  {currentQuestionIndex < mcqData.length - 1 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="next-btn"
                    >
                      Next
                    </button>
                  ) : (
                    <button type="submit" className="submit-btn">Submit</button>
                  )}
                </div>
              </form>
            )}
          </div>
        </>
      )}
    </div>
    
  );
};

export default Testpage;
