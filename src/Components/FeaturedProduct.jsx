import React from 'react'

function FeaturedProducts() {
  return (
    <>
    
        <div className="flex w-full] justify-center bg-slate-400">
            <div className="flex flex-col flex-wrap justify-start max-w-[1600px] w-full my-2  py-6">
                <div className='flex justify-items-start  sm:justify-center md:text-[30px] font-bold'>Featured Products</div>
                <div className='sm:flex justify-center'><div className=' w-20 sm:flex justify-center border-t-2  border-orange-500  '></div>
                </div>
                <div className='text-left pt-4 text-[13px] sm:text-center md:text-[15px] lg:text-[20px] lg:p-8 text-slate-600'>
                <p>Journal has been the best selling and most lved opencart theme since first launch in 2013.Tried and tested by over 20K people. Journal 
                is the best opencart theme framework n market today. <a href="#">Learn more</a></p>
                </div>
                <div className="flex justify-center gap-3 mt-2 text-gray-600 ">
                    <div className=' flex bg-slate-300 rounded-sm overflow-hidden '>
                    <div className='bg-blue-500 p-[5px] text-white px-10' >FEATURED</div>
                    <div className='p-[5px] px-10'>LATEST</div>
                    <div className='hidden sm:flex p-[5px] px-10'>BESTSELLERS</div>
                    <div className='hidden sm:flex p-[5px] px-10'>SPECIALS</div>
                    </div>
                </div>

            </div>

        </div>
    </>
  )
}

export default FeaturedProducts