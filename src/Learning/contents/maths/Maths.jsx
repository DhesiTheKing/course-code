import React from 'react';
import { mathContent } from './mathsContent';
import MathAssessment from './MathAssesment';
import helperUtils from '../../../utils/Helper';
import { ArrowRight, ArrowLeft } from 'lucide-react';

import MathsIntro from './MathsIntro';
import { s } from 'framer-motion/m';

const signLearning = () => {
    const { signLearning, setSignLearning } = helperUtils();
    const contents = mathContent();    

    const assessmentType = contents[signLearning];
    console.log(signLearning);
    console.log(contents[signLearning]);
    


    return (
        <>
            {(signLearning == 2 || signLearning ==5 || signLearning ==8 || signLearning ==12 && signLearning !== -1)  ? 
                <MathAssessment assesmentType={assessmentType} /> :

                signLearning === -1 ? <MathsIntro /> :

                <div className="max-w-6xl mx-auto p-8 rounded-lg shadow-lg bg-green-50">
                    <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
                        {contents[signLearning][0].heading}
                    </h1>
                    <p className="text-lg text-center text-gray-700 mb-12">
                        {contents[signLearning][1].description}
                    </p>
                    <div className="grid grid-cols-5 gap-6 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5">
                        {contents[signLearning].slice(2).map((topic) => (
                            <div
                                key={topic.contentType}
                                className="group relative text-center bg-white rounded-lg shadow-md p-4 transform hover:scale-105 transition duration-300"
                            >
                                <img
                                    src={topic.url}
                                    alt={`Illustration for ${topic.contentType}`}
                                    className="rounded-lg mb-4"
                                />
                                <h2 className="text-xl font-bold text-gray-800 m-2">
                                    {topic.operation}
                                </h2>
                                <h2 className="text-xl font-bold text-gray-800">
                                    {topic.contentType}
                                </h2>
                            </div>
                        ))}
                    </div>
                </div>
            }

            <div className='w-full h-40 px-5 items-center justify-center flex gap-80'>
                {signLearning !== -1 ?
                    <button className='btn btn-primary w-56 text-white font-bold'
                        onClick={() => { setSignLearning(signLearning - 1) }}>
                        <ArrowLeft />
                        PREVIOUS
                    </button>
                    : <></>}
                {signLearning <= 11 ?
                    <button className='btn btn-primary w-56 text-white font-bold'
                        onClick={() => { setSignLearning(signLearning + 1) }}>
                        <ArrowRight />
                        NEXT
                    </button>
                    : <></>}
            </div>
        </>
    );
}

export default signLearning;
