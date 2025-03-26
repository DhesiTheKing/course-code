import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
const BlindLearningScience = () => {
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const synth = window.speechSynthesis;
  const utteranceRef = useRef(null);
  const recognitionRef = useRef(null);
  const navigate = useNavigate();

  const content = `
  Introduction to Environmental Science  
Environmental science is the study of nature, the earth, and how humans interact with the environment.  

The Natural Environment  
The Four Elements of Nature  
- Earth 🌍 – Soil, mountains, rocks, and land.  
- Water 💦 – Rivers, lakes, oceans, and rain.  
- Air 🌬 – The atmosphere, wind, and oxygen.  
- Fire 🔥 – The sun, heat, and energy.  

Natural Resources  
Natural resources are things from nature that help us live.  

Types of Natural Resources:  
- Renewable Resources 🌱 – Sunlight, wind, and water.  
- Non-Renewable Resources ⛏ – Coal, oil, and natural gas.  

Ecosystems and Living Things  
An ecosystem is a place where animals, plants, and humans live together and depend on each other.  

Examples of Ecosystems:  
- Forest 🌳 – Trees, birds, and wild animals.  
- Ocean 🏝 – Fish, coral, and seaweed.  
- Grassland 🌾 – Cows, deer, and grass.  

The Water Cycle 💧  
The water cycle moves water around the earth.  
- Evaporation ☀ – Water turns into steam.  
- Condensation ☁ – Steam forms clouds.  
- Precipitation 🌧 – Clouds release rain or snow.  
- Collection 🌊 – Water returns to rivers, lakes, and oceans.  

Weather and Climate  
- Weather – Daily changes like rain or sunshine.  
- Climate – Usual weather in a place for many years.  

Examples of Climates:  
- Cold Climate ❄ – Snowy places like the Arctic.  
- Hot Climate ☀ – Desert areas like the Sahara.  
- Tropical Climate 🌿 – Rainy places like the Amazon jungle.  

Pollution and How to Stop It  
Pollution is when dirty things enter the air, water, or land.  

Types of Pollution:  
- Air Pollution 🌫 – Smoke from cars and factories.  
- Land Pollution 🚯 – Trash on the ground.  
- Water Pollution 💧 – Dirty water from factories and plastic waste.  

Ways to Stop Pollution:  
- 🚲 Use bicycles instead of cars.  
- 🗑 Throw trash in the bin.  
- 🚰 Save water and don’t waste it.  

Saving the Environment  
- 🌳 Plant Trees – Trees clean the air.  
- 🔄 Recycle – Turn old things into new things.  
- 💡 Save Energy – Turn off lights when not needed.  
- 🚯 Don’t Litter – Keep the land clean.  

The 3 Rs – Reduce, Reuse, Recycle  
- Reduce – Use less plastic, paper, and water.  
- Reuse – Use old items again, like bags and bottles.  
- Recycle – Turn waste into useful things.  

Animals and Their Habitats  
Different animals live in different places:  
- Forest 🐻 – Bears, deer, and tigers.  
- Ocean 🐠 – Sharks, whales, and dolphins.  
- Jungle 🦜 – Parrots, snakes, and monkeys.  
- Desert 🦘 – Camels, lizards, and scorpions.  

Global Warming and Climate Change  
Global warming is when the earth gets hotter because of pollution.  

Effects of Global Warming:  
- Melting ice in cold places.  
- Rising sea levels.  
- More extreme weather like storms and droughts.  

Basic Environmental Science Questions  
1. What are the four elements of nature?  
2. Name three renewable resources.  
3. What is an ecosystem?  
4. How can we stop pollution?  
5. What are the 3 Rs?  

Basic Conversations about the Environment  
- Why should we plant trees?  
- Trees help clean the air and give us oxygen.  
- What happens if we waste water?  
- Water is a limited resource; we should use it wisely.  
- How can we help the earth?  
- Reduce waste, recycle, and plant trees!  
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
      if(command === "go to maths" || command === "goto maths" || command ==="go to maps" || command ==="go to max"){
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

export default BlindLearningScience;