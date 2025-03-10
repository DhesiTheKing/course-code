import React, { useState } from 'react'


import EnglishLanguage from './contents/English/EnglishLanguge';
import { useLocation } from 'react-router-dom';
import SignLanguage from './contents/SignLanguage/SignLanguage';
import Softskills from './contents/softskills/softskills';
import Selfcare from './contents/selfcare/Selfcare';
import MathLearning from './contents/maths/Maths';
import Environmental from './contents/environmental/Environmental';


function LearningSpace() {

  const location = useLocation();

  const learn = location.state


  return (
        <div className='h-full min-h-screen w-full bg-white mx-2 border-x-2 p-2 flex flex-col items-center justify-center'>
          
          {learn == "english" ? <EnglishLanguage/> : 
          
          
          learn == "signlanguage" ?  <SignLanguage/> : 

          learn == "self care" ? <Selfcare/> : 
          
          learn == "softskills" ? <Softskills/> : 
          
          learn == "maths" ? <MathLearning/> : 
          learn == "ENVIRONMENTAL SCIENCE" ? <Environmental/> :<></>
          
          
          }

          
          
          
        </div>
  )
}

export default LearningSpace;