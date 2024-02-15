'use client'
import {useFormState, useFormStatus} from 'react-dom'
import { useState } from 'react'
import { genTestAction } from '../actions/generatetestaction'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import {loading} from '../asset/icon'

const initial_state = {
    redir:false
}

const Gen_test = () => {
        const router  = useRouter()
        const {isPending} = useFormStatus()
        const [state, formAction] = useFormState(genTestAction, initial_state)
    
        if (state?.redir){
            router.push(`test/${state?.test_id}/`)
        }

  return (
    <div className='flex flex-col items-center bg-black-3 p-5 rounded-[16px] sm:min-w-[500px] gap-7'>
        {(state?.message != "" && state?.message != undefined) ?  <div class="flex w-full items-center p-4 mb-4 text-sm  rounded-lg bg-gray-800 text-red-400" role="alert">
                        <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span class="sr-only">Info</span>
                        <div>
                            <span class="font-medium">{state.message}</span>
                        </div>
                    </div> : "" }
      <h1 className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold text-2xl'>
          Test Your Knowledge
        </h1>
        <form action={formAction} className=' flex justify-around items-center flex-wrap  gap-5 p-5 rounded-[16px]'>
            <div className='flex flex-col items-start gap-2 w-[200px]'>
                <label htmlFor="topic">Topic</label>
                <input type="text" name='topic' id='topic' placeholder='Enter any Topic' required className='bg-[rgb(25,25,25)] w-full outline-none rounded-xl border-none text-xl py-2 px-3 placeholder:text-gray-t ' />
            </div>
            <div className='flex flex-col items-start gap-2 w-[200px]'>
                <label htmlFor="hardness_level">Hardness Level</label>
                <select name="hardness_level" id="hardness_level" className='bg-[rgb(25,25,25)] outline-none rounded-xl border-none text-xl py-2 px-3 placeholder:text-gray-t w-full cursor-pointer ' >
                  <option selected value="Easy">Easy Level</option>
                  <option  value="moderate">Moderate Level</option>
                  <option  value="hard">Hard Level</option>
                </select>
                {/* <input type="text" name='hardness' placeholder='Enter any Topic' className='bg-[rgb(25,25,25)] outline-none rounded-xl border-none text-xl py-2 px-3 placeholder:text-gray-t ' /> */}
            </div>
            <div className='flex flex-col items-start gap-2 w-[200px]'>
                <label htmlFor="number_of_question">Number of Question's</label>
                <select name="number_of_question" id="number_of_question" className='bg-[rgb(25,25,25)] outline-none rounded-xl border-none text-xl py-2 px-3 placeholder:text-gray-t w-full cursor-pointer' >
                  <option selected value="1">1</option>
                  <option  value="15">15</option>
                  <option  value="20">20</option>
                </select>
                {/* <input type="text" name='num_text' id='num_text' placeholder='Enter any Topic' className='bg-[rgb(25,25,25)] outline-none rounded-xl border-none text-xl py-2 px-3 placeholder:text-gray-t ' /> */}
            </div>
            <div className='flex flex-col items-start gap-2 w-[200px]'>
                <label htmlFor="q_type">Question Type</label>
                <select name="q_type" id="q_type" className='bg-[rgb(25,25,25)] outline-none rounded-xl border-none text-xl py-2 px-3 placeholder:text-gray-t w-full cursor-pointer' >
                  <option selected  value="MCQ">MCQ</option>
                  <option  disabled value="fill_in_the_blank">Fill in the blank</option>
                  <option  disabled value="long_answer">Long answer question</option>
                </select>
                {/* <input type="text" name='num_text' id='num_text' placeholder='Enter any Topic' className='bg-[rgb(25,25,25)] outline-none rounded-xl border-none text-xl py-2 px-3 placeholder:text-gray-t ' /> */}
            </div>
            <div className='w-full mt-7'>
              <button className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 py-3 w-full justify-center flex text-black text-xl font-bold rounded-[16px]'>
                {isPending ? <Image src={loading} alt="loading image" width={26} className='animate-spin' />: "Generate"}
              </button>
            </div>
            
        </form>
      </div>
  )
}

export default Gen_test