import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bag from '../assets/photos/bags.jpg'
import HP from '../assets/photos/HP.jpg'
import HOMEDECOR from '../assets/photos/home decor.webp'
import footwear from '../assets/photos/footwear.webp'




function CategoryCarousal() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows:false,
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
            breakpoint: 600,
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
    <div className='flex justify-center'>
    <div className="slider-container h-full py-10 p-5 gap-2 md:max-w-[1600px] w-[100%]">
      <Slider {...settings}>
        <div className='  h-[100%] w-[100%]'>
          <h3><img src={bag} alt="" className='h-[100%] w-[98%] relative'/></h3>
          <div className='flex justify-center'><div className='text-white absolute bottom-4 px-2 bg-red-800'>BAG</div></div>
        </div>
        <div className='  h-[100%] w-[100%]'>
          <h3><img src={HP} alt="" className='h-[100%] w-[98%] relative '/></h3>
          <div className='flex justify-center'><div className='text-white absolute bottom-4 px-2 bg-black'>HEADPHONE</div></div>
        </div>
        <div className='  h-[100%] w-[100%]'>
          <h3><img src={HOMEDECOR} alt="" className='h-[100%] w-[98%] relative'/></h3>
          <div className='flex justify-center'><div className='text-black absolute bottom-4 px-2 bg-slate-300'>HOME DECOR</div></div>
        </div>
        <div className='  h-[100%] w-[100%]'>
          <h3><img src={footwear} alt="" className='h-[100%] w-[98%] relative'/></h3>
          <div className='flex justify-center'><div className='text-white absolute bottom-4 px-2 bg-slate-800'>SHOES</div></div>
        </div>
        <div className='  h-[100%] w-[100%]'>
          <h3><img src={bag} alt="" className='h-[100%] w-[98%] relative'/></h3>
          <div className='flex justify-center'><div className='text-black absolute bottom-4 px-2 bg-slate-400'>BAG</div></div>
        </div>
        <div className='  h-[100%] w-[100%]'>
          <h3><img src={bag} alt="" className='h-[100%] w-[98%] relative'/></h3>
          <div className='flex justify-center'><div className='text-black absolute bottom-4 px-2 bg-slate-400'>BAG</div></div>
        </div>
      </Slider>
    </div>
    </div>
</>
  );
}

export default CategoryCarousal;
