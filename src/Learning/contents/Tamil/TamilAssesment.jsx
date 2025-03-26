import React, { useState, useEffect } from "react";
import { tamilAssessmentContent } from "./TamilAssesmentContents";

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const TamilAssessment = ({ assessmentType }) => {
  const assessment = tamilAssessmentContent();
  console.log(assessment);
  
  const assessmentData = assessment[assessmentType];
  console.log(assessmentType);
  

  console.log(assessmentData);
  

  const [isStarted, setIsStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsFinished(false);
    setTimer(60);
    setIsStarted(false);
  }, [assessmentType]);

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
    setShuffledOptions(shuffleArray(assessmentData[currentQuestionIndex].options));
  }, [currentQuestionIndex]);

  const handleAnswerSelect = (option) => {
    if (isAnswered) return;

    setSelectedOption(option);
    setIsAnswered(true);
    if (option.isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < assessmentData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setTimer(30);
    } else {
      setIsFinished(true);
    }
  };

  const { question, options } = assessmentData[currentQuestionIndex];
  const totalQuestions = assessmentData.length;
  const passThreshold = totalQuestions / 2;

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-50 rounded-lg shadow-lg">
      {!isStarted ? (
        <div className="text-center">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
            தமிழ் மதிப்பீடு {assessmentType !== 3 ? assessmentType + 1 : "இறுதி"}
          </h1>
          <p className="text-lg text-center text-gray-700 mb-12">
            தொடங்க 'Start' பொத்தானை அழுத்தவும்.
          </p>
          <button
            onClick={() => setIsStarted(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            தொடங்கு
          </button>
        </div>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
            தமிழ் மதிப்பீடு
          </h1>
          <p className="text-lg text-center text-gray-700 mb-12">
            சரியான விடையை தேர்ந்தெடுக்கவும். அடுத்த கேள்விக்கு 'Next' அழுத்தவும்.
          </p>

          {isFinished ? (
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                உங்கள் மதிப்பெண்: {score} / {totalQuestions}
              </h2>
              <h3
                className={`text-xl font-semibold ${
                  score >= passThreshold ? "text-green-500" : "text-red-500"
                }`}
              >
                {score >= passThreshold ? "தேர்ச்சி" : "தோல்வி"}
              </h3>
            </div>
          ) : (
            <>
              <div className="flex justify-between mb-6">
                <div className="text-lg font-semibold text-gray-800">
                  கேள்வி: {currentQuestionIndex + 1}/{totalQuestions}
                </div>
                <div className="text-lg font-semibold text-gray-800">
                  நேரம்: {timer} விநாடிகள்
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
                          {option.isCorrect ? "சரியானது" : "தவறு"}
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
                    அடுத்த கேள்வி
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

export default TamilAssessment;