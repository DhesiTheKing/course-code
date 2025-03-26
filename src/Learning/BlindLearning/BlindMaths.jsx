import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
const BlindLearningMaths = () => {
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const synth = window.speechSynthesis;
  const utteranceRef = useRef(null);
  const recognitionRef = useRef(null);
  const navigate = useNavigate();

  const content = `
   The Numbers  
1, 2, 3, 4, 5, 6, 7, 8, 9, 10  

Basic Arithmetic  
Addition (+)  
1 + 1 = 2  
2 + 3 = 5  
4 + 6 = 10  

Subtraction (-)  
5 - 2 = 3  
10 - 4 = 6  
8 - 3 = 5  

Multiplication (×)  
2 × 2 = 4  
3 × 4 = 12  
5 × 5 = 25  

Division (÷)  
6 ÷ 2 = 3  
10 ÷ 5 = 2  
12 ÷ 3 = 4  

Shapes  
Circle, Square, Triangle, Rectangle, Oval, Star, Heart, Diamond  

Even and Odd Numbers  
Even: 2, 4, 6, 8, 10  
Odd: 1, 3, 5, 7, 9  

Comparing Numbers  
Greater than (>)  
5 > 2  

Less than (<)  
3 < 6  

Equal to (=)  
4 = 4  

Counting Objects  
🔵🔵🔵 = 3 circles  
🍏🍏 = 2 apples  

Measurements  
Length: Meter, Centimeter, Kilometer  
Weight: Gram, Kilogram  
Time: Seconds, Minutes, Hours  

Time  
1 minute = 60 seconds  
1 hour = 60 minutes  
1 day = 24 hours  

Days of the Week  
Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday  

Months of the Year  
January, February, March, April, May, June, July, August, September, October, November, December  

Basic Math Questions  
1. What is 2 + 2?  
2. How many sides does a triangle have?  
3. What comes after 5?  
4. How many fingers do you have?  
5. What is bigger, 10 or 3?  

Basic Conversations about Math  
- Can you count to 10?  
- Yes! 1, 2, 3, 4, 5, 6, 7, 8, 9, 10!  
- What is 3 + 3?  
- It is 6!  
- How many sides does a square have?  
- A square has 4 sides.  

  `;
  const paragraphs = content.split('\n').filter(p => p.trim() !== '');

  const speak = (text) => {
    if (synth.speaking) {
      synth.cancel();
    }
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  const startListening = () => {
    console.log('started !!');
    
    setIsListening(true);
    speakCurrentParagraph();
  };

  const stopListening = () => {
    setIsListening(false);
    if (synth.speaking) {
      synth.cancel();
    }
  };

  const repeatParagraph = () => {
    if (synth.speaking) {
      synth.cancel();
    }
    speakCurrentParagraph();
  };

  const nextParagraph = () => {
    if (currentParagraph < paragraphs.length - 1) {
      setCurrentParagraph(currentParagraph + 1);
    } else {
      speak('You have reached the end of the content.');
    }
  };

  const previousParagraph = () => {
    if (currentParagraph > 0) {
      setCurrentParagraph(currentParagraph - 1);
    } else {
      speak('You are at the beginning of the content.');
    }
  };

  const startFromBeginning = () => {
    setCurrentParagraph(0);
    speak('Starting from the beginning.');
  };

  const speakCurrentParagraph = () => {
    if (synth.speaking) {
      synth.cancel();
    }
    const utterance = new SpeechSynthesisUtterance(paragraphs[currentParagraph]);
    utteranceRef.current = utterance;
    synth.speak(utterance);

    utterance.onend = () => {
      speak('Moving to the next paragraph in 1 second.');
      setTimeout(() => {
        nextParagraph();
      }, 1000);
    };
  };

  useEffect(() => {
    if (isListening) {
      speakCurrentParagraph();
    }
  }, [currentParagraph]);

  const handleRightClick = (e) => {
    e.preventDefault();
    stopListening(); // Stop current speech
    listenForCommand(); // Start listening for a command
  };

  const listenForCommand = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.continuous = false; // Stop after one command
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      const last = event.results.length - 1;
      const command = event.results[last][0].transcript.trim().toLowerCase();
      console.log(command);
      
      if(command == "go to home page" || command == "go to homepage"){
        navigate("/home")
      }
      if(command === "go to maths" || command === "goto maths"){
        navigate("/special",{state:"maths"});
      }
      if(command === "go to science" || command === "goto science"){
        navigate("/special",{state:"science"});
      }
      if(command === "go to english" || command === "goto english"){
        navigate("/special",{state:"english"});
      }
      handleVoiceCommand(command);
    };

    recognition.onerror = (event) => {
      speak('An error occurred with speech recognition.');
    };

    recognition.start();
    recognitionRef.current = recognition;
  };

  const handleVoiceCommand = (command) => {
    switch (command) {
      case 'start':
        startListening();
        break;
      case 'next':
        nextParagraph();
        break;
      case 'previous':
        previousParagraph();
        break;
      case 'repeat':
        repeatParagraph();
        break;
      // No default case, so unrecognized commands are ignored
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6"
      onContextMenu={handleRightClick}
    >
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          English Learning for Blind People
        </h1>
        <div className="bg-blue-50 p-6 rounded-lg shadow-inner">
          <p className="text-lg text-gray-700 leading-relaxed">
            {paragraphs[currentParagraph]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlindLearningMaths;