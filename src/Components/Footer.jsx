import React from 'react'

function Footer() {
  return (
    <>
      <div className='flex w-full justify-center'>
        <div className='flex flex-wrap justify-start max-w-[1600px] w-full'>
          <div className='w-full flex flex-col gap-2 p-2 sm:w-full md:w-[50%] lg:w-[25%] border-r-2'>
            <h1 className='underline decoration-orange-400 decoration-2 underline-offset-8 '>About Us</h1>
            <p className='text-blue-500'><a href="#">About us</a></p>
            <p className='text-blue-500'><a href="#">Delivery</a></p>
            <p className='text-blue-500'><a href="#">Privacy Policy</a></p>
            <p className='text-blue-500'><a href="#">Terms & Condition</a></p>
            <p className='text-blue-500'><a href="#">Custom Links</a></p>
          </div>
          <div className='w-full flex flex-col gap-2 p-2 sm:w-full md:w-[50%] lg:w-[25%] border-r-2'>
            <h1 className='underline decoration-orange-400 decoration-2 underline-offset-8'>Customer Service</h1>
            <p className='text-blue-500'><a href="#">Contact</a></p>
            <p className='text-blue-500'><a href="#">Returns</a></p>
            <p className='text-blue-500'><a href="#">Site Map</a></p>
            <p className='text-blue-500'><a href="#">Brands</a></p>
            <p className='text-blue-500'><a href="#">Custom Links</a></p>
          </div>
          <div className='w-full flex flex-col gap-2 p-2 sm:w-full md:w-[50%] lg:w-[25%] border-r-2'>
            <h1 className='underline decoration-orange-400 decoration-2 underline-offset-8'>My Account</h1>
            <p className='text-blue-500'><a href="#">My Account</a></p>
            <p className='text-blue-500'><a href="#">Order History</a></p>
            <p className='text-blue-500'><a href="#">Affiliates</a></p>
            <p className='text-blue-500'><a href="#">Newsletter</a></p>
            <p className='text-blue-500'><a href="#">Gift Certificates</a></p>
          </div>
          <div className='w-full flex flex-col gap-2 p-2 sm:w-full md:w-[50%] lg:w-[25%]'>
            <h1 className='underline decoration-orange-400 decoration-2 underline-offset-8'>Newsletter</h1>
            <div>
              <p>Stay up to date with news and promotions by signing up for our newsletter</p>
            </div>
            <div className="flex flex-col gap-1 ">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="flex-1 border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-orange-500 transition duration-200 ease-in-out "
              />
              <button className='px-5 bg-blue-500 w-[100px] py-2 text-white rounded-md'>SUBMIT</button>
            </div>
            <div>
              <input type="checkbox" name="agree" id="agree" /> I have read and agreed to the privacy policy
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
