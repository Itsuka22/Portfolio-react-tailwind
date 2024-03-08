// import React from 'react'
import { data } from '../data/data'
import Italase from '../assets/project/italase.png'
import Amanda from '../assets/project/tes.png'
import Patour from '../assets/project/patour.png'


const Work = () => {

  const project = data;

  return(
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-800'>Work</p>
          <p className='py-6'>Recent my project</p>
        </div>

{/* card item */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'> 

        {/* grid pisah */}
          <div style={{backgroundImage: `url(${Italase})`}} className='shadow-lg shadow-[#212121] group container rounded-md flex justify-center items-center mx-auto content-div' >
            
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className='text-2xl font-bold text-white tracking-wider'>
                Italase Case Study
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"></button>
                </a>
                <a href="/">
                  <button  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"></button>
                </a>
              </div>
            </div>

          </div>
          
          <div style={{backgroundImage: `url(${Amanda})`}} className='shadow-lg shadow-[#212121] group container rounded-md flex justify-center items-center mx-auto content-div' >
            
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className='text-2xl font-bold text-white tracking-wider'>
                Italase Case Study
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"></button>
                </a>
                <a href="/">
                  <button  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"></button>
                </a>
              </div>
            </div>
          </div>

          {/* grid pisah */}
          <div style={{backgroundImage: `url(${Patour})`}} className='shadow-lg shadow-[#212121] group container rounded-md flex justify-center items-center mx-auto content-div' >
            
            {/* Hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className='text-2xl font-bold text-white tracking-wider'>
                Italase Case Study
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"></button>
                </a>
                <a href="/">
                  <button  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"></button>
                </a>
              </div>
            </div>

          </div>
        </div>
        


      </div>
    </div>
    
  )
}

export default Work