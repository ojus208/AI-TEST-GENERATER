import { cross } from "../asset/icon"
import {user} from '../asset/images'
import Image from 'next/image'

const Sidenavleft = () => {
    const navlist = [['Explore more', ''], ['Generate Test'], ['Account'], ['My Test']]
    return (
        <div className='flex flex-col gap-2'>
            <div className="tab flex items-center gap-2">
                
                    <Image src={user} width={36} height={36} alt="user img" className="rounded-full" />
                <span>
                    ojus_208
                </span>
                
            </div>
            <div className='tab'>
                <ol className='flex flex-col items-start gap-2'>
                    {
                        navlist.map((item, index) =>
                            <li className='w-full hover:bg-[rgba(50,50,50,1)] rounded-lg font-bold py-2 px-2 cursor-pointer' key={index}>
                                {item[0]}
                            </li>
                        )
                    }
                </ol>
            </div>
            <div className='tab'>

                <div className="flex w-full justify-between items-center py-2 ">
                <span className="font-bold">
                    How to use
                </span>
                <button>
                <Image src={cross} width={26} alt="cross btn"  />
                </button>
                </div>
                <hr className='bg-gray-t-l text-gray-t-l ' />
                <ul className="text-gray-t text-sm items-center list-disc px-2">
                    <li>
                        Fill any topic on which you want to give test
                    </li>
                    <li>
                        choose the difficulty level between easy,moderate,hard
                    </li>
                    <li>
                        Choose the number of question to be asked in the test
                    </li>
                    <li>
                        Choose type of question you want in your test (only mcq are availbale soon other will be)
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Sidenavleft