import React from 'react'
import SignLanguageIntro from './SignLanguageIntro'
import helperUtils from '../../../utils/Helper'
import {  content } from './signContent'
import { ArrowRight , ArrowLeft } from 'lucide-react'
import SignLanguageAssessment from './SignLanguageAssessment'
const SignLanguage = () => {

    const {signLearning,setSignLearning} = helperUtils();
    const contents = content();    

    const assesmentType =contents[signLearning];
    console.log(assesmentType+" this");
    console.log("sign learning :"+signLearning);
    
    
    
    
    

  return (
    <>
    {(signLearning%2!=0 && signLearning!=-1) || signLearning == 6 ? <SignLanguageAssessment assesmentType={assesmentType}/> :

    signLearning == -1 ? <SignLanguageIntro /> : 
    
    <div className="max-w-6xl mx-auto p-8 bg-gray-50 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
        {contents[signLearning][0].heading}
        </h1>
        <p className="text-lg text-center text-gray-700 mb-12">
        {contents[signLearning][1].description}
        </p>
        <div className="grid grid-cols-5 gap-6 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5">
        {contents[signLearning].slice(2).map((alphabet) => (
            <div
            key={alphabet.contentType}
            className="group relative text-center bg-white rounded-lg shadow-md p-4 transform hover:scale-105 transition duration-300"
            >
            <img
                src={alphabet.img}
                alt={`Sign for ${alphabet.contentType}`}
                className="rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold text-gray-800">
                {alphabet.contentType}
            </h2>
            
            </div>
        ))}
        </div>
    </div>
    
    

}

    <div className='w-full h-40 px-5  items-center justify-center flex gap-80  '>
        {signLearning != -1 ?
        <button className='btn btn-primary w-56 text-white font-bold'
        onClick={()=>{setSignLearning(signLearning-1)}}
        >
            <ArrowLeft/>
            PREVIOUS
        </button>
        :<></>}
        {signLearning <= 5 ? 
        <button className='btn btn-primary w-56 text-white font-bold'
        onClick={()=>{setSignLearning(signLearning+1)}}
        >
            <ArrowRight/>
            NEXT
        </button>
        :<></>}
    </div>

    </>
  )
}

export default SignLanguage;