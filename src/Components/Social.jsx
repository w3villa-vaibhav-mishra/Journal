import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";



function Social() {
  return (
    <>
                <div className="flex w-full justify-center bg-slate-200">
            <div className="flex flex-col items-center justify-start max-w-[1600px] w-full my-2 ">
            <div className="flex flex-wrap gap-4 text-blue-600">
            <FaFacebook size={30} className='text-[30px] xl:text-[40px]' />
            <FaInstagram size={30} />
                <FaSkype size={30} />
                <FaSlack size={30} />
                <FaLinkedin size={30} />
                <FaGooglePlus size={30} />
            </div>
            </div>
        </div>
    </>
  )
}

export default Social