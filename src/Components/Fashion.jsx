import React, { useState } from 'react';
import Accesories from '../assets/photos/Accesories.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaHeart } from "react-icons/fa";
import { LuArrowRightLeft } from "react-icons/lu";
import bodycorn from '../assets/photos/Bodycorn.webp';
import backless from '../assets/photos/Backless.jpg';
import turtleneck from '../assets/photos/turtleneck.jpg';
import suit from '../assets/photos/suit.jpg'
import shirt from '../assets/photos/shirt.jpg'

function Fashion() {
  const [isHeartClicked, setIsHeartClicked] = useState([false, false, false, false, false, false, false, false]);

  const handleHeartClick = (index) => {
    const newHeartClicked = [...isHeartClicked];
    newHeartClicked[index] = !newHeartClicked[index];
    setIsHeartClicked(newHeartClicked);
  };

  const products = [
    { id: 1, image: bodycorn, name: 'Bodycorn Dress', price: '$399.00' },
    { id: 2, image: backless, name: 'Backless Dress', price: '$299.00' },
    { id: 3, image: shirt, name: 'Snitch Shirts', price: '$299.00' },
    { id: 4, image: turtleneck, name: 'Turtleneck Sweater', price: '$99.00' },
    { id: 5, image:suit, name: 'Raymond Suit', price: '$3999.00' },
    { id: 6, image: Accesories, name: 'Accesories', price: '$49.00' },
    { id: 7, image: bodycorn, name: 'Bodycorn Dress', price: '$399.00' },
    { id: 8, image: suit, name: 'Raymond Suit', price: '$3999.00' },
  ];

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
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
      <div className='flex w-full justify-center items-center bg-slate-400 sm:h-[570px]'>
        <div className='flex flex-col sm:flex-row justify-start max-w-[1600px] w-full my-2 p-5 h-full sm:h-[470px] xl:w-full'>
          <div className='h-[100%] p-1 sm:w-2/6 bg-slate-200 xl:w-1/5'>
            <div className='h-full w-full gap-2 flex flex-col decoration-orange-400 sm:text-[12px] p-2 underline-offset-8'>
              <h1 className='text-[30px] underline decoration-orange-400 sm:text-[25px] font-extrabold'>Fashion</h1>
              <img src={Accesories} alt="" className='h-full w-full xl:h-[50%]' />
              <p>Accesories</p>
              <p>Dresses</p>
              <p>Pants</p>
              <p>T-Shirts</p>
              <p><a href="#">See all in one folder</a></p>
            </div>
          </div>

          <div className='h-full p-2 flex flex-col gap-2 sm:w-4/6 bg-white xl:w-4/5'>
            <h1 className='text-[30px] underline decoration-orange-400 sm:text-[25px] font-extrabold underline-offset-8'>New in Fashion</h1>
            <div className="slider-container h-full w-full">
              <Slider {...settings}>
                {products.map((product, index) => (
                  <div key={product.id} className='flex justify-center'>
                    <div className='p-2 flex flex-col w-[250px] h-[350px] border-2'>
                      <div className='flex-grow'>
                        <img src={product.image} alt={product.name} className='w-full h-[200px] object-cover' />
                      </div>
                      <div className='flex-grow-0 mt-2'>
                        <p className='text-blue-600 my-2'>{product.name}</p>
                        <p className='text-blue-600 my-2'>{product.price}</p>
                      </div>
                      <div className='flex justify-between mt-2'>
                        <div>
                          <button className='bg-blue-500 p-1 text-white text-[14px] hover:bg-blue-700 transition-all duration-300 ease-in-out'>
                            Add to Cart
                          </button>
                        </div>
                        <div className='flex justify-between gap-3'>
                          <button
                            className={`min-h-full text-[26px] ${isHeartClicked[index] ? 'text-red-600' : ''}`}
                            onClick={() => handleHeartClick(index)}
                          >
                            <FaHeart />
                          </button>
                          <button>
                            <LuArrowRightLeft />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fashion;
