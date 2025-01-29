import React from 'react'
import { FaCcMastercard } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcStripe } from "react-icons/fa";




function StripFooter() {
    return (
        <>
            <div className='flex w-full] justify-center bg-slate-400 '>
                <div className='max-w-1600px w-[100%] flex flex-col items-center justify-center  lg:flex-row'>
                    <div className=' text-center w-full '>Copyright @ 2014, Your store, All rights Reserved.</div>
                    <div className='w-full flex justify-center gap-2'>
                        <FaCcMastercard className='h-[30px] w-[30px]'/>
                        <FaGooglePlus className='h-[30px] w-[30px]'/>
                        <FaCcVisa className='h-[30px] w-[30px]'/>
                        <FaCcPaypal className='h-[30px] w-[30px]'/>
                        <FaCcStripe className='h-[30px] w-[30px]'/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default StripFooter