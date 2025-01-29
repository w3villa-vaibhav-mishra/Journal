import React from 'react'

function Featured() {
  return (
    <>

      <div className="flex w-full justify-center bg-slate-400">
        <div className="flex flex-col flex-wrap justify-start max-w-[1600px]    ">
          <div className='flex justify-items-start  sm:justify-center  md:text-[30px] font-bold pt-7 px-[5px]'>Featured Category</div>
          <div className='sm:flex justify-center'><div className=' w-20 sm:flex justify-center border-t-2  border-orange-500 ml-[5px] '></div>
          </div>
          <div className='text-left pt-4 text-[13px] sm:text-center md:text-[15px] lg:text-[20px] lg:p-8 text-slate-600 px-[5px]'>
            <p>Basicaly create category based modules and display products from specific categories or brand only. The advanced page builder allows you to create any grid layout with full control at any breakpoint.

            </p>
          </div>
          {/* <div className="flex justify-center gap-3 mt-2 ">
                    <div className=' flex bg-slate-300 rounded-sm overflow-hidden '>
                    <div className='bg-blue-500 p-[5px]' >TOP CATEGRIES</div>
                    <div className='p-[5px]'>ELECTRONICS</div>
                    <div className='hidden sm:flex p-[5px]'>BEAUTY</div>
                    <div className='hidden sm:flex p-[5px]'>FASHION</div>
                    </div>
                </div> */}

        </div>

      </div>
    </>
  )
}

export default Featured