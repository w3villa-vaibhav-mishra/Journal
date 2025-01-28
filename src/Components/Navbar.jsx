import React from 'react'

function Navbar() {
  return (
    <>
        <div className=" hidden md:flex w-full justify-center bg-[#0057d0]">
            <div className="flex items-center justify- max-w-[1600px] w-full text-[10px] lg:text-[15px] ">
                <div className="bg-yellow-500 w-[15%] flex justify-center bg-[#] p-2 ">
                    ALL DEPARTMENTS
                </div>
                <div className=" w-[60%] p-2 mx-2">
                    <ul className='flex gap-4 text-white'>
                        <li>MULTILEVEL</li>
                        <li>MEGA MENU</li>
                        <li>FULLWIDTH</li>
                    </ul>
                </div>
                <div className="flex  justify-end gap-4  w-[25%] p-2 text-white">
                    <div className="Contact ">1.800.555.6789</div>
                    <div className="blog">BLOG</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar