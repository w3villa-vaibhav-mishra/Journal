import React from 'react'
import { IoCallSharp } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";



function Navbar() {
  return (
    <>
        <div className=" hidden md:flex w-full justify-center bg-[#0057d0]">
            <div className="flex  justify- max-w-[1600px] w-full text-[10px] lg:text-[15px] ">
                <div className="bg-yellow-500 w-[30%] flex justify-start bg-[#] p-2 relative gap-2 xl:w-[20%]">
                    <FaBarsStaggered className='text-[15px]'/>ALL DEPARTMENTS
                    <div className='absolute -top-2 right-2 bg-red-600 text-white px-1 text-[14px]'>SALE</div>
                </div>
                <div className=" w-[40%] p-2 mx-2 xl:w-[55%]">
                    <ul className='flex gap-4 text-white'>
                        <li>MULTILEVEL</li>
                        <li>MEGA MENU</li>
                        <li>FULLWIDTH</li>
                    </ul>
                </div>
                <div className="flex  justify-end  gap-4  w-[25%] p- text-white">
                    <div className=" flex justify-center items-center gap-1"><IoCallSharp className='text-[15px]'/>1.800.555.6789</div>
                    <div className="flex justify-center items-center bg-yellow-500 text-black gap-1 px-2"> <FaMessage/>BLOG</div>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Navbar