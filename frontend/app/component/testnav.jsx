import Image from 'next/image'
import { previous, next } from '../asset/icon'

const Testnav = () => {
  return (
    <div className='bg-black-3 py-3 flex items-center justify-between rounded-lg'>
        <div className='flex-1 flex justify-center '>
            <button className='font-bold py-3 px-6 text-red-600 bg-[rgba(225,225,225,0.1)]  rounded-[16px]'>
                Submit Test
            </button>
        </div>
        <div className='flex flex-1 items-center gap-5 justify-center'>
            <button>
                <Image src={previous} alt='prev icon' width={36} />
            </button>
            <div className='bg-[rgba(225,225,225,0.1)] p-3 flex items-center rounded-lg '>
                <span className='text-orange-400'>
                    1
                </span>
                <span>
                    /
                </span>
                <span>
                    10
                </span>
            </div>
            <button>
                <Image src={next} alt='prev icon' width={36} />
            </button>
        </div>
        <div className='flex flex-1 gap-2 justify-center'>
            <span className='font-bold bg-[rgba(255,255,255,0.1)] rounded-lg p-3'>
                00:38 left
            </span>
            <button className='bg-orange-400 py-2 px-5 text-sm font-bold rounded-lg text-black'>
                Explain me
            </button>
        </div>

    </div>
  )
}

export default Testnav