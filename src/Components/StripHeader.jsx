import React from 'react';
import { FaHome } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { FaQuestionCircle } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { CiDollar } from "react-icons/ci";
import { RiMenuSearchLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";







function StripHeader() {
  return (
    <>
      <div className=" flex w-full] justify-center ">
        <div className="flex items-center justify-between max-w-[1600px] w-full my-1 border-2 px-2 border-none">
          <div className="flex items-center ">
            <ul className='flex gap-4 align-middle my-2'>
              <li className='flex align-middle'> <FaHome className='text-[20px] mr-[2px] ' /> Home</li>
              <li className='hidden sm:flex align-middle'> <IoIosContact className='text-[20px] mr-[2px]  ' /> contact</li>
              <li className='flex align-middle'> <FaHome className='text-[20px] mr-[2px] ' /> About US</li>
              <li className='hidden sm:flex align-middle'> < FaQuestionCircle className='text-[20px] mr-[2px] ' /> FAQ <FaCaretDown className='text-[15px]' /></li>



            </ul>
          </div>
          <div className=" items-center hidden md:flex">
            <ul className='flex gap-4 align-middle my-2 '>
              <li>English </li>
              <li className='flex align-middle'> <CiDollar className='text-[20px] mr-[2px]' />US Dollar </li>
            </ul>
          </div>
          <div className="flex items-center  ">
            <ul className='flex gap-4 align-middle my-2'>
              <li className='flex align-middle'><RiMenuSearchLine className='text-[20px] mr-[2px] ' />More Menus </li>
              <li className='flex align-middle'><TbTruckDelivery className='text-[20px] mr-[2px] ' />Delivery</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default StripHeader;
