import React from 'react';
import { IoLogIn } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdOutlineCompareArrows } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { RxDropdownMenu } from "react-icons/rx";







function Header() {
  return (
    <>
      <div className='flex justify-center w-full md:hidden'>
        <div className='flex w-full'>
          {/* mobile */}
          <div className='flex justify-between w-full'>
            <div className='text-[35px]  w-[50%]'>JOURNAL</div>

            <div className=' flex w-[30%]  text-[35px] justify-between items-center'>
              <div><RxDropdownMenu /></div>
              <div><FaSearch /></div>
              <div><BsCart4 /></div>
            </div>
          </div>

        </div>
      </div>
      {/* tab */}
      <div className='hidden md:flex justify-center'>
        <div className='md:max-w-[1600px] w-[100%] '>
          <div className='flex justify-between w-full lg:flex lg:gap-5'>
            <div className='w-[30%] text-[35px]   font-bold lg:p-1'>JOURNAL</div>
            {/* <div className='flex border-2 border-black w-[30%]'>
              <div className='flex justify-center items-center text-[20px] p-1 bg-blue-500'>ALL<FaCaretDown/></div>
              <div ><input type="search" name="" id="" /></div>
              <div className='flex justify-center items-center  p-1 bg-blue-500'><FaSearch className=''/></div>
            </div> */}
            <div className='flex  w-[40%] lg:w-[30%] p-2'>
              <div className='flex justify-center items-center text-[15px] text-white p-2 bg-blue-500 cursor-pointer hover:bg-blue-600'>
                ALL <FaCaretDown />
              </div>
              <div className='flex flex-1'>
                <input
                  type="search"
                  id="searchInput"
                  placeholder="Search..."
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                />
              </div>
              <div className='flex justify-center items-center p-2 bg-blue-500 cursor-pointer hover:bg-blue-600 text-white'>
                <FaSearch />
              </div>
            </div>
            <div className=' flex  text-[35px] justify-between items-center w-[20%] lg:hidden'>
              <div><RxDropdownMenu /></div>
              <div><FaSearch /></div>
              <div><BsCart4 /></div>
            </div>
            <div className=' hidden lg:flex  text-[15px] justify-between items-center w-[25%] p-2'>
              <div className='flex flex-col justify-center'>
                <p><IoLogIn className='text-[25px]' /></p>
                <p>Login</p>
                </div>
              <div>
              <p><FaPen className='text-[25px]' /></p>
              <p>Register</p>
                </div>
              <div>
              <p><CiHeart className='text-[25px]' /></p>
              <p>Whishlist</p>
              </div>
              <div>
              <p><MdOutlineCompareArrows className='text-[25px]' /></p>
              <p>Compare</p>
              </div>
            </div>
            <div className=' hidden lg:flex   text-[12px] justify-center items-center  w-[15%] gap-2'>
             <div>0 item(s) - $0.00</div>
              <div className='bg-blue-500 p-2'><BsCart4 className='text-[25px] text-white'/></div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Header;
