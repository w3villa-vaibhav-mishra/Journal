import React from 'react'
import G1 from '../assets/photos/G6.jpg'
import G2 from '../assets/photos/G2.webp'
import G3 from '../assets/photos/G3.jpg'
import G4 from '../assets/photos/G4.jpg'
import G5 from '../assets/photos/G5.jpg'
import G6 from '../assets/photos/G7.jpg'
import G7 from '../assets/photos/G8.jpg'
import G8 from '../assets/photos/G9.webp'
import G9 from '../assets/photos/G10.jpg'
import G10 from '../assets/photos/G11.jpg'
import G11 from '../assets/photos/G12.jpg'
import G12 from '../assets/photos/G1.webp'



function Featured() {
  return (
    <>
    
        <div className="flex w-full] justify-center bg-slate-400">
            <div className="flex flex-col flex-wrap justify-start max-w-[1600px] w-full my-2  py-10">
                <div className='flex justify-items-start text-white sm:justify-center md:text-[30px] font-bold'>Improved Gallery Module</div>
                <div className='sm:flex justify-center'><div className=' w-20 sm:flex justify-center border-t-2  border-orange-500  '></div>
                </div>
                <div className='text-left pt-4 text-[13px] sm:text-center md:text-[15px] lg:text-[20px] lg:p-8 text-gray-800'>
                <p>The Gallery module supports images, video and can also acts as banners that can point to say other page or open other Popup modules. Create different modules with images, videos, banners or a combination of all. Add your modules on any page in any grid format. 
                </p>
                </div>
                <div className='flex flex-wrap p-2 gap-2 justify-center'>
                  <img src={G1} alt="" className='h-[100px] w-[100px] object-fill border-2 rounded-lg  overflow-hidden' />
                  <img src={G2} alt="" className='h-[100px] w-[100px] object-fill border-2 rounded-lg  overflow-hidden'/>
                  <img src={G3} alt="" className='h-[100px] w-[100px] object-fill border-2 rounded-lg  overflow-hidden'/>
                  <img src={G4} alt="" className='h-[100px] w-[100px] object-fill border-2 rounded-lg  overflow-hidden'/>
                  <img src={G5} alt="" className='h-[100px] w-[100px] object-fill border-2 rounded-lg  overflow-hidden'/>
                  <img src={G6} alt="" className='h-[100px] w-[100px] object-fill border-2 rounded-lg  overflow-hidden'/>
                  <img src={G7} alt=""className='h-[100px] w-[100px] object-fill border-2 rounded-lg  overflow-hidden' />
                  <img src={G8} alt="" className='h-[100px] w-[100px] object-fill border-2 rounded-lg  overflow-hidden' />
                  <img src={G9} alt="" className='h-[100px] w-[100px] object-fill border-2 rounded-lg  overflow-hidden' />
                  <img src={G10} alt="" className='h-[100px] w-[100px] object-fill border-2 rounded-lg  overflow-hidden'/>
                  <img src={G11} alt="" className='h-[100px] w-[100px] object-fill border-2 rounded-lg  overflow-hidden'/>
                  <img src={G12} alt="" className='h-[100px] w-[100px] object-fill border-2 rounded-lg  overflow-hidden'/>

                </div>

            </div>

        </div>
    </>
  )
}

export default Featured