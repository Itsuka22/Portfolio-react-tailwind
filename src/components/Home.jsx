import {HiArrowNarrowRight} from 'react-icons/hi'
import { TypeAnimation } from "react-type-animation";


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0d1930]'>

      {/* Containner */}
      <div className='max-w-[1000px] space-y-2 mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#8B6B47] ml-2 sm:text-2xl'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Ardi Handoyo
        </h1>
        <h2 className='text-2xl sm:text-4xl font-bold text-[#8892b0]'>
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              500,
              'Fresh Graduate', // initially rendered starting point
              1000,
              'React Developer Student',
              1000,
              'Quality Anssurance Student',
              1000,
              'Mobile Dev student',
              500,
                    ]}
            speed={50}
            style={{ fontSize: '1em' }}
            repeat={Infinity}
          />
        </h2>

        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        Fresh Graduate of Informatics Engineering Department.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center rounded-full hover:bg-[#8B6B47] hover:border-[#8B6B47]'>
            View Work
            <span className='group-hover:rotate-90 duration-300' href='/src/components/Work.jsx'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>

      </div>

    </div>
  )
}

export default Home