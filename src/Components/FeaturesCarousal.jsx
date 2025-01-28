import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heels from '../assets/photos/nineheels.webp'
import { FaCaretSquareUp } from "react-icons/fa";
import { FaCaretSquareDown } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { LuArrowRightLeft } from "react-icons/lu";
import { CiBadgeDollar } from "react-icons/ci";
import { FaRegQuestionCircle } from "react-icons/fa";
import camera from '../assets/photos/ninecamera.webp'
import headphones from '../assets/photos/nineheadphones.jpg'
import shoes from '../assets/photos/nineshoes.jpg'
import tv from '../assets/photos/ninetelevision.jpg'
import beauty from '../assets/photos/ninebeauty.webp'







function FeaturesCarousal() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='flex justify-center  flex-col items-center w-screen '>
      <div className="slider-container h-[560px]   p-5 gap-2 md:max-w-[1600px] w-[100%] lg:py-10 ">
        <Slider {...settings}>
          <div className='flex rounded-sm overflow-hidden border-2 border-slate-200  relative h-[480px] max-w-[90%] '>

            <div className='h-[65%] '>
              <div className='absolute top-[24px] left-[-130px] z-30 bg-orange-400  text-[16px] transform -rotate-45 w-80 text-center  '> SALE</div>
                <div className=' h-[100%] '><img src={headphones} alt="" className='w-full h-full object-cover object-center ' /></div>
              
              <div className='flex justify-center absolute top-2 left-64 '>
                <div className='  bg-green-600 text-white  p-1 text-[12px]  '>Top Brand</div>
              </div>
            </div>
            

           <div className='h-[35%] '>
           <div className='flex justify-between bg-slate-400 my-1 '>
              <p>Erickson</p>
              <p>Model519</p>
            </div>
            <div className=''>
              <h1 className='font-bold'>Headphones</h1>
              <p className='pt-2'>$999.00 </p>
            </div>
            <div className='flex justify-between  my-1 p-0.5'>
              <div className='flex h-[30px] gap-0.5'>
                <div className='w-7 border-gray-300 border-2 flex justify-center h-[100%]'>
                  1
                </div>
                <div className='h-[100%]'>
                  <div className='w-4'><FaCaretSquareUp /></div>
                  <div className='w-4'><FaCaretSquareDown /></div>
                </div>
                <div className='h-100%'>
                  <button className='bg-blue-500 h-full text-[10px] p-1 rounded-sm border-black border-2 text-white'>ADD TO CART</button>
                </div>
              </div>
              <div className='h-[100%] w-[25%]  flex justify-around'>
                <button className='min-h-full text-[26px]'><CiHeart /></button>
                <button><LuArrowRightLeft /></button>

              </div>
            </div>
            <div className='flex justify-between bg-slate-400'>
              <div className='flex justify-center b '>
                <button className='flex gap-1'><CiBadgeDollar className='text-[20px]' />But now</button>
              </div>
              <div className='flex justify-center  '>
                <button className='flex gap-1'><FaRegQuestionCircle className='text-[20px]' />Question</button>
              </div>
            </div>
           </div>
          </div>
          <div className='flex rounded-sm overflow-hidden border-2 border-slate-200  relative h-[480px] max-w-[90%] '>

            <div className='h-[65%] '>
              <div className='absolute top-[24px] left-[-130px] z-30 bg-orange-400  text-[16px] transform -rotate-45 w-80 text-center  '> SALE</div>
                <div className=' h-[100%] '><img src={camera} alt="" className='w-full h-full object-cover object-center ' /></div>
              
              <div className='flex justify-center absolute top-2 left-64 '>
                <div className='  bg-green-600 text-white  p-1 text-[12px]  '>Top Brand</div>
              </div>
            </div>
            

           <div className='h-[35%] '>
           <div className='flex justify-between bg-slate-400 my-1 '>
              <p>Erickson</p>
              <p>Model519</p>
            </div>
            <div className=''>
              <h1 className='font-bold'> Sony Camera</h1>
              <p className='pt-2'>$599.00 </p>
            </div>
            <div className='flex justify-between  my-1 p-0.5'>
              <div className='flex h-[30px] gap-0.5'>
                <div className='w-7 border-gray-300 border-2 flex justify-center h-[100%]'>
                  1
                </div>
                <div className='h-[100%]'>
                  <div className='w-4'><FaCaretSquareUp /></div>
                  <div className='w-4'><FaCaretSquareDown /></div>
                </div>
                <div className='h-100%'>
                  <button className='bg-blue-500 h-full text-[10px] p-1 rounded-sm border-black border-2 text-white'>ADD TO CART</button>
                </div>
              </div>
              <div className='h-[100%] w-[25%]  flex justify-around'>
                <button className='min-h-full text-[26px]'><CiHeart /></button>
                <button><LuArrowRightLeft /></button>

              </div>
            </div>
            <div className='flex justify-between bg-slate-400'>
              <div className='flex justify-center b '>
                <button className='flex gap-1'><CiBadgeDollar className='text-[20px]' />But now</button>
              </div>
              <div className='flex justify-center  '>
                <button className='flex gap-1'><FaRegQuestionCircle className='text-[20px]' />Question</button>
              </div>
            </div>
           </div>
          </div>
          <div className='flex rounded-sm overflow-hidden border-2 border-slate-200  relative h-[480px]  max-w-[90%]'>

            <div className='h-[65%] '>
              <div className='absolute top-[24px] left-[-130px] z-30 bg-orange-400  text-[16px] transform -rotate-45 w-80 text-center  '> SALE</div>
                <div className=' h-[100%] '><img src={heels} alt="" className='w-full h-full object-cover object-center ' /></div>
              
              <div className='flex justify-center absolute top-2 left-64 '>
                <div className='  bg-green-600 text-white  p-1 text-[12px]  '>Top Brand</div>
              </div>
            </div>
            

           <div className='h-[35%] '>
           <div className='flex justify-between bg-slate-400 my-1 '>
              <p>Erickson</p>
              <p>Model519</p>
            </div>
            <div className=''>
              <h1 className='font-bold'>Women's Maria Pump Heels</h1>
              <p className='pt-2'>$999.00 </p>
            </div>
            <div className='flex justify-between  my-1 p-0.5'>
              <div className='flex h-[30px] gap-0.5'>
                <div className='w-7 border-gray-300 border-2 flex justify-center h-[100%]'>
                  1
                </div>
                <div className='h-[100%]'>
                  <div className='w-4'><FaCaretSquareUp /></div>
                  <div className='w-4'><FaCaretSquareDown /></div>
                </div>
                <div className='h-100%'>
                  <button className='bg-blue-500 h-full text-[10px] p-1 rounded-sm border-black border-2 text-white'>ADD TO CART</button>
                </div>
              </div>
              <div className='h-[100%] w-[25%]  flex justify-around'>
                <button className='min-h-full text-[26px]'><CiHeart /></button>
                <button><LuArrowRightLeft /></button>

              </div>
            </div>
            <div className='flex justify-between bg-slate-400'>
              <div className='flex justify-center b '>
                <button className='flex gap-1'><CiBadgeDollar className='text-[20px]' />But now</button>
              </div>
              <div className='flex justify-center  '>
                <button className='flex gap-1'><FaRegQuestionCircle className='text-[20px]' />Question</button>
              </div>
            </div>
           </div>
          </div>
          <div className='flex rounded-sm overflow-hidden border-2 border-slate-200  relative h-[480px]  max-w-[90%]'>

            <div className='h-[65%] '>
              <div className='absolute top-[24px] left-[-130px] z-30 bg-orange-400  text-[16px] transform -rotate-45 w-80 text-center  '> SALE</div>
                <div className=' h-[100%] '><img src={shoes} alt="" className='w-full h-full object-cover object-center ' /></div>
              
              <div className='flex justify-center absolute top-2 left-64 '>
                <div className='  bg-green-600 text-white  p-1 text-[12px]  '>Top Brand</div>
              </div>
            </div>
            

           <div className='h-[35%] '>
           <div className='flex justify-between bg-slate-400 my-1 '>
              <p>Erickson</p>
              <p>Model519</p>
            </div>
            <div className=''>
              <h1 className='font-bold'>Running Shoes</h1>
              <p className='pt-2'>$399.00 </p>
            </div>
            <div className='flex justify-between  my-1 p-0.5'>
              <div className='flex h-[30px] gap-0.5'>
                <div className='w-7 border-gray-300 border-2 flex justify-center h-[100%]'>
                  1
                </div>
                <div className='h-[100%]'>
                  <div className='w-4'><FaCaretSquareUp /></div>
                  <div className='w-4'><FaCaretSquareDown /></div>
                </div>
                <div className='h-100%'>
                  <button className='bg-blue-500 h-full text-[10px] p-1 rounded-sm border-black border-2 text-white'>ADD TO CART</button>
                </div>
              </div>
              <div className='h-[100%] w-[25%]  flex justify-around'>
                <button className='min-h-full text-[26px]'><CiHeart /></button>
                <button><LuArrowRightLeft /></button>

              </div>
            </div>
            <div className='flex justify-between bg-slate-400'>
              <div className='flex justify-center b '>
                <button className='flex gap-1'><CiBadgeDollar className='text-[20px]' />But now</button>
              </div>
              <div className='flex justify-center  '>
                <button className='flex gap-1'><FaRegQuestionCircle className='text-[20px]' />Question</button>
              </div>
            </div>
           </div>
          </div>
          <div className='flex rounded-sm overflow-hidden border-2 border-slate-200  relative h-[480px] max-w-[90%] '>

            <div className='h-[65%] '>
              <div className='absolute top-[24px] left-[-130px] z-30 bg-orange-400  text-[16px] transform -rotate-45 w-80 text-center  '> SALE</div>
                <div className=' h-[100%] '><img src={tv} alt="" className='w-full h-full object-cover object-center ' /></div>
              
              <div className='flex justify-center absolute top-2 left-64 '>
                <div className='  bg-green-600 text-white  p-1 text-[12px]  '>Top Brand</div>
              </div>
            </div>
            

           <div className='h-[35%] '>
           <div className='flex justify-between bg-slate-400 my-1 '>
              <p>Erickson</p>
              <p>Model519</p>
            </div>
            <div className=''>
              <h1 className='font-bold'>Samsung 5009 Smart Television</h1>
              <p className='pt-2'>$699.00 </p>
            </div>
            <div className='flex justify-between  my-1 p-0.5'>
              <div className='flex h-[30px] gap-0.5'>
                <div className='w-7 border-gray-300 border-2 flex justify-center h-[100%]'>
                  1
                </div>
                <div className='h-[100%]'>
                  <div className='w-4'><FaCaretSquareUp /></div>
                  <div className='w-4'><FaCaretSquareDown /></div>
                </div>
                <div className='h-100%'>
                  <button className='bg-blue-500 h-full text-[10px] p-1 rounded-sm border-black border-2 text-white'>ADD TO CART</button>
                </div>
              </div>
              <div className='h-[100%] w-[25%]  flex justify-around'>
                <button className='min-h-full text-[26px]'><CiHeart /></button>
                <button><LuArrowRightLeft /></button>

              </div>
            </div>
            <div className='flex justify-between bg-slate-400'>
              <div className='flex justify-center b '>
                <button className='flex gap-1'><CiBadgeDollar className='text-[20px]' />But now</button>
              </div>
              <div className='flex justify-center  '>
                <button className='flex gap-1'><FaRegQuestionCircle className='text-[20px]' />Question</button>
              </div>
            </div>
           </div>
          </div>
          <div className='flex rounded-sm overflow-hidden border-2 border-slate-200  relative h-[480px] max-w-[90%]'>

            <div className='h-[65%] '>
              <div className='absolute top-[24px] left-[-130px] z-30 bg-orange-400  text-[16px] transform -rotate-45 w-80 text-center  '> SALE</div>
                <div className=' h-[100%] '><img src={beauty} alt="" className='w-full h-full object-cover object-center ' /></div>
              
              <div className='flex justify-center absolute top-2 left-64 '>
                <div className='  bg-green-600 text-white  p-1 text-[12px]  '>Top Brand</div>
              </div>
            </div>
            

           <div className='h-[35%] '>
           <div className='flex justify-between bg-slate-400 my-1 '>
              <p>Erickson</p>
              <p>Model519</p>
            </div>
            <div className=''>
              <h1 className='font-bold'>Lipstick</h1>
              <p className='pt-2'>$99.00 </p>
            </div>
            <div className='flex justify-between  my-1 p-0.5'>
              <div className='flex h-[30px] gap-0.5'>
                <div className='w-7 border-gray-300 border-2 flex justify-center h-[100%]'>
                  1
                </div>
                <div className='h-[100%]'>
                  <div className='w-4'><FaCaretSquareUp /></div>
                  <div className='w-4'><FaCaretSquareDown /></div>
                </div>
                <div className='h-100%'>
                  <button className='bg-blue-500 h-full text-[10px] p-1 rounded-sm border-black border-2 text-white'>ADD TO CART</button>
                </div>
              </div>
              <div className='h-[100%] w-[25%]  flex justify-around'>
                <button className='min-h-full text-[26px]'><CiHeart /></button>
                <button><LuArrowRightLeft /></button>

              </div>
            </div>
            <div className='flex justify-between bg-slate-400'>
              <div className='flex justify-center b '>
                <button className='flex gap-1'><CiBadgeDollar className='text-[20px]' />But now</button>
              </div>
              <div className='flex justify-center  '>
                <button className='flex gap-1'><FaRegQuestionCircle className='text-[20px]' />Question</button>
              </div>
            </div>
           </div>
          </div>
          <div className='flex rounded-sm overflow-hidden border-2 border-slate-200  relative h-[480px] max-w-[90%]'>

            <div className='h-[65%] '>
              <div className='absolute top-[24px] left-[-130px] z-30 bg-orange-400  text-[16px] transform -rotate-45 w-80 text-center  '> SALE</div>
                <div className=' h-[100%] '><img src={headphones} alt="" className='w-full h-full object-cover object-center ' /></div>
              
              <div className='flex justify-center absolute top-2 left-64 '>
                <div className='  bg-green-600 text-white  p-1 text-[12px]  '>Top Brand</div>
              </div>
            </div>
            

           <div className='h-[35%] '>
           <div className='flex justify-between bg-slate-400 my-1 '>
              <p>Erickson</p>
              <p>Model519</p>
            </div>
            <div className=''>
              <h1 className='font-bold'>Sandal,s</h1>
              <p className='pt-2'>$999.00 </p>
            </div>
            <div className='flex justify-between  my-1 p-0.5'>
              <div className='flex h-[30px] gap-0.5'>
                <div className='w-7 border-gray-300 border-2 flex justify-center h-[100%]'>
                  1
                </div>
                <div className='h-[100%]'>
                  <div className='w-4'><FaCaretSquareUp /></div>
                  <div className='w-4'><FaCaretSquareDown /></div>
                </div>
                <div className='h-100%'>
                  <button className='bg-blue-500 h-full text-[10px] p-1 rounded-sm border-black border-2 text-white'>ADD TO CART</button>
                </div>
              </div>
              <div className='h-[100%] w-[25%]  flex justify-around'>
                <button className='min-h-full text-[26px]'><CiHeart /></button>
                <button><LuArrowRightLeft /></button>

              </div>
            </div>
            <div className='flex justify-between bg-slate-400'>
              <div className='flex justify-center b '>
                <button className='flex gap-1'><CiBadgeDollar className='text-[20px]' />But now</button>
              </div>
              <div className='flex justify-center  '>
                <button className='flex gap-1'><FaRegQuestionCircle className='text-[20px]' />Question</button>
              </div>
            </div>
           </div>
          </div>
          
       
        </Slider>
       
      </div>
      <div className='flex justify-center md:max-w-[1600px] w-[100%]'><div className='pb-10'><button className='p-2 bg-blue-600 text-white'>SEE ALL PRODUCTS </button></div></div>
    </div>
  );
}





export default FeaturesCarousal;
