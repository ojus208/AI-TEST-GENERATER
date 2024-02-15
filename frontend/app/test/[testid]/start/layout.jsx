
import Testnav from '@/app/component/testnav'

const Layout = ({children}) => {
  const questions = ['what is the output for the following programme. print(2+2)', 'What will be the output for the following code. func(this):this is new func']
  return (
    <div className='flex w-full h-full gap-2'>
      <div className="tab flex flex-col items-center h-full w-full">
        <div className='w-full'>
        <Testnav />
        </div>
        <div className='flex items-center justify-center h-full'>
            {children}
        </div>
        <div className='w-full flex items-center justify-around'>
          <button className='bg-[rgba(255,255,255,0.1)] py-2 px-4 rounded-lg'>
            prev
          </button>
          <button className='bg-[rgba(255,255,255,0.1)] py-2 px-4 rounded-lg'>
            next
          </button>
        </div>
    </div>
    <div className=" min-w-[20vw]">
      <div className="tab flex flex-col gap-5">
        <div className='py-3 px-5 font-bold text-xl bg-[rgba(119,119,119,0.1)] rounded-lg'>
          Question's List
        </div>
        <div className='bg-[rgba(119,119,119,0.1)] py-2 px-3 rounded-lg'>
          <ul className='p-2 flex flex-col items-start gap-3'>
            {questions.map((que,index)=>
            <li className='list-decimal text-orange-400 cursor-pointer' key={index}>
              {que.substring(0,30)+"....."}
            </li>
            )}
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Layout