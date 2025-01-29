import React from 'react';
import { IoLogIn } from "react-icons/io5";
import { FaPen } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdOutlineCompareArrows } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { RxDropdownMenu } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate(); 

 
  const handleLoginClick = () => {
    navigate('/'); 
  };

  const handleRegisterClick = () => {
    navigate('/register'); 
  };

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

      <div className='hidden md:flex justify-center'>
        <div className='md:max-w-[1600px] w-[100%] '>
          <div className='flex justify-between w-full lg:flex lg:gap-5'>
            <div className='w-[30%] text-[35px]   font-bold lg:p-1'>JOURNAL</div>
            <div className=' flex  w-[40%] lg:w-[30%] p-2'>
              <div className='flex justify-center items-center text-[15px] text-white p-2 bg-blue-500 cursor-pointer hover:bg-blue-600'>
                ALL <FaCaretDown />
              </div>
              <div className='flex flex-1'>
                <input
                  type="search"
                  id="searchInput"
                  placeholder="Search..."
                  className="w-full p-2 border border-gray-300 focus:outline-none  focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                />
              </div>
              <div className='flex justify-center items-center p-2 bg-blue-500 cursor-pointer hover:bg-blue-600 text-white'>
                <FaSearch />
              </div>
            </div>

            {/* Mobile icons */}
            <div className=' flex  text-[35px] justify-between items-center w-[20%] lg:hidden'>
              <div><RxDropdownMenu /></div>
              <div><FaSearch /></div>
              <div><BsCart4 /></div>
            </div>

            <div className='hidden lg:flex text-[15px] justify-between items-center w-[25%] p-2'>
              <div className='flex flex-col justify-center items-center hover:text-blue-500' onClick={handleLoginClick}>
                <IoLogIn className='text-[25px]' />
                <p>Login</p>
              </div>
              <div className='flex flex-col justify-center items-center hover:text-blue-500' onClick={handleRegisterClick}>
                <FaPen className='text-[25px]' />
                <p>Register</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <CiHeart className='text-[25px]' />
                <p>Wishlist</p>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <MdOutlineCompareArrows className='text-[25px]' />
                <p>Compare</p>
              </div>
            </div>

            {/* Cart section */}
            <div className='hidden lg:flex text-[12px] justify-end items-center w-[15%] gap-2'>
              <div>0 item(s) - $0.00</div>
              <div className='bg-blue-500 p-2'>
                <BsCart4 className='text-[25px] text-white'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
