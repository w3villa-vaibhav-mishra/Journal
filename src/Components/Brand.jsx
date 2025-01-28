import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import G1 from '../assets/photos/logo1-Dq6gICak.png'
import G2 from '../assets/photos/logo2-CNxkOt7j.png'
import G3 from '../assets/photos/logo3-C61N710v.jpeg'
import G4 from '../assets/photos/logo4-DnCIkWzW.jpeg'
import G5 from '../assets/photos/logo5-CiFG0bDV.png'
import G6 from '../assets/photos/logo6-DOZBGhbk.jpeg'
import G7 from '../assets/photos/logo7-BwImad0Z.png'
import G8 from '../assets/photos/logo8-BcQpw1h8.jpeg'
import G9 from '../assets/photos/logo9-qp6gxTrC.jpeg'
import G10 from '../assets/photos/logo10-IV7cHNg6.png'
import G11 from '../assets/photos/logo12-CowSjcCk.png'
import G12 from '../assets/photos/logo11-8DtRTbZJ.png'



function Brand() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>

      <div className="flex w-full] justify-center bg-white">
        <div className="flex flex-col flex-wrap justify-start max-w-[1600px] w-full my-2 py-10">
          <div className='flex justify-items-start  sm:justify-center  text-black w-full  md:text-[30px] font-bold'>
            Shop By Brand
          </div>
          <div className='sm:flex justify-center'><div className=' w-20 sm:flex justify-center border-t-2  border-orange-500  '></div>
                </div>
          <div className="slider-container w-full  p-5 py-10 ">
            <Slider {...settings}>
              <div>
                <img src={G1} alt="" className='h-[100px] w-[100px] object-fill border-2 rounded-lg  overflow-hidden' />
              </div>
              <div>
              <img src={G2} alt="" className='h-[100px] w-[100px] object-fill border-2 rounded-lg  overflow-hidden'/>
              </div>
              <div>
              <img src={G3} alt="" className='h-[100px] w-[100px] object-fill border-2 rounded-lg  overflow-hidden'/>
              </div>
              <div>
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
              </div>
            </Slider>
          </div>


        </div>

      </div>
    </>
  )
}

export default Brand
