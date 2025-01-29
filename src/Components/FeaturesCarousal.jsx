import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heels from '../assets/photos/nineheels.webp'
import { FaCaretSquareUp } from "react-icons/fa";
import { FaCaretSquareDown } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { LuArrowRightLeft } from "react-icons/lu";
import { CiBadgeDollar } from "react-icons/ci";
import { FaRegQuestionCircle } from "react-icons/fa";
import camera from '../assets/photos/ninecamera.webp'
import headphones from '../assets/photos/nineheadphones.jpg'
import shoes from '../assets/photos/nineshoes.jpg'
import tv from '../assets/photos/ninetelevision.jpg'
import beauty from '../assets/photos/ninebeauty.webp'

function FeaturesCarousal() {
  const [cartCount, setCartCount] = useState([1, 1, 1, 1, 1]); // Array to manage cart counts for each product
  const [isHeartClicked, setIsHeartClicked] = useState([false, false, false, false, false]); // To manage heart icon state

  const products = [
    { name: "Headphones", price: 999, image: headphones, brand: "Erickson", model: "Model519" },
    { name: "Sony Camera", price: 599, image: camera, brand: "Erickson", model: "Model519" },
    { name: "Women's Maria Pump Heels", price: 999, image: heels, brand: "Erickson", model: "Model519" },
    { name: "Running Shoes", price: 399, image: shoes, brand: "Erickson", model: "Model519" },
    { name: "Samsung 5009 Smart Television", price: 699, image: tv, brand: "Erickson", model: "Model519" },
  ];

  const handleHeartClick = (index) => {
    const newHeartClicked = [...isHeartClicked];
    newHeartClicked[index] = !newHeartClicked[index];
    setIsHeartClicked(newHeartClicked);
  };

  const handleIncreaseCount = (index) => {
    const newCartCount = [...cartCount];
    newCartCount[index] += 1;
    setCartCount(newCartCount);
  };

  const handleDecreaseCount = (index) => {
    const newCartCount = [...cartCount];
    if (newCartCount[index] > 1) {
      newCartCount[index] -= 1;
    }
    setCartCount(newCartCount);
  };

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
    <div className='flex justify-center flex-col items-center'>
      <div className="slider-container h-[560px] p-5 gap-2 md:max-w-[1600px] w-[100%] lg:py-10">
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index} className='flex rounded-sm overflow-hidden border-2 border-slate-200 relative h-[480px] max-w-[90%]'>
              <div className='h-[65%]'>
                <div className='absolute top-[24px] left-[-130px] z-30 bg-orange-400 text-[16px] transform -rotate-45 w-80 text-center'> SALE</div>
                <div className='h-[100%]'>
                  <img src={product.image} alt={product.name} className='w-full h-full object-cover object-center' />
                </div>
                <div className='flex justify-center absolute top-2 left-64'>
                  <div className='bg-green-600 text-white p-1 text-[12px]'>Top Brand</div>
                </div>
              </div>

              <div className='h-[35%]'>
                <div className='flex justify-between bg-slate-400 my-1'>
                  <p>{product.brand}</p>
                  <p>{product.model}</p>
                </div>
                <div>
                  <h1 className='font-bold'>{product.name}</h1>
                  <p className='pt-2'>${product.price}.00</p>
                </div>
                <div className='flex justify-between my-1 p-0.5'>
                  <div className='flex h-[30px] gap-0.5'>
                    <div className='w-7 border-gray-300 border-2 flex justify-center h-[100%]'>
                      {cartCount[index]}
                    </div>
                    <div className='h-[100%]'>
                      <div className='w-4'>
                        <FaCaretSquareUp onClick={() => handleIncreaseCount(index)} />
                      </div>
                      <div className='w-4'>
                        <FaCaretSquareDown onClick={() => handleDecreaseCount(index)} />
                      </div>
                    </div>
                    <div className='h-100%'>
                      <button className='bg-blue-500 h-full text-[10px] p-1 rounded-sm border-black border-2 text-white transition-all duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105 hover:shadow-lg'>
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                  <div className='h-[100%] w-[25%] flex justify-around'>
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
                <div className='flex justify-between bg-slate-400'>
                  <div className='flex justify-center'>
                    <button className='flex gap-1'>
                      <CiBadgeDollar className='text-[20px]' /> But now
                    </button>
                  </div>
                  <div className='flex justify-center'>
                    <button className='flex gap-1'>
                      <FaRegQuestionCircle className='text-[20px]' /> Question
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className='flex justify-center md:max-w-[1600px] w-[100%]'>
        <div className='pb-10'>
          <button className='p-2 bg-blue-600 text-white transition-all duration-300 ease-in-out transform hover:bg-white hover:scale-105 hover:shadow-lg hover:text-blue-500'>
            SEE ALL PRODUCTS
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeaturesCarousal;
