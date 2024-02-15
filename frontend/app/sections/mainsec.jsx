import React from 'react'
import Gen_test from '../component/gen_test'




const Mainsec = () => {
  return (
    <div className='min-h-screen tab flex flex-col items-center gap-10'>
      <div className='flex items-center justify-center flex-col gap-4'>
        <h1 className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold text-4xl'>
          AI Test Generator
        </h1>
        <p className='text-gray-t'>
          With the power of AI(artificial inteliigence) test your knowledge on any topic of your choice just by creating a test here.
        </p>
      </div >
      <Gen_test />
    </div>
  )
}

export default Mainsec