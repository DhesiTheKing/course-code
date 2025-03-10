import React from 'react'
import Layout from '../components/Layout'
import LearningSpace from '../Learning/LearningSpace';


export const LearningPortal = () => {


  return (
    <>
        <div className='flex flex-col h-full w-screen bg-white'>
            <Layout>
            <LearningSpace/>
            </Layout>

        </div>
    </>
  )
}
