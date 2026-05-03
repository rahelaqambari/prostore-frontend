"use client";
import Image from 'next/image';
import React from 'react'
import Slider from 'react-slick';
function Hero() {
    const settings = {
        dots: true,
        // autoplay: true,
        // infinite: true,
    }
  return (
    <div className='w-full mx-auto h-72'>
        <Slider {...settings}>
         <Image src="/images/banner-1.jpg" alt='banner-1' height={100} width={1000}/>
      </Slider>
    </div>
  )
}

export default Hero
