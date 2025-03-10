import React, { useState } from 'react'
import Layout from '../components/Layout';
import { Book, Award, Star,Volume2,VolumeX} from 'lucide-react';

import {  useNavigate } from 'react-router-dom';


export const Home = () => {


  const [isSpeak, setIsSpeack] = useState(false);


  //TEXT TO SPECH
function testSpeech(text) {
  if ("speechSynthesis" in window) {
    setIsSpeack(!isSpeak);

    const speech = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    
    // Find a female voice
    const femaleVoice = voices.find(voice =>
      voice.name.includes("Female") || voice.name.includes("Google UK English Female") || voice.name.includes("Microsoft Zira") // Add other female voice names if needed
    );

    if (femaleVoice) {
      speech.voice = femaleVoice;
    }

    speech.lang = "en-US"; // Set language
    speech.rate = 1; // Speed (1 is normal)
    speech.pitch = 1.2; // Slightly higher pitch for a more natural female voice

    if (!isSpeak) {
      window.speechSynthesis.speak(speech);
    } else {
      window.speechSynthesis.cancel();
    }

  } else {
    alert("Your browser does not support text-to-speech.");
  }
}



  function handleRecommandation(name){
    if(Recommendation==0 ) if(name === "GENERAL") setRecommendation(Recommendation+1)
    if(Recommendation==0 ) if(name === "FIRST STD") setRecommendation(Recommendation+2)
    if(name === "english"){
      navigate("/learning",{state:"english"})
    }
    if(name === "Sign language"){
      navigate("/learning",{state:"signlanguage"})
    }
    if(name==="self care"){
      navigate("/learning",{state:"self care"})
    }
    if(name == "Soft skills"){
      navigate("/learning",{state:"softskills"})
    }
    if(name == "MATHEMATICS"){
      navigate("/learning",{state:"maths"})
    }
    if(name == "ENVIRONMENTAL SCIENCE"){
      navigate("/learning" ,{state:"ENVIRONMENTAL SCIENCE"})
    }

  }

  const navigate = useNavigate();

    const recommendation = [
        {
          name :"தமிழ்" ,
          comment : "குழநரதைகளின் உலகம் வண்ணமயமானது! விநரதைகள் பல நிரைநதைது!! அவரகளின் கறபரனத்திைன் கானுயிரகரையும் நட்புடன் நரட பயிலரவத்திடும். புதியன விரும்பும் அவரதைம் உற்ாக உள்ைம் அஃறிர்ணப்பபாருள்கரையும் அழகுதைமிழ் பபசிடச் ப்ய்திடும்.",
           url : "https://www.factsmostly.com/wp-content/uploads/2024/09/Tamil-Language.webp" , 
           tag1 : "தமிழ்" ,
            tag2 : "மொழி"
        }
      ,
      {name :"english",
        comment :"English is a West Germanic language in the Indo-European language family, whose speakers, called Anglophones, originated in early medieval England on the island of Great Britain.The English language is nobody's special property. It is the property of the imagination: it is the property of the language itself" ,
         url : "https://www.vec.ca/wp-content/uploads/2019/03/English-Language-Level-System.jpg" ,
          tag1:"LANGUAGE" ,
           tag2 : "IMPORTANTS"
      }
      ,
      {name :"MATHEMATICS",
        comment :"Mathematics, also known as math, is the study of numbers, shapes, and how they relate to each other and the world around us. It involves using logical reasoning and quantitative computation to solve problems. Explaining natural events and human behavior, Analyzing data, Integrating different areas of knowledge, Proving and developing theorems, and Finding optimal solutions to problems " ,
         url:"https://images.shiksha.com/mediadata/images/articles/1660038097phpGgaIzx.jpeg" ,
          tag1 : "MATHS" ,
           tag2 :"NUMBERS"
      }
      ,
      {name :"ENVIRONMENTAL SCIENCE",
        comment :"Environmental science is the study of the environment and the application of technology to protect it. It is an interdisciplinary science that incorporates a variety of fields, including biology, chemistry, and ecology." ,
         url:"https://carterwenthold.weebly.com/uploads/3/8/6/8/38681645/maxresdefault_orig.jpg" ,
          tag1 : "NATURE" ,
           tag2 :"WORLD"
      }  
    ]

    const recommendation_main = [
      {name :"Sign language" ,comment : "a beautiful, expressive form of communication that serves as the primary language for the Deaf community", url : "https://www.frederickinterpreting.com/wp-content/uploads/2021/04/asl.jpg" , tag1 : "ESSENTIALS" , tag2 : "LANGUAGE"}
      ,{name :"Soft skills" , comment  : "Soft skills are the attributes and behaviours describing how a person approaches tasks. You likely use soft skills across all areas of your life, but they're particularly valued in the workplace, where they can impact your ability to communicate effectively, solve problems, and think critically",url :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr3J5KO6PLfSyZWPfy489PW70XfdcdT6QHBg&s",tag1 :"SOCIAL",tag2:"COMMUNICATION"}
      ,{name :"self care" , comment:"Self-care fosters independence through hygiene, nutrition, and rest. Adaptive tools ease tasks, while mindfulness and socializing boost well-being. Prioritizing self-care builds confidence and enhances daily life quality.",url:"https://i.pinimg.com/736x/ea/10/b2/ea10b24e5c2f67fdf497999a67fc8c29.jpg",tag1:"SELF-LOVE",tag2:"LIFE-STYLE"}
   ]

   const common = [
    {name : "GENERAL", comment : "These courses empower people with disabilities by teaching essential skills. The **Sign Language** course enhances communication through gestures, while **Communication** improves interaction abilities. **Self-Care** focuses on personal well-being, fostering independence in daily life.",url : "https://www.inclusionhub.com/hubfs/Blog/disabled-people-in-park-setting-1.jpg",tag1 :"COMMON",tag2:"LIFE-STYLE"},
    {name : "FIRST STD", comment : "The courses help first-grade children with disabilities learn essential skills. **Tamil** and **English** introduce basic letters, words, and sentences. **Maths** covers numbers and shapes, while **Environmental Science** teaches nature, seasons, and daily life concepts interactively.",url : "https://core-docs.s3.amazonaws.com/genoa-kingston_cusd_%23424_ar/article/image/large_04a9ded7-edf4-48f6-ad29-f94f3b8ba7f3.jpg",tag1 :"LEARN",tag2:"KNOWLWDGE"}
    
   ]

  const Recommend = [common,recommendation_main,recommendation];
  const  [Recommendation,setRecommendation] = useState(0);
    
      return (
        <Layout>
          <div className="space-y-8 h-full">
            {/* Welcome Section */}
            <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm" aria-labelledby="welcome-heading">
              <h1 id="welcome-heading" className="text-2xl font-bold mb-4">
                Welcome back, 
              </h1>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <span className="text-2xl">👋</span>
                </div>
                <div>
                  <p className="text-lg">Continue your learning journey</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Level 5 • 80% to next level</p>
                </div>
              </div>
            </section>
    
            {/* Current Progress */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6" aria-label="Progress overview">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-xl delay-100 cursor-pointer"
              onClick={()=>Recommendation >= 1 ? setRecommendation(0) : none}
              

              >
                <div className="flex items-center space-x-3 mb-4">
                  <Book className="h-6 w-6 text-blue-500" />
                  <h2 className="text-lg font-semibold">Current Course</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400">General courses</p>
                <div className="mt-4 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }} />
                </div>
              </div>
    
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-xl delay-100">
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="h-6 w-6 text-purple-500" />
                  <h2 className="text-lg font-semibold">Achievements</h2>
                </div>
                <p className="text-3xl font-bold">12</p>
                <p className="text-gray-600 dark:text-gray-400">Badges earned</p>
              </div>
    
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm  hover:shadow-xl delay-100">
                <div className="flex items-center space-x-3 mb-4">
                  <Star className="h-6 w-6 text-yellow-500" />
                  <h2 className="text-lg font-semibold">Daily Streak</h2>
                </div>
                <p className="text-3xl font-bold">7</p>
                <p className="text-gray-600 dark:text-gray-400">Days in a row</p>
              </div>
            </section>
    
            {/* Recommended Modules */}


            <section className="h-full bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm" aria-labelledby="recommended-heading">
              <h2 id="recommended-heading" className="text-xl font-semibold mb-4">
                Recommended for You
              </h2>
              <div className="h-full grid grid-cols-1 md:grid-cols-4 gap-4 cursor-pointer">
                {Recommend[Recommendation].map((item) => (
                <>
                  <div className="card bg-white w-full hover:shadow-xl transition-shadow border dark:bg-transparent dark:text-white" >
                  <figure onClick={()=>{handleRecommandation(item.name)}}
                  >
                    <img
                      src={item.url}
                      alt={item.name}
                      className='rounded-b-xl'
                      />
                  </figure>
                  <div className="card-body" onClick={()=>{handleRecommandation(item.name)}}>
                    <h2 className="card-title">
                      {item.name}
                      <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{item.comment}</p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-neutral h-8">{item.tag1}</div>
                      <div className="badge badge-neutral h-8">{item.tag2}</div>
                    </div>
                  </div>
                  
                  <div className='z-10 p-2 m-5 w-14 h-14 flex items-center justify-center rounded-full  hover:bg-slate-300 cursor-pointer'>
                      {!isSpeak ? <Volume2 onClick={()=>testSpeech(item.comment)}
                      className='z-20 h-10 w-10' 
                      />  : <VolumeX onClick={()=>testSpeech()}
                      className='z-20 h-10 w-10'
                      /> }
                  </div>
                  </div>
                </>
                ))}
              </div>
            </section>
          </div>
        </Layout>
    );
}



// import React, { useState, useEffect } from "react";

// export const Home = () => {


//   return (
//     <div className="p-4 text-center">
//       <h1 className="text-2xl font-bold">Voice Navigation</h1>
//       <p>Say something and check the console for output</p>
//       <button
//         className="mt-4 p-2 bg-blue-500 text-white rounded"
//         onClick={() => setListening(!listening)}
//       >
//         {listening ? "Stop Listening" : "Start Listening"}
//       </button>
//       <p className="mt-4">Last Command: {command}</p>
//     </div>
//   );
// };


