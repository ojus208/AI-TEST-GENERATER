import React from 'react'

const Question = () => {
    const question = {"quesion":"What is the output for print(2+2) in python code", "option":['Error','4','6','Run time error']}
  return (
    <div className=' p-6 rounded-lg text-xl'>
        <div className='flex flex-col justify-around items-start gap-10'>
            <div className='flex justify-between'>
                <h1 className='font-bold my-2 text-2xl'>
                    What is the solution for 2+2 in python ?
                </h1>
              
                {/* <hr className='bg-gray-t-l ' /> */}
            </div>
            <div className='flex justify-center w-full'>
            <ul className='flex flex-col gap-5'>
                {
                    question['option'].map((opt, index)=><li className='' key={index}>
                    <label className='flex gap-3 items-center p-3 bg-[rgba(255,255,255,0.1)] rounded-lg cursor-pointer'>
                        <input type="radio" name="option" id={`option`+index} className={`text-green-400 outline-none border-none `} />
                        <span>{opt}</span>
                    </label>
                </li>)
                }
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Question