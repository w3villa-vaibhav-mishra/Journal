import React from 'react'
import Accesories from '../assets/photos/Accesories.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CiHeart } from "react-icons/ci";
import { LuArrowRightLeft } from "react-icons/lu";
import bodycorn from '../assets/photos/Bodycorn.webp'
import backless from '../assets/photos/Backless.jpg'
import turtleneck from '../assets/photos/turtleneck.jpg'


function Fashion() {
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
                <div className='flex flex-col  sm:flex-row   justify-start max-w-[1600px] w-full my-2  p-5 h-full sm:h-[470px] xl:w-full '>
                    <div className='h-[100%]   p-1 sm:w-2/6  bg-slate-200 xl:w-1/5'>
                        <div className='h-full w-full  gap-2 flex  flex-col decoration-orange-400 sm:text-[12px] p-2 underline-offset-8 '>
                            <h1 className='text-[30px] underline decoration-orange-400 sm:text-[25px] font-extrabold'>Fashion</h1>
                            <img src={Accesories} alt="" className='h-full w-full xl:h-[50%]' />
                            <p>Accesories</p>
                            <p>Dresses</p>
                            <p>Pants</p>
                            <p>T-Shirts</p>
                            <p><a href="#">See all in one folder</a></p>

                        </div>
                    </div>
                    <div className='h-full  p-2 flex flex-col gap-2  sm:w-4/6 bg-white xl:w-4/5' >
                        <h1 className='text-[30px] underline decoration-orange-400 sm:text-[25px] font-extrabold underline-offset-8'>New in Fashion</h1>
                        <div className="slider-container  h-full w-full  ">
                            <Slider {...settings}>
                                <div>
                                    <div className=' p-2 flex flex-col h-[340px] '>
                                        <img src={bodycorn} alt="" className='h-full w-full' />
                                        <div>
                                            <p className='text-blue-600 my-2'>Bodycorn Dress</p>
                                            <p className='text-blue-600 my-2'>$399.00</p>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div className=''>
                                                <button className='bg-blue-500 p-1 text-white text-[]'>Add to Cart</button></div>
                                            <div className='flex justify-between gap-3'>
                                                <button className='min-h-full text-[26px]'><CiHeart /></button>
                                                <button><LuArrowRightLeft /></button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <div className=' p-2 flex flex-col h-[340px] '>
                                        <img src={bodycorn} alt="" className='h-full w-full' />
                                        <div>
                                            <p className='text-blue-600 my-2'>Bodycorn Dress</p>
                                            <p className='text-blue-600 my-2'>$399.00</p>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div className=''>
                                                <button className='bg-blue-500 p-1 text-white text-[]'>Add to Cart</button></div>
                                            <div className='flex justify-between gap-3'>
                                                <button className='min-h-full text-[26px]'><CiHeart /></button>
                                                <button><LuArrowRightLeft /></button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <div className=' p-2 flex flex-col h-[340px] '>
                                        <img src={Accesories} alt="" className='h-full w-full' />
                                        <div>
                                            <p className='text-blue-600 my-2'>Bodycorn Dress</p>
                                            <p className='text-blue-600 my-2'>$399.00</p>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div className=''>
                                                <button className='bg-blue-500 p-1 text-white text-[]'>Add to Cart</button></div>
                                            <div className='flex justify-between gap-3'>
                                                <button className='min-h-full text-[26px]'><CiHeart /></button>
                                                <button><LuArrowRightLeft /></button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <div className=' p-2 flex flex-col h-[340px] '>
                                        <img src={Accesories} alt="" className='h-full w-full' />
                                        <div>
                                            <p className='text-blue-600 my-2'>Bodycorn Dress</p>
                                            <p className='text-blue-600 my-2'>$399.00</p>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div className=''>
                                                <button className='bg-blue-500 p-1 text-white text-[]'>Add to Cart</button></div>
                                            <div className='flex justify-between gap-3'>
                                                <button className='min-h-full text-[26px]'><CiHeart /></button>
                                                <button><LuArrowRightLeft /></button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <div className=' p-2 flex flex-col h-[340px] '>
                                        <img src={Accesories} alt="" className='h-full w-full' />
                                        <div>
                                            <p className='text-blue-600 my-2'>Bodycorn Dress</p>
                                            <p className='text-blue-600 my-2'>$399.00</p>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div className=''>
                                                <button className='bg-blue-500 p-1 text-white text-[]'>Add to Cart</button></div>
                                            <div className='flex justify-between gap-3'>
                                                <button className='min-h-full text-[26px]'><CiHeart /></button>
                                                <button><LuArrowRightLeft /></button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <div className=' p-2 flex flex-col h-[340px] '>
                                        <img src={Accesories} alt="" className='h-full w-full' />
                                        <div>
                                            <p className='text-blue-600 my-2'>Bodycorn Dress</p>
                                            <p className='text-blue-600 my-2'>$399.00</p>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div className=''>
                                                <button className='bg-blue-500 p-1 text-white text-[]'>Add to Cart</button></div>
                                            <div className='flex justify-between gap-3'>
                                                <button className='min-h-full text-[26px]'><CiHeart /></button>
                                                <button><LuArrowRightLeft /></button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <div className=' p-2 flex flex-col h-[340px] '>
                                        <img src={Accesories} alt="" className='h-full w-full' />
                                        <div>
                                            <p className='text-blue-600 my-2'>Bodycorn Dress</p>
                                            <p className='text-blue-600 my-2'>$399.00</p>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div className=''>
                                                <button className='bg-blue-500 p-1 text-white text-[]'>Add to Cart</button></div>
                                            <div className='flex justify-between gap-3'>
                                                <button className='min-h-full text-[26px]'><CiHeart /></button>
                                                <button><LuArrowRightLeft /></button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <div className=' p-2 flex flex-col h-[340px] '>
                                        <img src={Accesories} alt="" className='h-full w-full' />
                                        <div>
                                            <p className='text-blue-600 my-2'>Bodycorn Dress</p>
                                            <p className='text-blue-600 my-2'>$399.00</p>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div className=''>
                                                <button className='bg-blue-500 p-1 text-white text-[]'>Add to Cart</button></div>
                                            <div className='flex justify-between gap-3'>
                                                <button className='min-h-full text-[26px]'><CiHeart /></button>
                                                <button><LuArrowRightLeft /></button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </Slider>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Fashion