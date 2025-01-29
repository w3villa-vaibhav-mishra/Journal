import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import G1 from '../assets/photos/Blog1.jpg'
import G2 from '../assets/photos/Blog2.jpg'
import G3 from '../assets/photos/Blog3.jpg'
import G4 from '../assets/photos/logo4-DnCIkWzW.jpeg'
import G5 from '../assets/photos/logo5-CiFG0bDV.png'
import G6 from '../assets/photos/logo6-DOZBGhbk.jpeg'
import G7 from '../assets/photos/logo7-BwImad0Z.png'
import G8 from '../assets/photos/logo8-BcQpw1h8.jpeg'
import G9 from '../assets/photos/logo9-qp6gxTrC.jpeg'
import G10 from '../assets/photos/logo10-IV7cHNg6.png'
import G11 from '../assets/photos/logo12-CowSjcCk.png'
import G12 from '../assets/photos/logo11-8DtRTbZJ.png'



function Blog() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    <>

      <div className="flex w-full] justify-center bg-gray">
        <div className="flex flex-col  justify-start max-w-[1600px] w-full my-2  py-10  h-800px">
          <div className='flex justify-items-start  sm:justify-center  text-black w-full  md:text-[30px] font-bold px-[5px]'>
            Shop By Blog
          </div>
          <div className='sm:flex justify-center'><div className=' w-20 sm:flex justify-center border-t-2  border-orange-500  ml-[5px]'></div>
                </div>
          <div className="slider-container w-full  py-10  h-[750px] text-[14px] sm:ml-[15px]">
            <Slider {...settings}>
              <div className='border-2 border-gray-300 relative h-[100%] max-w-[90%]  ml-5 md:ml-0'>
                <div className='h-[50%] w-full border-2 '>
                <img src={G1} alt=""  className=' h-[100%] w-full object-cover object-center ' />
                </div>
                
                <div className=' absolute top-[40%] text-center bg-slate-200  p-1 w-full mb:top-[50%] sm:top-[60%] md:top-[20%] lg:top-[30%] xl:top-[40%] 2xl:top-[45%]'> admin agsdjjash</div>
                <div className='my-10 h-[50%] text-center flex flex-col gap-5 p-2'>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                </p>  
                <p>Read More</p>
                </div>
              </div>
              <div className='border-2 border-gray-300 relative h-[100%] max-w-[90%]'>
                <div className='h-[50%] w-full '>
                <img src={G2} alt=""  className=' h-[100%] w-full object-cover object-center relative' />
                </div>
                
                <div className=' absolute top-[45%] text-center bg-slate-200  p-1 w-full mb:top-[50%] sm:top-[60%] md:top-[20%] lg:top-[30%] xl:top-[40%] 2xl:top-[45%]'> admin agsdjjash</div>
                <div className='my-10 h-[50%] text-center flex flex-col gap-5 p-2'>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                </p>  
                <p>Read More</p>
                </div>
              </div>
              <div className='border-2 border-gray-300 relative h-[100%] max-w-[90%]'>
                <div className='h-[50%] w-full '>
                <img src={G3} alt=""  className=' h-[100%] w-full object-cover object-center relative' />
                </div>
                
                <div className=' absolute top-[45%] text-center bg-slate-200  p-1 w-full mb:top-[50%] sm:top-[60%] md:top-[20%] lg:top-[30%] xl:top-[40%] 2xl:top-[45%]'> admin agsdjjash</div>
                <div className='my-10 h-[50%] text-center flex flex-col gap-5 p-2'>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                </p>  
                <p>Read More</p>
                </div>
              </div>
              <div className='border-2 border-gray-300 relative h-[100%] max-w-[90%]'>
                <div className='h-[50%] w-full '>
                <img src={G3} alt=""  className=' h-[100%] w-full object-cover object-center relative' />
                </div>
                
                <div className=' absolute top-[45%] text-center bg-slate-200  p-1 w-full mb:top-[50%] sm:top-[60%] md:top-[20%] lg:top-[30%] xl:top-[40%] 2xl:top-[45%]'> admin agsdjjash</div>
                <div className='my-10 h-[50%] text-center flex flex-col gap-5 p-2'>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                </p>  
                <p>Read More</p>
                </div>
              </div>
              {/* <div>
              <img src={G4} alt="" className='h-[100px] w-[100px] object-fill border-2 rounded-lg  overflow-hidden'/>
              </div>
              <div>
              <img src={G5} alt="" className='h-[100px] w-[100px] object-fill border-2 rounded-lg  overflow-hidden'/>
              </div>
              <div>
              <img src={G6} alt="" className='h-[100px] w-[100px] object-fill border-2 rounded-lg  overflow-hidden'/>
              </div>
              <div>
              <img src={G7} alt="" className='h-[100px] w-[100px] object-fill border-2 rounded-lg  overflow-hidden'/>
              </div>
              <div>
              <img src={G8} alt="" className='h-[100px] w-[100px] object-fill border-2 rounded-lg  overflow-hidden'/>
              </div>
              <div>
              <img src={G9} alt="" className='h-[100px] w-[100px] object-fill border-2 rounded-lg  overflow-hidden'/>
              </div>
              <div>
              <img src={G10} alt="" className='h-[100px] w-[100px] object-fill border-2 rounded-lg  overflow-hidden'/>
              </div>
              <div>
              <img src={G11} alt="" className='h-[100px] w-[100px] object-fill border-2 rounded-lg  overflow-hidden'/>
              </div>
              <div>
              <img src={G12} alt="" className='h-[100px] w-[100px] object-fill border-2 rounded-lg  overflow-hidden'/>
              </div> */}
            </Slider>
          </div>


        </div>

      </div>
    </>
  )
}

export default Blog