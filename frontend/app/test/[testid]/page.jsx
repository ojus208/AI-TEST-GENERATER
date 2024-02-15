'use client'
import Link from 'next/link'
import { useEffect, useContext, useState } from 'react'
import axios from 'axios'
import Quecontext from '@/app/context/context'
import {useFormState} from 'react-dom'
import { startTest } from '@/app/actions/startTestAction'
import { useRouter , usePathname} from 'next/navigation'

const initial_state = {
    redir:false,
    message:""
}

const Page = ({ params }) => {
    const pathname = usePathname()
    const router = useRouter()
    const { value } = useContext(Quecontext)
    const [question, setquestion] = value
    const [state, formAction] = useFormState(startTest, initial_state)
    const [Data_new, setData_new] = useState([])



    useEffect(() => {
       
    })


    const rules_list = [
        "You will get 10 marks for each correct answer. if the selected answer is wrong there is no minus marking it will be marked as 0 marks for each worngs answer",

        "After starting the test timer start and test will automatically ends after the time completion after the time completion you are not abel to submit the test",
        "Select on the option that you think its correct or leave it blank if you dont know answer. blank answer are getting 0 marks for each",
        "Try to complete the test in the giveing time "

    ]

    if(state?.redir){
        router.push("/start")
    }

    return (

        <div className='tab flex flex-col items-center gap-5 justify-around '>
            <h1 className='font-bold text-3xl'>
                Your MCQ test is ready start the test by clicking start
            </h1>
            <div className='bg-black-3 p-4 rounded-[16px] flex flex-col gap-5 items-center max-w-[800px] '>
                <h2 className='font-bold text-2xl flex flex-col  items-center'>
                    Rule's for the test <span className='text-gray-t text-sm'>
                        (please read id carefully )
                    </span>
                </h2>
                <ol className='px-3 flex flex-col gap-5'>
                    {
                        rules_list.map((rule, index) =>
                            <li className='list-disc text-orange-400' key={index}>
                                {rule}
                            </li>
                        )
                    }
                </ol>
            </div>
            <div className='flex items-center'>
                <button onClick={()=>formAction({"id":pathname.slice(6)})} className='px-5 py-3 font-bold text-lg bg-[rgba(119,119,119,0.1)] rounded-lg  min-w-[100px] text-green-400 hover:text-black hover:bg-green-400 transition-all text-center'>
                    Start
                </button>
            </div>
        </div>

    )
}

export default Page