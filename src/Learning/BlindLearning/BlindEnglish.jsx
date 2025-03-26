import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
const BlindLearningEnglish = () => {
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const synth = window.speechSynthesis;
  const utteranceRef = useRef(null);
  const recognitionRef = useRef(null);
  const navigate = useNavigate();

  const content = `
  The English Alphabet
  A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z

  Words Starting with Each Letter
  A - Apple, Ant
  B - Ball, Bat
  C - Cat, Car
  D - Dog, Duck
  E - Egg, Elephant
  F - Fish, Frog
  G - Goat, Grapes
  H - Hat, House
  I - Ice, Ink
  J - Jug, Jam
  K - Kite, King
  L - Lion, Lamp
  M - Monkey, Mango
  N - Nest, Nose
  O - Orange, Owl
  P - Parrot, Pen
  Q - Queen, Quilt
  R - Rabbit, Rose
  S - Sun, Star
  T - Tree, Tiger
  U - Umbrella, Uncle
  V - Van, Violet
  W - Watch, Water
  X - Xylophone, Box
  Y - Yacht, Yellow
  Z - Zebra, Zoo
  
  Simple Sentences
  1. I see a cat.
  2. The dog is big.
  3. This is an apple.
  4. The sun is hot.
  5. I have a red ball.
  6. The frog can jump.
  7. My hat is blue.
  8. The lion is strong.
  9. I like mangoes.
  10. The nest is in the tree.
  
  Rhyming Words
  Cat - Bat
  Dog - Frog
  Sun - Fun
  Hat - Mat
  Ball - Wall
  Star - Car
  Pen - Hen
  House - Mouse
  King - Ring
  Tree - Bee
  
  Opposites
  Big - Small
  Hot - Cold
  Happy - Sad
  Up - Down
  In - Out
  Fast - Slow
  Day - Night
  Tall - Short
  Open - Close
  Left - Right
  
  Colors
  Red, Blue, Green, Yellow, Orange, Purple, Pink, Black, White, Brown
  
  Shapes
  Circle, Square, Triangle, Rectangle, Oval, Star, Heart, Diamond
  
  Numbers
  1 - One
  2 - Two
  3 - Three
  4 - Four
  5 - Five
  6 - Six
  7 - Seven
  8 - Eight
  9 - Nine
  10 - Ten
  
  Days of the Week
  Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
  
  Months of the Year
  January, February, March, April, May, June, July, August, September, October, November, December
  
  Simple Questions
  1. What is your name?
  2. How old are you?
  3. What is your favorite color?
  4. Do you like apples?
  5. Can you see the sun?
  
  Basic Conversations
  - Hello! How are you?
  - I am fine, thank you.
  - What is your name?
  - My name is Ravi.
  - Nice to meet you, Ravi.
  - Nice to meet you too.
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
      command = command.replace(".","");
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

export default BlindLearningEnglish;