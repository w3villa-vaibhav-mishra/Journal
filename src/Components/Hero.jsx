import React from 'react';
import img from '../assets/photos/mobilehero.jpg';
import img2 from '../assets/photos/sound.jpg';
import img3 from'../assets/photos/washing machine.jpg'
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <>
      <div className="flex w-full justify-center bg-white py-4">
        <div className="   lg:flex  items-center max-w-[1600px] w-full lg:h-[600px] box-border">
          <div className=' w-full h-2/3 lg: lg:w-2/3 lg:h-full pr-4 rounded-xl flex  justify-center items-center lg:items-start  p-6 '>
            <div className=' w-2/4 lg:w-1/3 h-full flex flex-col justify-center p-2 rounded-l-md overflow-hidden bg-[#1c1c1c] gap-4'>
              <button className="bg-blue-500 text-white py-2 px-2 rounded w-[120px]  "> 
                Mobile
              </button>
              <h1 className="lg:text-3xl  font-extrabold  text-left text-white">
                Best Mobile Option <br /> at any resolution
              </h1>
              <button className="bg-gray-100 text-black py-2 px-4 rounded w-[160px] flex items-center justify-center">
                Learn More
                <FaArrowRight className="ml-4 text-[20px]" />
              </button>
            </div>
            <div className=' w-2/4  lg:w-2/3 h-full rounded-r-md overflow-hidden '>
            <img src={img} alt="" className='w-full h-full object-cover object-center'/>
            </div>
          </div>
          <div className='h-1/3 w-full lg: lg:w-1/3 lg:h-full  rounded-xl flex lg:flex-col justify-center items-center  p-6 gap-8'>
           <div className='h-full w-full  lg:h-full rounded-md overflow-hidden'>
            <img src={img2} alt="" className='h-full w-full'/>
           </div>
           <div className='w-full  h-full rounded-md overflow-hidden'>
            <img src={img3} alt="" className='h-full w-full object-cover object-center'/>
           </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
