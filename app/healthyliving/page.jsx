import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

const page = () => {
  return (
    <main>
        <div className='bg-gray-800  h-120 border shadow-md'>
            <div className='w-fit h-90 flex flex-col :lg:my-30 my-5 lg:mx-60 mx-10 space-y-7 relative'>
                <h1 className='uppercase text-md font-semibold text-blue-500'>Healthy living</h1>
                <p className='text-gray-200 font-extrabold text-3xl '>Live Well, Feel Great and Look <br /> Great.</p>
                <p className='text-white'>A huge selection of health and fitness content, healthy recipes and transformation  
                    <br />stories to help you get fit and stay fit! </p>
                <IoIosArrowDown  className='absolute bottom-0 right-0 text-5xl text-gray-200 hover:text-green-300 transition-all duration-300'/>
            </div>
        
        </div>
        <div className='bg-gray-300 h-120 shadow-md'>
            <div>
             <h1 className='text-gray-900 font-semibold text-2xl lg:p-10 p-2 space-y-10'>Fitness</h1>
             <div className='lg:px-20 px-3 grid grid-cols-4 '>
                <div className="w-70 bg-gray-800 h-80 border relative hover:bg-gray-500">
                    <div className='w-70 h-40 bg-gray-700 shadow-md '>
                        <h1 className='text-sm text-white absolute bottom-5 p-2 '>Staying Active with Chronic Pain
                                How to Keep a Workout Routine When You Live with Chronic Pain or Fatigue</h1>

                    </div>

                </div>
                <div className="w-70 bg-gray-800 h-80 border relative hover:bg-gray-500 max-lg:hidden">
                    <div className='w-70 h-40 bg-gray-700 shadow-md '>
                        <h1 className='text-sm text-white absolute bottom-5 p-2  '>Staying Active with Chronic Pain
                                How to Keep a Workout Routine When You Live with Chronic Pain or Fatigue</h1>

                    </div>

                </div>
                <div className="w-70 bg-gray-800 h-80 border relative hover:bg-gray-500 max-lg:hidden">
                    <div className='w-70 h-40 bg-gray-700 shadow-md '>
                        <h1 className='text-sm text-white absolute bottom-5 p-2 '>Staying Active with Chronic Pain
                                How to Keep a Workout Routine When You Live with Chronic Pain or Fatigue</h1>

                    </div>

                </div>
                <div className="w-70 bg-gray-800 h-80 border relative hover:bg-gray-500  max-lg:hidden">
                    <div className='w-70 h-40 bg-gray-700 shadow-md '>
                        <h1 className='text-sm text-white absolute bottom-5 p-2 '>Staying Active with Chronic Pain
                                How to Keep a Workout Routine When You Live with Chronic Pain or Fatigue</h1>

                    </div>

                </div>
             </div>
            </div>
        </div>
        <div className='bg-gray-200 h-120 shadow-md'>
            <div>
             <h1 className='text-gray-600 font-semibold text-2xl lg:p-10 p-2 space-y-10'>Health</h1>
             <div className='lg:px-20 px-3 grid grid-cols-4 '>
                <div className="w-70 bg-gray-800 h-80 relative hover:bg-gray-500">
                    <div className='w-70 h-40 bg-white'>
                        <h1 className='text-sm text-white absolute bottom-5 p-2 '>Staying Active with Chronic Pain
                                How to Keep a Workout Routine When You Live with Chronic Pain or Fatigue</h1>

                    </div>

                </div>
                <div className="w-70 bg-gray-800 h-80 relative hover:bg-gray-500  max-lg:hidden">
                    <div className='w-70 h-40 bg-white '>
                        <h1 className='text-sm text-white absolute bottom-5 p-2  '>Staying Active with Chronic Pain
                                How to Keep a Workout Routine When You Live with Chronic Pain or Fatigue</h1>

                    </div>

                </div>
                <div className="w-70 bg-gray-800 h-80  relative hover:bg-gray-500  max-lg:hidden">
                    <div className='w-70 h-40 bg-white '>
                        <h1 className='text-sm text-white absolute bottom-5 p-2 '>Staying Active with Chronic Pain
                                How to Keep a Workout Routine When You Live with Chronic Pain or Fatigue</h1>

                    </div>

                </div>
                <div className="w-70 bg-gray-800 h-80 relative hover:bg-gray-500  max-lg:hidden">
                    <div className='w-70 h-40 bg-white '>
                        <h1 className='text-sm text-white absolute bottom-5 p-2 '>Staying Active with Chronic Pain
                                How to Keep a Workout Routine When You Live with Chronic Pain or Fatigue</h1>

                    </div>

                </div>
             </div>
            </div>
        </div>
    </main>
  )
}

export default page