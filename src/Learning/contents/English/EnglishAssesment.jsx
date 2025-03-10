import React, { useState, useEffect } from "react";
import { englishAssessmentContent } from "./AssesmentData";

// Function to shuffle the options
const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
  }
  return shuffledArray;
};

const EnglishAssessment = ({assesmentType}) => {

  const assessment = englishAssessmentContent();
  const assessmentData = assessment[assesmentType];

  console.log(assessment[0]);
  console.log(assesmentType);
  
  


  const [isStarted, setIsStarted] = useState(false); // Track if quiz has started
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [timer, setTimer] = useState(60);


  useEffect(()=>{

    setCurrentQuestionIndex(0);
    setScore(0);
    setIsFinished(false);
    setTimer(60);
    setIsStarted(false);


  },[assesmentType])

  // Shuffle the options once when the question is first displayed
  const [shuffledOptions, setShuffledOptions] = useState([]);

  useEffect(() => {
    if (isStarted && timer > 0 && !isFinished) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
    if (timer === 0) {
      handleNextQuestion();
    }
  }, [timer, isStarted, isFinished]);

  useEffect(() => {
    // Shuffle options only once when the question is loaded
    setShuffledOptions(shuffleArray(assessmentData[currentQuestionIndex].options));
  }, [currentQuestionIndex]); // Only re-shuffle when the current question changes

  const handleAnswerSelect = (option) => {
    if (isAnswered) return; // Prevent selecting more than one answer

    setSelectedOption(option);
    setIsAnswered(true);

    // If answer is correct, increment the score
    if (option.isCorrect) {
      setScore(score + 1);
    }

    // Optionally, you can stop the timer immediately after an answer
    // setTimer(0); // Uncomment this line if you want to stop the timer when an answer is selected
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < assessmentData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setTimer(30); // Reset the timer for the next question
    } else {
      setIsFinished(true); // End the quiz if all questions are answered
    }
  };

  const { question, options } = assessmentData[currentQuestionIndex];
  const totalQuestions = assessmentData.length;
  const passThreshold = totalQuestions / 2;

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 rounded-lg shadow-lg">
      {!isStarted ? (
        // Display the Start Button if the quiz hasn't started
        <div className="text-center">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
            Sign Language Assessment {assesmentType!=3 ? assesmentType+1 : "Final"}
          </h1>
          <p className="text-lg text-center text-gray-700 mb-12">
            Click 'Start' to begin the assessment.
          </p>
          <button
            onClick={() => setIsStarted(true)} // Set isStarted to true when the button is clicked
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Start
          </button>
        </div>
      ) : (
        // Render the assessment when isStarted is true
        <>
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
            Sign Language Assessment
          </h1>
          <p className="text-lg text-center text-gray-700 mb-12">
            Choose the correct sign. Click 'Next' to move to the next question.
          </p>

          {isFinished ? (
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Your Score: {score} / {totalQuestions}
              </h2>
              <h3
                className={`text-xl font-semibold ${
                  score >= passThreshold ? "text-green-500" : "text-red-500"
                }`}
              >
                {score >= passThreshold ? "Pass" : "Fail"}
              </h3>
            </div>
          ) : (
            <>
              <div className="flex justify-between mb-6">
                <div className="text-lg font-semibold text-gray-800">
                  Question: {currentQuestionIndex + 1}/{totalQuestions}
                </div>
                <div className="text-lg font-semibold text-gray-800">
                  Time: {timer}s
                </div>
              </div>

              <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {question}
                </h2>
                <div className="grid grid-cols-2 gap-6">
                  {shuffledOptions.map((option, index) => (
                    <div
                      key={index}
                      className={`group relative p-4 cursor-pointer rounded-lg border-2 ${
                        selectedOption === option
                          ? option.isCorrect
                            ? "border-green-500 bg-green-200"
                            : "border-red-500 bg-red-200"
                          : "border-gray-300"
                      } hover:border-blue-400 transition-all duration-300`}
                      onClick={() => handleAnswerSelect(option)}
                    >
                      <h2>{option.text}</h2>
                      {selectedOption === option && (
                        <div
                          className={`absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center rounded-lg text-white font-semibold ${
                            option.isCorrect ? "bg-green-500" : "bg-red-500"
                          }`}
                        >
                          {option.isCorrect ? "Correct" : "Wrong"}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center mt-6">
                {isAnswered && (
                  <button
                    onClick={handleNextQuestion}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    Next Question
                  </button>
                )}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default EnglishAssessment;
